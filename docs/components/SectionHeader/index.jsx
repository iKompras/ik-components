import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const SectionHeader = ({ category, title, description }) => {
	return (
		<div className={styles.header}>
			{category && <span className={styles.category}>{category}</span>}
			<h2 className={styles.title}>{title}</h2>
			{description && <p className={styles.description}>{description}</p>}
		</div>
	);
};

SectionHeader.propTypes = {
	category: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
};

export default SectionHeader;
