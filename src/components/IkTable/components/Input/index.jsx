/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Icon, Select } from "semantic-ui-react";
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
		placeholder,
		disabled,
		rounded,
		onChange,
		onKeyPress,
		onClear,
		dropdown,
		dropdownPosition = "left", // nueva prop (default left)
		required = false,
		fluid = true,
		type = "text",
	} = props;
	const input = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [inputType, setInputType] = useState(isPassword ? "password" : "text");
	const [passwordIcon, setPasswordIcon] = useState("eye slash");

	useEffect(() => {
		if (rounded) {
			if (isEmpty(value) || disabled) {
				(ref || input).current.style.removeProperty("border-top-left-radius");
				(ref || input).current.style.removeProperty("border-bottom-left-radius");
				(ref || input).current.style.removeProperty("border-top-right-radius");
				(ref || input).current.style.removeProperty("border-bottom-right-radius");
				(ref || input).current.style.removeProperty("border-right");
				if (!isPassword) {
					(ref || input).current.style.setProperty("border-radius", "1rem", "important");
					(ref || input).current.style.setProperty(
						"border-right",
						`1px solid ${isFocused ? "var(--inputFocus)" : "var(--inputShader)"}`,
						"important"
					);
				} else {
					(ref || input).current.style.setProperty("border-top-left-radius", "1rem", "important");
					(ref || input).current.style.setProperty("border-bottom-left-radius", "1rem", "important");
				}
			} else {
				(ref || input).current.style.removeProperty("border-radius");
				(ref || input).current.style.setProperty("border-top-left-radius", "1rem", "important");
				(ref || input).current.style.setProperty("border-bottom-left-radius", "1rem", "important");
				(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
				(ref || input).current.style.setProperty("border-right", "0", "important");
			}
		} else if (isEmpty(value) || disabled) {
			(ref || input).current.style.setProperty("border-radius", "0.25rem", "important");
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
		} else {
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
				(ref || input).current.style.setProperty("border-right-color", "transparent", "important");
				// Asegurar que el borde izquierdo tenga el border-radius y color correcto siempre
				(ref || input).current.style.setProperty("border-top-left-radius", "0.25rem", "important");
				(ref || input).current.style.setProperty("border-bottom-left-radius", "0.25rem", "important");
				(ref || input).current.style.setProperty(
					"border-left",
					`1px solid ${isFocused ? "var(--inputFocus)" : "var(--inputShader)"}`,
					"important"
				);
			}
		}
	}, [value, isFocused, dropdown, isPassword, disabled, rounded, ref, input]);

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
	]);
	const hasIcon = isPassword || !isEmpty(icon);

	return (
		<Form.Input
			{...validProps}
			className={`${styles.input} ${className || ""}`}
			disabled={disabled}
			onChange={onChange}
			name={name}
			required={required}
			label={label}
			placeholder={isEmpty(placeholder) ? label : placeholder}
			value={value}
			type={isPassword ? inputType : type}
			{...(hasIcon ? { iconPosition: "left" } : {})}
			autoComplete="off"
			fluid={fluid}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyPress={handleEnter}
			action>
			{dropdownPosition === "left" && !isEmpty(dropdown) && <Select labeled {...dropdown} />}
			{hasIcon && <Icon name={isPassword ? "lock" : icon} />}
			<input ref={ref || input} />
			{dropdownPosition === "right" ? (
				<>
					{!isEmpty(value) && !disabled && <Button className={getActionStyle()} icon="cancel" onClick={clearInput} tabIndex={-1} />}
					{!isEmpty(dropdown) && <Select labeled {...dropdown} />}
				</>
			) : (
				!isEmpty(value) && !disabled && <Button className={getActionStyle()} icon="cancel" onClick={clearInput} tabIndex={-1} />
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
	label: PropTypes.string,
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
};

export default Input;
