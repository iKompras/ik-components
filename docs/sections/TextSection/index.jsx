import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Text } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const TextSection = () => {
	const [textValue, setTextValue] = useState("Hola *iKompras*, texto en _cursiva_ y ~tachado~!");

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="Text"
				description="Componente tipográfico que añade soporte nativo para formateo tipo WhatsApp (*negrita*, _cursiva_, ~tachado~) sin dependencias pesadas."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<label className={styles.label}>Escribe un texto usando sintaxis tipo WhatsApp:</label>
					<input
						type="text"
						value={textValue}
						onChange={(e) => {
							return setTextValue(e.target.value);
						}}
						className={styles.input}
					/>

					<div className={styles.resultBox}>
						<span className={styles.resultLabel}>Resultado renderizado con withMarkdown=true:</span>
						<Text withMarkdown className={styles.renderedText}>
							{textValue}
						</Text>
					</div>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.text} />
			<PropsTable propsList={COMPONENT_PROPS.text} />
		</div>
	);
};

export default TextSection;
