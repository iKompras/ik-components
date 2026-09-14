import React, { useState, useEffect } from "react";

// pakages
import PropTypes from "prop-types";
import ProgressBar from "@ramonak/react-progress-bar";
import { Table, Header, Icon, Button, Label, Checkbox, Popup } from "semantic-ui-react";
import { isEmpty, map, get, includes, reject, isEqual, filter, isArray } from "lodash";

// utils
import getData from "../../Utils/getData";
import {
	getTimeLabel,
	pastDays,
	phoneFormat,
	currencyFormat,
	decimalFormat,
	timeBetweenDates,
	renderTranslate,
} from "../../Utils/functions";

// Styles
import styles from "./styles.module.css";
import CardTable from "../CardTable";
import ImageViewer from "../../../ImageViewer";

const BodyTable = ({
	isPDF,
	columns,
	data,
	sumData,
	handlerTable,
	clickedRowColors = "hsl(215, 75%, 80%)",
	onChangeDeselect,
	handlerMultiple = () => {},
	concatValue = [],
	setConcatValue = () => {},
	concatKeys,
	setConcatKeys = () => {},
	checkAllData,
	setConcatAll,
	headerDetail,
	setRowStyle,
	totalRows = 0,
	mobileCardView = false,
	cardLine1 = [],
	cardLine2 = [],
	cardLine3 = [],
	cardLine4 = [],
	dataHandler = null,
	searchParams = null,
	onLoadMore = null,
	isLoadingMoreProp = false,
	hasMore = null,
	mergeConfig = null,
	downloadFileFetcher,
}) => {
	// useStates
	const [clikedData, setClikedData] = useState({});
	const [opentImagePreview, setOpentImagePreview] = useState({ isOpen: false, src: null });

	useEffect(() => {
		setClikedData({});
		setConcatValue([]);
		setConcatKeys([]);
	}, [onChangeDeselect]);

	useEffect(() => {
		const keys = map(checkAllData, (item) => {
			return item[columns[0].key];
		});
		handlerMultiple(checkAllData);
		setConcatValue(checkAllData);
		setConcatKeys(keys);
	}, [checkAllData]);

	// actions functions
	const onHandlerTable = (name, item) => {
		if (handlerTable) {
			handlerTable(name, item);
		}
	};

	const multipleHandler = (rowData, key) => {
		let newConcatValue = [];
		let newConcatKeys = [];
		if (!includes(concatKeys, rowData[key])) {
			newConcatValue = [...concatValue, rowData];
			newConcatKeys = [...concatKeys, rowData[key]];
		} else {
			newConcatValue = reject(concatValue, (item) => {
				return isEqual(item[key], rowData[key]);
			});
			newConcatKeys = reject(concatKeys, (item) => {
				return isEqual(item, rowData[key]);
			});
		}
		setConcatKeys(newConcatKeys);
		setConcatValue(newConcatValue);
		handlerMultiple(newConcatValue);
		setConcatAll(newConcatValue.length === totalRows);
	};

	const handlerClick = (rowData) => {
		onHandlerTable("onClick", rowData);
		setClikedData(rowData);
	};

	// Formats
	const truncateString = (str, num) => {
		if (isEmpty(str)) {
			return null;
		}
		if (isPDF) {
			const chunks = str.match(/.{1,60}/g) || [str];
			return map(chunks, (chunk, index) => {
				return <div key={index}>{chunk}</div>;
			});
		}
		const icon = (
			<span key={1} className={styles.icon}>
				<Popup
					position="bottom right"
					content={<div className={styles.popupContent}>{str}</div>}
					trigger={<Icon name="comment alternate outline" style={{ color: "#286b92" }} />}
				/>
			</span>
		);
		if (num >= str.length) {
			return str;
		}
		return <div className={styles.noWrap}>{[`${str.slice(0, num)}...`, icon]}</div>;
	};

	const truncateArray = (str, key) => {
		if (isEmpty(str)) return null;
		let itemList = str;

		if (typeof str[0] === "object") {
			itemList = map(str, (item) => {
				return item[key.split(",")[1]];
			});
		}
		if (isPDF) {
			return itemList.join(", ");
		}

		const content = map(itemList, (item, keyValueIndex) => {
			return (
				<div className={styles.arrayCell} key={keyValueIndex}>
					{item}
				</div>
			);
		});

		const icon = (
			<span key={1} className={styles.icon}>
				<Popup
					position="bottom right"
					content={<div className={styles.popupContent}>{content}</div>}
					trigger={<Icon name="comment alternate outline" style={{ color: "#286b92" }} />}
				/>
			</span>
		);

		if (itemList.length === 1) {
			return itemList;
		}
		return [`${itemList[0]}...`, icon];
	};

	const timePorcent = (vfechaInicio, vfechaFinalizacion, vfechaActual = "") => {
		const fechaInicio = new Date(vfechaInicio);
		const fechaFinalizacion = new Date(vfechaFinalizacion);
		let fechaActual = new Date();
		if (!isEmpty(vfechaActual)) {
			fechaActual = new Date(vfechaActual);
		}
		const tiempoTotal = fechaFinalizacion - fechaInicio;
		const tiempoTranscurrido = fechaActual - fechaInicio;
		if (tiempoTotal <= 0 || tiempoTranscurrido >= tiempoTotal) {
			return 100;
		}
		const porcentajeRecorrido = (tiempoTranscurrido / tiempoTotal) * 100;
		return parseInt(porcentajeRecorrido.toFixed(0), 10);
	};

	const renderColorLabel = (value, colorLabel, onClick, labelData, translate, textColor) => {
		let color = "#2483bb";

		if (colorLabel) {
			const colorkeyObjet = colorLabel[0];
			if (colorkeyObjet) {
				if (colorkeyObjet.colorKey) {
					if (labelData) {
						color = getData(colorkeyObjet.colorKey, labelData);
					}
				} else {
					for (const label of colorLabel) {
						if (label.onName === value) {
							color = label.color;
						} else if (label.default) {
							color = label.default;
						}
					}
				}
			}
		}
		if (onClick) {
			return (
				<Button
					style={{ backgroundColor: color }}
					className={styles.ButtonLabel}
					onClick={() => {
						return typeof onClick === "function" ? onClick(labelData) : onHandlerTable(onClick, labelData);
					}}
					fluid>
					{!isEmpty(translate) ? renderTranslate(value, translate) : String(value)}
				</Button>
			);
		}
		if (!value) {
			return null;
		}
		return (
			<Button style={{ backgroundColor: color, color: textColor }} className={styles.ButtonLabel} fluid>
				{!isEmpty(translate) ? renderTranslate(value, translate) : String(value)}
			</Button>
		);
	};

	const renderDateTimeBar = (value, endDate, stopDateHandler, rowData) => {
		let porcent = timePorcent(value, endDate);
		if (stopDateHandler(rowData) !== undefined) {
			porcent = timePorcent(value, endDate, stopDateHandler(rowData));
		}
		let color = "#01C875";
		if (porcent >= 90) color = "#FDAB3D";
		if (porcent === 100) color = "#E2445B";
		return (
			<div>
				<div className={styles.progressBarLabel}>{`${getTimeLabel(endDate, false, false, true)} ${porcent}%`}</div>
				<ProgressBar
					isLabelVisible={false}
					animateOnRender
					width="11rem"
					completed={porcent}
					maxCompleted={100}
					baseBgColor="silver"
					bgColor={color}
				/>
			</div>
		);
	};

	const extractArrayValues = (key, rowData) => {
		if (!includes(key, "[]?")) return get(rowData, key);

		const [arrayKey, property] = key.replace("[]?", "").split(".");

		const array = get(rowData, arrayKey, []);
		if (!isArray(array)) return [];

		return filter(
			map(array, (item) => {
				return get(item, property);
			}),
			Boolean
		);
	};

	const formatData = ({
		format,
		value,
		key,
		endDate,
		boolLabels,
		/* 	colorLabel, */
		translate,
		/* onClick,
		labelData, */
		/* 	onKeyEndDate, */
		sum,
		colorLabel,
		onClick,
		widthZero,
		nullToZero,
		stringLength,
		rowData,
		textColor,
		stopDateHandler,
	}) => {
		switch (format) {
			case "timeBetween":
				return timeBetweenDates(value, endDate);

			case "date":
				return getTimeLabel(value, false, false, false);

			case "dateM":
				return getTimeLabel(value, false, false, false);

			case "dateDMY":
				return getTimeLabel(value, false, false, false, false, false, true);

			case "time":
				return getTimeLabel(value, false, true, false);

			case "dateTime":
				return getTimeLabel(value, false, false, true);

			case "dateTimeBar":
				return renderDateTimeBar(value, endDate, stopDateHandler, rowData);

			case "dateTimeDay":
				return getTimeLabel(value, false, false, false, true);

			case "dateMonthYear":
				return getTimeLabel(value, false, false, false, false, true);

			case "pastDays":
				return pastDays(value);

			case "phone":
				return phoneFormat(value);

			case "currency":
				return currencyFormat(value, false, widthZero, nullToZero);

			case "decimal":
				return decimalFormat(value, widthZero, nullToZero);

			case "integerCurrency":
				return currencyFormat(value, true, widthZero, nullToZero);

			case "number":
				if (Number.isNaN(value) || value === null) return "";
				return Number(value).toLocaleString("en-US");

			case "blankZero": {
				if (isArray(value) || typeof value === "string") {
					const n = value ? value.length : 0;
					return n === 0 ? "" : n;
				}
				return value === 0 ? "" : value;
			}

			case "count":
				if (value) {
					return value.length;
				}
				return 0;

			case "boolean":
				if (!sum) {
					if (boolLabels) {
						if (value) {
							return boolLabels.true || "si";
						}
						return boolLabels.false || "no";
					}
					if (value) {
						return "si";
					}
					return "no";
				}
				return value;

			case "translate":
				return renderTranslate(value, translate);

			/* 	case "input":
				return (
					<Input
						className={styles.inputNumber}
						type={"number"}
						value={value.toString()}
						onChange={(e) => handleInputNumber(e, labelData)}
						onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
					/>
				); */
			case "truncate":
				return truncateString(value, stringLength, rowData);

			case "array": {
				const render = map(value, (item) => {
					return <div>{getData(key.split(",")[1], item)}</div>;
				});
				return render;
			}

			case "colorLabel": {
				const render = colorValue(value, textColor);
				return render;
			}
			case "arrayTruncate": {
				const arrayValue = key.includes("[]?") ? extractArrayValues(key, rowData) : value;
				return truncateArray(arrayValue, key);
			}

			case "label":
				return renderColorLabel(value, colorLabel, onClick, rowData, translate, textColor);

			case "coloredText": {
				let color = "inherit";
				if (colorLabel) {
					for (const label of colorLabel) {
						if (label.onName === value) {
							color = label.color;
						} else if (label.default && color === "inherit") {
							color = label.default;
						}
					}
				}
				const translatedValue = !isEmpty(translate) ? renderTranslate(value, translate) : String(value);
				return <span style={{ color, fontWeight: 500 }}>{translatedValue}</span>;
			}

			case "longText":
				return truncateString(value, stringLength, rowData);

			case "image":
				if (value) {
					return (
						<Icon
							name="image"
							size="small"
							style={{ maxWidth: "50px", maxHeight: "50px", cursor: "pointer" }}
							onClick={() => {
								setOpentImagePreview({
									isOpen: true,
									src: value,
								});
							}}
						/>
					);
				}
				return null;

			default:
				return value;
		}
	};

	const colorValue = (value, format) => {
		if (value === "En Línea" && format !== "string") {
			return <div style={{ color: "hsl(130, 92.00%, 34.10%)" }}>{value}</div>;
		}
		return (
			<div className={styles.labelColor} style={{ color: "#000000" }}>
				{value}
			</div>
		);
	};

	// Render Functions

	const renderActions = (action, rowData) => {
		const actionsRendered = map(action, ({ content, hidden, type, color = "hsl(0, 0 %, 95 %)", onClick, visible }, optionsIndex) => {
			const disabled = false;
			if (hidden) return null;
			if (typeof visible === "function") {
				if (visible(rowData) === false) return null;
			}
			switch (type) {
				case "icon":
					return (
						<Button
							key={optionsIndex}
							disabled={disabled}
							className={styles.ButtonIcon}
							style={{
								color,
								border: `2px solid ${color}`,
							}}
							onClick={() => {
								return onHandlerTable(onClick, rowData);
							}}>
							<Icon name={content} />
						</Button>
					);
				case "link":
					return (
						<Label
							key={optionsIndex}
							style={{ color }}
							className={styles.ButtonLink}
							onClick={() => {
								return onHandlerTable(onClick, rowData);
							}}>
							{content}
						</Label>
					);

				default:
					return null;
			}
		});
		return actionsRendered;
	};

	const cellRender = (rowData, sum = false) => {
		const renderedCells = map(
			columns,
			(
				{
					key,
					format,
					endDateKey = null,
					action = [],
					multipleColumns = [],
					dataPosition = "left",
					twoLines = false,
					multiple = false,
					line1 = {},
					line2 = {},
					stringLength = 20,
					hidden = false,
					translate = {},
					colorLabel,
					textColor = "#000000",
					style: columnStyle = {},
					stopDateHandler = () => {},
					render = null,
					valueGetter = null,
					boolLabels = null,
				},
				index
			) => {
				let rowStyle = {};
				if (setRowStyle !== undefined) {
					rowStyle = setRowStyle(rowData);
				}

				const value = valueGetter && typeof valueGetter === "function" ? valueGetter(rowData) : getData(key, rowData, false, sum);
				const endDate = !isEmpty(endDateKey) ? getData(endDateKey, rowData) : null;

				if (hidden) {
					return null;
				}

				if (render && typeof render === "function") {
					const customValue = render(rowData, { setOpentImagePreview });
					return (
						<Table.Cell verticalAlign="middle" textAlign={dataPosition} key={index} style={rowStyle} className={styles.cell}>
							{customValue}
						</Table.Cell>
					);
				}

				if (!isEmpty(action) && !isPDF && !sum) {
					return (
						<Table.Cell
							/* 		negative={negative} */
							verticalAlign="middle"
							textAlign={dataPosition}
							key={index}
							style={{ ...rowStyle, ...columnStyle }}
							className={styles.cellButton}>
							{renderActions(action, rowData, index)}
						</Table.Cell>
					);
				}
				if (!isEmpty(action) && isPDF) {
					return null;
				}

				if (multiple) {
					return (
						<Table.Cell
							/* 		negative={negative} */
							verticalAlign="middle"
							textAlign="center"
							style={{ ...rowStyle, ...columnStyle }}
							key={index}
							className={styles.cellButton}
							onClick={() => {
								multipleHandler(rowData, key);
							}}>
							<Checkbox key={index} checked={includes(concatKeys, rowData[key])} />
						</Table.Cell>
					);
				}

				if (twoLines) {
					const value1 = getData(get(line1, "key", null), rowData);
					const value2 = getData(get(line2, "key", null), rowData);
					const endDate1 = getData(get(line1, "endDateKey", null), rowData);
					const endDate2 = getData(get(line2, "endDateKey", null), rowData);
					return (
						<Table.Cell
							verticalAlign="middle"
							style={rowStyle}
							onClick={() => {
								return handlerClick(rowData);
							}}
							key={index}>
							<div className={styles.towLineRow} style={{ justifyContent: get(line1, "dataPosition", "left"), ...rowStyle }}>
								{formatData({
									value: value1,
									format,
									endDate: endDate1,
									stringLength,
									key,
									translate,
									colorLabel,
									boolLabels,
									rowData,
								})}
							</div>
							<div className={styles.towLineRow} style={{ justifyContent: get(line2, "dataPosition", "left"), ...rowStyle }}>
								{formatData({
									value: value2,
									format,
									endDate: endDate2,
									stringLength,
									key,
									translate,
									colorLabel,
									boolLabels,
									rowData,
								})}
							</div>
						</Table.Cell>
					);
				}

				if (!isEmpty(multipleColumns)) {
					const subColumnsData = map(multipleColumns, (column, sIndex) => {
						const subIndex = index + sIndex;
						return (
							<Table.Cell
								verticalAlign="middle"
								style={rowStyle}
								textAlign={get(column, "dataPosition", "left")}
								onClick={() => {
									return handlerClick(rowData);
								}}
								key={subIndex}>
								{formatData({
									value: getData(get(column, "key", null), rowData),
									format: get(column, "format", ""),
									endDate: get(column, "endDate", null),
									stringLength,
									key,
									translate,
									colorLabel,
									boolLabels,
									rowData,
								})}
							</Table.Cell>
						);
					});
					return subColumnsData;
				}

				return (
					<Table.Cell
						key={index}
						verticalAlign="middle"
						className={styles.cell}
						textAlign={dataPosition}
						style={{ color: textColor, ...rowStyle }}
						onClick={() => {
							return handlerClick(rowData);
						}}>
						{formatData({
							value,
							format,
							endDate,
							stringLength,
							key,
							sum,
							translate,
							colorLabel,
							boolLabels,
							rowData,
							textColor,
							stopDateHandler,
						})}
					</Table.Cell>
				);
			}
		);
		return renderedCells;
	};

	const rowRender = () => {
		if (!isEmpty(data)) {
			const renderedRows = map(data, (rowData, index) => {
				if (!isEmpty(headerDetail)) {
					const title = getData(headerDetail.headerTitle, rowData, false);
					const dataDetail = getData(headerDetail.dataDetail, rowData, false);
					return [
						<Table.Row key={`sumRow-${index}`} className={styles.sumRow} as="tr">
							<Table.Cell
								verticalAlign="middle"
								className={styles.cell}
								style={{ backgroundColor: "#dddddd", color: "black" }}
								colSpan={16}>
								{title}
							</Table.Cell>
						</Table.Row>,
						map(dataDetail, (rowItem, subIndex) => {
							return (
								<Table.Row
									key={`detail-${index}-${subIndex}`}
									className={styles.groupHover}
									style={clikedData === rowItem ? { backgroundColor: clickedRowColors } : {}}
									onDoubleClick={() => {
										onHandlerTable("Watch", rowItem);
									}}>
									{cellRender(rowItem)}
								</Table.Row>
							);
						}),
					];
				}
				return (
					<Table.Row
						key={index}
						className={styles.groupHover}
						style={clikedData === rowData ? { backgroundColor: clickedRowColors } : {}}
						onDoubleClick={() => {
							onHandlerTable("Watch", rowData);
						}}>
						{cellRender(rowData)}
					</Table.Row>
				);
			});
			let sumrender = [];

			if (!isEmpty(sumData)) {
				sumrender = [
					<Table.Row key="sumRow" className={styles.sumRow}>
						{cellRender(sumData, true)}
					</Table.Row>,
				];
			}
			return [...renderedRows, ...sumrender];
		}

		//	If empty data
		return (
			<Table.Row>
				<Table.Cell colSpan={34}>
					<div className={styles.emptyChat}>
						<Header as="h3" color="grey">
							<div className={styles.emptyDataIcon}>
								<Icon.Group size="large">
									<Icon name="list alternate outline" />
									<Icon corner name="close" color="red" />
								</Icon.Group>
							</div>
							No se ha encontrado ningun dato
						</Header>
					</div>
				</Table.Cell>
			</Table.Row>
		);
	};

	if (mobileCardView) {
		const cardTableDataHandler = dataHandler
			? async (params, printable = false, findAll = false, isCheck = false) => {
					const shouldDisableLoading = !printable && !findAll && !isCheck;
					return dataHandler(params, printable, findAll, isCheck, { withLoading: !shouldDisableLoading });
			  }
			: null;

		return (
			<div className={styles.cardsWrapper}>
				<CardTable
					data={data}
					columns={columns}
					headerDetail={headerDetail}
					setRowStyle={setRowStyle}
					clickedRowColors={clickedRowColors}
					onHandlerTable={onHandlerTable}
					handlerClick={handlerClick}
					formatData={formatData}
					clikedData={clikedData}
					isPDF={isPDF}
					cardLine1={cardLine1}
					enableInfiniteScroll={!!onLoadMore || !!dataHandler}
					onLoadMore={onLoadMore}
					isLoadingMore={isLoadingMoreProp}
					hasMore={hasMore}
					cardLine2={cardLine2}
					cardLine3={cardLine3}
					cardLine4={cardLine4}
					multipleHandler={multipleHandler}
					concatKeys={concatKeys}
					dataHandler={cardTableDataHandler}
					searchParams={searchParams}
					totalRows={totalRows}
					mergeConfig={mergeConfig}
				/>
				<ImageViewer
					imageUrl={opentImagePreview.src}
					onClose={() => {
						return setOpentImagePreview({ isOpen: false, src: null });
					}}
					isOpen={opentImagePreview.isOpen}
					downloadFileFetcher={downloadFileFetcher}
				/>
			</div>
		);
	}

	return (
		<Table.Body>
			{rowRender()}
			<ImageViewer
				imageUrl={opentImagePreview.src}
				onClose={() => {
					return setOpentImagePreview({ isOpen: false, src: null });
				}}
				isOpen={opentImagePreview.isOpen}
				downloadFileFetcher={downloadFileFetcher}
			/>
		</Table.Body>
	);
};

BodyTable.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
	clickedRowColors: PropTypes.string,
	handlerTable: PropTypes.func,
	handlerMultiple: PropTypes.func,
	setConcatAll: PropTypes.func,
	isPDF: PropTypes.bool,
	onChangeDeselect: PropTypes.bool,
	totalRows: PropTypes.number,
	concatValue: PropTypes.array,
	checkAllData: PropTypes.array,
	setConcatValue: PropTypes.func,
	concatKeys: PropTypes.array,
	setConcatKeys: PropTypes.func,
	setRowStyle: PropTypes.func,
	sumData: PropTypes.object,
	headerDetail: PropTypes.object,
	mobileCardView: PropTypes.bool,
	cardLine1: PropTypes.array,
	cardLine2: PropTypes.array,
	cardLine3: PropTypes.array,
	cardLine4: PropTypes.array,
	dataHandler: PropTypes.func,
	searchParams: PropTypes.object,
	onLoadMore: PropTypes.func,
	isLoadingMoreProp: PropTypes.bool,
	hasMore: PropTypes.bool,
	mergeConfig: PropTypes.object,
	downloadFileFetcher: PropTypes.func,
};

export default BodyTable;
