import React, { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Header, Icon, Checkbox, Popup } from "semantic-ui-react";
import { map, isEmpty, find, includes, sumBy } from "lodash";

import getData from "../../Utils/getData";
import mergeGroupsData from "../../Utils/mergeGroupsData";
import ActionsMenu from "./ActionsMenu";
import { getAutoAdaptiveSize } from "../../Utils/functions";
import styles from "./styles.module.css";

const CardTable = ({
	data = [],
	columns = [],
	headerDetail = {},
	setRowStyle,
	clickedRowColors,
	onHandlerTable,
	handlerClick,
	formatData,
	clikedData,
	isPDF = false,
	cardLine1 = [],
	cardLine2 = [],
	cardLine3 = [],
	cardLine4 = [],
	multipleHandler,
	concatKeys = [],
	enableInfiniteScroll = false,
	onLoadMore,
	isLoadingMore = false,
	hasMore,
	// Props para manejo automático de scroll infinito
	dataHandler = null,
	searchParams = null,
	totalRows = 0,
	mergeConfig = null,
}) => {
	const containerRef = useRef(null);
	const sentinelRef = useRef(null);
	const [internalLoading, setInternalLoading] = useState(false);
	const [mergedData, setMergedData] = useState(data);
	const [currentPage, setCurrentPage] = useState(1);
	const [isInitialLoading, setIsInitialLoading] = useState(true);
	const isFetchingRef = useRef(false);
	const lastSearchParamsRef = useRef(searchParams);
	const isLoadingMoreRef = useRef(false);
	const noMoreDataRef = useRef(false);

	// Ref para rastrear si ya hicimos el merge de esta página
	const lastMergedPageRef = useRef(0);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Sincronizar mergedData con data cuando cambian los parámetros de búsqueda (nueva búsqueda)
	useEffect(() => {
		const searchParamsChanged = JSON.stringify(lastSearchParamsRef.current) !== JSON.stringify(searchParams);

		// Si cambió la búsqueda, resetear todo
		if (searchParamsChanged) {
			setMergedData(data);
			setCurrentPage(1);
			lastSearchParamsRef.current = searchParams;
			isLoadingMoreRef.current = false;
			lastMergedPageRef.current = 1;
			noMoreDataRef.current = false;
			setIsInitialLoading(true);
		}
		// Si es scroll infinito y aún no hemos mergeado esta página
		else if (isLoadingMoreRef.current && currentPage > lastMergedPageRef.current) {
			if (data && data.length > 0) {
				setMergedData((prevData) => {
					// Si hay mergeConfig, hacer merge de grupos (datos agrupados)
					if (mergeConfig) {
						return mergeGroupsData(prevData, data, mergeConfig);
					}

					// Si no hay mergeConfig, hacer merge simple de arrays (datos planos)
					// Obtener IDs existentes para evitar duplicados
					const idKey = "id";
					if (prevData.length > 0 && prevData[0][idKey] !== undefined) {
						const existingIds = new Set(
							prevData.map((item) => {
								return item[idKey];
							})
						);
						const newItems = data.filter((item) => {
							return !existingIds.has(item[idKey]);
						});
						return [...prevData, ...newItems];
					}
					// Si no hay ID, simplemente concatenar
					return [...prevData, ...data];
				});
				lastMergedPageRef.current = currentPage;
				noMoreDataRef.current = false;
			} else {
				lastMergedPageRef.current = currentPage;
				noMoreDataRef.current = true;
			}
			isLoadingMoreRef.current = false;
		}
		// Si es la primera carga (página 1 y no es scroll infinito)
		else if (currentPage === 1 && !isLoadingMoreRef.current && data) {
			setMergedData(data);
			lastMergedPageRef.current = 1;
		}
	}, [data, searchParams, mergeConfig, currentPage]);

	// Desactivar loading inicial cuando data está disponible y no hay peticiones en curso
	useEffect(() => {
		if (data !== undefined && isInitialLoading && !isFetchingRef.current && !internalLoading && !isLoadingMoreRef.current) {
			// Si hay datos, desactivar después de un momento
			if (data.length > 0) {
				const timer = setTimeout(() => {
					setIsInitialLoading(false);
				}, 1000);
				return () => {
					clearTimeout(timer);
				};
			}
			// Si no hay datos, desactivar después de un delay para mostrar "sin datos"
			const timer = setTimeout(() => {
				setIsInitialLoading(false);
			}, 1500);
			return () => {
				clearTimeout(timer);
			};
		}
		return undefined;
	}, [data, isInitialLoading, internalLoading]);

	// Timeout de seguridad: desactivar loading después de 3 segundos si aún está activo
	useEffect(() => {
		if (isInitialLoading) {
			const safetyTimer = setTimeout(() => {
				setIsInitialLoading(false);
			}, 3000);
			return () => {
				clearTimeout(safetyTimer);
			};
		}
		return undefined;
	}, [isInitialLoading]);

	const truncateString = (str, num) => {
		if (isEmpty(str)) {
			return null;
		}
		const icon = (
			<span key={1} style={{ marginLeft: "4px" }}>
				<Popup
					position="bottom right"
					content={<div>{str}</div>}
					trigger={<Icon name="comment alternate outline" style={{ color: "#286b92" }} />}
				/>
			</span>
		);
		if (num >= str.length) {
			return str;
		}
		return (
			<span>
				{`${str.slice(0, num)}...`}
				{icon}
			</span>
		);
	};

	const renderField = (column, rowData, customLabel = null) => {
		const {
			key: columnKey,
			label,
			format,
			endDateKey = null,
			dataPosition = "left",
			stringLength = 20,
			boolLabels,
			translate,
			colorLabel,
			textColor = "#000000",
			stopDateHandler = () => {},
			onClick,
			render,
		} = column;

		if (render && typeof render === "function") {
			return render(rowData);
		}

		const value = getData(columnKey, rowData, false);
		const endDate = !isEmpty(endDateKey) ? getData(endDateKey, rowData) : null;
		const adaptiveStringLength = getAutoAdaptiveSize(windowWidth, 768, stringLength, 10, 10);
		const formattedValue = formatData({
			value,
			format,
			endDate,
			stringLength: adaptiveStringLength,
			key: columnKey,
			translate,
			colorLabel,
			onClick,
			rowData,
			textColor,
			boolLabels,
			stopDateHandler,
		});

		// Si el valor está vacío, no mostrar el campo (excepto si es ID y tiene valor)
		const isIdField = columnKey === "id" || label === "ID" || columnKey?.toLowerCase().includes("id");
		if (!isIdField && (isEmpty(formattedValue) || formattedValue === "-" || formattedValue === null || formattedValue === undefined)) {
			return null;
		}

		// Usar label personalizado si se proporciona, sino usar el de la columna
		const displayLabel = customLabel !== null ? customLabel : label;

		return (
			<div className={styles.cardInlineField}>
				{displayLabel && <span className={styles.cardInlineLabel}>{displayLabel}:</span>}
				<span className={styles.cardInlineValue} style={{ textAlign: dataPosition, color: textColor }}>
					{formattedValue}
				</span>
			</div>
		);
	};

	// Función helper para crear el menú de acciones
	const createActionsMenu = (rowData, columnsData) => {
		return <ActionsMenu rowData={rowData} columnsData={columnsData} onHandlerTable={onHandlerTable} isPDF={isPDF} />;
	};

	const renderCard = (rowData, key) => {
		let rowStyle = {};
		if (typeof setRowStyle === "function") {
			rowStyle = setRowStyle(rowData) || {};
		}

		const isSelected = clikedData === rowData;
		const cardStyle = isSelected ? { backgroundColor: clickedRowColors, ...rowStyle } : rowStyle;

		// Layout con líneas (cardLine1, cardLine2, cardLine3, cardLine4)
		if (!isEmpty(cardLine1) || !isEmpty(cardLine2) || !isEmpty(cardLine3) || !isEmpty(cardLine4)) {
			const checkboxColumn = find(columns, { multiple: true });
			const checkboxKey = checkboxColumn?.key;
			const isChecked = checkboxKey ? includes(concatKeys, rowData[checkboxKey]) : false;

			const line1Fields = [];
			if (checkboxColumn && !isEmpty(cardLine1)) {
				line1Fields.push(
					<div key="checkbox" className={styles.cardCheckbox}>
						<Checkbox
							checked={isChecked}
							onChange={() => {
								if (multipleHandler) {
									multipleHandler(rowData, checkboxKey);
								}
							}}
							onClick={(e) => {
								e.stopPropagation();
							}}
						/>
					</div>
				);
			}

			map(cardLine1, (item) => {
				// Soportar tanto string como objeto { key, label, format }
				const columnKey = typeof item === "string" ? item : item.key;
				const customLabel = typeof item === "object" && item.label !== undefined ? item.label : null;
				const customFormat = typeof item === "object" && item.format !== undefined ? item.format : null;

				const column = find(columns, (col) => {
					return col.key === columnKey && !col.multiple && !col.hidden;
				});
				if (column && !column.hidden && !column.multiple) {
					// Si hay un format personalizado, crear una columna temporal con ese format
					const columnToUse = customFormat ? { ...column, format: customFormat } : column;
					const fieldElement = renderField(columnToUse, rowData, customLabel);
					if (fieldElement) {
						line1Fields.push(
							<div key={columnKey} className={styles.cardLine1Item}>
								{fieldElement}
							</div>
						);
					}
				}
			});

			const line2Fields = [];
			map(cardLine2, (item) => {
				// Si el item tiene una función render, usarla directamente
				if (typeof item === "object" && typeof item.render === "function") {
					const renderResult = item.render(rowData);
					const renderLabel =
						typeof renderResult === "object" && renderResult.label !== undefined ? renderResult.label : item.label || null;
					let renderValue = typeof renderResult === "object" && renderResult.value !== undefined ? renderResult.value : renderResult;

					// Si hay un format y stringLength especificados, aplicar el formato
					const itemFormat = typeof item === "object" && item.format !== undefined ? item.format : null;
					const itemStringLength = typeof item === "object" && item.stringLength !== undefined ? item.stringLength : 20;
					const shouldTruncate = typeof renderResult === "object" && renderResult.shouldTruncate === true;

					if (itemFormat && typeof renderValue === "string") {
						if (itemFormat === "truncate" && shouldTruncate) {
							const adaptiveStringLength = getAutoAdaptiveSize(windowWidth, 480, itemStringLength, 1, 10);
							renderValue = truncateString(renderValue, adaptiveStringLength);
						} else if (itemFormat !== "truncate") {
							const formattedValue = formatData({
								value: renderValue,
								format: itemFormat,
								endDate: null,
								stringLength: itemStringLength,
								key: item.key || "",
								translate: null,
								colorLabel: null,
								onClick: null,
								rowData,
								textColor: "#000000",
								boolLabels: null,
								stopDateHandler: () => {},
							});
							renderValue = formattedValue;
						}
					}

					// Solo agregar si el valor no está vacío (excepto si es ID y tiene valor)
					const isIdField =
						(item.key === "id" || item.label === "ID" || item.key?.toLowerCase().includes("id")) &&
						!isEmpty(renderValue) &&
						renderValue !== "-" &&
						renderValue !== null &&
						renderValue !== undefined;
					if (isIdField || (!isEmpty(renderValue) && renderValue !== "-" && renderValue !== null && renderValue !== undefined)) {
						line2Fields.push(
							<div key={item.key || "render"} className={styles.cardLine2Item}>
								<div className={styles.cardInlineField}>
									{renderLabel && <span className={styles.cardInlineLabel}>{renderLabel}:</span>}
									<span className={styles.cardInlineValue}>{renderValue}</span>
								</div>
							</div>
						);
					}
					return;
				}

				// Soportar tanto string como objeto { key, label, format }
				const columnKey = typeof item === "string" ? item : item.key;
				const customLabel = typeof item === "object" && item.label !== undefined ? item.label : null;
				const customFormat = typeof item === "object" && item.format !== undefined ? item.format : null;

				const column = find(columns, (col) => {
					return col.key === columnKey && !col.multiple && !col.hidden;
				});
				if (column && !column.hidden && !column.multiple) {
					// Si hay un format personalizado, crear una columna temporal con ese format
					const columnToUse = customFormat ? { ...column, format: customFormat } : column;
					const fieldElement = renderField(columnToUse, rowData, customLabel);
					if (fieldElement) {
						line2Fields.push(
							<div key={columnKey} className={styles.cardLine2Item}>
								{fieldElement}
							</div>
						);
					}
				}
			});

			const line3Fields = [];
			map(cardLine3, (item) => {
				// Si el item tiene una función render, usarla directamente
				if (typeof item === "object" && typeof item.render === "function") {
					const renderResult = item.render(rowData);
					const renderLabel =
						typeof renderResult === "object" && renderResult.label !== undefined ? renderResult.label : item.label || null;
					let renderValue = typeof renderResult === "object" && renderResult.value !== undefined ? renderResult.value : renderResult;

					// Si hay un format y stringLength especificados, aplicar el formato
					const itemFormat = typeof item === "object" && item.format !== undefined ? item.format : null;
					const itemStringLength = typeof item === "object" && item.stringLength !== undefined ? item.stringLength : 20;
					const shouldTruncate = typeof renderResult === "object" && renderResult.shouldTruncate === true;

					if (itemFormat && typeof renderValue === "string") {
						if (itemFormat === "truncate" && shouldTruncate) {
							const adaptiveStringLength = getAutoAdaptiveSize(windowWidth, 480, itemStringLength, 1, 10);
							renderValue = truncateString(renderValue, adaptiveStringLength);
						} else if (itemFormat !== "truncate") {
							const formattedValue = formatData({
								value: renderValue,
								format: itemFormat,
								endDate: null,
								stringLength: itemStringLength,
								key: item.key || "",
								translate: null,
								colorLabel: null,
								onClick: null,
								rowData,
								textColor: "#000000",
								boolLabels: null,
								stopDateHandler: () => {},
							});
							renderValue = formattedValue;
						}
					}

					// Solo agregar si el valor no está vacío (excepto si es ID y tiene valor)
					const isIdField =
						(item.key === "id" || item.label === "ID" || item.key?.toLowerCase().includes("id")) &&
						!isEmpty(renderValue) &&
						renderValue !== "-" &&
						renderValue !== null &&
						renderValue !== undefined;
					if (isIdField || (!isEmpty(renderValue) && renderValue !== "-" && renderValue !== null && renderValue !== undefined)) {
						line3Fields.push(
							<div key={item.key || "render"} className={styles.cardLine3Item}>
								<div className={styles.cardInlineField}>
									{renderLabel && <span className={styles.cardInlineLabel}>{renderLabel}:</span>}
									<span className={styles.cardInlineValue}>{renderValue}</span>
								</div>
							</div>
						);
					}
					return;
				}

				// Soportar tanto string como objeto { key, label, format }
				const columnKey = typeof item === "string" ? item : item.key;
				const customLabel = typeof item === "object" && item.label !== undefined ? item.label : null;
				const customFormat = typeof item === "object" && item.format !== undefined ? item.format : null;

				const column = find(columns, (col) => {
					return col.key === columnKey && !col.multiple && !col.hidden;
				});
				if (column && !column.hidden && !column.multiple) {
					// Si hay un format personalizado, crear una columna temporal con ese format
					const columnToUse = customFormat ? { ...column, format: customFormat } : column;
					const fieldElement = renderField(columnToUse, rowData, customLabel);
					if (fieldElement) {
						line3Fields.push(
							<div key={columnKey} className={styles.cardLine3Item}>
								{fieldElement}
							</div>
						);
					}
				}
			});

			const line4Fields = [];
			map(cardLine4, (item) => {
				// Si el item tiene una función render, usarla directamente
				if (typeof item === "object" && typeof item.render === "function") {
					const renderResult = item.render(rowData);
					const renderLabel =
						typeof renderResult === "object" && renderResult.label !== undefined ? renderResult.label : item.label || null;
					let renderValue = typeof renderResult === "object" && renderResult.value !== undefined ? renderResult.value : renderResult;

					// Si hay un format y stringLength especificados, aplicar el formato
					const itemFormat = typeof item === "object" && item.format !== undefined ? item.format : null;
					const itemStringLength = typeof item === "object" && item.stringLength !== undefined ? item.stringLength : 20;
					const shouldTruncate = typeof renderResult === "object" && renderResult.shouldTruncate === true;

					if (itemFormat && typeof renderValue === "string") {
						if (itemFormat === "truncate" && shouldTruncate) {
							const adaptiveStringLength = getAutoAdaptiveSize(windowWidth, 480, itemStringLength, 1, 10);
							renderValue = truncateString(renderValue, adaptiveStringLength);
						} else if (itemFormat !== "truncate") {
							const formattedValue = formatData({
								value: renderValue,
								format: itemFormat,
								endDate: null,
								stringLength: itemStringLength,
								key: item.key || "",
								translate: null,
								colorLabel: null,
								onClick: null,
								rowData,
								textColor: "#000000",
								boolLabels: null,
								stopDateHandler: () => {},
							});
							renderValue = formattedValue;
						}
					}

					// Solo agregar si el valor no está vacío (excepto si es ID y tiene valor)
					const isIdField =
						(item.key === "id" || item.label === "ID" || item.key?.toLowerCase().includes("id")) &&
						!isEmpty(renderValue) &&
						renderValue !== "-" &&
						renderValue !== null &&
						renderValue !== undefined;
					if (isIdField || (!isEmpty(renderValue) && renderValue !== "-" && renderValue !== null && renderValue !== undefined)) {
						line4Fields.push(
							<div key={item.key || "render"} className={styles.cardLine4Item}>
								<div className={styles.cardInlineField}>
									{renderLabel && <span className={styles.cardInlineLabel}>{renderLabel}:</span>}
									<span className={styles.cardInlineValue}>{renderValue}</span>
								</div>
							</div>
						);
					}
					return;
				}

				// Soportar tanto string como objeto { key, label, format }
				const columnKey = typeof item === "string" ? item : item.key;
				const customLabel = typeof item === "object" && item.label !== undefined ? item.label : null;
				const customFormat = typeof item === "object" && item.format !== undefined ? item.format : null;

				const column = find(columns, (col) => {
					return col.key === columnKey && !col.multiple && !col.hidden;
				});
				if (column && !column.hidden && !column.multiple) {
					// Si hay un format personalizado, crear una columna temporal con ese format
					const columnToUse = customFormat ? { ...column, format: customFormat } : column;
					const fieldElement = renderField(columnToUse, rowData, customLabel);
					if (fieldElement) {
						line4Fields.push(
							<div key={columnKey} className={styles.cardLine4Item}>
								{fieldElement}
							</div>
						);
					}
				}
			});

			const actionsMenu = createActionsMenu(rowData, columns);

			return (
				<div
					key={key}
					className={styles.card}
					style={cardStyle}
					role="button"
					tabIndex={0}
					onClick={() => {
						handlerClick(rowData);
					}}
					onDoubleClick={() => {
						onHandlerTable("Watch", rowData);
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							handlerClick(rowData);
						}
					}}>
					{actionsMenu}
					{!isEmpty(line1Fields) && <div className={styles.cardLine1}>{line1Fields}</div>}
					{!isEmpty(line2Fields) && <div className={styles.cardLine2}>{line2Fields}</div>}
					{!isEmpty(line3Fields) && <div className={styles.cardLine3}>{line3Fields}</div>}
					{!isEmpty(line4Fields) && <div className={styles.cardLine4}>{line4Fields}</div>}
				</div>
			);
		}

		// Layout original vertical
		const cardFields = map(
			columns,
			({
				key: columnKey,
				label,
				format,
				endDateKey = null,
				dataPosition = "left",
				hidden = false,
				stringLength = 20,
				boolLabels,
				translate,
				colorLabel,
				textColor = "#000000",
				stopDateHandler = () => {},
				onClick,
				render,
				multiple = false,
			}) => {
				if (hidden || multiple) return null;

				if (render && typeof render === "function") {
					return (
						<div key={columnKey} className={styles.cardField}>
							{render(rowData)}
						</div>
					);
				}

				const value = getData(columnKey, rowData, false);
				const endDate = !isEmpty(endDateKey) ? getData(endDateKey, rowData) : null;
				const adaptiveStringLength = getAutoAdaptiveSize(windowWidth, 768, stringLength, 10, 10);
				const formattedValue = formatData({
					value,
					format,
					endDate,
					stringLength: adaptiveStringLength,
					key: columnKey,
					translate,
					colorLabel,
					onClick,
					rowData,
					textColor,
					boolLabels,
					stopDateHandler,
				});

				return (
					<div key={columnKey} className={styles.cardField}>
						<div className={styles.cardLabel}>{label}:</div>
						<div className={styles.cardValue} style={{ textAlign: dataPosition, color: textColor }}>
							{formattedValue}
						</div>
					</div>
				);
			}
		);

		const actionsMenu = createActionsMenu(rowData, columns);

		return (
			<div
				key={key}
				className={styles.card}
				style={cardStyle}
				role="button"
				tabIndex={0}
				onClick={() => {
					handlerClick(rowData);
				}}
				onDoubleClick={() => {
					onHandlerTable("Watch", rowData);
				}}
				onKeyPress={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handlerClick(rowData);
					}
				}}>
				{actionsMenu}
				{cardFields}
			</div>
		);
	};

	// Usar mergedData si está activo el scroll infinito (con o sin mergeConfig), sino usar data
	const activeData = dataHandler ? mergedData : data;

	// Preparar datos planos para react-virtualized
	const prepareFlatData = useCallback(() => {
		if (isEmpty(activeData)) {
			return [];
		}

		const flatData = [];
		map(activeData, (rowData, index) => {
			if (!isEmpty(headerDetail)) {
				const title = getData(headerDetail.headerTitle, rowData, false);
				const dataDetail = getData(headerDetail.dataDetail, rowData, false);
				flatData.push({
					type: "header",
					key: `header-${index}`,
					title,
				});
				map(dataDetail, (rowItem, itemIndex) => {
					// Usar el ID del item si existe, de lo contrario usar index
					const uniqueKey = rowItem?.id !== undefined ? rowItem.id : `${index}-${itemIndex}`;
					flatData.push({
						type: "card",
						key: `card-${uniqueKey}`,
						data: rowItem,
					});
				});
			} else {
				// Usar el ID del rowData si existe, de lo contrario usar index
				const uniqueKey = rowData?.id !== undefined ? rowData.id : index;
				flatData.push({
					type: "card",
					key: `card-${uniqueKey}`,
					data: rowData,
				});
			}
		});

		return flatData;
	}, [activeData, headerDetail]);

	const flatData = prepareFlatData();

	// Handler automático de carga de más datos
	const handleAutoLoadMore = useCallback(async () => {
		if (!dataHandler || !searchParams || isFetchingRef.current || internalLoading) {
			return;
		}

		// Si ya detectamos que no hay más datos, no hacer más peticiones
		if (noMoreDataRef.current) {
			return;
		}

		const nextPage = currentPage + 1;

		// Calcular total de items cargados usando mergedData
		const totalLoaded = !isEmpty(headerDetail)
			? sumBy(mergedData, (group) => {
					const items = getData(headerDetail.dataDetail, group, false);
					return items?.length || 0;
			  })
			: mergedData.length;

		// Verificar si hay más datos
		if (totalRows && totalLoaded >= totalRows) {
			noMoreDataRef.current = true;
			return;
		}

		isFetchingRef.current = true;
		setInternalLoading(true);

		// Marcar que estamos cargando más datos para el merge
		isLoadingMoreRef.current = true;

		try {
			// Cargar nuevos datos (esto actualiza el estado del modal con data.items)
			// El useEffect detectará el cambio en data y hará el merge automáticamente
			await dataHandler({ ...searchParams, page: nextPage }, false, false);
			setCurrentPage(nextPage);
		} catch (error) {
			console.error("Error loading more data:", error);
			isLoadingMoreRef.current = false;
		} finally {
			setInternalLoading(false);
			isFetchingRef.current = false;
		}
	}, [dataHandler, searchParams, currentPage, mergedData, headerDetail, totalRows, internalLoading]);

	// Determinar qué handler usar y el estado de carga
	const activeLoadHandler = dataHandler ? handleAutoLoadMore : onLoadMore;
	const isLoading = dataHandler ? internalLoading : isLoadingMore;

	// Calcular si hay más datos usando activeData
	const totalLoaded = !isEmpty(headerDetail)
		? sumBy(activeData, (group) => {
				const items = getData(headerDetail.dataDetail, group, false);
				return items?.length || 0;
		  })
		: activeData.length;

	// Si tenemos hasMore explícito, usarlo. Sino, calcularlo
	const hasMoreData = noMoreDataRef.current
		? false
		: hasMore !== null && hasMore !== undefined
		? hasMore
		: totalRows
		? totalLoaded < totalRows
		: true;

	// Reset de página cuando cambian searchParams
	useEffect(() => {
		setCurrentPage(1);
		isFetchingRef.current = false;
	}, [searchParams]);

	// Detectar scroll del modal para infinite scroll
	useEffect(() => {
		if (!enableInfiniteScroll || !activeLoadHandler || !sentinelRef.current) {
			return undefined;
		}

		let observer = null;
		let timeoutId = null;

		// Buscar el contenedor con scroll del modal
		const findScrollContainer = () => {
			let element = containerRef.current;
			while (element && element !== document.body) {
				const classes = element.className || "";
				const style = window.getComputedStyle(element);
				if (
					classes.includes("modalContent") ||
					classes.includes("scrolling") ||
					style.overflowY === "auto" ||
					style.overflowY === "scroll"
				) {
					return element;
				}
				element = element.parentElement;
			}
			return null;
		};

		const setupObserver = () => {
			const scrollContainer = findScrollContainer();
			const sentinel = sentinelRef.current;

			if (!sentinel || hasMoreData === false || flatData.length === 0) {
				return;
			}

			if ("IntersectionObserver" in window) {
				observer = new IntersectionObserver(
					(entries) => {
						const [entry] = entries;

						if (entry.isIntersecting) {
							// No cargar durante la carga inicial
							if (hasMoreData !== false && !isLoading && !isFetchingRef.current && flatData.length > 0 && !isInitialLoading) {
								activeLoadHandler();
							}
						}
					},
					{
						root: scrollContainer,
						rootMargin: "200px",
						threshold: 0,
					}
				);

				observer.observe(sentinel);
			}
		};

		// Delay para asegurar que el DOM esté listo
		timeoutId = setTimeout(setupObserver, 300);

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			if (observer && sentinelRef.current) {
				observer.unobserve(sentinelRef.current);
			}
		};
	}, [enableInfiniteScroll, activeLoadHandler, hasMoreData, isLoading, flatData.length, isInitialLoading]);

	// Mostrar loading completo durante la carga inicial
	if (isInitialLoading && isEmpty(flatData)) {
		return (
			<div className={styles.cardsContainer} ref={containerRef}>
				<div className={styles.emptyState}>
					<div
						style={{
							textAlign: "center",
							padding: "40px 20px",
							color: "#666",
							fontSize: "1.1rem",
						}}>
						<Icon loading name="spinner" size="big" />
						<div style={{ marginTop: "15px" }}>Cargando...</div>
					</div>
				</div>
			</div>
		);
	}

	if (isEmpty(flatData)) {
		return (
			<div className={styles.cardsContainer} ref={containerRef}>
				<div className={styles.emptyState}>
					<Header as="h3" color="grey">
						<div className={styles.emptyIcon}>
							<Icon.Group size="large">
								<Icon name="list alternate outline" />
								<Icon corner name="close" color="red" />
							</Icon.Group>
						</div>
						No se ha encontrado ningun dato
					</Header>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.cardsContainer} ref={containerRef}>
			{map(flatData, (item) => {
				if (item.type === "header") {
					return (
						<div key={item.key} className={styles.cardHeader}>
							{item.title}
						</div>
					);
				}
				return renderCard(item.data, item.key);
			})}

			{/* Sentinel para infinite scroll */}
			{enableInfiniteScroll && hasMoreData !== false && <div ref={sentinelRef} style={{ height: "1px", width: "100%" }} />}

			{/* Indicador de carga para scroll infinito */}
			{isLoading && !isInitialLoading && (
				<div
					style={{
						textAlign: "center",
						padding: "20px",
						color: "#666",
						fontSize: "1rem",
					}}>
					<Icon loading name="spinner" />
					Cargando más resultados...
				</div>
			)}
		</div>
	);
};

CardTable.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
	headerDetail: PropTypes.object,
	setRowStyle: PropTypes.func,
	clickedRowColors: PropTypes.string,
	onHandlerTable: PropTypes.func,
	handlerClick: PropTypes.func,
	formatData: PropTypes.func.isRequired,
	clikedData: PropTypes.object,
	isPDF: PropTypes.bool,
	cardLine1: PropTypes.array,
	cardLine2: PropTypes.array,
	cardLine3: PropTypes.array,
	cardLine4: PropTypes.array,
	multipleHandler: PropTypes.func,
	concatKeys: PropTypes.array,
	// Scroll infinito
	enableInfiniteScroll: PropTypes.bool,
	onLoadMore: PropTypes.func, // Opcional: handler manual
	isLoadingMore: PropTypes.bool, // Opcional: estado manual
	hasMore: PropTypes.bool, // Opcional: se calcula automáticamente si no se proporciona
	// Manejo automático
	dataHandler: PropTypes.func, // Función para cargar datos automáticamente
	searchParams: PropTypes.object, // Parámetros de búsqueda
	totalRows: PropTypes.number, // Total de registros disponibles
	mergeConfig: PropTypes.object, // Configuración para merge automático { groupKey, itemsKey, idKey }
};

export default CardTable;
