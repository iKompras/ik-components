import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";
import IkModal from "../IkModal";
import IkTable from "../IkTable";
import styles from "./styles.module.css";

const RESERVED_PARAMS = ["rows", "page", "orderKey", "orderDir", "fields"];

const getInitials = (text = "") => {
	const parts = String(text).trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "?";
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

const normalizeRow = (row) => {
	const val = row.value ?? row.id ?? row.key;
	return {
		...row,
		value: val,
		text: row.text || row.label || row.name || "",
		subtitle: row.subtitle || row.email || row.description || "",
	};
};

const FilterModal = ({
	isOpen,
	onClose,
	title = "Buscar y seleccionar",
	iconName = "search",
	modalView = "table",
	placeholder = "Buscar...",
	options = [],
	fetchOptions = null,
	multiple = false,
	selectedValues = [],
	onConfirm,
	modalColumns = [],
	pageSize = 5,
	loading: externalLoading = false,
}) => {
	const [draftSelected, setDraftSelected] = useState(() => {
		return Array.isArray(selectedValues) ? selectedValues : [];
	});
	const [tableData, setTableData] = useState([]);
	const [totalRows, setTotalRows] = useState(0);
	const [internalLoading, setInternalLoading] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [knownRowsMap, setKnownRowsMap] = useState({});
	const [listQuery, setListQuery] = useState("");
	const [listPage, setListPage] = useState(1);
	const listDebounceRef = useRef(null);
	const listContainerRef = useRef(null);
	const listSentinelRef = useRef(null);

	const isAsync = typeof fetchOptions === "function";
	const isLoading = externalLoading || internalLoading;

	const extractQueryFromParams = (params = {}) => {
		const activeKeys = Object.keys(params).filter((k) => {
			return !RESERVED_PARAMS.includes(k) && params[k];
		});
		if (activeKeys.length === 0) return { field: "all", query: "" };
		const field = activeKeys[0];
		return { field, query: String(params[field]) };
	};

	const loadData = useCallback(
		async (params = { page: 1, rows: pageSize }, append = false) => {
			const { field, query } = extractQueryFromParams(params);
			const page = params.page || 1;
			const rows = params.rows || pageSize;

			if (isAsync) {
				if (append) {
					setIsLoadingMore(true);
				} else {
					setInternalLoading(true);
				}
				try {
					const result = await fetchOptions({
						query,
						field,
						page,
						rows,
						orderKey: params.orderKey,
						orderDir: params.orderDir,
					});
					const rawList = Array.isArray(result) ? result : Array.isArray(result?.data) ? result.data : [];
					const normalized = rawList.map(normalizeRow);
					setTableData((prev) => {
						if (!append) return normalized;
						const existingIds = new Set(
							prev.map((item) => {
								return item.value;
							})
						);
						return [
							...prev,
							...normalized.filter((item) => {
								return !existingIds.has(item.value);
							}),
						];
					});
					setTotalRows(typeof result?.totalRows === "number" ? result.totalRows : normalized.length);
					setKnownRowsMap((prev) => {
						const next = { ...prev };
						normalized.forEach((item) => {
							next[item.value] = item;
						});
						return next;
					});
				} catch (err) {
					if (!append) {
						setTableData([]);
						setTotalRows(0);
					}
				} finally {
					setInternalLoading(false);
					setIsLoadingMore(false);
				}
				return;
			}

			// Local filtering & pagination
			const normalizedAll = options.map(normalizeRow);
			const q = query.toLowerCase().trim();
			const filtered = !q
				? normalizedAll
				: normalizedAll.filter((item) => {
						if (field && field !== "all" && item[field] !== undefined) {
							return String(item[field]).toLowerCase().includes(q);
						}
						return String(item.text).toLowerCase().includes(q) || String(item.subtitle).toLowerCase().includes(q);
				  });

			const start = (page - 1) * rows;
			const nextSlice = filtered.slice(start, start + rows);
			setTableData((prev) => {
				if (!append) return nextSlice;
				const existingIds = new Set(
					prev.map((item) => {
						return item.value;
					})
				);
				return [
					...prev,
					...nextSlice.filter((item) => {
						return !existingIds.has(item.value);
					}),
				];
			});
			setTotalRows(filtered.length);
			setKnownRowsMap((prev) => {
				const next = { ...prev };
				normalizedAll.forEach((item) => {
					next[item.value] = item;
				});
				return next;
			});
		},
		[fetchOptions, isAsync, options, pageSize]
	);

	useEffect(() => {
		if (isOpen) {
			setListQuery("");
			setListPage(1);
			setDraftSelected(Array.isArray(selectedValues) ? selectedValues : []);
			loadData({ page: 1, rows: pageSize }, false);
		}
		return () => {
			if (listDebounceRef.current) clearTimeout(listDebounceRef.current);
		};
	}, [isOpen, pageSize, loadData]);

	const hasMoreList = tableData.length < totalRows;

	// Infinite scroll observer for modalView="list"
	useEffect(() => {
		if (!isOpen || modalView !== "list" || !hasMoreList || isLoading || isLoadingMore) {
			return undefined;
		}
		const sentinel = listSentinelRef.current;
		const root = listContainerRef.current;
		if (!sentinel || !root) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					const nextPage = listPage + 1;
					setListPage(nextPage);
					loadData({ page: nextPage, rows: pageSize, all: listQuery }, true);
				}
			},
			{ root, threshold: 0.1 }
		);

		observer.observe(sentinel);
		return () => {
			observer.disconnect();
		};
	}, [isOpen, modalView, hasMoreList, isLoading, isLoadingMore, listPage, pageSize, listQuery, loadData]);

	const tableColumns = useMemo(() => {
		const baseCols =
			Array.isArray(modalColumns) && modalColumns.length > 0
				? modalColumns
				: [
						{ key: "text", label: "Nombre / Registro", order: true, width: 7 },
						{ key: "subtitle", label: "Detalle", order: true, width: 8 },
				  ];
		if (multiple) {
			return [
				{
					key: "value",
					label: "",
					multiple: true,
					canSort: false,
					canFilter: false,
					width: 1,
					style: { width: "48px", minWidth: "48px", maxWidth: "48px" },
				},
				...baseCols,
			];
		}
		return baseCols;
	}, [modalColumns, multiple]);

	const checkAllData = useMemo(() => {
		if (!multiple) return [];
		return draftSelected.map((val) => {
			return knownRowsMap[val] || { value: val };
		});
	}, [draftSelected, knownRowsMap, multiple]);

	if (!isOpen) return null;

	const handleConfirm = (overrideSelected) => {
		if (!onConfirm) return;
		const finalVals = Array.isArray(overrideSelected) ? overrideSelected : draftSelected;
		const items = finalVals
			.map((v) => {
				return knownRowsMap[v];
			})
			.filter(Boolean);
		if (multiple) {
			onConfirm(finalVals, items);
		} else {
			onConfirm(finalVals[0] ?? null, items[0] ?? null);
		}
		onClose();
	};

	const footerButtons = [
		<Button
			key="modal-filter-clear"
			type="button"
			className={styles.modalClearBtn}
			disabled={draftSelected.length === 0}
			onClick={() => {
				setDraftSelected([]);
			}}>
			<Icon name="eraser" />
			Limpiar ({draftSelected.length})
		</Button>,
	];

	return (
		<IkModal
			size="large"
			style={{ maxWidth: "920px" }}
			ignoreContent
			closeInside
			iconName={iconName}
			title={title}
			mode="Add"
			saveLabel={multiple ? `Confirmar (${draftSelected.length})` : "Seleccionar"}
			cancelLabel="Cancelar"
			saveDisabled={!multiple && draftSelected.length === 0}
			footerButtons={footerButtons}
			onClose={onClose}
			onSuccess={() => {
				handleConfirm();
			}}>
			<div className={styles.modalWrapper}>
				{modalView === "list" ? (
					<>
						<div className={styles.filterBar}>
							<div className={styles.inputArea}>
								<Icon name="search" className={styles.searchIcon} />
								<input
									type="text"
									className={styles.textInput}
									placeholder={placeholder}
									value={listQuery}
									onChange={(e) => {
										const nextQ = e.target.value;
										setListQuery(nextQ);
										setListPage(1);
										if (listDebounceRef.current) clearTimeout(listDebounceRef.current);
										listDebounceRef.current = setTimeout(() => {
											loadData({ page: 1, rows: pageSize, all: nextQ }, false);
										}, 300);
									}}
								/>
							</div>
							<div className={styles.rightActions}>
								{isLoading ? (
									<span className={styles.actionSlot} aria-label="Cargando">
										<Icon loading name="spinner" className={styles.spinnerIcon} />
									</span>
								) : (
									listQuery && (
										<button
											type="button"
											className={`${styles.actionSlot} ${styles.clearBtn}`}
											aria-label="Limpiar búsqueda"
											onClick={() => {
												setListQuery("");
												setListPage(1);
												loadData({ page: 1, rows: pageSize }, false);
											}}>
											<Icon name="close" className={styles.clearIcon} />
										</button>
									)
								)}
							</div>
						</div>

						<div className={styles.modalListCard} ref={listContainerRef}>
							{isLoading ? (
								Array.from({ length: pageSize }).map((_, idx) => {
									return (
										<div key={`list-sk-${idx}`} className={styles.skeletonOption}>
											<div className={styles.skeletonCircle} />
											<div className={styles.skeletonLines}>
												<div className={styles.skeletonLine} style={{ width: "55%" }} />
												<div className={styles.skeletonLine} style={{ width: "38%", height: "0.6rem" }} />
											</div>
										</div>
									);
								})
							) : tableData.length === 0 ? (
								<div className={styles.modalEmptyCell}>
									<Icon name="search" size="large" style={{ color: "#cbd5e1", marginBottom: "0.35rem" }} />
									<div>No se encontraron resultados</div>
								</div>
							) : (
								<>
									{tableData.map((item) => {
										const isSelected = draftSelected.includes(item.value);
										return (
											<button
												type="button"
												key={item.key || item.value}
												className={`${styles.modalListItem} ${isSelected ? styles.modalListItemSelected : ""}`}
												onClick={() => {
													if (multiple) {
														setDraftSelected((prev) => {
															return prev.includes(item.value)
																? prev.filter((v) => {
																		return v !== item.value;
																  })
																: [...prev, item.value];
														});
													} else {
														setDraftSelected([item.value]);
													}
												}}
												onDoubleClick={() => {
													if (!multiple) {
														handleConfirm([item.value]);
													}
												}}>
												<span className={styles.menuItemLeft}>
													{item.avatar ? (
														<img src={item.avatar} alt={item.text} className={styles.avatar} />
													) : (
														<span className={styles.avatarFallback}>{getInitials(item.text)}</span>
													)}
													<span className={styles.menuItemTextGroup}>
														<span className={styles.modalPrimaryText}>{item.text}</span>
														{item.subtitle && <span className={styles.modalSecondaryText}>{item.subtitle}</span>}
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
									})}
									{hasMoreList && <div ref={listSentinelRef} style={{ height: "1px", flexShrink: 0 }} />}
									{isLoadingMore && (
										<div className={styles.modalListLoadingMore}>
											<Icon loading name="spinner" /> Cargando más...
										</div>
									)}
								</>
							)}
						</div>
					</>
				) : (
					<IkTable
						columns={tableColumns}
						data={tableData}
						totalRows={totalRows}
						defaultParams={{ rows: pageSize, page: 1 }}
						dataHandler={loadData}
						loading={isLoading}
						skeletonRows={pageSize}
						showAddButton={false}
						hidePrintButtons
						print={{ printable: false, visiblePDF: false, visibleExcel: false }}
						searcher={{
							searchable: true,
							filterButton: false,
							placeholder,
						}}
						checkAllData={checkAllData}
						handlerMultiple={(selectedRows) => {
							if (!multiple) return;
							const nextVals = (selectedRows || []).map((r) => {
								return r.value;
							});
							setDraftSelected((prev) => {
								if (
									prev.length === nextVals.length &&
									prev.every((v, idx) => {
										return v === nextVals[idx];
									})
								) {
									return prev;
								}
								return nextVals;
							});
						}}
						handlerTable={(action, row) => {
							if (!row) return;
							if (!multiple) {
								if (action === "onClick") {
									setDraftSelected([row.value]);
								} else if (action === "Watch") {
									handleConfirm([row.value]);
								}
							}
						}}
					/>
				)}
			</div>
		</IkModal>
	);
};

FilterModal.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	title: PropTypes.string,
	iconName: PropTypes.string,
	modalView: PropTypes.oneOf(["table", "list"]),
	placeholder: PropTypes.string,
	options: PropTypes.array,
	fetchOptions: PropTypes.func,
	multiple: PropTypes.bool,
	selectedValues: PropTypes.array,
	onConfirm: PropTypes.func,
	modalColumns: PropTypes.array,
	pageSize: PropTypes.number,
	loading: PropTypes.bool,
};

export default FilterModal;
