import React from "react";
import PropTypes from "prop-types";
import { Icon, Popup } from "semantic-ui-react";
import styles from "./styles.module.css";

const InputLabel = ({ children, hint, className = "", required = false, hintWide = false, popupPosition = "top center" }) => {
	return (
		<span className={`${styles.root} ${className}`.trim()}>
			<span>{children}</span>
			{required ? <span className={styles.required}> *</span> : null}
			{hint ? (
				<Popup
					wide={hintWide ? "very" : true}
					hoverable={hintWide}
					position={popupPosition}
					content={hint}
					trigger={<Icon name="info circle" className={styles.infoIcon} />}
				/>
			) : null}
		</span>
	);
};

InputLabel.propTypes = {
	children: PropTypes.node.isRequired,
	hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	className: PropTypes.string,
	required: PropTypes.bool,
	hintWide: PropTypes.bool,
	popupPosition: PropTypes.string,
};

export default InputLabel;
