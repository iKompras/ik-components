import React, { useState, useEffect } from "react";

// packages
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import { isEqual, isEmpty } from "lodash";

// Table Components
import HeaderTable from "./TableComponents/HeaderTable";
import BodyTable from "./TableComponents/BodyTable";
import FooterTable from "./TableComponents/FooterTable";
import TopTablePlace from "./TableComponents/TopPlace";

//	Styles
import "./Styles/index.css";
import styles from "./styles.module.css";

const IkTable = ({
	data = [],
	columns = [],
	topButtons = [],
	customSearchKeys = [],
	headerDetail = {},
	clickedRowColor = "hsl(215, 75%, 80%)",
	searcher = {},
	searchRefresh = false,
	print = {
		printHeader: { company: "Compañía", title: "Título", user: "Usuario" },
		visiblePDF: false,
		visibleExcel: false,
		printable: false,
	},

	visibleTopPlace = true,
	visiblePagination = true,
	defaultParams = { rows: 10, page: 1 },
	totalRows = 0,
	setRowStyle,
	addButton = {},
	extraAddButtons = null,
	showAddButton = true,
	onAddButtonClick,
	filteredPrintData,
	checkAllData,
	onChangeDeselect = true,
	sumData = {},
	handlerTable,
	dataHandler,
	handlerMultiple = () => {},
	cafParams,
	cafClearButton = false,
	widthAuto = false,
	mobileCardView = false,
	cardLine1 = [],
	cardLine2 = [],
	cardLine3 = [],
	cardLine4 = [],
	onLoadMore = null, // Handler personalizado para scroll infinito
	isLoadingMore = false, // Estado de carga para scroll infinito
	hasMore = null, // Si hay más datos (si es null, se calcula automáticamente)
	mergeConfig = null, // Configuración para merge automático en scroll infinito
	topPlaceClassName = "", // Clase CSS personalizada para TopPlace
	hidePrintButtons = false, // Oculta los botones de imprimir PDF y Excel
	scrollBody = false, // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
	downloadFileFetcher,
}) => {
	// hooks
	const [searchParams, setSearchParams] = useState({ rows: 10, page: 1 });
	const [concatAll, setConcatAll] = useState(false);
	const [concatValue, setConcatValue] = useState([]);
	const [concatKeys, setConcatKeys] = useState([]);
	const [isClearButton, setIsClearButton] = useState(false);
	const searcherOptions = {
		searchable: true,
		searchPosition: "flex-start",
		searchDisabled: false,
		filterButton: true,
		searchString: "",
		field: "",
		allEnabled: true,
		width: "100%",
	};

	useEffect(() => {
		setSearchParams({ ...searchParams, ...defaultParams });
	}, []);

	useEffect(() => {
		setIsClearButton(cafClearButton);
	}, [cafClearButton]);

	useEffect(() => {
		if (!isEmpty(cafParams)) {
			if (!isEqual(searchParams, cafParams)) {
				setSearchParams(cafParams);
			}
		}
	}, [cafParams]);

	return (
		<>
			{visibleTopPlace && (
				<TopTablePlace
					data={data}
					columns={columns}
					topButtons={topButtons}
					searcher={{ ...searcherOptions, ...searcher }}
					searchRefresh={searchRefresh}
					addButton={showAddButton ? addButton : null}
					extraAddButtons={extraAddButtons}
					onAddButtonClick={onAddButtonClick}
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					handlerTable={handlerTable}
					dataHandler={dataHandler}
					filteredPrintData={filteredPrintData}
					totalRows={totalRows}
					print={print}
					headerDetail={headerDetail}
					defaultParams={defaultParams}
					customSearchKeys={customSearchKeys}
					sumData={sumData}
					isClearButton={isClearButton}
					setIsClearButton={setIsClearButton}
					topPlaceClassName={topPlaceClassName}
					hidePrintButtons={hidePrintButtons}
				/>
			)}
			{mobileCardView && (
				<div className={styles.cardsContainerMobile}>
					<BodyTable
						data={data}
						columns={columns}
						headerDetail={headerDetail}
						sumData={sumData}
						clickedRowColor={clickedRowColor}
						handlerTable={handlerTable}
						handlerMultiple={handlerMultiple}
						onChangeDeselect={onChangeDeselect}
						concatValue={concatValue}
						setConcatValue={setConcatValue}
						concatKeys={concatKeys}
						setConcatKeys={setConcatKeys}
						concatAll={concatAll}
						setConcatAll={setConcatAll}
						checkAllData={checkAllData}
						setRowStyle={setRowStyle}
						totalRows={totalRows}
						mobileCardView={mobileCardView}
						cardLine1={cardLine1}
						cardLine2={cardLine2}
						cardLine3={cardLine3}
						cardLine4={cardLine4}
						dataHandler={dataHandler}
						searchParams={searchParams}
						setSearchParams={setSearchParams}
						onLoadMore={onLoadMore}
						isLoadingMoreProp={isLoadingMore}
						hasMore={hasMore}
						mergeConfig={mergeConfig}
						downloadFileFetcher={downloadFileFetcher}
					/>
				</div>
			)}
			<div className={`${scrollBody ? styles.tableScroll : ""} ${styles.tableScrollWrapper}`}>
				<Table
					sortable
					celled
					striped
					compact="very"
					className={`${mobileCardView ? styles.tableDesktopOnly : ""} ${widthAuto ? styles.tableWidthAuto : ""}`}>
					<HeaderTable
						columns={columns}
						searchParams={searchParams}
						setSearchParams={setSearchParams}
						totalRows={totalRows}
						dataHandler={dataHandler}
						concatValue={concatValue}
						setConcatValue={setConcatValue}
						concatKeys={concatKeys}
						setConcatKeys={setConcatKeys}
						concatAll={concatAll}
						setConcatAll={setConcatAll}
						widthAuto={widthAuto}
					/>
					<BodyTable
						data={data}
						columns={columns}
						headerDetail={headerDetail}
						sumData={sumData}
						clickedRowColor={clickedRowColor}
						handlerTable={handlerTable}
						handlerMultiple={handlerMultiple}
						onChangeDeselect={onChangeDeselect}
						concatValue={concatValue}
						setConcatValue={setConcatValue}
						concatKeys={concatKeys}
						setConcatKeys={setConcatKeys}
						concatAll={concatAll}
						setConcatAll={setConcatAll}
						checkAllData={checkAllData}
						setRowStyle={setRowStyle}
						totalRows={totalRows}
						mobileCardView={false}
						cardLine1={cardLine1}
						cardLine2={cardLine2}
						cardLine3={cardLine3}
						cardLine4={cardLine4}
						downloadFileFetcher={downloadFileFetcher}
					/>
				</Table>
			</div>
			{visiblePagination && (
				<Table className={`${mobileCardView ? styles.tableDesktopOnly : ""} ${styles.stickyFooterTable}`}>
					<FooterTable
						visiblePagination={visiblePagination}
						searchParams={searchParams}
						setSearchParams={setSearchParams}
						dataHandler={dataHandler}
						totalRows={totalRows}
					/>
				</Table>
			)}
		</>
	);
};

IkTable.propTypes = {
	columns: PropTypes.array,
	data: PropTypes.array,
	filteredPrintData: PropTypes.array,
	checkAllData: PropTypes.array,
	topButtons: PropTypes.array,
	customSearchKeys: PropTypes.array,
	clickedRowColor: PropTypes.string,
	visibleTopPlace: PropTypes.bool,
	visiblePagination: PropTypes.bool,
	onChangeDeselect: PropTypes.bool,
	cafClearButton: PropTypes.bool,
	searchRefresh: PropTypes.bool,
	addButton: PropTypes.object,
	extraAddButtons: PropTypes.node,
	showAddButton: PropTypes.bool,
	onAddButtonClick: PropTypes.func,
	defaultParams: PropTypes.object,
	print: PropTypes.object,
	searcher: PropTypes.object,
	sumData: PropTypes.object,
	cafParams: PropTypes.object,
	headerDetail: PropTypes.object,
	totalRows: PropTypes.number,
	handlerTable: PropTypes.func,
	dataHandler: PropTypes.func,
	handlerMultiple: PropTypes.func,
	setRowStyle: PropTypes.func,
	widthAuto: PropTypes.bool,
	mobileCardView: PropTypes.bool,
	cardLine1: PropTypes.array,
	cardLine2: PropTypes.array,
	cardLine3: PropTypes.array,
	cardLine4: PropTypes.array,
	onLoadMore: PropTypes.func,
	isLoadingMore: PropTypes.bool,
	hasMore: PropTypes.bool,
	mergeConfig: PropTypes.object,
	topPlaceClassName: PropTypes.string,
	hidePrintButtons: PropTypes.bool,
	scrollBody: PropTypes.bool,
	downloadFileFetcher: PropTypes.func,
};

export default IkTable;
