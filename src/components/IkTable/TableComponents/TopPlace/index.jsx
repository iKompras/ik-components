/* eslint react/no-array-index-key: 0 */
import React, { useState, useEffect, useRef, useCallback } from "react";

// pakages
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import PropTypes from "prop-types";
import { Button, Icon, Checkbox, Form, Radio, Dropdown } from "semantic-ui-react";
import { get, isEmpty, pick, debounce, map, flatten } from "lodash";

//	components
import Input from "../../components/Input";
import PDFRender from "../../components/PDFRender";

// modals
import AdvancedFilter from "../../Modals/AdvancedFilter";

// utils
import { dropdownFormat, searchKeyFormatter } from "../../Utils/functions";
import getExelData from "../../Utils/getExelData";

// Styles
import styles from "./styles.module.css";

const TopPlace = ({
	print,
	searcher,
	columns,
	addButton,
	extraAddButtons,
	onAddButtonClick,
	topButtons,
	handlerTable,
	searchParams,
	setSearchParams,
	dataHandler,
	filteredPrintData,
	totalRows,
	customSearchKeys,
	clickedRowColor,
	sumData,
	isClearButton,
	setIsClearButton,
	headerDetail,
	searchRefresh,
	topPlaceClassName,
	hidePrintButtons = false,
}) => {
	//	hooks
	const [searchQuery, setSearchQuery] = useState("");
	const [searchOptions, setSearchOptions] = useState([]);
	const [searchField, setSearchField] = useState("all");
	const [openAvancedFilter, setOpenAvancedFilter] = useState(false);
	const [formatExelData, setFormatExelData] = useState([]);
	const [columnsExel, setColumnsExel] = useState([]);
	const [preventPDFDowload, setPreventPDFDowload] = useState(false);
	const [preventExcelDowload, setPreventExcelDowload] = useState(false);
	const [formData, setFormData] = useState({});
	const [searchableItems, setSearchableItems] = useState(false);

	//	refs
	const pdfRef = useRef();
	const csvInstance = useRef();

	//	useEffect
	useEffect(() => {
		if (preventExcelDowload) {
			const exelData = getExelData(filteredPrintData, columns, headerDetail);
			setFormatExelData(exelData.dataExel);
			setColumnsExel(exelData.columnExel);
		}

		if (preventPDFDowload) {
			setTimeout(() => {
				toPDFPrint();
				setPreventPDFDowload(false);
			});
		}
	}, [filteredPrintData]);

	useEffect(() => {
		if (!isEmpty(formatExelData) && !isEmpty(columnsExel) && csvInstance.current && csvInstance.current.link && preventExcelDowload) {
			setTimeout(() => {
				csvInstance.current.link.click();
				setPreventExcelDowload(false);
			});
		}
	}, [formatExelData, columnsExel]);

	useEffect(() => {
		const searchableI = groupSearchableItems();
		setSearchableItems([...searchableI, ...customSearchKeys]);
		let mapSearchOptions = dropdownFormat([...searchableI, ...customSearchKeys], "label", "key");
		if (searcher.allEnabled) {
			mapSearchOptions = [{ key: 0, text: "Todos", value: "all" }, ...mapSearchOptions];
		}
		setSearchOptions(mapSearchOptions);
		if (!isEmpty(searcher.searchString)) {
			setSearchQuery(searcher.searchString);
			filterHandler({
				newField: searcher.field || "all",
				searchableI,
				newSearchQuery: searcher.searchString,
			});
		}

		if (!isEmpty(searcher.field)) {
			setSearchField(searcher.field);
		}
	}, [columns, customSearchKeys]);
	useEffect(() => {
		setSearchQuery(isEmpty(searcher.searchString) ? "" : searcher.searchString);
		setSearchField(isEmpty(searcher.field) ? "all" : searcher.field);
	}, [searchRefresh]);

	// PDF
	const toPDFPrint = useReactToPrint({
		content: () => {
			return pdfRef.current;
		},
	});

	const handlePDFPrint = () => {
		if (typeof get(print, "onPrint", null) === "function") {
			return print.onPrint();
		}
		dataHandler({ ...searchParams, rows: totalRows, page: 1 }, true);
		setPreventPDFDowload(true);
	};

	// EXCEL
	const handleExcelPrint = () => {
		dataHandler({ ...searchParams, rows: totalRows, page: 1 }, true);
		setPreventExcelDowload(true);
	};

	// Filter
	const filterHandler = ({ value = searchParams, newField = searchField, searchableI = false, newSearchQuery = searchQuery }) => {
		let searchItems = searchableItems;
		if (searchableI) {
			searchItems = searchableI;
		}
		const searchParamsClearKeys = pick(searchParams, ["rows", "orderKey", "orderDir"]);
		const validNewField = searchKeyFormatter(newField);
		let fields = searchItems.map((item) => {
			let multipleColumsKeys = [];
			let validKey = "";
			if (get(item, "multipleColumns", false)) {
				item.multipleColumns.forEach((column) => {
					validKey = searchKeyFormatter(column.fieldKey || column.key);
					multipleColumsKeys = [...multipleColumsKeys, validKey];
				});
				return multipleColumsKeys;
			}
			validKey = searchKeyFormatter(item.fieldKey || item.key);

			return validKey;
		});
		fields = flatten(fields);

		let params = {
			...searchParamsClearKeys,
			page: 1,
			fields,
		};

		if (!isEmpty(newSearchQuery))
			params = {
				...params,
				[validNewField]: newSearchQuery,
			};

		if (isEmpty(value)) {
			params = { ...searchParamsClearKeys, page: 1, fields };
		}
		setSearchParams(params);
		dataHandler(params);
	};

	const groupSearchableItems = () => {
		let items = [];
		columns.forEach((column) => {
			if (!column.hidden && !column.action && !column.multiple) {
				if (column.twoLines) {
					if (get(column.line1, "canFilter", true)) {
						items = [...items, column.line1];
					}
					if (get(column.line2, "canFilter", true)) {
						items = [...items, column.line2];
					}
				} else if (get(column, "canFilter", true)) {
					items = [...items, column];
				}
			}
		});
		return items;
	};

	const changeHandler = () => {
		filterHandler({});
	};

	const debouncedChangeHandler = useCallback(debounce(changeHandler, 1000), [searchQuery]);

	//	TopButtonsRender
	const topButtonsRender = () => {
		let render = null;
		if (!isEmpty(topButtons)) {
			render = map(topButtons, (item, index) => {
				switch (item.componentType) {
					case "input":
						return (
							<div
								key={index}
								className={!isEmpty(item.inputContainerStyle) ? item.inputContainerStyle : styles.defaultTopInputContainerStyle}>
								<span className={styles.topInputLabel}>{item.label}</span>
								<Input
									className={item.className}
									type={item.type}
									value={item.value}
									icon={item.icon}
									disabled={item.disabled}
									fluid={item.fluid}
									onChange={item.onChange}
								/>
							</div>
						);
					case "inputMonth":
						return (
							<div
								key={index}
								className={!isEmpty(item.inputContainerStyle) ? item.inputContainerStyle : styles.defaultTopInputContainerStyle}>
								<span className={styles.topInputLabel}>{item.label}</span>
								<Form.Input
									className={item.className}
									type={item.type}
									value={item.value}
									icon={item.icon}
									disabled={item.disabled}
									fluid={item.fluid}
									onChange={item.onChange}
								/>
							</div>
						);
					case "check":
						return (
							<div
								key={index}
								className={!isEmpty(item.checkContainerStyle) ? item.checkContainerStyle : styles.defaultTopInputContainerStyle}>
								<span className={styles.labelCheck}>{item.leftLabel}</span>
								<Checkbox toggle={item.toggle !== false} checked={item.checked} disabled={item.disabled} onChange={item.onChange} />
								<span className={styles.inputLabelCheck}>{item.rightLabel}</span>
							</div>
						);
					case "radio":
						return (
							<div
								key={index}
								className={!isEmpty(item.checkContainerStyle) ? item.checkContainerStyle : styles.defaultTopInputContainerStyle}>
								<div>
									<Radio
										checked={item.checkedR}
										disabled={item.disabled}
										onChange={item.onChange}
										/* 	label={item.rightLabel} */
									/>
									<span className={styles.inputLabelCheck}>{item.rightLabel}</span>
								</div>
								<div>
									<Radio
										checked={item.checkedL}
										disabled={item.disabled}
										onChange={item.onChange}
										/* 	label={item.leftLabel} */
									/>
									<span className={styles.inputLabelCheck}>{item.leftLabel}</span>
								</div>
							</div>
						);
					case "DropDown":
						return (
							!item.hidden && (
								<div
									key={index}
									className={!isEmpty(item.inputContainerStyle) ? item.inputContainerStyle : styles.defaultTopDropdownContainerStyle}>
									<span className={styles.topInputLabel}>{item.label}</span>
									<Dropdown
										className={item.className}
										selection
										fluid
										value={item.value}
										multiple={item.multiple}
										disabled={item.disabled}
										onChange={item.onChange}
										required={item.required}
										search={item.search}
										clearable={item.clearable}
										placeholder={item.placeholder}
										options={item.options}
									/>
								</div>
							)
						);
					case "Label":
						return (
							<div
								key={index}
								className={!isEmpty(item.inputContainerStyle) ? item.inputContainerStyle : styles.defaultLabelContainerStyle}>
								<span className={styles.labelTitle}>{item.title}</span>
								<span className={styles.labelValue}>{item.value}</span>
							</div>
						);

					case "custom":
						return <div key={index}>{item.content}</div>;

					default:
						return (
							<div
								key={index}
								className={!isEmpty(item.buttonContainerStyle) ? item.buttonContainerStyle : styles.defaultLabelContainerStyle}>
								<Button
									key={index}
									className={!isEmpty(item.className) ? item.className : styles.defaultTopButton}
									disabled={get(item, "disabled", false)}
									onClick={item.onClick}>
									{!isEmpty(item.icon) && <Icon className={styles.addButtonIcon} name={item.icon} />}
									{get(item, "content", "")}
								</Button>
							</div>
						);
				}
			});
		}
		return <div className={styles.renderTopButtonsContainer}>{render}</div>;
	};

	const clearFilter = () => {
		changeHandler();
		setFormData({});
		setIsClearButton(false);
	};

	const onClear = () => {
		filterHandler({ value: {} });
	};

	const handleInput = (event) => {
		debouncedChangeHandler.cancel();
		setSearchQuery(event);
	};

	return (
		<>
			<div className={topPlaceClassName ? `${styles.mainContainer} ${topPlaceClassName}` : styles.mainContainer}>
				{get(searcher, "searchable", true) && (
					<div
						className={styles.searchContainer}
						style={{
							justifyContent: get(searcher, "searchPosition", "flex-start"),
							width: get(searcher, "width", "100%"),
						}}>
						<div className={styles.searchWrapper}>
							{!isClearButton && (
								<Input
									className={styles.searchInput}
									name="searchString"
									disabled={get(searcher, "searchDisabled", false)}
									onKeyUp={debouncedChangeHandler}
									onChange={(event) => {
										handleInput(event.target.value);
									}}
									placeholder="Buscar"
									value={searchQuery}
									onClear={onClear}
									dropdown={{
										disabled: get(searcher, "searchDisabled", false),
										options: searchOptions,
										name: "searchField",
										onChange: (e, { value }) => {
											setSearchField(value);
											if (!isEmpty(searchQuery)) filterHandler({ newField: value });
										},
										value: searchField,
									}}
								/>
							)}
							{get(searcher, "filterButton", true) && (
								<Button
									disabled={get(searcher, "searchDisabled", false)}
									className={`${styles.filterButton} ${get(searcher, "hideOnMobile", false) ? styles.hideOnMobile : ""}`}
									onClick={() => {
										setOpenAvancedFilter(true);
									}}>
									<Icon className={styles.addButtonIcon} name="filter" />
								</Button>
							)}

							{isClearButton && (
								<Button className={styles.clearButton} onClick={clearFilter}>
									<Icon name="filter" />
									Limpiar
								</Button>
							)}
						</div>
					</div>
				)}
				{!isEmpty(topButtons) && <div className={styles.topButtonsDesktop}>{topButtonsRender()}</div>}
				<div className={styles.addButtonsContainer}>
					{!isEmpty(addButton) && (
						<div className={styles.addButtonContainer}>
							<Button
								className={styles.addButton}
								disabled={get(addButton, "disabled", false)}
								onClick={
									onAddButtonClick ||
									(() => {
										return handlerTable("Add", null);
									})
								}>
								<Icon className={styles.addButtonIcon} name={get(addButton, "icon", "plus")} />
								{get(addButton, "label", "")}
							</Button>
						</div>
					)}

					{extraAddButtons}

					{get(print, "printable", true) && (
						<div className={hidePrintButtons ? styles.hidePrintButtonsMobile : ""}>
							{get(print, "visiblePDF", true) && <Button onClick={handlePDFPrint} className={styles.printButton} primary icon="print" />}
							{get(print, "visibleExcel", true) && <Button className={styles.exelButton} icon="file excel" onClick={handleExcelPrint} />}
						</div>
					)}
				</div>
			</div>
			{!isEmpty(topButtons) && <div className={styles.secondLine}>{topButtonsRender()}</div>}

			{preventPDFDowload ? (
				<div style={{ display: "none" }}>
					<div ref={pdfRef}>
						<PDFRender
							data={filteredPrintData}
							headerDetail={headerDetail}
							columns={columns}
							sumData={sumData}
							clickedRowColor={clickedRowColor}
							handlerTable={handlerTable}
							printHeader={get(print, "printHeader", {
								company: "Compañía",
								title: "Título",
								user: "Usuario",
							})}
							customPrintHeader={print.customPrintHeader}
							searchParams={searchParams}
							setSearchParams={setSearchParams}
							dataHandler={dataHandler}
						/>
					</div>
				</div>
			) : undefined}
			{preventExcelDowload ? (
				<CSVLink data={formatExelData} headers={columnsExel} filename={get(print, "printHeader.title", "Título")} ref={csvInstance} />
			) : undefined}
			{openAvancedFilter && (
				<AdvancedFilter
					onClose={() => {
						setOpenAvancedFilter(false);
					}}
					customSearchKeys={customSearchKeys}
					searchableItems={searchableItems}
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					dataHandler={dataHandler}
					formData={formData}
					setFormData={setFormData}
					setIsClearButton={setIsClearButton}
					clearFilter={clearFilter}
				/>
			)}
		</>
	);
};

TopPlace.propTypes = {
	addButton: PropTypes.object,
	searchParams: PropTypes.object,
	searcher: PropTypes.object,
	sumData: PropTypes.object,
	totalRows: PropTypes.number,
	print: PropTypes.object,
	customSearchKeys: PropTypes.array,
	columns: PropTypes.array,
	topButtons: PropTypes.array,
	customPrintHeader: PropTypes.array,
	handlerTable: PropTypes.func,
	setSearchParams: PropTypes.func,
	dataHandler: PropTypes.func,
	filteredPrintData: PropTypes.array,
	clickedRowColor: PropTypes.string,
	isClearButton: PropTypes.bool,
	setIsClearButton: PropTypes.func,
	headerDetail: PropTypes.object,
	searchRefresh: PropTypes.bool,
	onAddButtonClick: PropTypes.func,
	topPlaceClassName: PropTypes.string,
	hidePrintButtons: PropTypes.bool,
	extraAddButtons: PropTypes.node,
};

export default TopPlace;
