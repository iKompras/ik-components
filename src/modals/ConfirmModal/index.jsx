import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { isEmpty } from "lodash";
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
	focus,
	onConfirm,
	onDismiss,
	icon,
	extraButton,
	style = {},
	className = "",
	useContactStyles = false,
	centerModal = false,
	headerColor,
	hideConfirm = false,
}) => {
	return (
		<Modal
			open={visible}
			size="tiny"
			closeOnDimmerClick={false}
			dimmer="blurring"
			className={`${styles.modal} ${className} ${useContactStyles ? styles.contact : ""} ${centerModal ? styles.centerModal : ""}`}
			style={style}>
			<Modal.Header
				className={`${styles.header} ${useContactStyles ? styles.contactHeader : ""}`}
				style={headerColor ? { "--custom-header-color": headerColor } : {}}>
				{!isEmpty(icon) && <Icon name={icon} />}
				{` ${header}`}
			</Modal.Header>

			<Modal.Content className={styles.contentContainer}>
				<Text className={styles.content}>
					{fullContent || (
						<>
							{`¿${content}`}
							{focus ? (
								<>
									<span className={styles.focus}>{focus}</span>?
								</>
							) : (
								"?"
							)}
						</>
					)}
				</Text>
			</Modal.Content>

			<Modal.Actions className={styles.actions}>
				<div className={styles.leftActions}>{extraButton}</div>
				<div className={styles.rightActions}>
					<Button className={`${styles.negativeButton} ${useContactStyles ? styles.contactNegativeButton : ""}`} onClick={onDismiss}>
						{cancelLabel}
					</Button>
					{!hideConfirm && (
						<Button className={`${styles.positiveButton} ${useContactStyles ? styles.contactPositiveButton : ""}`} onClick={onConfirm}>
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
	content: PropTypes.string,
	fullContent: PropTypes.string,
	header: PropTypes.string,
	buttonLabel: PropTypes.string,
	cancelLabel: PropTypes.string,
	focus: PropTypes.string,
	onConfirm: PropTypes.func,
	onDismiss: PropTypes.func,
	icon: PropTypes.string,
	extraButton: PropTypes.node,
	style: PropTypes.object,
	className: PropTypes.string,
	useContactStyles: PropTypes.bool,
	centerModal: PropTypes.bool,
	headerColor: PropTypes.string,
	hideConfirm: PropTypes.bool,
};

export default ConfirmModal;
