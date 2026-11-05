import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.css";

const ratioMap = {
	"16/9": styles.ratio16x9,
	"4/3": styles.ratio4x3,
	"1/1": styles.ratio1x1,
	"21/9": styles.ratio21x9,
	auto: styles.ratioAuto,
};

const Media = ({
	src,
	alt = "",
	aspectRatio = "16/9",
	position = "top",
	overlay,
	badge,
	zoomOnHover = true,
	className = "",
	style = {},
	children,
}) => {
	const containerClass = [
		styles.mediaContainer,
		position === "left" ? styles.mediaLeft : "",
		ratioMap[aspectRatio] || styles.ratio16x9,
		zoomOnHover ? styles.mediaZoomOnHover : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={containerClass} style={style}>
			{badge && <div className={styles.mediaBadgeSlot}>{badge}</div>}

			{children || (src && <img src={src} alt={alt} className={styles.mediaImg} />)}

			{overlay && <div className={styles.mediaOverlay}>{typeof overlay === "boolean" ? null : overlay}</div>}
		</div>
	);
};

Media.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	aspectRatio: PropTypes.oneOf(["16/9", "4/3", "1/1", "21/9", "auto"]),
	position: PropTypes.oneOf(["top", "cover", "left"]),
	overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
	badge: PropTypes.node,
	zoomOnHover: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node,
};

export default Media;
