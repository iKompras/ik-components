/* eslint react/no-array-index-key: 0 */
import React, { useState, useEffect } from "react";

// pakages
import PropTypes from "prop-types";
import { Table, Checkbox } from "semantic-ui-react";
import { get, isEmpty } from "lodash";

// utils
import { searchKeyFormatter } from "../../Utils/functions";

// Styles
import styles from "./styles.module.css";

const HeaderTable = ({
	columns = [],
	searchParams,
	setSearchParams,
	dataHandler,
	isPDF,
	concatAll,
	setConcatAll,
	totalRows,
	widthAuto,
}) => {
	//	hooks
	const [columnsRendered, setColumnsRendered] = useState([]);
	const [multColumnsRendered, setMultColumnsRendered] = useState([]);
	const [sortDirection, setSortDirection] = useState("");
	const [sortedColumnKey, setSortedColumnKey] = useState("");

	//	useEffect
	useEffect(() => {
		headerRender();
		setSortDirection(searchParams.orderDir === "desc" ? "descending" : "ascending");
		setSortedColumnKey(searchParams.orderKey);
	}, [searchParams, sortDirection, sortedColumnKey]);

	useEffect(() => {
		headerRender();
	}, [concatAll, columns]);

	const handleSort = (key) => {
		const dir = sortDirection === "descending" ? "ascending" : "descending";
		let validKey;
		if (!isEmpty(key)) validKey = searchKeyFormatter(key);
		const newParams = {
			...searchParams,
			page: 1,
			orderKey: validKey,
			orderDir: dir === "descending" ? "desc" : "asc",
		};

		setSortDirection(dir);
		setSortedColumnKey(validKey);
		if (!isEmpty(newParams)) {
			setSearchParams(newParams);
			dataHandler(newParams);
		}
	};

	const multipleHandler = () => {
		const newParams = {
			...searchParams,
			rows: totalRows,
		};
		setConcatAll(!concatAll);
		dataHandler(newParams, false, !concatAll, true);
	};

	const headerRender = ({ subColumns = [], multStatus = false } = {}) => {
		let columnsData = columns;
		if (!isEmpty(subColumns)) columnsData = subColumns;
		let multipleColumnsStatus = false;
		let subColumnsGetter = [];

		const renderedColumns = columnsData.map(
			(
				{
					key,
					label,
					width,
					headerPosition,
					multipleColumns = [],
					multiple = false,
					action = [],
					canSort = true,
					twoLines = false,
					line1 = {},
					line2 = {},
					hidden = false,
					color = "hsl(0, 0%, 80%)",
					style = {},
					orderKey,
				},
				index
			) => {
				let validKey;
				let validOrderKey;
				if (!isEmpty(key)) validKey = searchKeyFormatter(key);
				validOrderKey = validKey;
				if (!isEmpty(orderKey)) validOrderKey = searchKeyFormatter(orderKey);
				if (hidden) return null;

				if (!isEmpty(multipleColumns) && isEmpty(subColumns)) {
					multipleColumnsStatus = true;
					subColumnsGetter = [...subColumnsGetter, ...multipleColumns];
					return (
						<Table.HeaderCell
							key={index}
							style={{ backgroundColor: color }}
							className={styles.tableCellHeader}
							colSpan={multipleColumns.length}
							textAlign={headerPosition || "center"}>
							{label}
						</Table.HeaderCell>
					);
				}
				if (multiple) {
					return (
						<Table.HeaderCell
							key={index}
							style={{ backgroundColor: color, ...style }}
							className={styles.tableCellHeader}
							textAlign="center"
							onClick={multipleHandler}>
							<Checkbox checked={concatAll} />
						</Table.HeaderCell>
					);
				}
				if (twoLines) {
					return (
						<Table.HeaderCell
							key={index}
							rowSpan={!isEmpty(multipleColumns) && isEmpty(subColumns) ? "1" : "2"}
							style={{ backgroundColor: color }}
							className={styles.tableCellHeader}
							textAlign={headerPosition || "center"}
							sorted={canSort && validOrderKey === sortedColumnKey ? sortDirection : null}
							onClick={
								canSort
									? () => {
											handleSort(validOrderKey);
									  }
									: null
							}
							width={width || 1}>
							<div> {get(line1, "label", "")}</div>
							<div> {get(line2, "label", "")}</div>
						</Table.HeaderCell>
					);
				}
				if (!isEmpty(action) && isPDF) {
					return null;
				}

				return (
					<Table.HeaderCell
						key={index}
						rowSpan={!isEmpty(multipleColumns) && isEmpty(subColumns) ? "1" : "2"}
						style={{ backgroundColor: color, ...style }}
						className={styles.tableCellHeader}
						textAlign={headerPosition || "center"}
						sorted={canSort && validOrderKey === sortedColumnKey ? sortDirection : null}
						onClick={
							canSort
								? () => {
										handleSort(validOrderKey);
								  }
								: null
						}
						width={widthAuto ? undefined : width || 1}>
						{label}
					</Table.HeaderCell>
				);
			}
		);

		if (!multStatus) {
			setColumnsRendered(<Table.Row>{renderedColumns}</Table.Row>);
		}

		if (multStatus) {
			setMultColumnsRendered(<Table.Row>{renderedColumns}</Table.Row>);
		}

		if (multipleColumnsStatus) {
			headerRender({
				subColumns: subColumnsGetter,
				multStatus: multipleColumnsStatus,
			});
		}
	};

	return (
		<Table.Header className={styles.headerTable}>
			{columnsRendered}
			{multColumnsRendered}
		</Table.Header>
	);
};

HeaderTable.propTypes = {
	columns: PropTypes.array,
	setSearchParams: PropTypes.func,
	dataHandler: PropTypes.func,
	searchParams: PropTypes.object,
	isPDF: PropTypes.bool,
	concatAll: PropTypes.bool,
	setConcatAll: PropTypes.func,
	totalRows: PropTypes.number,
	widthAuto: PropTypes.bool,
};

export default HeaderTable;
