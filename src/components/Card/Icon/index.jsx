import React from "react";
import PropTypes from "prop-types";
import { Icon as SemanticIcon } from "semantic-ui-react";
import styles from "../styles.module.css";

const themeIconMap = {
	primary: styles.themePrimary,
	secondary: styles.themeSecondary,
	success: styles.themeSuccess,
	warning: styles.themeWarning,
	danger: styles.themeDanger,
	info: styles.themeInfo,
	groupHeader: styles.themeGroupHeader,
};

const sizeMap = {
	small: styles.iconBadgeSm,
	medium: "",
	large: styles.iconBadgeLg,
};

const CardIcon = ({ name, color, shape = "circle", size = "medium", bgColor, iconColor, className = "", style = {}, children }) => {
	const iconClass = [
		styles.iconBadge,
		shape === "circle" ? styles.iconBadgeCircle : "",
		sizeMap[size] || "",
		color && themeIconMap[color] ? themeIconMap[color] : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const dynamicStyle = {
		...style,
		...(bgColor ? { "--ik-icon-bg": bgColor } : {}),
		...(iconColor ? { "--ik-icon-color": iconColor } : {}),
	};

	// If color is a custom hex or rgb
	if (color && !themeIconMap[color]) {
		if (!dynamicStyle["--ik-icon-color"]) {
			dynamicStyle["--ik-icon-color"] = color;
		}
	}

	return (
		<div className={iconClass} style={dynamicStyle}>
			{children || (name && <SemanticIcon name={name} style={{ margin: 0 }} />)}
		</div>
	);
};

CardIcon.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	shape: PropTypes.oneOf(["circle", "rounded"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
	bgColor: PropTypes.string,
	iconColor: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node,
};

export default CardIcon;
