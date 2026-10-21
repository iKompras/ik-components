import React from "react";
import { Modal, Icon, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { get, isString } from "lodash";

// Styles
import styles from "./styles.module.css";

const formatNotificationText = (text) => {
	if (text == null || text === "") return "";
	if (isString(text)) return text;
	if (text instanceof Error) {
		return text.message || String(text);
	}
	if (typeof text === "object") {
		const fromResponse = get(text, "response.data.message");
		if (isString(fromResponse) && fromResponse) return fromResponse;
		const message = get(text, "message");
		if (isString(message) && message) return message;
		try {
			return JSON.stringify(text, null, 2);
		} catch {
			return String(text);
		}
	}
	return String(text);
};

const NotificationDialog = ({ text = "", isVisible = false, isError = false, onDismiss }) => {
	const message = formatNotificationText(text);

	return (
		<Modal open={isVisible} closeOnDimmerClick={false} className={styles.modal} size="small">
			<Modal.Content className={styles.content}>
				<Icon name={isError ? "warning sign" : "check circle"} size="big" color={isError ? "red" : "green"} />
				<pre className={styles.messageBody}>{message}</pre>
			</Modal.Content>
			<Modal.Actions className={styles.actions}>
				<Button className={styles.button} onClick={onDismiss} color={isError ? "red" : "green"} fluid>
					Cerrar
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

NotificationDialog.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	isVisible: PropTypes.bool,
	isError: PropTypes.bool,
	onDismiss: PropTypes.func,
};

export default NotificationDialog;
