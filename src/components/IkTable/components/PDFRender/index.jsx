import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Table, Header } from "semantic-ui-react";
import { getTimeLabel } from "../../Utils/functions";

import HeaderTable from "../../TableComponents/HeaderTable";
import BodyTable from "../../TableComponents/BodyTable";

// Styles
import styles from "./styles.module.css";

const PDFRender = ({
	data,
	columns,
	clickedRowColor,
	handlerTable,
	printHeader,
	searchParams,
	setSearchParams,
	dataHandler,
	sumData,
	headerDetail,
	customPrintHeader = [],
}) => {
	const getPageMargins = () => {
		return `@page { margin: 20px 20px 20px 20px !important; }`;
	};
	return (
		<div className={styles.container}>
			<style>{getPageMargins()}</style>
			<div className={styles.containerCenter}>
				{isEmpty(customPrintHeader) ? (
					<Header as="h2" icon>
						<span>{printHeader.company}</span>
						<Header.Subheader>{printHeader.title}</Header.Subheader>
					</Header>
				) : (
					customPrintHeader
				)}
			</div>
			<div className={styles.containerUser}>
				<div className={styles.containerLeft}>
					<div>
						<span className={styles.headerTitle}>Usuario:</span>
						{printHeader.user}
					</div>
					<div>
						<span className={styles.headerTitle}>Fecha:</span>
						{getTimeLabel(String(new Date()), false, false, true)}
					</div>
				</div>
				<div className={styles.containerRight}>
					<span className={styles.headerTitle}>Total de filas:</span>
					{!isEmpty(data) && data.length}
				</div>
			</div>
			<div className={styles.tableContainer}>
				<Table sortable celled striped>
					<HeaderTable isPDF columns={columns} searchParams={searchParams} setSearchParams={setSearchParams} dataHandler={dataHandler} />
					<BodyTable
						isPDF
						data={data}
						headerDetail={headerDetail}
						columns={columns}
						clickedRowColor={clickedRowColor}
						handlerTable={handlerTable}
						sumData={sumData}
					/>
				</Table>
			</div>
		</div>
	);
};

PDFRender.propTypes = {
	data: PropTypes.array,
	searchParams: PropTypes.object,
	printHeader: PropTypes.object,
	columns: PropTypes.array,
	customPrintHeader: PropTypes.array,
	handlerTable: PropTypes.func,
	setSearchParams: PropTypes.func,
	dataHandler: PropTypes.func,
	clickedRowColor: PropTypes.string,
	sumData: PropTypes.object,
	headerDetail: PropTypes.object,
};

export default PDFRender;
