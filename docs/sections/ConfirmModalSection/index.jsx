import React, { useState } from "react";
import { ConfirmModal } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const ConfirmModalSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Modales"
				title="ConfirmModal"
				description="Modal estilizado para confirmación de acciones destructivas o críticas con soporte para resaltar palabras clave y estilos personalizados."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>🧪 Playground Interactivo</h3>
				<div className={styles.playgroundCard}>
					<button
						// type="button"
						className={styles.primaryBtn}
						onClick={() => {
							return setIsOpen(true);
						}}>
						Abrir ConfirmModal
					</button>

					<ConfirmModal
						visible={isOpen}
						header="Eliminar Elemento"
						content="deseas eliminar el registro de"
						focus="Jeremy Reyes"
						buttonLabel="Eliminar"
						cancelLabel="Cancelar"
						onDismiss={() => {
							return setIsOpen(false);
						}}
						onConfirm={() => {
							// eslint-disable-next-line no-alert
							window.alert("Confirmado!");
							setIsOpen(false);
						}}
					/>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.confirmModal} />
			<PropsTable propsList={COMPONENT_PROPS.confirmModal} />
		</div>
	);
};

export default ConfirmModalSection;
