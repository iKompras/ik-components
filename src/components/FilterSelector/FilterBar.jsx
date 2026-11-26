import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import styles from "./styles.module.css";

const getInitials = (text = "") => {
	const parts = String(text).trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "?";
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

const FilterSelector = forwardRef((props, ref) => {
	const {
		label,
		required = false,
		placeholder = "Buscar o filtrar...",
		value,
		defaultValue = "",
		fieldValue,
		defaultFieldValue,
		fields = [],
		options = [],
		multiple = false,
		selectedValues,
		defaultSelectedValues = [],
		onChange,
		onFieldChange,
		onSelectChange,
		onSearch,
		onClear,
		debounceMs = 0,
		loading = false,
		disabled = false,
		clearable = true,
		rounded = false,
		compact = false,
		fluid = true,
		showSubmitButton = false,
		submitLabel = "Buscar",
		maxChips = 2,
		noResultsMessage = "No se encontraron coincidencias",
		error = false,
		errorMessage = "",
		className = "",
		style = {},
		name,
		id,
		useModal = false,
		asInput = false,
		onOpenModal,
	} = props;

	const isControlledQuery = value !== undefined;
	const isControlledField = fieldValue !== undefined;
	const isControlledSelected = selectedValues !== undefined;

	const initialField = defaultFieldValue !== undefined ? defaultFieldValue : fields[0]?.value ?? "";
	const [internalQuery, setInternalQuery] = useState(defaultValue);
	const [internalField, setInternalField] = useState(initialField);
	const [internalSelected, setInternalSelected] = useState(Array.isArray(defaultSelectedValues) ? defaultSelectedValues : []);

	const [isFocused, setIsFocused] = useState(false);
	const [isFieldMenuOpen, setIsFieldMenuOpen] = useState(false);
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(-1);

	const containerRef = useRef(null);
	const inputRef = useRef(null);
	const debounceTimerRef = useRef(null);

	const query = isControlledQuery ? value : internalQuery;
	const activeField = isControlledField ? fieldValue : internalField;
	const activeSelected = isControlledSelected ? selectedValues : internalSelected;

	const hasOptions = Array.isArray(options) && options.length > 0;
	const hasFields = Array.isArray(fields) && fields.length > 0;

	useImperativeHandle(ref, () => {
		return {
			focus: () => {
				if (inputRef.current) inputRef.current.focus();
			},
			clear: () => {
				handleClear();
			},
		};
	});

	// Click outside handler to close menus
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsFieldMenuOpen(false);
				setIsOptionsOpen(false);
				setIsFocused(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Cleanup debounce timer on unmount
	useEffect(() => {
		return () => {
			if (debounceTimerRef.current) {
				clearTimeout(debounceTimerRef.current);
			}
		};
	}, []);

	const currentFieldObj = fields.find((f) => {
		return f.value === activeField;
	}) ||
		fields[0] || { label: "Todos", text: "Todos", value: "" };

	const filteredOptions = hasOptions
		? options.filter((opt) => {
				if (!query) return true;
				const q = query.toLowerCase().trim();
				const primary = String(opt.text || opt.label || "").toLowerCase();
				const secondary = String(opt.subtitle || opt.email || opt.description || "").toLowerCase();
				return primary.includes(q) || secondary.includes(q);
		  })
		: [];

	const emitQueryChange = (nextQuery, nextField = activeField, nextSelected = activeSelected) => {
		if (onChange) {
			onChange(nextQuery, { field: nextField, selected: nextSelected, name });
		}
	};

	const handleInputChange = (e) => {
		const nextQuery = e.target.value;
		if (!isControlledQuery) {
			setInternalQuery(nextQuery);
		}
		if (hasOptions) {
			setIsOptionsOpen(true);
			setHighlightedIndex(0);
		}

		if (debounceMs > 0) {
			if (debounceTimerRef.current) {
				clearTimeout(debounceTimerRef.current);
			}
			debounceTimerRef.current = setTimeout(() => {
				emitQueryChange(nextQuery);
			}, debounceMs);
		} else {
			emitQueryChange(nextQuery);
		}
	};

	const handleFieldSelect = (fieldOption) => {
		const nextField = fieldOption.value;
		if (!isControlledField) {
			setInternalField(nextField);
		}
		setIsFieldMenuOpen(false);
		if (onFieldChange) {
			onFieldChange(nextField, fieldOption);
		}
		emitQueryChange(query, nextField, activeSelected);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleOptionToggle = (option) => {
		const optVal = option.value;
		let nextSelected;

		if (multiple) {
			const exists = activeSelected.includes(optVal);
			nextSelected = exists
				? activeSelected.filter((v) => {
						return v !== optVal;
				  })
				: [...activeSelected, optVal];
		} else {
			nextSelected = [optVal];
			setIsOptionsOpen(false);
			if (!isControlledQuery) {
				setInternalQuery(option.text || option.label || "");
			}
		}

		if (!isControlledSelected) {
			setInternalSelected(nextSelected);
		}
		if (onSelectChange) {
			const selectedItems = options.filter((o) => {
				return nextSelected.includes(o.value);
			});
			onSelectChange(multiple ? nextSelected : optVal, multiple ? selectedItems : option);
		}
	};

	const handleRemoveChip = (e, valToRemove) => {
		e.stopPropagation();
		if (disabled) return;
		const nextSelected = activeSelected.filter((v) => {
			return v !== valToRemove;
		});
		if (!isControlledSelected) {
			setInternalSelected(nextSelected);
		}
		if (onSelectChange) {
			const selectedItems = options.filter((o) => {
				return nextSelected.includes(o.value);
			});
			onSelectChange(multiple ? nextSelected : null, multiple ? selectedItems : null);
		}
	};

	const handleClear = () => {
		if (disabled) return;
		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}
		if (!isControlledQuery) {
			setInternalQuery("");
		}
		if (!isControlledSelected) {
			setInternalSelected([]);
		}
		emitQueryChange("", activeField, []);
		if (onSelectChange && hasOptions) {
			onSelectChange(multiple ? [] : null, multiple ? [] : null);
		}
		if (onClear) {
			onClear();
		}
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleSubmit = () => {
		if (disabled) return;
		if (onSearch) {
			onSearch({ query, field: activeField, selected: activeSelected });
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (hasOptions && isOptionsOpen && highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
				e.preventDefault();
				handleOptionToggle(filteredOptions[highlightedIndex]);
			} else {
				e.preventDefault();
				handleSubmit();
			}
		} else if (e.key === "Escape") {
			setIsFieldMenuOpen(false);
			setIsOptionsOpen(false);
		} else if (e.key === "ArrowDown" && hasOptions) {
			e.preventDefault();
			setIsOptionsOpen(true);
			setHighlightedIndex((prev) => {
				return prev < filteredOptions.length - 1 ? prev + 1 : 0;
			});
		} else if (e.key === "ArrowUp" && hasOptions) {
			e.preventDefault();
			setIsOptionsOpen(true);
			setHighlightedIndex((prev) => {
				return prev > 0 ? prev - 1 : filteredOptions.length - 1;
			});
		}
	};

	const selectedOptionObjects = hasOptions
		? options.filter((opt) => {
				return activeSelected.includes(opt.value);
		  })
		: [];

	const visibleChips = multiple ? selectedOptionObjects.slice(0, maxChips) : [];
	const overflowCount = multiple ? Math.max(0, selectedOptionObjects.length - maxChips) : 0;
	const hasClearableContent = Boolean(query) || activeSelected.length > 0;

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${!fluid ? styles.inline : ""} ${asInput ? styles.containerAsInput : ""} ${className}`}
			style={style}>
			{label && (
				<label htmlFor={id} className={styles.labelRow}>
					<span>{label}</span>
					{required && <span className={styles.requiredMark}>*</span>}
				</label>
			)}

			<div
				className={`${styles.filterBar} ${asInput ? styles.asInput : ""} ${isFocused ? styles.filterBarFocused : ""} ${
					error ? styles.filterBarError : ""
				} ${rounded ? styles.rounded : ""} ${compact ? styles.compact : ""} ${disabled ? styles.disabled : ""}`}>
				{hasFields && !useModal && (
					<div className={styles.fieldSelectorWrapper}>
						<button
							type="button"
							disabled={disabled}
							className={styles.fieldTrigger}
							aria-haspopup="listbox"
							aria-expanded={isFieldMenuOpen}
							onClick={() => {
								setIsFieldMenuOpen((prev) => {
									return !prev;
								});
								setIsOptionsOpen(false);
							}}>
							{currentFieldObj.icon && <Icon name={currentFieldObj.icon} className={styles.fieldTriggerIcon} />}
							<span>{currentFieldObj.text || currentFieldObj.label}</span>
							<Icon name="chevron down" className={`${styles.chevronIcon} ${isFieldMenuOpen ? styles.chevronRotated : ""}`} />
						</button>

						{isFieldMenuOpen && (
							<div className={`${styles.popoverMenu} ${styles.fieldMenu}`} role="listbox">
								<div className={styles.menuList}>
									{fields.map((fieldOpt) => {
										const isSelected = fieldOpt.value === activeField;
										return (
											<button
												type="button"
												key={fieldOpt.key || fieldOpt.value}
												role="option"
												aria-selected={isSelected}
												className={`${styles.menuItem} ${isSelected ? styles.menuItemSelected : ""}`}
												onClick={() => {
													handleFieldSelect(fieldOpt);
												}}>
												<span className={styles.menuItemLeft}>
													{fieldOpt.icon && <Icon name={fieldOpt.icon} />}
													<span className={styles.menuItemPrimary}>{fieldOpt.text || fieldOpt.label}</span>
												</span>
												{isSelected && <Icon name="check" />}
											</button>
										);
									})}
								</div>
							</div>
						)}
					</div>
				)}

				<div
					className={`${styles.inputArea} ${useModal ? styles.inputAreaModal : ""}`}
					role="presentation"
					onClick={() => {
						if (disabled) return;
						if (useModal) {
							if (onOpenModal) onOpenModal();
							return;
						}
						if (inputRef.current) {
							inputRef.current.focus();
						}
					}}>
					{(!hasFields || useModal) && <Icon name="search" className={styles.searchIcon} />}

					{visibleChips.map((chipOpt) => {
						const chipLabel = chipOpt.text || chipOpt.label;
						return (
							<span key={chipOpt.key || chipOpt.value} className={styles.chip}>
								{chipOpt.avatar ? (
									<img src={chipOpt.avatar} alt={chipLabel} className={`${styles.avatar} ${styles.avatarSmall}`} />
								) : (
									<span className={`${styles.avatarFallback} ${styles.avatarSmall}`}>{getInitials(chipLabel)}</span>
								)}
								<span className={styles.chipLabel}>{chipLabel}</span>
								<button
									type="button"
									className={styles.chipRemove}
									aria-label={`Quitar ${chipLabel}`}
									onClick={(e) => {
										handleRemoveChip(e, chipOpt.value);
									}}>
									×
								</button>
							</span>
						);
					})}

					{overflowCount > 0 && <span className={styles.countBadge}>+{overflowCount}</span>}

					{(!useModal || activeSelected.length === 0) && (
						<input
							ref={inputRef}
							id={id}
							name={name}
							type="text"
							className={`${styles.textInput} ${useModal ? styles.textInputModalTrigger : ""}`}
							placeholder={placeholder}
							value={query}
							readOnly={useModal}
							disabled={disabled}
							onChange={handleInputChange}
							onFocus={() => {
								setIsFocused(true);
								if (useModal) return;
								if (hasOptions) {
									setIsOptionsOpen(true);
								}
							}}
							onKeyDown={handleKeyDown}
						/>
					)}
				</div>

				<div className={styles.rightActions}>
					{loading ? (
						<span className={styles.actionSlot} aria-label="Cargando">
							<Icon loading name="spinner" className={styles.spinnerIcon} />
						</span>
					) : (
						clearable &&
						hasClearableContent &&
						!disabled && (
							<button type="button" className={`${styles.actionSlot} ${styles.clearBtn}`} aria-label="Limpiar filtro" onClick={handleClear}>
								<Icon name="close" className={styles.clearIcon} />
							</button>
						)
					)}
					{useModal && (
						<button
							type="button"
							className={styles.modalTriggerBtn}
							disabled={disabled}
							aria-label="Abrir buscador en modal"
							onClick={() => {
								if (onOpenModal) onOpenModal();
							}}>
							<Icon name="external alternate" style={{ margin: 0, fontSize: "0.85em" }} />
							<span>Explorar</span>
						</button>
					)}
					{showSubmitButton && !useModal && (
						<button type="button" className={styles.submitBtn} disabled={disabled} onClick={handleSubmit}>
							<Icon name="search" className={styles.submitIcon} />
							<span>{submitLabel}</span>
						</button>
					)}
				</div>

				{!useModal && hasOptions && isOptionsOpen && (
					<div className={styles.popoverMenu} role="listbox" aria-multiselectable={multiple}>
						<div className={styles.menuHeader}>
							<span>
								{loading ? "Buscando..." : `${filteredOptions.length} ${filteredOptions.length === 1 ? "resultado" : "resultados"}`}
							</span>
							{multiple && activeSelected.length > 0 && (
								<button type="button" className={styles.menuHeaderAction} onClick={handleClear}>
									Limpiar ({activeSelected.length})
								</button>
							)}
						</div>

						<div className={styles.menuList}>
							{loading ? (
								Array.from({ length: 4 }).map((_, idx) => {
									return (
										<div key={`filter-sk-${idx}`} className={styles.skeletonOption}>
											<div className={styles.skeletonCircle} />
											<div className={styles.skeletonLines}>
												<div className={styles.skeletonLine} style={{ width: "60%" }} />
												<div className={styles.skeletonLine} style={{ width: "40%", height: "0.6rem" }} />
											</div>
										</div>
									);
								})
							) : filteredOptions.length === 0 ? (
								<div className={styles.emptyState}>{noResultsMessage}</div>
							) : (
								filteredOptions.map((option, idx) => {
									const optText = option.text || option.label;
									const optSub = option.subtitle || option.email || option.description;
									const isSelected = activeSelected.includes(option.value);
									const isHighlighted = idx === highlightedIndex;

									return (
										<button
											type="button"
											key={option.key || option.value}
											role="option"
											aria-selected={isSelected}
											className={`${styles.menuItem} ${isSelected ? styles.menuItemSelected : ""} ${
												isHighlighted ? styles.menuItemHighlighted : ""
											}`}
											onClick={() => {
												handleOptionToggle(option);
											}}>
											<span className={styles.menuItemLeft}>
												{option.avatar ? (
													<img src={option.avatar} alt={optText} className={styles.avatar} />
												) : option.icon ? (
													<Icon name={option.icon} style={{ color: "#64748b", margin: 0 }} />
												) : (
													<span className={styles.avatarFallback}>{getInitials(optText)}</span>
												)}
												<span className={styles.menuItemTextGroup}>
													<span className={styles.menuItemPrimary}>{optText}</span>
													{optSub && <span className={styles.menuItemSecondary}>{optSub}</span>}
												</span>
											</span>

											{multiple ? (
												<span className={`${styles.checkboxIndicator} ${isSelected ? styles.checkboxIndicatorChecked : ""}`}>
													{isSelected && <Icon name="check" style={{ margin: 0, fontSize: "0.7em" }} />}
												</span>
											) : (
												isSelected && <Icon name="check" style={{ margin: 0, color: "#3b82f6" }} />
											)}
										</button>
									);
								})
							)}
						</div>
					</div>
				)}
			</div>

			{error && errorMessage && <span className={styles.errorText}>{errorMessage}</span>}
		</div>
	);
});

FilterSelector.displayName = "FilterSelector";

FilterSelector.propTypes = {
	label: PropTypes.node,
	required: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	defaultValue: PropTypes.string,
	fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	defaultFieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			text: PropTypes.string,
			label: PropTypes.string,
			icon: PropTypes.string,
		})
	),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			text: PropTypes.string,
			label: PropTypes.string,
			subtitle: PropTypes.string,
			email: PropTypes.string,
			description: PropTypes.string,
			avatar: PropTypes.string,
			icon: PropTypes.string,
		})
	),
	multiple: PropTypes.bool,
	selectedValues: PropTypes.array,
	defaultSelectedValues: PropTypes.array,
	onChange: PropTypes.func,
	onFieldChange: PropTypes.func,
	onSelectChange: PropTypes.func,
	onSearch: PropTypes.func,
	onClear: PropTypes.func,
	debounceMs: PropTypes.number,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	clearable: PropTypes.bool,
	rounded: PropTypes.bool,
	compact: PropTypes.bool,
	fluid: PropTypes.bool,
	showSubmitButton: PropTypes.bool,
	submitLabel: PropTypes.string,
	maxChips: PropTypes.number,
	noResultsMessage: PropTypes.string,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	name: PropTypes.string,
	id: PropTypes.string,
	useModal: PropTypes.bool,
	asInput: PropTypes.bool,
	onOpenModal: PropTypes.func,
};

export default FilterSelector;
