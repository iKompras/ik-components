import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

// Components
import Text from "../../components/Text";

// Styles
import styles from "./styles.module.css";

const ConfirmModal = ({
	visible,
	content,
	fullContent,
	header,
	buttonLabel = "Salir",
	cancelLabel = "Atrás",
	cancelButtonLLabel,
	focus,
	onConfirm,
	onDismiss,
	icon,
	extraButton,
	style = {},
	className = "",
	useContactStyles = false,
	centerModal = false,
	hideCancelButton = false,
	hideConfirm = false,
	isDelete = false,
	deleteType = "",
	headerColor,
}) => {
	const resolvedCancelLabel = cancelButtonLLabel || cancelLabel;
	const modalHeader = header || (isDelete ? "¿Está seguro que desea eliminar?" : "¿Está seguro que desea salir del formulario?");

	const modalStyle = {
		...(headerColor ? { borderTopColor: headerColor, "--headerModal": headerColor } : {}),
		...style,
	};

	return (
		<Modal
			open={visible}
			size="tiny"
			closeOnDimmerClick={false}
			dimmer="blurring"
			className={`${styles.modal} ${className} ${useContactStyles ? styles.contact : ""} ${centerModal ? styles.centerModal : ""}`}
			style={modalStyle}>
			<Modal.Content className={styles.contentContainer}>
				<div className={styles.containerFlex}>
					<div className={styles.iconContainer}>
						<Icon name={icon || "warning sign"} className={styles.warningIcon} />
					</div>
					<div className={styles.textContainer}>
						<div className={styles.headerText}>{modalHeader}</div>
						<Text className={styles.contentText}>
							{isDelete ? (
								<>
									{deleteType || "El registro"} <strong className={styles.studentHighlight}>{focus}</strong>. Esta acción no podrá
									deshacerse.
								</>
							) : (
								fullContent ||
								(content ? (
									<>
										{`¿${content}`}
										{focus ? (
											<>
												<br />
												<span className={styles.focus} style={{ display: "inline-block", marginTop: "0.4rem" }}>
													{focus}
												</span>
												?
											</>
										) : (
											"?"
										)}
									</>
								) : (
									"Si sales ahora, perderás los cambios no guardados."
								))
							)}
						</Text>
					</div>
				</div>
			</Modal.Content>

			<Modal.Actions className={styles.actions}>
				<div className={styles.leftActions}>{extraButton}</div>
				<div className={styles.rightActions}>
					{!hideCancelButton && (
						<Button className={styles.negativeButton} onClick={onDismiss}>
							{resolvedCancelLabel}
						</Button>
					)}
					{!hideConfirm && (
						<Button className={styles.positiveButton} onClick={onConfirm}>
							{buttonLabel}
						</Button>
					)}
				</div>
			</Modal.Actions>
		</Modal>
	);
};

ConfirmModal.propTypes = {
	visible: PropTypes.bool,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	fullContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	header: PropTypes.string,
	buttonLabel: PropTypes.string,
	cancelLabel: PropTypes.string,
	cancelButtonLLabel: PropTypes.string,
	focus: PropTypes.string,
	onConfirm: PropTypes.func,
	onDismiss: PropTypes.func,
	icon: PropTypes.string,
	extraButton: PropTypes.node,
	style: PropTypes.object,
	className: PropTypes.string,
	useContactStyles: PropTypes.bool,
	centerModal: PropTypes.bool,
	hideCancelButton: PropTypes.bool,
	hideConfirm: PropTypes.bool,
	isDelete: PropTypes.bool,
	deleteType: PropTypes.string,
	headerColor: PropTypes.string,
};

ConfirmModal.defaultProps = {
	visible: false,
	content: null,
	fullContent: null,
	header: null,
	buttonLabel: "Salir",
	cancelLabel: "Atrás",
	cancelButtonLLabel: null,
	focus: null,
	onConfirm: () => {},
	onDismiss: () => {},
	icon: null,
	extraButton: null,
	style: {},
	className: "",
	useContactStyles: false,
	centerModal: false,
	hideCancelButton: false,
	hideConfirm: false,
	isDelete: false,
	deleteType: "",
	headerColor: null,
};

export default ConfirmModal;
