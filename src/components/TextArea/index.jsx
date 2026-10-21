import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";
import { Label, Icon } from "semantic-ui-react";
import InputLabel from "../InputLabel";
import { size, compact, join, defaultTo } from "lodash";
import styles from "./styles.module.css";

const TextAreaInput = ({
	value,
	name,
	label,
	onChange,
	disabled = false,
	error,
	isPassword = false,
	minRows = 1,
	maxRows,
	showRequired = false,
	placeholder = "Escribe aquí...",
	showCount = false,
	maxLength,
	className = "",
}) => {
	const [show, setShow] = useState(false);

	// En modo solo lectura (disabled, ej. Ver) el enmascarado por CSS
	// (-webkit-text-security) no es fiable en todos los navegadores.
	// Se muestran bullets reales y con el ojo se alterna al valor real.
	const rawValue = defaultTo(value, "");
	const maskedView = Boolean(isPassword && !show && disabled && rawValue);
	const displayValue = maskedView ? String(rawValue).replace(/[^\n]/g, "•") : rawValue;
	const maskStyle = isPassword && !show && !maskedView ? { WebkitTextSecurity: "disc" } : undefined;

	return (
		<div className={styles.wrapper}>
			{label && (
				<div className={styles.labelRow}>
					<InputLabel className={styles.label} required={showRequired}>
						{label}
						{isPassword && (
							<Icon
								name={show ? "eye slash" : "eye"}
								className={styles.labelIcon}
								link
								title={show ? "Ocultar token" : "Ver token"}
								aria-label={show ? "Ocultar token" : "Ver token"}
								onClick={() => {
									return setShow(!show);
								}}
							/>
						)}
					</InputLabel>
					<div className={styles.labelActions}>
						{showCount && maxLength && (
							<span className={styles.charCount}>
								{size(value)}/{maxLength}
							</span>
						)}
					</div>
				</div>
			)}

			<div className={styles.inputWrapper}>
				<TextareaAutosize
					minRows={minRows}
					maxRows={maxRows}
					name={name}
					className={join(compact([styles.textarea, error && styles.error, className]), " ")}
					value={displayValue}
					onChange={onChange}
					disabled={disabled}
					placeholder={placeholder}
					style={maskStyle}
				/>

				<div className={styles.iconsContainer}>
					{value && !disabled && (
						<Icon
							name="close"
							className={styles.icon}
							onClick={() => {
								return onChange({ target: { name, value: "" } });
							}}
						/>
					)}
				</div>
			</div>

			{error && (
				<Label basic color="red" className={styles.errorLabel}>
					{error}
				</Label>
			)}
		</div>
	);
};

TextAreaInput.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	isPassword: PropTypes.bool,
	showRequired: PropTypes.bool,
	minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	placeholder: PropTypes.string,
	showCount: PropTypes.bool,
	maxLength: PropTypes.number,
	className: PropTypes.string,
};

export default TextAreaInput;
