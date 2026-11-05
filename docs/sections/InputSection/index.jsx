import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Input } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const InputSection = () => {
	const [textValue, setTextValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("Secreto123");
	const [roundedValue, setRoundedValue] = useState("");

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="Input"
				description="Componente de entrada completo con soporte para etiqueta integrada, indicador de obligatorio (*), tooltip informativo flotante (infoLabel), modo contraseña, botón de limpieza, variantes redondeadas y selección desplegable."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.examplesList}>
						<div>
							<Input
								label="Nombre Completo"
								required
								infoLabel="Nombre oficial tal como figura en el documento de identidad."
								placeholder="Ingresa tu nombre..."
								value={textValue}
								onChange={(e, data) => {
									return setTextValue(data.value);
								}}
							/>
						</div>

						<div>
							<Input
								label="Contraseña de Acceso"
								required
								isPassword
								infoLabel="Mínimo 8 caracteres, al menos una mayúscula y un número."
								value={passwordValue}
								onChange={(e, data) => {
									return setPasswordValue(data.value);
								}}
							/>
						</div>

						<div>
							<Input
								label="Búsqueda rápida (Rounded)"
								rounded
								icon="search"
								placeholder="Buscar por código o SKU..."
								value={roundedValue}
								onChange={(e, data) => {
									return setRoundedValue(data.value);
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.input} />
			<PropsTable propsList={COMPONENT_PROPS.input} />
		</div>
	);
};

export default InputSection;
