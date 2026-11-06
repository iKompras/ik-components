/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { Icon, Popup } from "semantic-ui-react";
import { DEFAULT_PRESETS, normalizeHex, isValidHex, hexToHsv, hsvToHex, isEyeDropperSupported } from "./utils";
import styles from "./styles.module.css";

const ColorPicker = ({
	// Alternate / legacy props
	currentColor,
	setCurrentColor,
	popover,

	// Standard props
	value,
	defaultValue,
	onChange,
	format,
	disabled,
	label,
	info,
	infoLabel,
	hint,
	hintWide,
	popupPosition,
	required,
	size,
	rounded,
	fluid,
	error,
	errorMessage,
	presets,
	showPresets,
	showEyeDropper,
	showHexInput,
	popoverPlacement,
	className,
	style,
	id,
	name,
	...rest
}) => {
	// Support both value/onChange and currentColor/setCurrentColor
	const isControlled = value !== undefined || currentColor !== undefined;
	const propColor = value !== undefined ? value : currentColor;

	const [internalColor, setInternalColor] = useState(() => {
		const initial = propColor !== undefined ? propColor : defaultValue;
		return normalizeHex(initial, "#00B5AD");
	});

	const activeHex = normalizeHex(isControlled ? propColor : internalColor, "#00B5AD");

	// Internal HSV state for smooth dragging
	const [hsv, setHsv] = useState(() => {
		return hexToHsv(activeHex);
	});

	// Synchronize HSV when activeHex changes externally
	useEffect(() => {
		const currentComputedHex = hsvToHex(hsv.h, hsv.s, hsv.v);
		if (activeHex.toUpperCase() !== currentComputedHex.toUpperCase()) {
			setHsv(hexToHsv(activeHex));
		}
	}, [activeHex]);

	// Popover open state
	const [isOpen, setIsOpen] = useState(false);

	// Hex input editing state in popover
	const [hexInputValue, setHexInputValue] = useState(() => {
		return activeHex.replace("#", "");
	});

	useEffect(() => {
		setHexInputValue(activeHex.replace("#", ""));
	}, [activeHex]);

	// Copy feedback state
	const [copied, setCopied] = useState(false);

	const containerRef = useRef(null);
	const satBoardRef = useRef(null);
	const hueSliderRef = useRef(null);

	// Responsive auto-placement & boundary detection
	const [alignRight, setAlignRight] = useState(false);
	const [flipTop, setFlipTop] = useState(false);

	useEffect(() => {
		if (!isOpen || !containerRef.current || typeof window === "undefined") {
			return;
		}
		const rect = containerRef.current.getBoundingClientRect();
		const wouldOverflowRight = rect.left + 260 > window.innerWidth;
		setAlignRight(wouldOverflowRight && rect.right >= 260);

		if (popoverPlacement === "top") {
			setFlipTop(true);
		} else if (popoverPlacement === "bottom") {
			setFlipTop(false);
		} else {
			const spaceBelow = window.innerHeight - rect.bottom;
			const spaceAbove = rect.top;
			setFlipTop(spaceBelow < 280 && spaceAbove > spaceBelow);
		}
	}, [isOpen, popoverPlacement]);

	// Helper to notify changes
	const notifyChange = useCallback(
		(nextHex) => {
			const formattedHex = normalizeHex(nextHex);
			if (!isControlled) {
				setInternalColor(formattedHex);
			}
			if (setCurrentColor) {
				setCurrentColor(formattedHex);
			}
			if (onChange) {
				onChange(formattedHex);
			}
		},
		[isControlled, setCurrentColor, onChange]
	);

	// Close on click outside or Escape
	useEffect(() => {
		if (!isOpen || !popover) return;

		const handlePointerDownOutside = (e) => {
			if (containerRef.current && !containerRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handlePointerDownOutside);
		document.addEventListener("touchstart", handlePointerDownOutside);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", handlePointerDownOutside);
			document.removeEventListener("touchstart", handlePointerDownOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, popover]);

	// Saturation & Brightness Dragging
	const handleSatMove = useCallback(
		(clientX, clientY) => {
			if (!satBoardRef.current) return;
			const rect = satBoardRef.current.getBoundingClientRect();
			const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
			const y = Math.max(0, Math.min(rect.height, clientY - rect.top));

			const s = Math.round((x / rect.width) * 100);
			const v = Math.round((1 - y / rect.height) * 100);

			const nextHsv = { ...hsv, s, v };
			setHsv(nextHsv);
			notifyChange(hsvToHex(nextHsv.h, s, v));
		},
		[hsv, notifyChange]
	);

	const handleSatPointerDown = (e) => {
		if (disabled) return;
		if (e.cancelable && e.type !== "touchstart") {
			e.preventDefault();
		}
		const clientX = e.clientX ?? e.touches?.[0]?.clientX;
		const clientY = e.clientY ?? e.touches?.[0]?.clientY;
		if (clientX !== undefined && clientY !== undefined) {
			handleSatMove(clientX, clientY);
		}

		const handleMouseMove = (moveEvent) => {
			handleSatMove(moveEvent.clientX, moveEvent.clientY);
		};

		const handleTouchMove = (moveEvent) => {
			if (moveEvent.cancelable) {
				moveEvent.preventDefault();
			}
			const touch = moveEvent.touches?.[0];
			if (touch) {
				handleSatMove(touch.clientX, touch.clientY);
			}
		};

		const handlePointerUp = () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handlePointerUp);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handlePointerUp);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handlePointerUp);
		window.addEventListener("touchmove", handleTouchMove, { passive: false });
		window.addEventListener("touchend", handlePointerUp);
	};

	// Hue Dragging
	const handleHueMove = useCallback(
		(clientX) => {
			if (!hueSliderRef.current) return;
			const rect = hueSliderRef.current.getBoundingClientRect();
			const x = Math.max(0, Math.min(rect.width, clientX - rect.left));

			let h = Math.round((x / rect.width) * 360);
			if (h >= 360) h = 0;

			const nextHsv = { ...hsv, h };
			setHsv(nextHsv);
			notifyChange(hsvToHex(h, nextHsv.s, nextHsv.v));
		},
		[hsv, notifyChange]
	);

	const handleHuePointerDown = (e) => {
		if (disabled) return;
		if (e.cancelable && e.type !== "touchstart") {
			e.preventDefault();
		}
		const clientX = e.clientX ?? e.touches?.[0]?.clientX;
		if (clientX !== undefined) {
			handleHueMove(clientX);
		}

		const handleMouseMove = (moveEvent) => {
			handleHueMove(moveEvent.clientX);
		};

		const handleTouchMove = (moveEvent) => {
			if (moveEvent.cancelable) {
				moveEvent.preventDefault();
			}
			const touch = moveEvent.touches?.[0];
			if (touch) {
				handleHueMove(touch.clientX);
			}
		};

		const handlePointerUp = () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handlePointerUp);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handlePointerUp);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handlePointerUp);
		window.addEventListener("touchmove", handleTouchMove, { passive: false });
		window.addEventListener("touchend", handlePointerUp);
	};

	// Hex input change in panel
	const handleHexInputChange = (e) => {
		const val = e.target.value.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
		setHexInputValue(val);
		if (isValidHex(`#${val}`)) {
			const nextHex = `#${val}`.toUpperCase();
			setHsv(hexToHsv(nextHex));
			notifyChange(nextHex);
		}
	};

	// Copy to clipboard
	const handleCopyHex = async (e) => {
		e.stopPropagation();
		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(activeHex);
				setCopied(true);
				setTimeout(() => {
					return setCopied(false);
				}, 1500);
			}
		} catch (err) {
			// Ignore clipboard errors
		}
	};

	// EyeDropper API
	const handleEyeDropper = async (e) => {
		e.stopPropagation();
		if (!isEyeDropperSupported()) return;
		try {
			const eyeDropper = new window.EyeDropper();
			const result = await eyeDropper.open();
			if (result && result.sRGBHex) {
				const pickedHex = normalizeHex(result.sRGBHex);
				setHsv(hexToHsv(pickedHex));
				notifyChange(pickedHex);
			}
		} catch (err) {
			// User canceled eye dropper (Escape)
		}
	};

	// Preset selection
	const handleSelectPreset = (presetColor) => {
		const nextHex = normalizeHex(presetColor);
		setHsv(hexToHsv(nextHex));
		notifyChange(nextHex);
	};

	const toggleOpen = () => {
		if (disabled) return;
		setIsOpen(!isOpen);
	};

	// Label rendering
	const renderLabel = () => {
		if (!label) return null;
		if (React.isValidElement(label)) return label;
		const tooltipContent = infoLabel || hint || info;

		return (
			<label htmlFor={id} className={styles.labelRoot}>
				<span className={styles.labelText}>{label}</span>
				{required ? <span className={styles.labelRequired}> *</span> : null}
				{tooltipContent ? (
					<Popup
						wide={hintWide ? "very" : true}
						hoverable={hintWide}
						position={popupPosition || "top center"}
						content={tooltipContent}
						trigger={<Icon name="info circle" className={styles.infoIcon} />}
					/>
				) : null}
			</label>
		);
	};

	const isError = Boolean(error || errorMessage);
	const sizeClass = styles[`size_${size}`] || styles.size_medium;

	const containerClasses = [
		styles.container,
		fluid ? styles.fluid : "",
		rounded ? styles.rounded : "",
		disabled ? styles.disabled : "",
		isError ? styles.error : "",
		sizeClass,
		className,
	]
		.filter(Boolean)
		.join(" ");

	// The Interactive Color Picker Panel
	const renderPickerCard = () => {
		const pureHueHsvHex = hsvToHex(hsv.h, 100, 100);
		const pointerLeft = `${hsv.s}%`;
		const pointerTop = `${100 - hsv.v}%`;
		const hueThumbLeft = `${(hsv.h / 360) * 100}%`;
		const presetList = presets && presets.length > 0 ? presets : DEFAULT_PRESETS;

		return (
			<div className={styles.pickerCard} role="dialog" aria-label="Selector de Color">
				{/* 2D Saturation / Value Board */}
				<div
					ref={satBoardRef}
					className={styles.saturationBoard}
					style={{ backgroundColor: pureHueHsvHex }}
					onMouseDown={handleSatPointerDown}
					onTouchStart={handleSatPointerDown}>
					<div className={styles.saturationWhite} />
					<div className={styles.saturationBlack} />
					<div
						className={styles.saturationPointer}
						style={{
							left: pointerLeft,
							top: pointerTop,
							backgroundColor: activeHex,
						}}
					/>
				</div>

				{/* 1D Hue Rainbow Slider */}
				<div ref={hueSliderRef} className={styles.hueSliderWrapper} onMouseDown={handleHuePointerDown} onTouchStart={handleHuePointerDown}>
					<div className={styles.hueThumb} style={{ left: hueThumbLeft }} />
				</div>

				{/* Controls Row: Preview, Hex Input, Eyedropper, Copy */}
				<div className={styles.controlsRow}>
					<div className={styles.currentColorCircle} style={{ backgroundColor: activeHex }} />

					{showHexInput && (
						<div className={styles.hexInputWrapper}>
							<span className={styles.hexPrefix}>#</span>
							<input
								type="text"
								className={styles.hexInput}
								value={hexInputValue}
								onChange={handleHexInputChange}
								maxLength={6}
								spellCheck="false"
								autoComplete="off"
								aria-label="Código Hexadecimal"
							/>
						</div>
					)}

					{showEyeDropper && isEyeDropperSupported() && (
						<button
							type="button"
							className={styles.iconBtn}
							onClick={handleEyeDropper}
							title="Seleccionar color de pantalla"
							aria-label="Cuentagotas">
							<Icon name="eyedropper" style={{ margin: 0 }} />
						</button>
					)}

					<button
						type="button"
						className={`${styles.iconBtn} ${copied ? styles.iconBtnSuccess : ""}`}
						onClick={handleCopyHex}
						title={copied ? "¡Copiado!" : "Copiar código Hex"}
						aria-label="Copiar código Hex">
						<Icon name={copied ? "check" : "copy outline"} style={{ margin: 0 }} />
					</button>
				</div>

				{/* Presets Grid */}
				{showPresets && (
					<div className={styles.presetsSection}>
						<span className={styles.presetsTitle}>Colores sugeridos</span>
						<div className={styles.presetsGrid}>
							{presetList.map((c) => {
								const normalizedPreset = normalizeHex(c);
								const isActive = normalizedPreset === activeHex;
								return (
									<button
										key={normalizedPreset}
										type="button"
										className={`${styles.presetSwatch} ${isActive ? styles.presetSwatchActive : ""}`}
										style={{ backgroundColor: normalizedPreset }}
										onClick={() => {
											return handleSelectPreset(normalizedPreset);
										}}
										title={normalizedPreset}
										aria-label={normalizedPreset}
									/>
								);
							})}
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className={containerClasses} style={style} ref={containerRef} {...rest}>
			{renderLabel()}

			{/* MODE 1: SWATCH TRIGGER (Compact button) */}
			{format === "swatch" && (
				<button
					type="button"
					className={styles.swatchTrigger}
					onClick={toggleOpen}
					disabled={disabled}
					aria-label="Abrir selector de color"
					aria-expanded={isOpen}>
					<div className={styles.swatchColorPreview} style={{ backgroundColor: activeHex }} />
				</button>
			)}

			{/* MODE 2: INPUT TRIGGER (Form field style with hex & pill) */}
			{format === "input" && (
				<div
					role="button"
					tabIndex={disabled ? -1 : 0}
					className={`${styles.inputTrigger} ${isOpen ? styles.inputTriggerOpen : ""}`}
					onClick={toggleOpen}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							toggleOpen();
						}
					}}
					aria-label="Abrir selector de color"
					aria-expanded={isOpen}>
					<div className={styles.inputTriggerContent}>
						<div className={styles.inputColorPill} style={{ backgroundColor: activeHex }} />
						<span className={styles.inputHexText}>{activeHex}</span>
					</div>
					<div className={styles.inputTriggerIcons}>
						<Icon name="chevron down" className={`${styles.chevronIcon} ${isOpen ? styles.chevronIconOpen : ""}`} />
					</div>
				</div>
			)}

			{/* POPOVER PANEL */}
			{popover && isOpen && !disabled && (
				<div
					className={[
						styles.popoverWrapper,
						flipTop || popoverPlacement === "top" ? styles.popoverTop : "",
						alignRight ? styles.popoverAlignRight : "",
					]
						.filter(Boolean)
						.join(" ")}>
					{renderPickerCard()}
				</div>
			)}

			{/* INLINE PANEL (When popover={false}) */}
			{!popover && !disabled && <div className={styles.inlineWrapper}>{renderPickerCard()}</div>}

			{/* Error message */}
			{errorMessage && (
				<div className={styles.errorMessage}>
					<Icon name="exclamation circle" style={{ margin: 0 }} />
					<span>{errorMessage}</span>
				</div>
			)}
		</div>
	);
};

ColorPicker.propTypes = {
	// Alternate / legacy props
	currentColor: PropTypes.string,
	setCurrentColor: PropTypes.func,
	popover: PropTypes.bool,

	// Standard props
	value: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	format: PropTypes.oneOf(["swatch", "input"]),
	disabled: PropTypes.bool,
	label: PropTypes.node,
	info: PropTypes.node,
	infoLabel: PropTypes.node,
	hint: PropTypes.node,
	hintWide: PropTypes.bool,
	popupPosition: PropTypes.string,
	required: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	rounded: PropTypes.bool,
	fluid: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	presets: PropTypes.arrayOf(PropTypes.string),
	showPresets: PropTypes.bool,
	showEyeDropper: PropTypes.bool,
	showHexInput: PropTypes.bool,
	popoverPlacement: PropTypes.oneOf(["bottom", "top", "auto"]),
	className: PropTypes.string,
	style: PropTypes.object,
	id: PropTypes.string,
	name: PropTypes.string,
};

ColorPicker.defaultProps = {
	currentColor: undefined,
	setCurrentColor: undefined,
	popover: true,
	value: undefined,
	defaultValue: "#00B5AD",
	onChange: undefined,
	format: "swatch",
	disabled: false,
	label: null,
	info: null,
	infoLabel: null,
	hint: null,
	hintWide: false,
	popupPosition: "top center",
	required: false,
	size: "medium",
	rounded: false,
	fluid: false,
	error: false,
	errorMessage: null,
	presets: DEFAULT_PRESETS,
	showPresets: true,
	showEyeDropper: true,
	showHexInput: true,
	popoverPlacement: "bottom",
	className: "",
	style: {},
	id: undefined,
	name: undefined,
};

export default ColorPicker;
