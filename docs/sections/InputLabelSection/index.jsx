import React from "react";
import { InputLabel } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const InputLabelSection = () => {
	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="InputLabel"
				description="Etiqueta uniforme con soporte para indicador de campo obligatorio (*) e icono de ayuda con tooltip informativo flotante."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>🧪 Playground Interactivo</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.examplesList}>
						<div>
							<InputLabel required hint="Este campo es obligatorio para crear el registro.">
								Nombre Completo
							</InputLabel>
						</div>
						<div>
							<InputLabel hint="Formato internacional E.164 (Ej: +1 809 000 0000)">Número Telefónico</InputLabel>
						</div>
					</div>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.inputLabel} />
			<PropsTable propsList={COMPONENT_PROPS.inputLabel} />
		</div>
	);
};

export default InputLabelSection;
