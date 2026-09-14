import { get, map, isEmpty, flatten, join, filter, includes, replace } from "lodash";
import getData from "./getData";

import { getTimeLabel, timeBetweenDates, renderTranslate } from "./functions";

const formatPrintData = (format, value, labelData, endDate, onKeyEndDate, translate, boolLabels, columnItem) => {
	switch (format) {
		case "timeBetween":
			return timeBetweenDates(value, endDate, onKeyEndDate, labelData);

		case "date":
			return getTimeLabel(value, false, false, false);

		case "time":
			return getTimeLabel(value, false, true, false);

		case "dateTimeBar":
		case "dateTime":
			return getTimeLabel(value, false, false, true);

		case "count":
			if (value) {
				return value.length;
			}
			return 0;

		case "boolean":
			if (boolLabels) {
				if (value) {
					return boolLabels.true;
				}
				return boolLabels.false;
			}
			if (value) {
				return "si";
			}
			return "no";

		case "translate":
			return renderTranslate(value, translate);

		case "arrayTruncate":
			if (columnItem && typeof columnItem.key === "string" && includes(columnItem.key, "[]?")) {
				const [arrayKey, property] = replace(columnItem.key, "[]?", "").split(".");
				const array = Array.isArray(labelData[arrayKey]) ? labelData[arrayKey] : [];
				const values = map(array, (item) => {
					return item && item[property];
				});
				return join(filter(values, Boolean), ", ");
			}
			if (Array.isArray(value)) {
				return join(filter(value, Boolean), ", ");
			}
			return value;
		default:
			return value;
	}
};

const excelKeyMaker = (columnItem) => {
	if (columnItem && columnItem.key) {
		return `${columnItem.key.split(".").join("")}_${columnItem.format || ""}_${columnItem.label || ""}`;
	}
	return null;
};

export default function exelData(data, columns, headerDetail) {
	let currentData = data;
	let currentColumns = columns;
	if (!isEmpty(headerDetail)) {
		const currentDataMap = map(data, (item) => {
			const addHeaderData = { [headerDetail.headerTitle]: getData(headerDetail.headerTitle, item) };
			const newData = map(getData(headerDetail.dataDetail, item), (subItem) => {
				return { ...addHeaderData, ...subItem };
			});
			return newData;
		});

		currentData = flatten(currentDataMap);
		currentColumns = [
			{
				label: headerDetail.columnName,
				key: headerDetail.headerTitle,
			},
			...columns,
		];
	}
	let dataExel = [];
	let columnExel = [];
	let column = [];
	for (const columnItem of currentColumns) {
		if (!columnItem.hidden) {
			/* 			if (!includes(hiddenColumns, columnItem)) { */
			if (columnItem.twoLines) {
				const item1 = columnItem.line1;
				const item2 = columnItem.line2;
				column = [...column, item1, item2];
			} else {
				column = [...column, columnItem];
			}
			/* 	} */
		}
	}
	for (const dataItem of currentData) {
		let rowExel = {};
		for (const columnItem of column) {
			if (columnItem.key && get(columnItem, "canExcel", true)) {
				let endDateValue = columnItem.endDate;
				if (columnItem.format === "timeBetween" && columnItem.endDateKey) {
					endDateValue = getData(columnItem.endDateKey, dataItem);
				} else if (endDateValue && typeof endDateValue === "string") {
					endDateValue = getData(endDateValue, dataItem);
				}
				let value = "";
				const name = excelKeyMaker(columnItem);
				const keyArray = columnItem.key.split(",");
				if (keyArray.length === 1) {
					value = getData(columnItem.key, dataItem);
					if (columnItem.format === "dateTimeBar") {
						value = getData(columnItem.endDateKey, dataItem);
					}

					value = formatPrintData(
						columnItem.format,
						value,
						dataItem,
						endDateValue,
						columnItem.onKeyEndDate,
						columnItem.translate,
						columnItem.boolLabels,
						columnItem
					);
					rowExel = { ...rowExel, [name]: value };
				} else {
					const arrayData = getData(keyArray[0], dataItem);
					for (const item of arrayData) {
						if (value === "") {
							value = getData(keyArray[1], item);
							value = formatPrintData(
								columnItem.format,
								value,
								item,
								endDateValue,
								columnItem.onKeyEndDate,
								columnItem.translate,
								columnItem.boolLabels,
								columnItem
							);
							if (value === null || value === undefined || value === "") {
								value = "null";
							}
						} else {
							let newData = getData(keyArray[1], item);
							newData = formatPrintData(
								columnItem.format,
								newData,
								item,
								endDateValue,
								columnItem.onKeyEndDate,
								columnItem.translate,
								columnItem.boolLabels,
								columnItem
							);
							if (newData === null || newData === undefined || newData === "") {
								newData = "null";
							}
							value = `${value}, ${newData}`;
						}
					}
					rowExel = { ...rowExel, [name]: value };
				}
			}
		}
		dataExel = [...dataExel, rowExel];
	}

	for (const columnItem of column) {
		if (columnItem.key && get(columnItem, "canExcel", true)) {
			columnExel = [...columnExel, columnItem];
		}
	}
	columnExel = map(columnExel, (item) => {
		return { label: item.label, key: excelKeyMaker(item) };
	});
	return { dataExel, columnExel };
	/* 	setFormatExelData(dataExel);
	setColumnsExel(columnExel); */
}
