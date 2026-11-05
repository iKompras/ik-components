import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { TextArea } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const TextAreaSection = () => {
	const [value, setValue] = useState("");
	const [isPassword, setIsPassword] = useState(false);

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="TextArea"
				description="Entrada de texto multilínea con auto-resize automático, botón para limpiar, contador de caracteres y soporte para máscara de tokens/contraseñas."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.modeOption}>
						<label className={styles.checkboxLabel}>
							<input
								type="checkbox"
								checked={isPassword}
								onChange={(e) => {
									return setIsPassword(e.target.checked);
								}}
								className={styles.checkbox}
							/>
							Modo Token/Contraseña (oculta los caracteres)
						</label>
					</div>

					<TextArea
						label="Mensaje o Prompt"
						placeholder="Escribe varias líneas para ver cómo crece automáticamente..."
						value={value}
						onChange={(e) => {
							return setValue(e.target.value);
						}}
						showRequired
						showCount
						maxLength={200}
						isPassword={isPassword}
						minRows={2}
					/>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.textArea} />
			<PropsTable propsList={COMPONENT_PROPS.textArea} />
		</div>
	);
};

export default TextAreaSection;
