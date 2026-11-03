/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Icon, Select, Popup } from "semantic-ui-react";
import { isEmpty, omit } from "lodash";
import styles from "./styles.module.css";

const Input = forwardRef((props, ref) => {
	const {
		isPassword = false,
		name,
		value,
		className,
		icon,
		label,
		infoLabel,
		hint,
		hintWide = false,
		popupPosition = "top center",
		labelClassName = "",
		placeholder,
		disabled,
		rounded,
		onChange,
		onKeyPress,
		onClear,
		dropdown,
		dropdownPosition = "left",
		required = false,
		fluid = true,
		type = "text",
		hideClear = false,
		hideDropdown = false,
		customBorderRadius,
	} = props;
	const radiusDefault = customBorderRadius || (rounded ? "1rem" : "0.25rem");
	const radiusRounded = customBorderRadius || "1rem";
	const input = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [inputType, setInputType] = useState(isPassword ? "password" : "text");
	const [passwordIcon, setPasswordIcon] = useState("eye slash");

	useEffect(() => {
		// Aplicar background gris cuando esté deshabilitado
		if (disabled) {
			(ref || input).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important");
			(ref || input).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important");
		} else {
			(ref || input).current.style.removeProperty("background-color");
			(ref || input).current.style.removeProperty("cursor");
		}

		if (rounded) {
			if (isEmpty(value) || disabled) {
				(ref || input).current.style.removeProperty("border-top-left-radius");
				(ref || input).current.style.removeProperty("border-bottom-left-radius");
				(ref || input).current.style.removeProperty("border-top-right-radius");
				(ref || input).current.style.removeProperty("border-bottom-right-radius");
				(ref || input).current.style.removeProperty("border-right");
				if (!isPassword) {
					(ref || input).current.style.setProperty("border-radius", radiusRounded, "important");
					(ref || input).current.style.setProperty(
						"border-right",
						`1px solid ${isFocused ? "var(--inputFocus)" : "var(--inputShader)"}`,
						"important"
					);
				} else {
					(ref || input).current.style.setProperty("border-top-left-radius", radiusRounded, "important");
					(ref || input).current.style.setProperty("border-bottom-left-radius", radiusRounded, "important");
				}
			} else if (hideClear && !isPassword) {
				// Sin botón clear a la derecha: el input debe cerrar su propio borde (p. ej. type=time/date).
				(ref || input).current.style.setProperty("border-radius", radiusRounded, "important");
				(ref || input).current.style.setProperty(
					"border-right",
					`1px solid ${isFocused ? "var(--inputFocus)" : "var(--inputShader)"}`,
					"important"
				);
			} else {
				// Valor con botón clear: borde derecho del input se une al botón de acción.
				(ref || input).current.style.removeProperty("border-radius");
				(ref || input).current.style.setProperty("border-top-left-radius", radiusRounded, "important");
				(ref || input).current.style.setProperty("border-bottom-left-radius", radiusRounded, "important");
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-right", "0", "important");
			}
		} else if (isEmpty(value) || disabled) {
			(ref || input).current.style.setProperty("border-radius", radiusDefault, "important");
			if (!isPassword) {
				(ref || input).current.style.setProperty(
					"border-right",
					`1px solid ${isFocused ? "var(--inputFocus)" : "var(--inputShader)"}`,
					"important"
				);
			} else {
				(ref || input).current.style.setProperty("border-right", "0", "important");
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
			}
		} else if (hideClear && !isPassword) {
			// Mismo caso que arriba (rounded=false): hideClear implica sin botón cancel a la derecha.
			(ref || input).current.style.setProperty("border-radius", radiusDefault, "important");
			(ref || input).current.style.setProperty(
				"border-right",
				`1px solid ${isFocused ? "var(--inputFocus)" : "var(--inputShader)"}`,
				"important"
			);
			(ref || input).current.style.setProperty("border-top-right-radius", radiusDefault, "important");
			(ref || input).current.style.setProperty("border-bottom-right-radius", radiusDefault, "important");
		} else {
			// Valor con botón clear visible: borde derecho en 0 para el grupo input + cancel.
			(ref || input).current.style.setProperty("border-right", "0", "important");
			(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
			(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
		}

		if (!isEmpty(dropdown)) {
			if (dropdownPosition === "left") {
				(ref || input).current.style.setProperty("border-top-left-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-left-radius", "0", "important");
				(ref || input).current.style.setProperty("border-left-color", "transparent", "important");
			} else if (dropdownPosition === "right") {
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
				// Cambio corregido aquí:
				(ref || input).current.style.setProperty("border-right-color", "transparent", "important");
			}
		}
	}, [value, isFocused, dropdown, isPassword, disabled, rounded, hideClear, customBorderRadius, radiusDefault, radiusRounded, ref, input]);

	const trimValue = (e) => {
		if (!isEmpty(value)) {
			const data = { name, value: value.trim() };
			onChange({ ...e, target: data }, data);
		}
	};

	const handleEnter = (e) => {
		const { key } = e;
		if (key === "Enter") {
			e.preventDefault();
			trimValue(e);
			if (onKeyPress) {
				onKeyPress(e);
			}
		}
	};

	const handleToggle = () => {
		const toggle = inputType === "password";
		const typeVal = toggle ? "text" : "password";
		const iconVal = toggle ? "eye" : "eye slash";
		setInputType(typeVal);
		setPasswordIcon(iconVal);
	};

	const clearInput = (e) => {
		const data = { name, value: "" };
		if (props.fieldIndex !== undefined) {
			data.fieldIndex = props.fieldIndex;
		}
		if (props.id !== undefined) {
			data.id = props.id;
		}
		onChange({ ...e, target: data }, data);
		if (onClear) {
			onClear();
		}
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = (e) => {
		trimValue(e);
		setIsFocused(false);
	};

	const getActionStyle = () => {
		if (isPassword) {
			return isFocused ? styles.clearIconFocused : styles.clearIcon;
		}
		if (rounded) {
			return isFocused ? styles.clearRoundedIconLastFocused : styles.clearRoundedIconLast;
		}
		return isFocused ? styles.clearIconLastFocused : styles.clearIconLast;
	};

	const renderLabel = () => {
		if (!label) return undefined;
		if (React.isValidElement(label)) return label;
		const info = infoLabel || hint;
		return (
			<span className={`${styles.labelRoot} ${labelClassName}`.trim()}>
				<span>{label}</span>
				{required ? <span className={styles.labelRequired}> *</span> : null}
				{info ? (
					<Popup
						wide={hintWide ? "very" : true}
						hoverable={hintWide}
						position={popupPosition}
						content={info}
						trigger={<Icon name="info circle" className={styles.infoIcon} />}
					/>
				) : null}
			</span>
		);
	};

	const validProps = omit(props, [
		"ref",
		"icon",
		"children",
		"onKeyPress",
		"name",
		"value",
		"onChange",
		"onClear",
		"disabled",
		"className",
		"rounded",
		"isPassword",
		"required",
		"type",
		"dropdown",
		"dropdownPosition",
		"hideClear",
		"hideDropdown",
		"customBorderRadius",
		"infoLabel",
		"hint",
		"hintWide",
		"popupPosition",
		"labelClassName",
	]);
	const hasIcon = isPassword || !isEmpty(icon);

	return (
		<Form.Input
			{...validProps}
			className={`${styles.input} ${disabled ? styles.disabled : ""} ${className || ""}`}
			disabled={disabled}
			onChange={onChange}
			name={name}
			label={renderLabel()}
			placeholder={placeholder === "" ? "" : isEmpty(placeholder) ? (typeof label === "string" ? label : "") : placeholder}
			value={value}
			type={isPassword ? inputType : type}
			{...(hasIcon ? { iconPosition: "left" } : {})}
			autoComplete="off"
			fluid={fluid}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyPress={handleEnter}
			action>
			{dropdownPosition === "left" && !isEmpty(dropdown) && !hideDropdown && <Select labeled {...dropdown} />}
			{hasIcon && <Icon name={isPassword ? "lock" : icon} />}
			<input ref={ref || input} required={required} />
			{dropdownPosition === "right" ? (
				<>
					{!isEmpty(value) && !disabled && !hideClear && (
						<Button className={getActionStyle()} icon="cancel" onClick={clearInput} tabIndex={-1} />
					)}
					{!hideDropdown && <Select labeled {...dropdown} />}
				</>
			) : (
				!hideClear &&
				!isEmpty(value) &&
				!disabled && <Button className={getActionStyle()} icon="cancel" onClick={clearInput} tabIndex={-1} />
			)}
			{isPassword && (
				<Button
					className={rounded ? styles.clearRoundedIconLast : styles.clearIconLast}
					icon={passwordIcon}
					onClick={handleToggle}
					tabIndex={-1}
				/>
			)}
		</Form.Input>
	);
});

Input.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	onClear: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	infoLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	hintWide: PropTypes.bool,
	popupPosition: PropTypes.string,
	labelClassName: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	children: PropTypes.node,
	rounded: PropTypes.bool,
	dropdown: PropTypes.object,
	dropdownPosition: PropTypes.oneOf(["left", "right"]),
	fluid: PropTypes.bool,
	isPassword: PropTypes.bool,
	required: PropTypes.bool,
	type: PropTypes.string,
	fieldIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	hideClear: PropTypes.bool,
	hideDropdown: PropTypes.bool,
	customBorderRadius: PropTypes.string,
};

export default Input;
