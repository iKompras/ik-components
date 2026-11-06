// React
import React, { useState, useEffect } from "react";

// Libraries
import PropTypes from "prop-types";
import { Modal, Icon, Button } from "semantic-ui-react";
import { isEmpty } from "lodash";
import { resolveColor } from "../../utils/functionality";

// Styles
import styles from "./styles.module.css";
import Tabs from "./components/Tabs";

const IkModal = ({
	children = "",
	iconName = "",
	mode = "Add",
	setMode = () => {},
	title = "Title",
	id = "",
	onClose = () => {},
	onSuccess = () => {},
	style = {},
	size = "",
	fullHeight = false,
	modifyLabel = "Modificar",
	saveLabel = "Guardar",
	cancelLabel = "Atrás",
	headerButtons = [],
	footerButtons = [],
	printAction = null,
	saveDisabled = false,
	className = "",
	ignoreContent = false,
	hideEditButton = false,
	tabs = [],
	activeTab = "",
	onTabChange = () => {},
	customHeight = "",
	closeOnDimmerClick = true,
	contentStyle = {},
	closeInside = false,
	closeIconInside = false,
	closeIcon = true,
	color = "",
	colors = {},
}) => {
	const [currentIconName, setCurrentIconName] = useState("list");
	const isCloseInside = closeInside || closeIconInside;

	useEffect(() => {
		iconHandler();
	}, [mode]);

	const iconHandler = () => {
		let iconCurrent = iconName;
		if (isEmpty(iconName)) {
			switch (mode) {
				case "Add":
					iconCurrent = "plus";
					break;
				case "Edit":
					iconCurrent = "edit";
					break;
				case "Watch":
					iconCurrent = "eye";
					break;
				default:
					iconCurrent = "list";
					break;
			}
		}
		setCurrentIconName(iconCurrent);
	};

	const confirmModalHandler = () => {
		onClose();
	};

	const handlerSuccess = () => {
		onSuccess();
	};

	// Helper to find first non-empty valid color from candidates
	const getFirstValidColor = (...candidates) => {
		for (const candidate of candidates) {
			if (candidate && typeof candidate === "string" && candidate.trim()) {
				const resolved = resolveColor(candidate);
				if (resolved) return resolved;
			}
		}
		return undefined;
	};

	// Optional custom colors:
	// If color or colors are passed, inject variables. Otherwise CSS defaults to the project's global theme variables.
	const computedHeaderBg = getFirstValidColor(colors?.header, color, colors?.primary);
	const computedHeaderFont = getFirstValidColor(colors?.fontsHeader, colors?.fontHeader, colors?.headerText, colors?.text);
	const computedContentBg = getFirstValidColor(colors?.panelModal, colors?.panel, colors?.content);
	const computedButtonBg = getFirstValidColor(colors?.buttons, colors?.button, color, colors?.primary);
	const computedButtonFont = getFirstValidColor(colors?.fontsButtons, colors?.buttonText);
	const computedCloseBg = getFirstValidColor(colors?.closeInside, colors?.close);

	const customColorVariables = {
		...(computedHeaderBg ? { "--header": computedHeaderBg } : {}),
		...(computedHeaderFont ? { "--fontsHeader": computedHeaderFont, "--fontHeader": computedHeaderFont } : {}),
		...(computedContentBg ? { "--panelModal": computedContentBg, "--panel": computedContentBg } : {}),
		...(computedButtonBg ? { "--buttons": computedButtonBg, "--button": computedButtonBg, "--primary": computedButtonBg } : {}),
		...(computedButtonFont ? { "--fontsButtons": computedButtonFont } : {}),
		...(computedCloseBg ? { "--closeInside": computedCloseBg } : {}),
	};

	const baseModalStyle = fullHeight
		? {
				maxHeight: "calc(100vh - 2.5rem)",
				...style,
		  }
		: size === "tiny" || size === "mini"
		? {
				marginTop: 0,
				top: "50%",
				transform: "translateY(-50%)",
				WebkitFontSmoothing: "antialiased",
				MozOsxFontSmoothing: "grayscale",
				textRendering: "optimizeLegibility",
				...style,
		  }
		: { ...style };

	const modalStyle = {
		...customColorVariables,
		...baseModalStyle,
	};

	return (
		<Modal
			className={`${!isEmpty(size) ? styles[size] : ""} ${className} ${styles.modal} ${isCloseInside ? styles.modalCloseInside : ""}`}
			style={modalStyle}
			open
			closeIcon={closeIcon}
			closeOnDimmerClick={closeOnDimmerClick}
			onClose={confirmModalHandler}>
			<Modal.Header
				className={styles.modalHeader}
				style={{
					...(computedHeaderBg ? { backgroundColor: computedHeaderBg } : {}),
					...(computedHeaderFont ? { color: computedHeaderFont } : {}),
				}}>
				<div className={styles.modalHeaderTitle}>
					<Icon name={currentIconName} className={styles.iconHeader} />
					{title}
					{id && ` - Id: ${id}`}
				</div>
				{!isEmpty(headerButtons) && headerButtons}
				<div className={styles.rowButton}>
					{mode === "Watch" && !hideEditButton && (
						<Button
							onClick={() => {
								setMode("Edit");
							}}
							className={styles.topEditButton}>
							<Icon name="edit" />
						</Button>
					)}

					{mode === "Edit" && (
						<Button
							onClick={() => {
								setMode("Watch");
							}}
							className={styles.topWatchButton}>
							<Icon name="eye" />
						</Button>
					)}

					{printAction && (
						<Button
							onClick={() => {
								if (typeof printAction === "function") {
									printAction();
								}
							}}
							className={styles.topPrintButton}
							title="Imprimir">
							<Icon name="print" />
						</Button>
					)}
				</div>
			</Modal.Header>
			{!isEmpty(tabs) && (
				<div className={styles.tabsContainer}>
					<Tabs buttons={tabs} stateHeader={activeTab} handleStateHeader={onTabChange} />
				</div>
			)}
			<Modal.Content
				className={ignoreContent ? styles.modalContentNoFlex : styles.modalContent}
				style={{
					...(computedContentBg ? { backgroundColor: computedContentBg } : {}),
					...(fullHeight
						? { minHeight: "calc(95vh - 8rem)", ...contentStyle }
						: customHeight
						? { height: customHeight, minHeight: customHeight, ...contentStyle }
						: { ...contentStyle }),
				}}
				scrolling>
				{children}
			</Modal.Content>
			<Modal.Actions className={styles.modalFooter}>
				{!isEmpty(footerButtons) && footerButtons}
				{mode === "Watch" ? (
					<Button className={styles.negativeButton} onClick={confirmModalHandler}>
						Cerrar
					</Button>
				) : (
					<Button className={styles.negativeButton} onClick={confirmModalHandler}>
						{cancelLabel}
					</Button>
				)}
				{mode !== "Watch" && onSuccess && (
					<Button
						className={`${styles.positiveButton} ${saveDisabled ? styles.disabled : ""}`}
						style={{
							...(computedButtonBg ? { borderColor: computedButtonBg } : {}),
							...(computedButtonFont ? { color: computedButtonFont } : {}),
						}}
						onClick={handlerSuccess}
						disabled={saveDisabled}>
						{mode === "Add" ? saveLabel : modifyLabel}
					</Button>
				)}
			</Modal.Actions>
		</Modal>
	);
};

IkModal.propTypes = {
	children: PropTypes.node,
	iconName: PropTypes.string,
	mode: PropTypes.string,
	setMode: PropTypes.func,
	title: PropTypes.string,
	id: PropTypes.string,
	saveLabel: PropTypes.string,
	modifyLabel: PropTypes.string,
	cancelLabel: PropTypes.string,
	size: PropTypes.string,
	onClose: PropTypes.func,
	onSuccess: PropTypes.func,
	style: PropTypes.object,
	fullHeight: PropTypes.bool,
	headerButtons: PropTypes.array,
	footerButtons: PropTypes.array,
	printAction: PropTypes.func,
	saveDisabled: PropTypes.bool,
	className: PropTypes.string,
	ignoreContent: PropTypes.bool,
	tabs: PropTypes.array,
	activeTab: PropTypes.string,
	onTabChange: PropTypes.func,
	hideEditButton: PropTypes.bool,
	customHeight: PropTypes.string,
	closeOnDimmerClick: PropTypes.bool,
	contentStyle: PropTypes.object,
	closeInside: PropTypes.bool,
	closeIconInside: PropTypes.bool,
	closeIcon: PropTypes.bool,
	// Color customization props
	color: PropTypes.string,
	colors: PropTypes.shape({
		header: PropTypes.string,
		headerText: PropTypes.string,
		content: PropTypes.string,
		button: PropTypes.string,
		buttonText: PropTypes.string,
		close: PropTypes.string,
	}),
};

export default IkModal;
