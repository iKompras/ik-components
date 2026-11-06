/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/no-static-element-interactions */
import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { Icon, Popup } from "semantic-ui-react";
import styles from "./styles.module.css";

const DropdownItem = ({ children }) => {
	return children || null;
};
DropdownItem.propTypes = {
	children: PropTypes.node,
};

const DropdownMenu = ({ children }) => {
	return children || null;
};
DropdownMenu.propTypes = {
	children: PropTypes.node,
};

const DropdownHeader = ({ children }) => {
	return children || null;
};
DropdownHeader.propTypes = {
	children: PropTypes.node,
};

const DropdownDivider = () => {
	return null;
};

const COLOR_MAP = {
	teal: "#00b5ad",
	blue: "#2185d0",
	green: "#21ba45",
	orange: "#f2711c",
	red: "#db2828",
	purple: "#a333c8",
	pink: "#e03997",
	yellow: "#fbbd08",
	olive: "#b5cc18",
	violet: "#6435c9",
	grey: "#767676",
	gray: "#767676",
	black: "#1b1c1d",
};

const getBadgeStyle = (color) => {
	if (!color) {
		return { backgroundColor: "#00b5ad" };
	}
	const normalized = typeof color === "string" ? color.toLowerCase() : "";
	const mapped = COLOR_MAP[normalized];
	return { backgroundColor: mapped || color };
};

const Dropdown = forwardRef((props, ref) => {
	const {
		label,
		infoLabel,
		hint,
		hintWide = false,
		popupPosition = "top center",
		labelClassName = "",
		required = false,
		error = false,
		errorMessage,
		multiple = false,
		checkbox = false,
		useCheckbox = false,
		search = true,
		clearable = true,
		fluid = true,
		disabled = false,
		loading = false,
		rounded = false,
		size = "medium",
		options = [],
		value,
		defaultValue,
		onChange,
		placeholder = "Seleccionar...",
		noResultsMessage = "No se encontraron resultados",
		className = "",
		style = {},
		id,
		name,
		onOpen,
		onClose,
		showId = false,
		idKey = "id",
		idBadgeColor = "teal",
		renderOption,
		renderSelected,
		...rest
	} = props;

	const containerRef = useRef(null);
	const searchInputRef = useRef(null);

	useImperativeHandle(ref, () => {
		return containerRef.current;
	});

	const hasCheckbox = Boolean(checkbox || useCheckbox);
	const isMultiple = Boolean(multiple || hasCheckbox);

	const isControlled = value !== undefined;
	const [internalValue, setInternalValue] = useState(() => {
		if (defaultValue !== undefined) {
			return defaultValue;
		}
		return isMultiple ? [] : "";
	});

	const currentValue = isControlled ? value : internalValue;

	const selectedValues = isMultiple
		? Array.isArray(currentValue)
			? currentValue
			: currentValue !== undefined && currentValue !== null && currentValue !== ""
			? [currentValue]
			: []
		: [];

	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [highlightedIndex, setHighlightedIndex] = useState(-1);

	const dropdownMenuId = id ? `${id}-menu` : "custom-dropdown-menu";

	// Close on click outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsOpen(false);
				setSearchQuery("");
				setHighlightedIndex(-1);
				if (onClose) {
					onClose(event, { ...props, value: currentValue });
				}
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [currentValue, onClose, props]);

	const getOptionBadge = (opt) => {
		if (!opt) {
			return null;
		}

		// 1. Formato Semantic UI React Dropdown: label: { color: 'teal', content: 67 }
		if (opt.label !== undefined && opt.label !== null) {
			if (typeof opt.label === "object") {
				const content = opt.label.content !== undefined ? opt.label.content : opt.label.text;
				if (content !== undefined && content !== null && content !== "") {
					return {
						content,
						color: opt.label.color || idBadgeColor || "teal",
					};
				}
			} else if (typeof opt.label === "string" || typeof opt.label === "number") {
				return {
					content: opt.label,
					color: opt.labelColor || idBadgeColor || "teal",
				};
			}
		}

		// 2. Propiedad directa id: 67
		if (opt.id !== undefined && opt.id !== null && opt.id !== "") {
			return {
				content: opt.id,
				color: opt.idColor || idBadgeColor || "teal",
			};
		}

		// 3. Prop showId a nivel de Dropdown
		if (showId) {
			const fallbackId = opt[idKey] !== undefined ? opt[idKey] : opt.key !== undefined ? opt.key : opt.value;
			if (fallbackId !== undefined && fallbackId !== null && fallbackId !== "") {
				return {
					content: fallbackId,
					color: idBadgeColor || "teal",
				};
			}
		}

		return null;
	};

	// Filter options
	const visibleOptions = options.filter((opt) => {
		// In multiple mode WITHOUT checkboxes, hide already selected items from list
		if (isMultiple && !hasCheckbox && selectedValues.includes(opt.value)) {
			return false;
		}
		if (!search || !searchQuery.trim()) {
			return true;
		}
		const query = searchQuery.toLowerCase().trim();
		const labelText = typeof opt.text === "string" ? opt.text : String(opt.text || "");
		const badge = getOptionBadge(opt);
		const badgeText = badge && badge.content !== undefined ? String(badge.content) : "";
		const valueText = String(opt.value !== undefined ? opt.value : "");
		const descText = typeof opt.description === "string" ? opt.description : "";

		return (
			labelText.toLowerCase().includes(query) ||
			badgeText.toLowerCase().includes(query) ||
			valueText.toLowerCase().includes(query) ||
			descText.toLowerCase().includes(query)
		);
	});

	const handleOpen = (e) => {
		if (disabled) {
			return;
		}
		setIsOpen(true);
		setHighlightedIndex(-1);
		if (search && searchInputRef.current) {
			searchInputRef.current.focus();
		}
		if (onOpen) {
			onOpen(e, { ...props, value: currentValue });
		}
	};

	const handleClose = (e) => {
		setIsOpen(false);
		setSearchQuery("");
		setHighlightedIndex(-1);
		if (onClose) {
			onClose(e, { ...props, value: currentValue });
		}
	};

	const handleToggleOpen = (e) => {
		if (disabled) {
			return;
		}
		if (isOpen) {
			handleClose(e);
		} else {
			handleOpen(e);
		}
	};

	const handleSelectOption = (event, opt) => {
		if (disabled || opt.disabled) {
			return;
		}

		if (isMultiple) {
			let nextValues;
			if (hasCheckbox) {
				const isSelected = selectedValues.includes(opt.value);
				nextValues = isSelected
					? selectedValues.filter((v) => {
							return v !== opt.value;
					  })
					: [...selectedValues, opt.value];
			} else {
				nextValues = [...selectedValues, opt.value];
				setSearchQuery("");
			}

			if (!isControlled) {
				setInternalValue(nextValues);
			}
			if (onChange) {
				onChange(event, {
					...props,
					value: nextValues,
					selectedOption: opt,
				});
			}

			// In checkbox mode, keep menu open and keep focus on search if available
			if (hasCheckbox && searchInputRef.current) {
				searchInputRef.current.focus();
			} else if (!hasCheckbox) {
				setIsOpen(false);
			}
		} else {
			if (!isControlled) {
				setInternalValue(opt.value);
			}
			if (onChange) {
				onChange(event, {
					...props,
					value: opt.value,
					selectedOption: opt,
				});
			}
			setIsOpen(false);
			setSearchQuery("");
		}
	};

	const handleRemoveTag = (event, valToRemove) => {
		event.stopPropagation();
		if (disabled) {
			return;
		}
		const nextValues = selectedValues.filter((v) => {
			return v !== valToRemove;
		});
		if (!isControlled) {
			setInternalValue(nextValues);
		}
		if (onChange) {
			onChange(event, {
				...props,
				value: nextValues,
			});
		}
	};

	const handleClear = (event) => {
		event.stopPropagation();
		if (disabled) {
			return;
		}
		const emptyValue = isMultiple ? [] : "";
		if (!isControlled) {
			setInternalValue(emptyValue);
		}
		setSearchQuery("");
		if (onChange) {
			onChange(event, {
				...props,
				value: emptyValue,
			});
		}
	};

	const handleKeyDown = (event) => {
		if (disabled) {
			return;
		}

		if (event.key === "ArrowDown") {
			event.preventDefault();
			if (!isOpen) {
				handleOpen(event);
				return;
			}
			setHighlightedIndex((prev) => {
				const next = prev + 1;
				return next >= visibleOptions.length ? 0 : next;
			});
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			if (!isOpen) {
				handleOpen(event);
				return;
			}
			setHighlightedIndex((prev) => {
				const next = prev - 1;
				return next < 0 ? visibleOptions.length - 1 : next;
			});
		} else if (event.key === "Enter") {
			event.preventDefault();
			if (!isOpen) {
				handleOpen(event);
			} else if (highlightedIndex >= 0 && highlightedIndex < visibleOptions.length) {
				handleSelectOption(event, visibleOptions[highlightedIndex]);
			}
		} else if (event.key === "Escape") {
			event.preventDefault();
			handleClose(event);
		}
	};

	// Determine if clear icon should show
	const hasValue = isMultiple
		? selectedValues.length > 0
		: (currentValue !== undefined && currentValue !== null && currentValue !== "") || Boolean(searchQuery);
	const showClear = clearable && hasValue && !disabled;

	// Selected option for single mode
	const selectedOption = !isMultiple
		? options.find((opt) => {
				return String(opt.value) === String(currentValue);
		  })
		: null;

	const renderLabel = () => {
		if (!label) {
			return null;
		}
		if (React.isValidElement(label)) {
			return label;
		}
		const info = infoLabel || hint;
		return (
			<label htmlFor={id} className={`${styles.labelRoot} ${labelClassName}`.trim()}>
				<span className={styles.labelText}>{label}</span>
				{required ? <span className={styles.labelRequired}> *</span> : null}
				{info ? (
					<Popup
						wide={hintWide ? "very" : true}
						hoverable={hintWide}
						position={popupPosition}
						content={info}
						trigger={<Icon name="info circle" className={styles.infoIcon} />}
					/>
				) : null}
			</label>
		);
	};

	const renderErrorMessage = () => {
		if (!errorMessage) {
			return null;
		}
		return (
			<div className={styles.errorMessage}>
				<Icon name="exclamation circle" />
				<span>{errorMessage}</span>
			</div>
		);
	};

	const sizeClass = styles[`size_${size}`] || styles.size_medium;
	const isError = Boolean(error || errorMessage);

	const containerClasses = [
		styles.container,
		fluid ? styles.fluid : "",
		rounded ? styles.rounded : "",
		sizeClass,
		disabled ? styles.disabled : "",
		isError ? styles.error : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const controlBoxClasses = [styles.controlBox, isMultiple ? styles.controlBoxMultiple : "", isOpen ? styles.controlBoxOpen : ""]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={containerClasses} style={style} ref={containerRef} onKeyDown={handleKeyDown} {...rest}>
			{renderLabel()}

			<div
				className={controlBoxClasses}
				onClick={handleToggleOpen}
				role="combobox"
				aria-expanded={isOpen}
				aria-controls={dropdownMenuId}
				aria-haspopup="listbox"
				tabIndex={disabled ? -1 : 0}>
				{/* SINGLE SELECTION */}
				{!isMultiple && (
					<div className={styles.contentAreaSingle}>
						{/* Placeholder */}
						{!selectedOption && (
							<span className={`${styles.placeholderSingle} ${isOpen && searchQuery ? styles.hiddenText : ""}`}>{placeholder}</span>
						)}

						{/* Selected Value */}
						{selectedOption && (
							<span className={`${styles.selectedSingle} ${isOpen && searchQuery ? styles.hiddenText : ""}`}>
								{renderSelected ? (
									renderSelected(selectedOption)
								) : (
									<>
										{(() => {
											const badge = getOptionBadge(selectedOption);
											return badge ? (
												<span className={styles.idBadge} style={getBadgeStyle(badge.color)}>
													{badge.content}
												</span>
											) : null;
										})()}
										{selectedOption.icon && <Icon name={selectedOption.icon} className={styles.optionIcon} />}
										{selectedOption.flag && <i className={`${selectedOption.flag} flag ${styles.optionFlag}`} />}
										<span className={styles.optionText}>{selectedOption.text}</span>
									</>
								)}
							</span>
						)}

						{/* Native Search Input - positioned directly where placeholder is */}
						{search && (
							<input
								ref={searchInputRef}
								type="text"
								name={name}
								id={id}
								className={`${styles.searchInputSingle} ${!searchQuery && selectedOption ? styles.searchInputInactiveCaret : ""}`}
								value={isOpen ? searchQuery : ""}
								onChange={(e) => {
									return setSearchQuery(e.target.value);
								}}
								onClick={(e) => {
									e.stopPropagation();
									if (!isOpen) {
										handleOpen(e);
									}
								}}
								disabled={disabled}
								autoComplete="off"
								aria-label={label ? String(label) : placeholder}
							/>
						)}
					</div>
				)}

				{/* MULTIPLE SELECTION */}
				{isMultiple && (
					<div className={styles.tagsWrapper}>
						{selectedValues.map((val) => {
							const opt = options.find((o) => {
								return o.value === val;
							}) || { text: val, value: val };
							const badge = getOptionBadge(opt);
							return (
								<span key={val} className={styles.tag}>
									{badge && (
										<span className={styles.idBadgeMini} style={getBadgeStyle(badge.color)}>
											{badge.content}
										</span>
									)}
									{opt.icon && <Icon name={opt.icon} className={styles.optionIcon} />}
									{opt.flag && <i className={`${opt.flag} flag ${styles.optionFlag}`} />}
									<span className={styles.tagText}>{opt.text}</span>
									{!disabled && (
										<Icon
											name="close"
											className={styles.tagDeleteIcon}
											onClick={(e) => {
												return handleRemoveTag(e, val);
											}}
										/>
									)}
								</span>
							);
						})}

						{/* Placeholder when no items selected */}
						{selectedValues.length === 0 && !searchQuery && <span className={styles.placeholderMultiple}>{placeholder}</span>}

						{/* Search Input in multiple mode */}
						{search && (
							<input
								ref={searchInputRef}
								type="text"
								name={name}
								id={id}
								className={styles.searchInputMultiple}
								value={searchQuery}
								onChange={(e) => {
									return setSearchQuery(e.target.value);
								}}
								onClick={(e) => {
									e.stopPropagation();
									if (!isOpen) {
										handleOpen(e);
									}
								}}
								disabled={disabled}
								autoComplete="off"
								aria-label={label ? String(label) : placeholder}
							/>
						)}
					</div>
				)}

				{/* ACTION BUTTONS (CLEAR & CHEVRON / SPINNER) */}
				<div className={styles.actionIconsGroup}>
					{loading && <Icon name="spinner" className={styles.spinnerIcon} />}
					{showClear && !loading && (
						<button type="button" className={styles.clearButton} onClick={handleClear} title="Limpiar selección" aria-label="Limpiar">
							<Icon name="close" />
						</button>
					)}
					<Icon name="dropdown" className={`${styles.chevronIcon} ${isOpen ? styles.chevronIconOpen : ""}`} />
				</div>
			</div>

			{/* FLOATING DROPDOWN LIST */}
			{isOpen && !disabled && (
				<ul className={styles.dropdownMenu} id={dropdownMenuId} role="listbox">
					{visibleOptions.length === 0 ? (
						<li className={styles.noResults}>{noResultsMessage}</li>
					) : (
						visibleOptions.map((opt, index) => {
							const isSelected = isMultiple ? selectedValues.includes(opt.value) : String(currentValue) === String(opt.value);
							const isHighlighted = highlightedIndex === index;
							const badge = getOptionBadge(opt);

							const itemClasses = [
								styles.menuItem,
								isSelected ? styles.menuItemActive : "",
								isHighlighted ? styles.menuItemHover : "",
								opt.disabled ? styles.menuItemDisabled : "",
							]
								.filter(Boolean)
								.join(" ");

							return (
								<li
									key={opt.key || opt.value}
									className={itemClasses}
									onClick={(e) => {
										return handleSelectOption(e, opt);
									}}
									role="option"
									aria-selected={isSelected}>
									{/* Square Checkbox in withCheckbox mode */}
									{hasCheckbox && <span className={`${styles.checkboxBox} ${isSelected ? styles.checkboxBoxChecked : ""}`} />}

									{renderOption ? (
										renderOption(opt, isSelected)
									) : opt.content ? (
										opt.content
									) : (
										<>
											{badge && (
												<span className={styles.idBadge} style={getBadgeStyle(badge.color)}>
													{badge.content}
												</span>
											)}

											{/* Icon / Flag */}
											{opt.icon && <Icon name={opt.icon} className={styles.optionIcon} />}
											{opt.flag && <i className={`${opt.flag} flag ${styles.optionFlag}`} />}

											{/* Text */}
											<span className={styles.optionText}>{opt.text}</span>

											{/* Description */}
											{opt.description && <span className={styles.optionDescription}>{opt.description}</span>}
										</>
									)}
								</li>
							);
						})
					)}
				</ul>
			)}

			{renderErrorMessage()}
		</div>
	);
});

Dropdown.displayName = "Dropdown";

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = DropdownHeader;
Dropdown.Divider = DropdownDivider;

Dropdown.propTypes = {
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	infoLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	hintWide: PropTypes.bool,
	popupPosition: PropTypes.string,
	labelClassName: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	multiple: PropTypes.bool,
	checkbox: PropTypes.bool,
	useCheckbox: PropTypes.bool,
	search: PropTypes.bool,
	clearable: PropTypes.bool,
	fluid: PropTypes.bool,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	rounded: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
			text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
			icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
			flag: PropTypes.string,
			description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
			disabled: PropTypes.bool,
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			idColor: PropTypes.string,
			label: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
			content: PropTypes.node,
		})
	),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool]),
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	noResultsMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	className: PropTypes.string,
	style: PropTypes.object,
	id: PropTypes.string,
	name: PropTypes.string,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	showId: PropTypes.bool,
	idKey: PropTypes.string,
	idBadgeColor: PropTypes.string,
	renderOption: PropTypes.func,
	renderSelected: PropTypes.func,
};

export default Dropdown;
