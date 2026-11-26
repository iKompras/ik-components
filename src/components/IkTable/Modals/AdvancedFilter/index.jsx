import React, { useState, useMemo } from "react";
import { Button, Icon } from "semantic-ui-react";
import { isEmpty, pick, get, flatten } from "lodash";
import PropTypes from "prop-types";

// Components
import IkModal from "../../../IkModal";
import InputDateRange from "../../components/InputDateRange";

// utils
import { searchKeyFormatter } from "../../Utils/functions";

// Styles
import styles from "./styles.module.css";

const AdvancedFilter = ({
	onClose,
	searchableItems = [],
	searchParams,
	setSearchParams,
	dataHandler,
	formData = {},
	setFormData,
	setIsClearButton,
	clearFilter,
	customSearchKeys = [],
}) => {
	const [fieldQuery, setFieldQuery] = useState("");

	const handleInput = (value, name) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleInputDate = (content, name) => {
		setFormData({
			...formData,
			[name]: content,
		});
	};

	const handleRemoveSingleFilter = (keyToRemove) => {
		const nextFormData = { ...formData };
		delete nextFormData[keyToRemove];
		setFormData(nextFormData);
	};

	const normalizedItems = useMemo(() => {
		const joinSearchableItems = [...searchableItems, ...customSearchKeys];
		const mapped = joinSearchableItems.map((item) => {
			if (get(item, "multipleColumns", false)) {
				return item.multipleColumns.map((column) => {
					const validKey = searchKeyFormatter(column.key);
					return { ...column, key: validKey };
				});
			}
			const validKey = searchKeyFormatter(item.key);
			return { ...item, key: validKey };
		});
		return flatten(mapped);
	}, [searchableItems, customSearchKeys]);

	const visibleItems = useMemo(() => {
		if (!fieldQuery.trim()) return normalizedItems;
		const q = fieldQuery.toLowerCase().trim();
		return normalizedItems.filter((item) => {
			const lbl = String(item.label || item.key || "").toLowerCase();
			return lbl.includes(q);
		});
	}, [normalizedItems, fieldQuery]);

	const activeFilters = useMemo(() => {
		return Object.entries(formData || {})
			.filter(([, val]) => {
				return !isEmpty(val);
			})
			.map(([key, val]) => {
				const matched = normalizedItems.find((item) => {
					return item.key.split(",").join(".") === key;
				});
				return {
					key,
					label: matched?.label || key,
					value: typeof val === "object" ? `${val.startDate || ""} - ${val.endDate || ""}` : String(val),
				};
			});
	}, [formData, normalizedItems]);

	const onFilter = () => {
		let validFilter = false;
		let validFormData = {};

		Object.entries(formData || {}).forEach(([key, value]) => {
			if (!isEmpty(value)) {
				validFilter = true;
				validFormData = { ...validFormData, [key]: value };
			}
		});

		if (validFilter) {
			const searchParamsClearKeys = pick(searchParams, ["rows", "orderKey", "orderDir"]);
			const params = { ...searchParamsClearKeys, page: 1, ...validFormData };
			setIsClearButton(true);
			setSearchParams(params);
			if (dataHandler) {
				dataHandler(params);
			}
			onClose();
		}
	};

	const inputGenerator = ({ key, label, format }) => {
		const validKey = key.split(",").join(".");
		const currentVal = get(formData, `${validKey}`, "");

		switch (format) {
			case "dateTime":
			case "date":
				return (
					<div key={validKey} className={styles.fieldCard}>
						<InputDateRange
							label={label}
							value={currentVal}
							className={styles.inputChannel}
							onChange={(e) => {
								handleInputDate(e, validKey);
							}}
						/>
					</div>
				);

			default:
				return (
					<div key={validKey} className={styles.fieldCard}>
						<label className={styles.fieldLabel} htmlFor={`adv-filter-${validKey}`}>
							{label}
						</label>
						<div className={styles.fieldInputWrap}>
							<Icon name="search" className={styles.fieldInputIcon} />
							<input
								id={`adv-filter-${validKey}`}
								type="text"
								className={styles.fieldInput}
								placeholder={`Filtrar por ${String(label || "").toLowerCase()}...`}
								value={currentVal}
								onChange={(e) => {
									handleInput(e.target.value, validKey);
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										onFilter();
									}
								}}
							/>
							{!isEmpty(currentVal) && (
								<button
									type="button"
									className={styles.fieldInputClear}
									aria-label={`Limpiar ${label}`}
									onClick={() => {
										handleRemoveSingleFilter(validKey);
									}}>
									<Icon name="close" style={{ margin: 0, fontSize: "0.8em" }} />
								</button>
							)}
						</div>
					</div>
				);
		}
	};

	const footerButtons = [
		<Button
			key="clear-advanced-filter"
			type="button"
			className={styles.clearAllBtn}
			disabled={activeFilters.length === 0}
			onClick={() => {
				if (clearFilter) clearFilter();
			}}>
			<Icon name="eraser" />
			Limpiar todo
		</Button>,
	];

	return (
		<IkModal
			size="large"
			style={{ maxWidth: "900px" }}
			ignoreContent
			iconName="sliders horizontal"
			title="Filtro Avanzado"
			mode="Add"
			saveLabel="Aplicar filtros"
			cancelLabel="Cerrar"
			saveDisabled={activeFilters.length === 0}
			closeInside
			footerButtons={footerButtons}
			onClose={onClose}
			onSuccess={onFilter}>
			<div className={styles.wrapper}>
				<div className={styles.toolbar}>
					<div className={styles.statusSummary}>
						<span className={styles.statusBadge}>
							<Icon name="filter" style={{ margin: 0 }} />
							<span>
								{activeFilters.length === 0
									? "Sin filtros activos"
									: `${activeFilters.length} ${activeFilters.length === 1 ? "filtro activo" : "filtros activos"}`}
							</span>
						</span>
						<span className={styles.helperText}>Combina uno o varios campos y presiona Enter o &quot;Aplicar filtros&quot;.</span>
					</div>

					{normalizedItems.length > 5 && (
						<div className={styles.fieldSearchBox}>
							<Icon name="search" className={styles.fieldSearchIcon} />
							<input
								type="text"
								className={styles.fieldSearchInput}
								placeholder="Buscar campo..."
								value={fieldQuery}
								onChange={(e) => {
									setFieldQuery(e.target.value);
								}}
							/>
							{fieldQuery && (
								<button
									type="button"
									className={styles.fieldSearchClear}
									aria-label="Limpiar búsqueda de campo"
									onClick={() => {
										setFieldQuery("");
									}}>
									×
								</button>
							)}
						</div>
					)}
				</div>

				{activeFilters.length > 0 && (
					<div className={styles.activeChipsBar}>
						{activeFilters.map((chip) => {
							return (
								<span key={chip.key} className={styles.activeChip}>
									<span className={styles.activeChipLabel}>{chip.label}:</span>
									<span className={styles.activeChipValue}>{chip.value}</span>
									<button
										type="button"
										className={styles.activeChipRemove}
										aria-label={`Quitar filtro ${chip.label}`}
										onClick={() => {
											handleRemoveSingleFilter(chip.key);
										}}>
										×
									</button>
								</span>
							);
						})}
					</div>
				)}

				{visibleItems.length === 0 ? (
					<div className={styles.emptyFields}>
						<Icon name="search" size="large" />
						<span>No se encontraron campos que coincidan con &quot;{fieldQuery}&quot;</span>
					</div>
				) : (
					<div className={styles.fieldsGrid}>
						{visibleItems.map((item) => {
							return inputGenerator(item);
						})}
					</div>
				)}
			</div>
		</IkModal>
	);
};

AdvancedFilter.propTypes = {
	onClose: PropTypes.func,
	searchableItems: PropTypes.array,
	customSearchKeys: PropTypes.array,
	searchParams: PropTypes.object,
	formData: PropTypes.object,
	setFormData: PropTypes.func,
	setIsClearButton: PropTypes.func,
	setSearchParams: PropTypes.func,
	dataHandler: PropTypes.func,
	clearFilter: PropTypes.func,
};

export default AdvancedFilter;
