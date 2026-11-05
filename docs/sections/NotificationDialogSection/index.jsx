import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { NotificationDialog } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const NotificationDialogSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isError, setIsError] = useState(false);
	const [messageText, setMessageText] = useState("");

	const handleSuccess = () => {
		setMessageText("¡Operación completada exitosamente en el servidor!");
		setIsError(false);
		setIsOpen(true);
	};

	const handleError = () => {
		setMessageText({
			response: {
				data: {
					message: "Error 400: Parámetros inválidos recibidos en el servidor.",
				},
			},
		});
		setIsError(true);
		setIsOpen(true);
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Modales"
				title="NotificationDialog"
				description="Diálogo flotante para mostrar mensajes del sistema o respuestas de la API, formateando errores u objetos JSON automáticamente."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.controlsRow}>
						<button className={styles.successBtn} onClick={handleSuccess}>
							Notificación de Éxito
						</button>
						<button className={styles.errorBtn} onClick={handleError}>
							Notificación de Error (API Object)
						</button>
					</div>

					<NotificationDialog
						isVisible={isOpen}
						isError={isError}
						text={messageText}
						onDismiss={() => {
							return setIsOpen(false);
						}}
					/>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.notificationDialog} />
			<PropsTable propsList={COMPONENT_PROPS.notificationDialog} />
		</div>
	);
};

export default NotificationDialogSection;
