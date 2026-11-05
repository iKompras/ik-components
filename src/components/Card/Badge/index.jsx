import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.css";

const variantMap = {
	default: styles.badgeDefault,
	primary: styles.badgePrimary,
	success: styles.badgeSuccess,
	warning: styles.badgeWarning,
	danger: styles.badgeDanger,
	glass: styles.badgeGlass,
};

const Badge = ({ children, variant = "default", color, textColor, icon, className = "", style = {} }) => {
	const badgeClass = [styles.badge, variantMap[variant] || styles.badgeDefault, className].filter(Boolean).join(" ");

	const customStyle = {
		...style,
		...(color ? { backgroundColor: color } : {}),
		...(textColor ? { color: textColor } : {}),
	};

	return (
		<span className={badgeClass} style={customStyle}>
			{icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
			{children}
		</span>
	);
};

Badge.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "glass"]),
	color: PropTypes.string,
	textColor: PropTypes.string,
	icon: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default Badge;
