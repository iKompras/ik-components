import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.css";

const Divider = ({ className = "", color, style = {} }) => {
	const dividerClass = [styles.divider, className].filter(Boolean).join(" ");
	const customStyle = {
		...style,
		...(color ? { backgroundColor: color } : {}),
	};

	return <hr className={dividerClass} style={customStyle} />;
};

Divider.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	style: PropTypes.object,
};

export default Divider;
