import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.css";

const paddingMap = {
	none: styles.bodyPaddedNone,
	small: styles.bodyPaddedSm,
	medium: styles.bodyPaddedMd,
	large: styles.bodyPaddedLg,
};

const Body = ({ children, padding = "medium", className = "", style = {} }) => {
	const bodyClass = [styles.body, paddingMap[padding] || styles.bodyPaddedMd, className].filter(Boolean).join(" ");

	return (
		<div className={bodyClass} style={style}>
			{children}
		</div>
	);
};

Body.propTypes = {
	children: PropTypes.node,
	padding: PropTypes.oneOf(["none", "small", "medium", "large"]),
	className: PropTypes.string,
	style: PropTypes.object,
};

export default Body;
