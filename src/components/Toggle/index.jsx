/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "semantic-ui-react";
import styles from "./styles.module.css";

const PRESET_MAP = {
	primary: "var(--primary, #1e293b)",
	accent: "var(--accent, #3b82f6)",
	secondary: "var(--text-secondary, #64748b)",
	success: "#16a34a",
	warning: "#f59e0b",
	danger: "var(--red500, #ef4444)",
	info: "#0284c7",
	dark: "#0f172a",
};

const formatColor = (colorValue) => {
	if (!colorValue) {
		return undefined;
	}
	const trimmed = String(colorValue).trim();
	if (PRESET_MAP[trimmed]) {
		return PRESET_MAP[trimmed];
	}
	if (trimmed.startsWith("--")) {
		return `var(${trimmed})`;
	}
	return trimmed;
};

const Toggle = forwardRef((props, ref) => {
	const {
		checked = false,
		defaultChecked,
		onChange,
		label,
		title,
		description,
		titlePosition,
		tposition,
		position = "left",
		titleAlign = "left",
		disabled = false,
		readOnly = false,
		name,
		value,
		color = "primary",
		trueColor,
		falseColor,
		colorTrue,
		colorFalse,
		activeColor,
		inactiveColor,
		size = "medium",
		className = "",
		style = {},
		id,
		...rest
	} = props;

	const handleChange = (event, data) => {
		if (disabled || readOnly) {
			return;
		}
		if (onChange) {
			onChange(data.checked, event, data);
		}
	};

	const resolvedTrueColor = formatColor(trueColor || colorTrue || activeColor || color || "primary");
	const resolvedFalseColor = formatColor(falseColor || colorFalse || inactiveColor || "#cbd5e1");

	const dynamicStyles = {
		...style,
		"--ik-toggle-true-color": resolvedTrueColor,
		"--ik-toggle-false-color": resolvedFalseColor,
	};

	const sizeClass = styles[size] || styles.medium;
	const disabledClass = disabled || readOnly ? styles.disabled : "";

	const resolvedPosition = (tposition || titlePosition || position || "left").toLowerCase();
	const isTopOrLeft = resolvedPosition === "top" || resolvedPosition === "left";
	const positionClass = styles[`pos_${resolvedPosition}`] || styles.pos_left;
	const alignClass = styles[`align_${titleAlign}`] || "";

	const hasTitleOrDesc = Boolean(title || description);

	const renderTitleGroup = hasTitleOrDesc ? (
		<div className={`${styles.titleGroup} ${alignClass}`.trim()}>
			{title && <span className={styles.titleLabel}>{title}</span>}
			{description && <span className={styles.descriptionLabel}>{description}</span>}
		</div>
	) : null;

	const renderCheckbox = (
		<Checkbox
			{...rest}
			ref={ref}
			id={id}
			name={name}
			value={value}
			toggle
			label={label}
			checked={Boolean(checked)}
			defaultChecked={defaultChecked}
			disabled={disabled || readOnly}
			onChange={handleChange}
			className={styles.semanticToggle}
		/>
	);

	return (
		<div className={`${styles.container} ${positionClass} ${sizeClass} ${disabledClass} ${className}`.trim()} style={dynamicStyles}>
			{isTopOrLeft ? (
				<>
					{renderTitleGroup}
					{renderCheckbox}
				</>
			) : (
				<>
					{renderCheckbox}
					{renderTitleGroup}
				</>
			)}
		</div>
	);
});

Toggle.displayName = "Toggle";

Toggle.propTypes = {
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	onChange: PropTypes.func,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	titlePosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
	tposition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
	position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
	titleAlign: PropTypes.oneOf(["left", "center", "right"]),
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
	color: PropTypes.string,
	trueColor: PropTypes.string,
	falseColor: PropTypes.string,
	colorTrue: PropTypes.string,
	colorFalse: PropTypes.string,
	activeColor: PropTypes.string,
	inactiveColor: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	className: PropTypes.string,
	style: PropTypes.object,
	id: PropTypes.string,
};

export default Toggle;
