/* eslint react/no-array-index-key: 0 */
import React from "react";

// pakages
import PropTypes from "prop-types";

import { Table, Pagination, Icon, Select } from "semantic-ui-react";

// Styles
import styles from "./styles.module.css";

const FooterTable = ({ searchParams, setSearchParams, dataHandler, totalRows, visiblePagination }) => {
	const rowSelector = (value) => {
		const params = { ...searchParams, rows: value };
		setSearchParams(params);
		dataHandler(params);
	};

	const onPageChanged = (e, { activePage }) => {
		e.preventDefault();
		const params = { ...searchParams, page: activePage };
		setSearchParams(params);
		dataHandler(params);
	};

	const renderItemCount = () => {
		if (totalRows <= 1) {
			return <span className={styles.itemCount}>Elementos: 1-1 / {totalRows}</span>;
		}
		const beginRow = searchParams.rows * searchParams.page - searchParams.rows + 1;
		let finalRow = searchParams.rows * searchParams.page;
		if (searchParams.page === totalPageCount()) finalRow = totalRows;
		return (
			<span key={1} className={styles.itemCount}>
				{`Elementos: ${beginRow}-${finalRow}/ ${totalRows}`}
			</span>
		);
	};

	const totalPageCount = () => {
		const pages = parseInt(totalRows / searchParams.rows, 10);
		const isDecimal = totalRows % searchParams.rows;
		if (pages < 1) {
			return 1;
		}
		if (isDecimal > 0) return pages + 1;
		return pages;
	};

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{visiblePagination && (
				<Table.Footer className={styles.footerContainer}>
					<Table.Row>
						<Table.HeaderCell colSpan="34" className={styles.paginationCell}>
							<div className={styles.content}>
								<div className={styles.paginationContainer}>
									<Pagination
										className={styles.pagination}
										activePage={searchParams.page}
										ellipsisItem={{
											content: <Icon key={1} name="ellipsis horizontal" />,
											icon: true,
										}}
										firstItem={{ content: <Icon key={2} name="angle double left" />, icon: true }}
										lastItem={{ content: <Icon key={3} name="angle double right" />, icon: true }}
										prevItem={{ content: <Icon key={4} name="angle left" />, icon: true }}
										nextItem={{ content: <Icon key={5} name="angle right" />, icon: true }}
										totalPages={String(totalPageCount())}
										onPageChange={onPageChanged}
									/>
									{totalRows >= 1 && renderItemCount()}
								</div>
								<div className={styles.rowSelectorContainer}>
									<span className={styles.span}>Filas:</span>
									<Select
										className={styles.rowSelector}
										value={searchParams.rows}
										onChange={(e, { value }) => {
											rowSelector(value);
										}}
										options={[
											{ key: "1", value: 5, text: "5" },
											{ key: "2", value: 10, text: "10" },
											{ key: "3", value: 15, text: "15" },
											{ key: "4", value: 20, text: "20" },
											{ key: "5", value: 25, text: "25" },
											{ key: "6", value: 50, text: "50" },
										]}
									/>
								</div>
							</div>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			)}
		</>
	);
};

FooterTable.propTypes = {
	searchParams: PropTypes.object,
	setSearchParams: PropTypes.func,
	dataHandler: PropTypes.func,
	totalRows: PropTypes.number,
	visiblePagination: PropTypes.bool,
};

export default FooterTable;
