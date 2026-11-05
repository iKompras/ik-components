// React
import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

// Libraries
import PropTypes from "prop-types";
import { Button, Icon, Image } from "semantic-ui-react";
import { isEmpty, map, reject, filter, find, isEqual, isArray } from "lodash";
import Lightbox from "yet-another-react-lightbox";
import { Download, Video, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

// Utils
import { compressImage, getFileTypeFromDataUrl, getFileTypeByName } from "../../utils/functionality";

// Components
import PrintRender from "../IkTable/components/PrintRender";

// Styles
import styles from "./styles.module.css";
import "yet-another-react-lightbox/styles.css";

const fileIconMap = {
	pdf: "file pdf",
	doc: "file word",
	xls: "file excel",
	ppt: "file powerpoint",
	zip: "file archive",
	txt: "file text",
	audio: "music",
	video: "video",
	image: "image",
	file: "file outline",
};

const fileColorMap = {
	pdf: "red",
	doc: "blue",
	xls: "green",
	ppt: "orange",
	zip: "grey",
	txt: "grey",
	audio: "teal",
	video: "purple",
	image: "blue",
	file: "grey",
};

const PRINCIPAL_FORMATS_ACCEPT = "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.7z,.tar,.gz,.csv";

const resolveAccept = (accept, type) => {
	if (accept) return accept;
	if (type === "image") return "image/*";
	if (type === "video") return "video/*";
	if (type === "audio") return "audio/*";
	if (type === "media") return "image/*,video/*,audio/*";
	if (type === "file") return "*/*";
	return PRINCIPAL_FORMATS_ACCEPT;
};

const normalizeFiles = (items) => {
	if (items === null || items === undefined || items === "") return [];
	return isArray(items) ? items : [items];
};

const FileManager = ({
	// Universal files API
	files,
	setFiles,
	// Legacy images API (fully backwards-compatible)
	images = [],
	setImages,
	imagesD = [],
	setImagesD = () => {},
	// Settings
	downloadFileFetcher,
	multiple = false,
	disabled = false,
	width = 3,
	height = 3,
	icon = "paperclip",
	iconSize = "large", // mini, tiny, small, large, big, huge, massive
	rounded = false,
	showMode = false,
	noremovesaved = false,
	states = [],
	type = "all", // "all", "image", "video", "audio", "media", "file"
	accept = null,
	emptyIcon = "image outline",
	// Print & Metadata props (pure props, Redux-free)
	companyName,
	userNames,
	clientName,
	clientPhone,
	platformName,
	tags = [],
	groupName,
}) => {
	const [attachments, setAttachments] = useState([]);
	const [lightbox, setLightbox] = useState({ open: false, selectedImage: null });
	const [rotationAngle, setRotationAngle] = useState(0);
	const [printAction, setPrintAction] = useState(false);
	const uploadInput = useRef(null);
	const prevFilesRef = useRef([]);
	const printRef = useRef(null);

	const activeFiles = files !== undefined ? files : images;
	const handleSetFiles = (newFiles) => {
		if (setFiles) setFiles(newFiles);
		if (setImages) setImages(newFiles);
	};

	useEffect(() => {
		const fileList = normalizeFiles(activeFiles);
		if (!isEmpty(fileList) && !isEqual(prevFilesRef.current, fileList)) {
			(async () => {
				const newAttachments = await Promise.all(
					map(fileList, async (item, index) => {
						const isLocal = String(item).startsWith("data:") || String(item).startsWith("blob:");
						const canDownload = String(item).match(/^(http(?!s?:image)|image)/gi) === null && !isLocal;
						let url = item;
						if (canDownload && downloadFileFetcher) {
							url = await downloadFileFetcher({ uri: item });
						}
						let inferredType = "file";
						let fileName = "archivo";
						if (isLocal) {
							inferredType = getFileTypeFromDataUrl(String(item));
							if (attachments[index] && attachments[index].name && attachments[index].name !== "archivo") {
								fileName = attachments[index].name;
							}
						} else if (typeof item === "string") {
							const cleanUrl = String(item).split(/[?#]/)[0];
							inferredType = getFileTypeByName(cleanUrl);
							try {
								const decodedUrl = decodeURIComponent(cleanUrl);
								if (decodedUrl.includes("/")) {
									fileName = decodedUrl.substring(decodedUrl.lastIndexOf("/") + 1);
								} else {
									fileName = decodedUrl;
								}
							} catch (e) {
								fileName = "archivo";
							}
						}
						return {
							link: url,
							type: inferredType,
							isLocal,
							name: fileName || "archivo",
							mime: "",
						};
					})
				);
				setAttachments(newAttachments);
				prevFilesRef.current = fileList;
			})();
		} else if (isEmpty(fileList)) {
			setAttachments([]);
			prevFilesRef.current = [];
		}
	}, [activeFiles, downloadFileFetcher]);

	const handleOpenUpload = () => {
		if (uploadInput.current) {
			uploadInput.current.click();
		}
	};

	const readAsDataURL = (file) => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onloadend = () => {
				return resolve(reader.result);
			};
			reader.readAsDataURL(file);
		});
	};

	const handleAddAttachment = async (e) => {
		e.preventDefault();

		const incomingFiles = Array.from(e.target.files || []);
		if (incomingFiles.length === 0) return;

		const baseFileList = normalizeFiles(activeFiles);
		let currentFiles = multiple ? [...baseFileList] : [];
		let currentAttachments = multiple ? [...attachments] : [];

		for (const file of incomingFiles) {
			const isImageFile = file.type.startsWith("image/");
			const shouldCompress = isImageFile && (type === "image" || type === "all" || type === "file");
			let base64File;
			if (shouldCompress) {
				try {
					const compressedImage = await compressImage(file);
					base64File = await readAsDataURL(compressedImage);
				} catch {
					base64File = await readAsDataURL(file);
				}
			} else {
				base64File = await readAsDataURL(file);
			}

			const kind = isImageFile ? "image" : getFileTypeByName(file.name, file.type);

			currentFiles = [...currentFiles, base64File];
			currentAttachments = [
				...currentAttachments,
				{
					link: URL.createObjectURL(file),
					type: kind,
					isLocal: true,
					name: file.name,
					mime: file.type,
				},
			];
		}

		const finalFiles = multiple ? currentFiles : currentFiles.slice(-1);
		const finalAttachments = multiple ? currentAttachments : currentAttachments.slice(-1);

		setAttachments(finalAttachments);
		handleSetFiles(finalFiles);
		if (uploadInput.current) {
			uploadInput.current.value = null;
		}
	};

	const handleRemoveAttachment = (index) => {
		const currentAttachments = reject(attachments, (item) => {
			return attachments.indexOf(item) === index;
		});
		const rawList = normalizeFiles(activeFiles);
		const currentRemove = find(rawList, (item) => {
			return rawList.indexOf(item) === index;
		});
		const currentFiles = reject(rawList, (item) => {
			return rawList.indexOf(item) === index;
		});

		let currentImagesD = [];
		if (multiple) {
			if (currentRemove && typeof currentRemove === "string" && currentRemove.length > 100) {
				currentImagesD = [...imagesD];
			} else if (currentRemove) {
				currentImagesD = [...imagesD, currentRemove];
			}
		} else if (currentRemove && typeof currentRemove === "string" && currentRemove.length > 100) {
			currentImagesD = [...imagesD];
		} else {
			currentImagesD = currentRemove ? [currentRemove] : [];
		}

		setAttachments(currentAttachments);
		handleSetFiles(currentFiles);
		setImagesD(currentImagesD);
	};

	const handlePreview = (url, fileType, fileName = "archivo") => {
		if (fileType === "video" || fileType === "audio") {
			setLightbox({ selectedImage: url, open: true });
			return;
		}

		if (fileType === "pdf") {
			if (typeof url === "string" && url.startsWith("data:")) {
				const newWindow = window.open("", "_blank");
				if (newWindow) {
					fetch(url)
						.then((res) => {
							return res.blob();
						})
						.then((blob) => {
							const blobUrl = URL.createObjectURL(blob);
							newWindow.location.href = blobUrl;
							setTimeout(() => {
								if (newWindow.document) newWindow.document.title = fileName;
							}, 100);
						});
				} else {
					window.open(url, "_blank");
				}
			} else {
				window.open(url, "_blank");
			}
			return;
		}

		const a = document.createElement("a");
		a.href = url;
		a.download = fileName;
		a.target = "_blank";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	const handleCloseLightBox = () => {
		setLightbox({ open: false, selectedImage: null });
		setRotationAngle(0);
	};

	const handleRotateLeft = () => {
		return setRotationAngle((prev) => {
			return prev <= 0 ? 270 : prev - 90;
		});
	};

	const handleRotateRight = () => {
		return setRotationAngle((prev) => {
			return prev >= 270 ? 0 : prev + 90;
		});
	};

	const handlePrint = useReactToPrint({
		content: () => {
			return printRef.current;
		},
		onAfterPrint: () => {
			setPrintAction(false);
		},
	});

	useEffect(() => {
		if (printAction) {
			handlePrint();
		}
	}, [printAction]);

	const handlePrintImage = () => {
		setPrintAction(true);
	};

	const getImageStateColor = (imagePath) => {
		if (!states || states.length === 0) return null;
		const imageState = states.find((s) => {
			return imagePath.includes(s.path);
		});
		if (!imageState) return null;
		const colorMap = { present: "#a6d7b0", late: "#f4b988" };
		return colorMap[imageState.markedAs] || null;
	};

	const slides = (selectedImage) => {
		const selectedAttachment = find(attachments, { link: selectedImage });
		const isVideo = selectedAttachment?.type === "video";
		const isAudio = selectedAttachment?.type === "audio";

		let initialSlide;
		if (isVideo || isAudio) {
			initialSlide = {
				type: "video",
				width: 1280,
				height: 720,
				autoPlay: true,
				sources: [
					{
						src: selectedImage,
						type: selectedAttachment?.mime || (isAudio ? "audio/mp3" : "video/mp4"),
					},
				],
				downloadUrl: selectedImage,
				downloadFilename:
					selectedAttachment?.name && selectedAttachment?.name !== "archivo"
						? selectedAttachment.name
						: isAudio
						? "audio.mp3"
						: "video.mp4",
			};
		} else {
			initialSlide = {
				src: selectedImage,
				downloadFilename: selectedAttachment && selectedAttachment.name !== "archivo" ? selectedAttachment.name : "imagen.png",
			};
		}

		const valid = filter(attachments, (i) => {
			return i.type === "image" && i.link !== selectedImage;
		});

		return [
			initialSlide,
			...map(valid, (i) => {
				return {
					src: i.link,
					downloadFilename: i.name && i.name !== "archivo" ? i.name : "imagen.png",
				};
			}),
		];
	};

	const renderAttachments = (array) => {
		const rawList = normalizeFiles(activeFiles);
		const currentAttachments = map(array, (item, index) => {
			const stateColor = getImageStateColor(rawList[index] || item.link);
			const removable = !disabled && !(noremovesaved && !item.isLocal);

			return (
				<div
					key={index + 1}
					className={`${styles.attachment} ${rounded ? styles.rounded : ""}`}
					style={{ width: `${width}rem`, height: `${height}rem` }}>
					{removable && (
						<Icon
							className={styles.fixedIcon}
							name="close"
							onClick={() => {
								return handleRemoveAttachment(index);
							}}
						/>
					)}

					{stateColor && <div className={styles.stateIndicator} style={{ backgroundColor: stateColor }} />}

					{item.type === "image" ? (
						<Image
							className={`${styles.image} ${rounded ? styles.roundedImage : ""}`}
							src={item.link}
							alt={item.name || ""}
							onClick={() => {
								return setLightbox({ selectedImage: item.link, open: true });
							}}
						/>
					) : (
						<button
							type="button"
							className={styles.fileButton}
							onClick={() => {
								return handlePreview(item.link, item.type, item.name);
							}}
							aria-label={`Vista previa ${item.name || "archivo"}`}>
							<Icon
								className={styles.icon}
								name={fileIconMap[item.type] || fileIconMap.file}
								color={fileColorMap[item.type] || fileColorMap.file}
								size={iconSize}
							/>
							{Boolean(item.name) && (
								<div className={styles.fileButtonLabel} title={item.name}>
									{item.name}
								</div>
							)}
						</button>
					)}
				</div>
			);
		});

		const uploadButton = (
			<Button
				key={0}
				className={`${styles.attachment} ${rounded ? styles.rounded : ""}`}
				icon
				primary
				disabled={disabled}
				onClick={handleOpenUpload}
				style={{ width: `${width}rem`, height: `${height}rem` }}>
				<Icon name={icon} size={iconSize} />
				<input
					className={styles.noShowInput}
					ref={uploadInput}
					type="file"
					accept={resolveAccept(accept, type)}
					multiple={multiple}
					disabled={disabled}
					onChange={handleAddAttachment}
				/>
			</Button>
		);

		const visible = showMode || disabled ? false : !(!multiple && !isEmpty(array));
		return [visible && uploadButton, ...currentAttachments];
	};

	const showNoImageIcon = disabled && isEmpty(attachments);
	const activeAttachment = find(attachments, { link: lightbox.selectedImage });
	const isVideoOrAudio = activeAttachment?.type === "video" || activeAttachment?.type === "audio";

	return (
		<div className={styles.attachmentsContainer} style={{ height: `${height}rem` }}>
			<Lightbox
				open={lightbox.open}
				plugins={isVideoOrAudio ? [Download, Video] : [Download, Fullscreen, Zoom, Video]}
				close={handleCloseLightBox}
				slides={slides(lightbox.selectedImage)}
				zoom={!isVideoOrAudio ? { maxScale: 50, maxZoomPixelRatio: 10 } : undefined}
				className={`rotated${rotationAngle}`}
				controller={{ closeOnBackdropClick: true }}
				render={{
					buttonPrev: () => {
						return null;
					},
					buttonNext: () => {
						return null;
					},
				}}
				toolbar={{
					buttons: isVideoOrAudio
						? ["download", "close"]
						: [
								<button key="rotate-left" type="button" className="yarl__button" onClick={handleRotateLeft}>
									<Icon name="undo" size="large" />
								</button>,
								<button key="rotate-right" type="button" className="yarl__button" onClick={handleRotateRight}>
									<Icon name="redo" size="large" />
								</button>,
								<button key="print" type="button" className="yarl__button" onClick={handlePrintImage}>
									<Icon name="print" size="large" />
								</button>,
								"zoom",
								"download",
								"fullscreen",
								"close",
						  ],
				}}
			/>
			{showNoImageIcon ? (
				<div className={`${styles.attachment} ${rounded ? styles.rounded : ""}`} style={{ width: `${width}rem`, height: `${height}rem` }}>
					<Icon className={styles.icon} name={emptyIcon} size={iconSize} color="grey" />
				</div>
			) : (
				renderAttachments(attachments)
			)}

			<div ref={printRef} className={styles.printImageWrapper}>
				{!isVideoOrAudio && lightbox.selectedImage && (
					<img
						src={lightbox.selectedImage}
						alt="Imagen para imprimir"
						className={styles.printImageOnly}
						style={{ transform: `rotate(${rotationAngle}deg)` }}
					/>
				)}
			</div>

			<PrintRender
				hiddenButon
				printAction={printAction}
				printActionRetry={() => {
					setPrintAction(false);
				}}
				printHeader={{
					company: companyName,
					user: userNames,
					title: "Impresión de Imagen",
				}}
				clientName={clientName}
				clientPhone={clientPhone}
				platform={platformName}
				tags={tags}
				group={groupName}
				renderData={printRef}
				hideClientInfo={false}
			/>
		</div>
	);
};

FileManager.propTypes = {
	files: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	setFiles: PropTypes.func,
	images: PropTypes.array,
	setImages: PropTypes.func,
	imagesD: PropTypes.array,
	setImagesD: PropTypes.func,
	downloadFileFetcher: PropTypes.func,
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	rounded: PropTypes.bool,
	width: PropTypes.number,
	height: PropTypes.number,
	icon: PropTypes.string,
	iconSize: PropTypes.string,
	showMode: PropTypes.bool,
	noremovesaved: PropTypes.bool,
	states: PropTypes.array,
	type: PropTypes.oneOf(["all", "image", "video", "audio", "media", "file"]),
	accept: PropTypes.string,
	emptyIcon: PropTypes.string,
	companyName: PropTypes.string,
	userNames: PropTypes.string,
	clientName: PropTypes.string,
	clientPhone: PropTypes.string,
	platformName: PropTypes.string,
	tags: PropTypes.array,
	groupName: PropTypes.string,
};

export { FileManager };
export default FileManager;
