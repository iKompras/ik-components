import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Toggle } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const PRESET_COMBOS = [
	{
		label: "iKompras Azul",
		trueVal: "#3b82f6",
		falseVal: "#cbd5e1",
		dotTrue: "#3b82f6",
		dotFalse: "#cbd5e1",
	},
	{
		label: "Verde / Rojo",
		trueVal: "#16a34a",
		falseVal: "#ef4444",
		dotTrue: "#16a34a",
		dotFalse: "#ef4444",
	},
	{
		label: "Ámbar / Slate",
		trueVal: "#f59e0b",
		falseVal: "#64748b",
		dotTrue: "#f59e0b",
		dotFalse: "#64748b",
	},
	{
		label: "Violeta / Rosa",
		trueVal: "#8b5cf6",
		falseVal: "#f43f5e",
		dotTrue: "#8b5cf6",
		dotFalse: "#f43f5e",
	},
	{
		label: "CSS: --accent / --red500",
		trueVal: "--accent",
		falseVal: "--red500",
		dotTrue: "#3b82f6",
		dotFalse: "#ef4444",
	},
	{
		label: "CSS: --primary / --panelModal",
		trueVal: "--primary",
		falseVal: "#e2e8f0",
		dotTrue: "#1e293b",
		dotFalse: "#e2e8f0",
	},
];

const ToggleSection = () => {
	const [checked, setChecked] = useState(true);
	const [size, setSize] = useState("medium");
	const [trueColor, setTrueColor] = useState("#3b82f6");
	const [falseColor, setFalseColor] = useState("#cbd5e1");
	const [labelText, setLabelText] = useState("Notificaciones en Tiempo Real");
	const [titleText, setTitleText] = useState("Modo Operativo");
	const [tposition, setTposition] = useState("top");
	const [disabled, setDisabled] = useState(false);

	// Estados independientes para el panel de configuración
	const [twoFactor, setTwoFactor] = useState(true);
	const [criticalAlerts, setCriticalAlerts] = useState(false);
	const [auditMode, setAuditMode] = useState(true);
	const [autoReconciliation, setAutoReconciliation] = useState(false);
	const [topTitleSync, setTopTitleSync] = useState(true);

	const isValidHex = (val) => {
		return /^#[0-9A-Fa-f]{6}$/.test(val);
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="Toggle"
				description="Interruptor interactivo moderno para activación de estados booleanos. Soporta definición independiente de color para el estado activo (trueColor) y para el inactivo (falseColor), aceptando variables CSS (--accent, var(--accent)), códigos hexadecimales (#3b82f6) o nombres de paleta predeterminados."
			/>

			{/* Playground interactivo */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					{/* Botones de Presets Rápidos */}
					<div className={styles.presetsBar}>
						<span className={styles.presetsLabel}>Combinaciones Rápidas:</span>
						<div className={styles.presetsButtons}>
							{PRESET_COMBOS.map((combo, idx) => {
								return (
									<button
										key={idx}
										type="button"
										className={styles.presetBtn}
										onClick={() => {
											setTrueColor(combo.trueVal);
											setFalseColor(combo.falseVal);
										}}>
										<span className={styles.colorDot} style={{ backgroundColor: combo.dotTrue }} />
										<span className={styles.colorDot} style={{ backgroundColor: combo.dotFalse }} />
										{combo.label}
									</button>
								);
							})}
						</div>
					</div>

					{/* Cuadrícula de Controles */}
					<div className={styles.controlsGrid}>
						<div className={styles.controlItem}>
							<label>Color True (Activo):</label>
							<div className={styles.colorInputRow}>
								<input
									type="color"
									value={isValidHex(trueColor) ? trueColor : "#3b82f6"}
									onChange={(e) => {
										return setTrueColor(e.target.value);
									}}
									className={styles.colorPicker}
									title="Seleccionar color HEX para True"
								/>
								<input
									type="text"
									value={trueColor}
									onChange={(e) => {
										return setTrueColor(e.target.value);
									}}
									placeholder="ej: #3b82f6 o --accent"
									className={styles.textInput}
								/>
							</div>
						</div>

						<div className={styles.controlItem}>
							<label>Color False (Inactivo):</label>
							<div className={styles.colorInputRow}>
								<input
									type="color"
									value={isValidHex(falseColor) ? falseColor : "#cbd5e1"}
									onChange={(e) => {
										return setFalseColor(e.target.value);
									}}
									className={styles.colorPicker}
									title="Seleccionar color HEX para False"
								/>
								<input
									type="text"
									value={falseColor}
									onChange={(e) => {
										return setFalseColor(e.target.value);
									}}
									placeholder="ej: #cbd5e1 o --red500"
									className={styles.textInput}
								/>
							</div>
						</div>

						<div className={styles.controlItem}>
							<label>Tamaño:</label>
							<select
								value={size}
								onChange={(e) => {
									return setSize(e.target.value);
								}}
								className={styles.selectInput}>
								<option value="small">Small (Compacto)</option>
								<option value="medium">Medium (Estándar)</option>
								<option value="large">Large (Destacado)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Posición del Título (`tposition`):</label>
							<select
								value={tposition}
								onChange={(e) => {
									return setTposition(e.target.value);
								}}
								className={styles.selectInput}>
								<option value="top">top (Arriba del switch)</option>
								<option value="left">left (A la izquierda)</option>
								<option value="right">right (A la derecha)</option>
								<option value="bottom">bottom (Abajo del switch)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Texto del Título (`title`):</label>
							<input
								type="text"
								value={titleText}
								onChange={(e) => {
									return setTitleText(e.target.value);
								}}
								className={styles.textInput}
								placeholder="Escribe un título..."
							/>
						</div>

						<div className={styles.controlItem}>
							<label>Texto de la Etiqueta (`label`):</label>
							<input
								type="text"
								value={labelText}
								onChange={(e) => {
									return setLabelText(e.target.value);
								}}
								className={styles.textInput}
								placeholder="Escribe una etiqueta..."
							/>
						</div>
					</div>

					{/* Escenario de Renderizado Interactivo */}
					<div className={styles.previewStage}>
						<Toggle
							checked={checked}
							onChange={(nextChecked) => {
								return setChecked(nextChecked);
							}}
							size={size}
							trueColor={trueColor}
							falseColor={falseColor}
							disabled={disabled}
							title={titleText}
							tposition={tposition}
							label={labelText}
						/>

						<div className={styles.statusIndicatorGroup}>
							<span>Estado actual:</span>
							<span className={`${styles.statusBadge} ${checked ? styles.statusBadgeTrue : styles.statusBadgeFalse}`}>
								<Icon name={checked ? "check circle" : "circle outline"} />
								{checked ? "Activo (True)" : "Inactivo (False)"}
							</span>
							<label className={styles.switchRow} style={{ marginLeft: "1rem" }}>
								<input
									type="checkbox"
									checked={disabled}
									onChange={(e) => {
										return setDisabled(e.target.checked);
									}}
								/>
								Deshabilitar
							</label>
						</div>
					</div>
				</div>
			</div>

			{/* Casos de Uso Corporativos con Colores Diferenciados */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="cog" /> Casos de Uso con Colores Personalizados
				</h3>
				<div className={styles.settingsCard}>
					<div className={styles.settingsList}>
						{/* Caso 1: Verde activo / Rojo inactivo */}
						<div className={styles.settingsItem}>
							<div className={styles.settingsItemInfo}>
								<h4 className={styles.settingsItemTitle}>
									<Icon name="shield alternate" color="green" /> Autenticación en Dos Pasos (2FA)
								</h4>
								<p className={styles.settingsItemDesc}>
									Requiere validación de token de seguridad al autorizar pagos mayores a $10,000 USD.
								</p>
								<div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
									<span className={styles.colorBadge}>trueColor=&quot;#16a34a&quot;</span>
									<span className={styles.colorBadge}>falseColor=&quot;#ef4444&quot;</span>
								</div>
							</div>
							<Toggle
								checked={twoFactor}
								onChange={(val) => {
									return setTwoFactor(val);
								}}
								trueColor="#16a34a"
								falseColor="#ef4444"
								size="medium"
							/>
						</div>

						{/* Caso 2: Variables CSS --accent y --red500 */}
						<div className={styles.settingsItem}>
							<div className={styles.settingsItemInfo}>
								<h4 className={styles.settingsItemTitle}>
									<Icon name="bell" color="blue" /> Alertas Críticas por Correo (Variables CSS)
								</h4>
								<p className={styles.settingsItemDesc}>
									Notifica de inmediato discrepancias fiscales o desviaciones presupuestales en tiempo real.
								</p>
								<div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
									<span className={styles.colorBadge}>trueColor=&quot;--accent&quot;</span>
									<span className={styles.colorBadge}>falseColor=&quot;--red500&quot;</span>
								</div>
							</div>
							<Toggle
								checked={criticalAlerts}
								onChange={(val) => {
									return setCriticalAlerts(val);
								}}
								trueColor="--accent"
								falseColor="--red500"
								size="medium"
							/>
						</div>

						{/* Caso 3: Violeta Hex / Slate */}
						<div className={styles.settingsItem}>
							<div className={styles.settingsItemInfo}>
								<h4 className={styles.settingsItemTitle}>
									<Icon name="file alternate" color="purple" /> Modo de Auditoría Continua
								</h4>
								<p className={styles.settingsItemDesc}>
									Registra el historial completo de modificaciones en bitácora inmutable para compliance PCI-DSS.
								</p>
								<div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
									<span className={styles.colorBadge}>trueColor=&quot;#8b5cf6&quot;</span>
									<span className={styles.colorBadge}>falseColor=&quot;#64748b&quot;</span>
								</div>
							</div>
							<Toggle
								checked={auditMode}
								onChange={(val) => {
									return setAuditMode(val);
								}}
								trueColor="#8b5cf6"
								falseColor="#64748b"
								size="medium"
							/>
						</div>

						{/* Caso 4: Presets Temáticos */}
						<div className={styles.settingsItem}>
							<div className={styles.settingsItemInfo}>
								<h4 className={styles.settingsItemTitle}>
									<Icon name="sync" color="teal" /> Conciliación Bancaria Automática (Presets)
								</h4>
								<p className={styles.settingsItemDesc}>
									Procesa los extractos bancarios nocturnos de forma automática al cierre de jornada.
								</p>
								<div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
									<span className={styles.colorBadge}>trueColor=&quot;info&quot;</span>
									<span className={styles.colorBadge}>falseColor=&quot;secondary&quot;</span>
								</div>
							</div>
							<Toggle
								checked={autoReconciliation}
								onChange={(val) => {
									return setAutoReconciliation(val);
								}}
								trueColor="info"
								falseColor="secondary"
								size="medium"
							/>
						</div>

						{/* Caso 5: Título Arriba (tposition="top") */}
						<div className={styles.settingsItem}>
							<div className={styles.settingsItemInfo}>
								<h4 className={styles.settingsItemTitle}>
									<Icon name="cloud upload" color="blue" /> Sincronización Automática con ERP
								</h4>
								<p className={styles.settingsItemDesc}>
									Actualiza los libros contables con la pasarela central en segundo plano cada 15 minutos.
								</p>
								<div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
									<span className={styles.colorBadge}>tposition=&quot;top&quot;</span>
									<span className={styles.colorBadge}>trueColor=&quot;#16a34a&quot;</span>
								</div>
							</div>
							<Toggle
								title="Estado de la Sincronización"
								tposition="top"
								checked={topTitleSync}
								onChange={(val) => {
									return setTopTitleSync(val);
								}}
								label={topTitleSync ? "En línea y sincronizado" : "Pausado"}
								trueColor="#16a34a"
								falseColor="#ef4444"
								size="medium"
							/>
						</div>
					</div>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.toggle} />
			<PropsTable propsList={COMPONENT_PROPS.toggle} />
		</div>
	);
};

export default ToggleSection;
