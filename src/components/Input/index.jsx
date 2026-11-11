/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Icon, Select, Popup } from "semantic-ui-react";
import { isEmpty, omit } from "lodash";
import styles from "./styles.module.css";

const Input = forwardRef((props, ref) => {
	const {
		isPassword = false,
		isLink = false,
		isPin = false,
		inlineLabel,
		copyLabel = "Copiar",
		generateLabel = "Generar",
		pinLength = 4,
		onGeneratePin,
		onCopy,
		name,
		value,
		className,
		icon,
		label,
		infoLabel,
		hint,
		info,
		tooltip,
		hintWide = false,
		popupPosition = "top center",
		labelClassName = "",
		placeholder,
		disabled,
		rounded,
		onChange,
		onKeyPress,
		onClear,
		dropdown,
		dropdownPosition = "left",
		required = false,
		fluid = true,
		type = "text",
		hideClear = false,
		hideDropdown = false,
		hideGenerate = false,
		readOnly = false,
		watch = false,
		isWatch = false,
		mode,
		modalOption,
		customBorderRadius,
		error,
	} = props;

	const isBlocked = Boolean(
		disabled || watch || isWatch || readOnly || mode === "Watch" || mode === "watch" || modalOption === "Watch" || modalOption === "watch"
	);

	const isLinkType = type === "link" || Boolean(isLink);
	const isPinType = type === "pin" || Boolean(isPin);
	const isPasswordType = isPassword || type === "password" || isPinType;
	const showGenerate = isPinType && !hideGenerate && !isBlocked;
	const showClear = !hideClear && !isEmpty(value) && !isBlocked;
	const hasRightAction = Boolean(isPasswordType || showGenerate || isLinkType);

	const radiusDefault = customBorderRadius || (rounded ? "1rem" : "0.25rem");
	const radiusRounded = customBorderRadius || "1rem";
	const input = useRef(null);
	const inlineLabelRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [inputType, setInputType] = useState(isPasswordType ? "password" : type === "link" ? "text" : type);
	const [passwordIcon, setPasswordIcon] = useState("eye slash");
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		// Aplicar background gris cuando esté bloqueado (disabled / watch / readOnly)
		if (isBlocked) {
			(ref || input).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important");
			(ref || input).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important");
			(ref || input).current.style.setProperty("cursor", "not-allowed", "important");
		} else {
			(ref || input).current.style.removeProperty("background-color");
			(ref || input).current.style.removeProperty("cursor");
		}

		const hasError = !!(error && (typeof error === "object" ? error.content : error));
		const borderColor = hasError ? "var(--red500, #ef4444)" : isFocused ? "var(--inputFocus)" : "var(--inputShader)";

		if (rounded) {
			if (isEmpty(value) || isBlocked) {
				(ref || input).current.style.removeProperty("border-top-left-radius");
				(ref || input).current.style.removeProperty("border-bottom-left-radius");
				(ref || input).current.style.removeProperty("border-top-right-radius");
				(ref || input).current.style.removeProperty("border-bottom-right-radius");
				(ref || input).current.style.removeProperty("border-right");
				if (!hasRightAction) {
					(ref || input).current.style.setProperty("border-radius", radiusRounded, "important");
					(ref || input).current.style.setProperty("border-right", `1px solid ${borderColor}`, "important");
				} else {
					(ref || input).current.style.setProperty("border-top-left-radius", radiusRounded, "important");
					(ref || input).current.style.setProperty("border-bottom-left-radius", radiusRounded, "important");
					(ref || input).current.style.setProperty("border-right", "0", "important");
					(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
					(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
				}
			} else if (hideClear && !hasRightAction) {
				// Sin botón clear a la derecha: el input debe cerrar su propio borde.
				(ref || input).current.style.setProperty("border-radius", radiusRounded, "important");
				(ref || input).current.style.setProperty("border-right", `1px solid ${borderColor}`, "important");
			} else {
				// Valor con botón clear o acciones a la derecha
				(ref || input).current.style.removeProperty("border-radius");
				(ref || input).current.style.setProperty("border-top-left-radius", radiusRounded, "important");
				(ref || input).current.style.setProperty("border-bottom-left-radius", radiusRounded, "important");
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-right", "0", "important");
			}
		} else if (isEmpty(value) || isBlocked) {
			(ref || input).current.style.setProperty("border-radius", radiusDefault, "important");
			if (!hasRightAction) {
				(ref || input).current.style.setProperty("border-right", `1px solid ${borderColor}`, "important");
			} else {
				(ref || input).current.style.setProperty("border-right", "0", "important");
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
			}
		} else if (hideClear && !hasRightAction) {
			// rounded=false: hideClear y sin acciones
			(ref || input).current.style.setProperty("border-radius", radiusDefault, "important");
			(ref || input).current.style.setProperty("border-right", `1px solid ${borderColor}`, "important");
			(ref || input).current.style.setProperty("border-top-right-radius", radiusDefault, "important");
			(ref || input).current.style.setProperty("border-bottom-right-radius", radiusDefault, "important");
		} else {
			// Valor con botón clear visible o acciones
			(ref || input).current.style.setProperty("border-right", "0", "important");
			(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
			(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
		}

		if (!isEmpty(dropdown)) {
			if (dropdownPosition === "left") {
				(ref || input).current.style.setProperty("border-top-left-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-left-radius", "0", "important");
				(ref || input).current.style.setProperty("border-left-color", "transparent", "important");
			} else if (dropdownPosition === "right") {
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-right-color", "transparent", "important");
			}
		}

		if (inlineLabel) {
			(ref || input).current.style.setProperty("border-top-left-radius", "0", "important");
			(ref || input).current.style.setProperty("border-bottom-left-radius", "0", "important");
			(ref || input).current.style.setProperty("border-left-color", "transparent", "important");
		}
	}, [
		value,
		isFocused,
		dropdown,
		dropdownPosition,
		inlineLabel,
		hasRightAction,
		isBlocked,
		rounded,
		hideClear,
		customBorderRadius,
		radiusDefault,
		radiusRounded,
		ref,
		input,
		error,
	]);

	const trimValue = (e) => {
		if (!isEmpty(value)) {
			const data = { name, value: typeof value === "string" ? value.trim() : value };
			if (onChange) {
				onChange({ ...e, target: data }, data);
			}
		}
	};

	const handleEnter = (e) => {
		const { key } = e;
		if (key === "Enter") {
			e.preventDefault();
			trimValue(e);
			if (onKeyPress) {
				onKeyPress(e);
			}
		}
	};

	const handleToggle = () => {
		const toggle = inputType === "password";
		const typeVal = toggle ? "text" : "password";
		const iconVal = toggle ? "eye" : "eye slash";
		setInputType(typeVal);
		setPasswordIcon(iconVal);
	};

	const handleCopy = (e) => {
		e.preventDefault();
		if (isEmpty(value)) {
			return;
		}
		const textToCopy = String(value);
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(textToCopy);
		} else {
			const textarea = document.createElement("textarea");
			textarea.value = textToCopy;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		}
		setCopied(true);
		if (onCopy) {
			onCopy(textToCopy, e);
		}
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const handleGeneratePin = async (e) => {
		e.preventDefault();
		if (isBlocked) {
			return;
		}
		let newPin;
		if (typeof onGeneratePin === "function") {
			newPin = await onGeneratePin(e);
		} else {
			const len = pinLength || 4;
			const min = 10 ** (len - 1);
			const max = 10 ** len - 1;
			newPin = String(Math.floor(min + Math.random() * (max - min + 1)));
		}

		if (newPin !== undefined && newPin !== null && newPin !== "") {
			const data = { name, value: String(newPin) };
			if (props.fieldIndex !== undefined) {
				data.fieldIndex = props.fieldIndex;
			}
			if (props.id !== undefined) {
				data.id = props.id;
			}
			if (onChange) {
				onChange({ ...e, target: data }, data);
			}
		}
	};

	const clearInput = (e) => {
		if (isBlocked) {
			return;
		}
		const data = { name, value: "" };
		if (props.fieldIndex !== undefined) {
			data.fieldIndex = props.fieldIndex;
		}
		if (props.id !== undefined) {
			data.id = props.id;
		}
		if (onChange) {
			onChange({ ...e, target: data }, data);
		}
		if (onClear) {
			onClear();
		}
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = (e) => {
		trimValue(e);
		setIsFocused(false);
	};

	const getButtonStyle = (isLast) => {
		if (isLast) {
			if (rounded) {
				return isFocused ? styles.actionRoundedLastFocused : styles.actionRoundedLast;
			}
			return isFocused ? styles.actionLastFocused : styles.actionLast;
		}
		return isFocused ? styles.actionMiddleFocused : styles.actionMiddle;
	};

	const renderLabel = () => {
		if (!label) return undefined;
		if (React.isValidElement(label)) return label;
		const infoText = infoLabel || hint || info || tooltip;
		return (
			<span className={`${styles.labelRoot} ${labelClassName}`.trim()}>
				<span className={styles.labelText}>{label}</span>
				{required ? <span className={styles.labelRequired}> *</span> : null}
				{infoText ? (
					<Popup
						wide={hintWide ? "very" : true}
						hoverable={hintWide}
						position={popupPosition}
						content={infoText}
						trigger={<Icon name="info circle" className={styles.infoIcon} />}
					/>
				) : null}
			</span>
		);
	};

	const validProps = omit(props, [
		"ref",
		"icon",
		"children",
		"onKeyPress",
		"name",
		"value",
		"onChange",
		"onClear",
		"onCopy",
		"onGeneratePin",
		"disabled",
		"className",
		"rounded",
		"isPassword",
		"isLink",
		"isPin",
		"inlineLabel",
		"copyLabel",
		"generateLabel",
		"pinLength",
		"required",
		"type",
		"dropdown",
		"dropdownPosition",
		"hideClear",
		"hideDropdown",
		"hideGenerate",
		"customBorderRadius",
		"infoLabel",
		"hint",
		"info",
		"tooltip",
		"hintWide",
		"popupPosition",
		"labelClassName",
		"fieldIndex",
		"id",
		"error",
		"watch",
		"isWatch",
		"mode",
		"modalOption",
		"readOnly",
	]);

	const resolvedIcon = icon || (isPassword ? "lock" : isPinType ? "key" : isLinkType ? "linkify" : undefined);
	const hasIcon = !inlineLabel && (isPasswordType || !isEmpty(resolvedIcon));

	const renderInlineLabel = () => {
		if (!inlineLabel) return null;
		const hasError = !!(error && (typeof error === "object" ? error.content : error));
		const boxClasses = [
			styles.inlineLabelBox,
			isFocused ? styles.inlineLabelBoxFocused : "",
			rounded ? styles.inlineLabelBoxRounded : "",
			hasError ? styles.inlineLabelBoxError : "",
		]
			.filter(Boolean)
			.join(" ");

		return (
			<Button ref={inlineLabelRef} className={boxClasses} type="button" tabIndex={-1}>
				{inlineLabel}
			</Button>
		);
	};

	const errorText = typeof error === "object" && error !== null ? error.content : typeof error === "string" ? error : null;
	const resolvedError = errorText
		? {
				...(typeof error === "object" ? error : {}),
				content: (
					<span className={styles.errorContent}>
						<Icon name="exclamation circle" className={styles.errorIcon} />
						<span>{errorText}</span>
					</span>
				),
		  }
		: error;

	return (
		<Form.Input
			{...validProps}
			className={`${styles.input} ${isBlocked ? styles.disabled : ""} ${className || ""}`}
			disabled={isBlocked}
			onChange={onChange}
			name={name}
			label={renderLabel()}
			placeholder={placeholder === "" ? "" : isEmpty(placeholder) ? (typeof label === "string" ? label : "") : placeholder}
			value={value}
			type={isPasswordType ? inputType : type === "link" ? "text" : type}
			{...(hasIcon ? { iconPosition: "left" } : {})}
			autoComplete="off"
			fluid={fluid}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyPress={handleEnter}
			actionPosition={inlineLabel ? "left" : "right"}
			action
			error={resolvedError}>
			{inlineLabel && renderInlineLabel()}
			{dropdownPosition === "left" && !isEmpty(dropdown) && !hideDropdown && <Select labeled {...dropdown} disabled={isBlocked} />}
			{hasIcon && <Icon name={resolvedIcon} />}
			<input
				ref={ref || input}
				required={required}
				readOnly={Boolean(readOnly || watch || isWatch || mode === "Watch" || mode === "watch")}
				disabled={isBlocked}
			/>

			{/* BOTÓN CLEAR ('x') */}
			{dropdownPosition === "right" ? (
				<>
					{showClear && (
						<Button className={getButtonStyle(!hasRightAction)} icon="cancel" onClick={clearInput} tabIndex={-1} title="Limpiar" />
					)}
					{!hideDropdown && <Select labeled {...dropdown} disabled={isBlocked} />}
				</>
			) : (
				showClear && <Button className={getButtonStyle(!hasRightAction)} icon="cancel" onClick={clearInput} tabIndex={-1} title="Limpiar" />
			)}

			{/* BOTÓN OJITO PARA PASSWORD O PIN */}
			{(isPassword || isPinType) && (
				<Popup
					size="mini"
					inverted
					position="top center"
					content={inputType === "password" ? "Mostrar" : "Ocultar"}
					trigger={
						<Button
							className={`${getButtonStyle(!showGenerate)} ${styles.actionIconOnly}`}
							icon={passwordIcon}
							onClick={handleToggle}
							tabIndex={-1}
							aria-label={inputType === "password" ? "Mostrar" : "Ocultar"}
						/>
					}
				/>
			)}

			{/* BOTÓN GENERAR PARA PIN (se oculta automáticamente en modo watch o bloqueado) */}
			{showGenerate && (
				<Popup
					size="mini"
					inverted
					position="top center"
					content={generateLabel || "Generar"}
					trigger={
						<Button
							className={`${getButtonStyle(true)} ${styles.actionIconOnly}`}
							onClick={handleGeneratePin}
							tabIndex={-1}
							aria-label={generateLabel || "Generar"}>
							<Icon name="exchange" />
						</Button>
					}
				/>
			)}

			{/* BOTÓN COPIAR PARA LINK */}
			{isLinkType && (
				<Popup
					size="mini"
					inverted
					position="top center"
					open={copied ? true : undefined}
					content={copied ? "¡Copiado!" : copyLabel || "Copiar"}
					trigger={
						<Button
							className={`${getButtonStyle(true)} ${styles.actionIconOnly} ${copied ? styles.copiedButton : ""}`}
							onClick={handleCopy}
							tabIndex={-1}
							aria-label={copied ? "¡Copiado!" : copyLabel || "Copiar"}>
							<Icon name={copied ? "check" : "copy"} />
						</Button>
					}
				/>
			)}
		</Form.Input>
	);
});

Input.displayName = "Input";

Input.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	onClear: PropTypes.func,
	onCopy: PropTypes.func,
	onGeneratePin: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	infoLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	info: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	hintWide: PropTypes.bool,
	popupPosition: PropTypes.string,
	labelClassName: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	children: PropTypes.node,
	rounded: PropTypes.bool,
	dropdown: PropTypes.object,
	dropdownPosition: PropTypes.oneOf(["left", "right"]),
	fluid: PropTypes.bool,
	isPassword: PropTypes.bool,
	isLink: PropTypes.bool,
	isPin: PropTypes.bool,
	inlineLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	copyLabel: PropTypes.string,
	generateLabel: PropTypes.string,
	pinLength: PropTypes.number,
	required: PropTypes.bool,
	type: PropTypes.string,
	fieldIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	hideClear: PropTypes.bool,
	hideDropdown: PropTypes.bool,
	hideGenerate: PropTypes.bool,
	readOnly: PropTypes.bool,
	watch: PropTypes.bool,
	isWatch: PropTypes.bool,
	mode: PropTypes.string,
	modalOption: PropTypes.string,
	customBorderRadius: PropTypes.string,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]),
};

export default Input;
