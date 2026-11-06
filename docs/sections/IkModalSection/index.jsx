import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { IkModal, ColorPicker } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const IkModalSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mode, setMode] = useState("Add");
	const [activeTab, setActiveTab] = useState("general");
	const [closeInside, setCloseInside] = useState(false);
	const [modalColor, setModalColor] = useState("#00b5ad");
	const [successMsg, setSuccessMsg] = useState("");

	const handleToggleMode = () => {
		const modes = ["Add", "Edit", "Watch"];
		const nextIndex = (modes.indexOf(mode) + 1) % modes.length;
		setMode(modes[nextIndex]);
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Modales"
				title="IkModal"
				description='Modal maestro estandarizado para flujos CRUD ("Add", "Edit", "Watch") con cabecera de icono dinámico, barra de pestañas (Tabs) con overflow responsivo y acciones.'
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<p className={styles.subtitle}>
						Prueba abrir el modal e interactuar con los modos de edición, pestañas, posición de la X y botones de acción:
					</p>
					<div className={styles.controlsRow}>
						<button
							type="button"
							className={styles.primaryBtn}
							onClick={() => {
								return setIsOpen(true);
							}}>
							Abrir IkModal ({mode})
						</button>
						<button type="button" className={styles.secondaryBtn} onClick={handleToggleMode}>
							Cambiar Modo: <strong>{mode}</strong>
						</button>
						<button
							type="button"
							className={styles.secondaryBtn}
							onClick={() => {
								return setCloseInside(!closeInside);
							}}>
							<Icon name={closeInside ? "check square" : "square outline"} color={closeInside ? "red" : undefined} />
							X: <strong>{closeInside ? "Dentro" : "Fuera"}</strong>
						</button>
						<ColorPicker label="Color Personalizado:" format="swatch" value={modalColor} onChange={setModalColor} />
					</div>

					{Boolean(successMsg) && (
						<div style={{ marginTop: "1rem", color: "#22c55e", fontWeight: 600 }}>
							<Icon name="check circle" /> {successMsg}
						</div>
					)}

					{isOpen && (
						<IkModal
							title="Ejemplo de Usuario"
							id="1024"
							mode={mode}
							setMode={setMode}
							size="small"
							closeInside={closeInside}
							color={modalColor}
							tabs={[
								{ key: "1", state: "general", label: "Datos Generales", icon: "user", order: 1 },
								{ key: "2", state: "permisos", label: "Permisos y Roles", icon: "key", order: 2 },
								{ key: "3", state: "historial", label: "Historial de Actividad", icon: "history", order: 3 },
							]}
							activeTab={activeTab}
							onTabChange={(tab) => {
								return setActiveTab(tab);
							}}
							onClose={() => {
								return setIsOpen(false);
							}}
							onSuccess={() => {
								setSuccessMsg("¡Acción de éxito ejecutada correctamente!");
								setIsOpen(false);
								setTimeout(() => {
									setSuccessMsg("");
								}, 4000);
							}}>
							<div className={styles.modalBody}>
								<p className={styles.activeTabInfo}>
									Pestaña activa: <code>{activeTab}</code> | X de Cierre:{" "}
									<code>{closeInside ? "closeInside={true} (Esquina Roja)" : "closeInside={false} (Exterior)"}</code>
								</p>
								<p className={styles.tabDescription}>
									Este es el cuerpo del modal en modo <strong>{mode}</strong>. Cambia entre pestañas arriba o haz clic en el botón de modo
									en la cabecera.
								</p>
							</div>
						</IkModal>
					)}
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.ikModal} />
			<PropsTable propsList={COMPONENT_PROPS.ikModal} />
		</div>
	);
};

export default IkModalSection;
