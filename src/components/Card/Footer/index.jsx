import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.css";

const alignMap = {
	left: styles.alignLeft,
	center: styles.alignCenter,
	right: styles.alignRight,
	between: styles.alignBetween,
};

const Footer = ({ children, align = "right", divider = false, className = "", style = {} }) => {
	const footerClass = [styles.footer, alignMap[align] || styles.alignRight, divider ? styles.footerWithDivider : "", className]
		.filter(Boolean)
		.join(" ");

	return (
		<footer className={footerClass} style={style}>
			{children}
		</footer>
	);
};

Footer.propTypes = {
	children: PropTypes.node,
	align: PropTypes.oneOf(["left", "center", "right", "between"]),
	divider: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default Footer;
