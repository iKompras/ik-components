import React, { useEffect, useState } from "react";

// Libraries
import PropTypes from "prop-types";
import { includes } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom, Download } from "yet-another-react-lightbox/plugins";

// Styles
import "yet-another-react-lightbox/styles.css";

const ImageViewer = ({ imageUrl, isOpen = false, onClose = () => {}, downloadFileFetcher }) => {
	const [fileUri, setFileUri] = useState(null);
	const [rotationAngle, setRotationAngle] = useState(0);

	useEffect(() => {
		(async () => {
			if (imageUrl) {
				const isLocal = String(imageUrl).startsWith("data:");
				if (!isLocal && !includes(imageUrl, "localhost") && downloadFileFetcher) {
					const file = await downloadFileFetcher({ uri: imageUrl });
					if (file) {
						setFileUri(file);
					}
				} else {
					setFileUri(imageUrl);
				}
			} else {
				setFileUri(null);
			}
		})();
	}, [imageUrl, downloadFileFetcher]);

	const handleRotateLeft = () => {
		setRotationAngle((prevAngle) => {
			return prevAngle <= 0 ? 270 : prevAngle - 90;
		});
	};

	const handleRotateRight = () => {
		setRotationAngle((prevAngle) => {
			return prevAngle >= 270 ? 0 : prevAngle + 90;
		});
	};

	const slides = (selectedImage) => {
		if (!selectedImage) return [];
		return [{ src: selectedImage }];
	};

	const handleCloseLightBox = () => {
		setRotationAngle(0);
		onClose();
	};

	return (
		<Lightbox
			open={isOpen}
			plugins={[Fullscreen, Download, Zoom]}
			close={handleCloseLightBox}
			slides={slides(fileUri)}
			zoom={{
				maxZoomPixelRatio: 5,
				zoomInMultiplier: 2,
			}}
			className={`rotated${rotationAngle}`}
			toolbar={{
				buttons: [
					<button key="rotate-left" type="button" className="yarl__button" onClick={handleRotateLeft}>
						<FontAwesomeIcon icon={faRotateLeft} size="xl" />
					</button>,
					<button key="rotate-right" type="button" className="yarl__button" onClick={handleRotateRight}>
						<FontAwesomeIcon icon={faRotateRight} size="xl" />
					</button>,
					"zoom",
					"download",
					"fullscreen",
					"close",
				],
			}}
		/>
	);
};

ImageViewer.propTypes = {
	imageUrl: PropTypes.string,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	downloadFileFetcher: PropTypes.func,
};

export default ImageViewer;
