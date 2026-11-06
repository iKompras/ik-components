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
	const [linkValue, setLinkValue] = useState("https://ikompras.com/app/shared-access-key-9283");
	const [pinValue, setPinValue] = useState("8492");
	const [sessionTime, setSessionTime] = useState("0");
	const [passwordValue, setPasswordValue] = useState("Secreto123");
	const [roundedValue, setRoundedValue] = useState("");

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="Input"
				description="Componente de entrada completo con soporte para etiqueta integrada, indicador de obligatorio (*), tooltip informativo flotante (infoLabel / hint), tipos automatizados (tipo 'link' con botón Copiar y feedback, tipo 'pin' con ojito y botón Generar PIN con icono exchange), modo contraseña y variantes redondeadas."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.examplesList}>
						{/* 1. Tipo Link con icono de copiar y tooltip */}
						<div>
							<Input
								type="link"
								label="Enlace Compartible (Tipo Link con Tooltip)"
								infoLabel="Haz clic en el icono de copiar para transferir la URL al portapapeles con confirmación visual automática."
								value={linkValue}
								onChange={(e, data) => {
									return setLinkValue(data.value);
								}}
							/>
						</div>

						{/* 2. Tipo PIN con icono exchange (Generar) y Ojito con Tooltips */}
						<div>
							<Input
								type="pin"
								label="Código PIN Seguro (Tipo PIN con Ojito y Generar)"
								required
								pinLength={4}
								infoLabel="Código numérico de 4 dígitos. Presiona el icono exchange para generar un nuevo PIN o el ojito para alternar visibilidad."
								value={pinValue}
								onChange={(e, data) => {
									return setPinValue(data.value);
								}}
							/>
						</div>

						{/* 3. Etiqueta Integrada / Inline Label (inlineLabel="Min") tal como en Daykal */}
						<div>
							<Input
								label="Tiempo Sesión:"
								inlineLabel="Min"
								type="number"
								placeholder="0"
								infoLabel="Tiempo de inactividad permitido antes de cerrar la sesión automáticamente (en minutos)."
								value={sessionTime}
								onChange={(e, data) => {
									return setSessionTime(data.value);
								}}
							/>
						</div>

						{/* 4. Input Estándar con Tooltip Informativo */}
						<div>
							<Input
								label="Nombre Completo"
								required
								infoLabel="Nombre oficial tal como figura en el documento de identidad o pasaporte."
								placeholder="Ingresa tu nombre..."
								value={textValue}
								onChange={(e, data) => {
									return setTextValue(data.value);
								}}
							/>
						</div>

						{/* 5. Contraseña con ojito */}
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

						{/* 6. Búsqueda rápida (Rounded) */}
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
