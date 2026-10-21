// React
import React, { useState, useEffect } from "react";

// Libraries
import PropTypes from "prop-types";
import { Modal, Icon, Button } from "semantic-ui-react";
import { isEmpty } from "lodash";

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
}) => {
	const [currentIconName, setCurrentIconName] = useState("list");

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

	const modalStyle = fullHeight
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

	return (
		<Modal
			className={`${!isEmpty(size) ? styles[size] : ""} ${className} ${styles.modal}`}
			style={modalStyle}
			open
			closeIcon
			closeOnDimmerClick={closeOnDimmerClick}
			onClose={confirmModalHandler}>
			<Modal.Header className={styles.modalHeader}>
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
				style={
					fullHeight
						? { minHeight: "calc(95vh - 8rem)", ...contentStyle }
						: customHeight
						? { height: customHeight, minHeight: customHeight, ...contentStyle }
						: { ...contentStyle }
				}
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
};

export default IkModal;
