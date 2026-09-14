import React from "react";
import { Button, Modal, Icon, Grid, GridColumn } from "semantic-ui-react";
import { isEmpty, pick, get, flatten } from "lodash";
import PropTypes from "prop-types";

// Components
import Input from "../../components/Input";
import InputDateRange from "../../components/InputDateRange";

// utils
import { searchKeyFormatter } from "../../Utils/functions";

// Styles
import styles from "./styles.module.css";

const AdvancedFilter = ({
	onClose,
	searchableItems,
	searchParams,
	setSearchParams,
	dataHandler,
	formData,
	setFormData,
	setIsClearButton,
	clearFilter,
	customSearchKeys,
}) => {
	const handleInput = (e, name) => {
		const content = get(e, "target.value", "");
		setFormData({
			...formData,
			[name]: content,
		});
	};
	const handleInputDate = (content, name) => {
		setFormData({
			...formData,
			[name]: content,
		});
	};

	const inputGenerator = ({ key, label, format }) => {
		const validKey = key.split(",").join(".");
		switch (format) {
			case "dateTime":
			case "date":
				return (
					<InputDateRange
						key={validKey}
						label={label}
						value={get(formData, `${validKey}`, "")}
						className={styles.inputChannel}
						onChange={(e) => {
							handleInputDate(e, validKey);
						}}
					/>
				);

			default:
				return (
					<Input
						key={validKey}
						icon="filter"
						label={label}
						required
						placeholder="Filtrar..."
						value={get(formData, `${validKey}`, "")}
						fluid
						className={styles.inputChannel}
						onChange={(e) => {
							handleInput(e, validKey);
						}}
					/>
				);
		}
	};

	const filtersRender = () => {
		let index = 1;
		let rightRender = [];
		let leftRender = [];
		let validKey = "";

		const joinSearChableItems = [...searchableItems, ...customSearchKeys];

		let validSearChableItems = joinSearChableItems.map((item) => {
			let multipleColumsKeys = [];
			if (get(item, "multipleColumns", false)) {
				item.multipleColumns.forEach((column) => {
					validKey = searchKeyFormatter(column.key);
					multipleColumsKeys = [...multipleColumsKeys, { ...column, key: validKey }];
				});
				return multipleColumsKeys;
			}
			validKey = searchKeyFormatter(item.key); /* item.key.split(",").join("."); */
			return { ...item, key: validKey };
		});

		validSearChableItems = flatten(validSearChableItems);
		validSearChableItems.forEach((item) => {
			index += 1;
			if ((index + 1) % 2 === 0) {
				leftRender = [...leftRender, inputGenerator(item)];
			} else {
				rightRender = [...rightRender, inputGenerator(item)];
			}
		});

		return (
			<Grid columns={2}>
				<GridColumn className={styles.gridColumnLeft}>{rightRender}</GridColumn>
				<GridColumn className={styles.gridColumnRight}>{leftRender}</GridColumn>
			</Grid>
		);
	};

	const onFilter = () => {
		let validFilter = false;
		let validFormData = {};

		Object.entries(formData).forEach(([key, value]) => {
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
			dataHandler(params);
			onClose();
		}
	};

	return (
		<Modal className={styles.modal} open closeIcon onClose={onClose}>
			<Modal.Header className={styles.modalHeader}>
				<div>
					<Icon name="filter" />
					Filtro Avanzado
				</div>
			</Modal.Header>
			<Modal.Content scrolling>{filtersRender()}</Modal.Content>
			<Modal.Actions className={styles.modalFooter}>
				<Button className={styles.negativeButton} onClick={clearFilter}>
					<Icon name="filter" />
					Limpiar
				</Button>
				<div>
					<Button className={styles.negativeButton} onClick={onClose}>
						Atrás
					</Button>
					<Button className={styles.positiveButton} onClick={onFilter}>
						Filtrar
					</Button>
				</div>
			</Modal.Actions>
		</Modal>
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
