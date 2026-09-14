import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { get, isEmpty } from "lodash";

// Styles
import styles from "./styles.module.css";

const InputDateRange = ({ label, value, onChange }) => {
	const [date1, setDate1] = useState("");
	const [date2, setDate2] = useState("");

	useEffect(() => {
		if (!isEmpty(value)) {
			const splitValue = value.split(",");
			setDate1(splitValue[0]);
			setDate2(splitValue[1]);
		} else {
			setDate1("");
			setDate2("");
		}
	}, [value]);

	const handleInput = (e) => {
		const content = get(e, "target.value", "");
		const name = get(e, "target.name", "");

		let currentDate1 = date1;
		let currentDate2 = date2;

		switch (name) {
			case "date1":
				currentDate1 = content;
				break;
			case "date2":
				currentDate2 = content;
				break;

			default:
				break;
		}

		let datevalue = "";
		if (!isEmpty(currentDate1) || !isEmpty(currentDate2)) datevalue = `${currentDate1},${currentDate2}`;
		onChange(datevalue);
	};

	return (
		<div className={styles.container}>
			<div className={styles.input1}>
				<Form.Input
					type="date"
					name="date1"
					label={label}
					required
					placeholder="Filtrar..."
					value={date1}
					fluid
					onChange={(e) => {
						handleInput(e);
					}}
				/>
			</div>
			<div className={styles.input2}>
				<Form.Input
					label=" "
					type="date"
					name="date2"
					placeholder="Filtrar..."
					value={date2}
					fluid
					onChange={(e) => {
						handleInput(e);
					}}
				/>
			</div>
		</div>
	);
};

InputDateRange.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	/* 	className: PropTypes.string, */
	onChange: PropTypes.func,
};

export default InputDateRange;
