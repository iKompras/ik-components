import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { ColorPicker } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const BRAND_PALETTE = [
	"#00b5ad", // Teal Daykal
	"#1b1c1d", // Dark Slate
	"#2185d0", // Blue
	"#21ba45", // Green
	"#fbbd08", // Yellow
	"#f2711c", // Orange
	"#db2828", // Red
	"#e03997", // Pink
	"#a333c8", // Purple
	"#a0a0a0", // Grey
];

const ColorPickerSection = () => {
	// Playground state
	const [playgroundColor, setPlaygroundColor] = useState("#00B5AD");
	const [format, setFormat] = useState("swatch");
	const [size, setSize] = useState("medium");
	const [rounded, setRounded] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [showPresets, setShowPresets] = useState(true);
	const [showEyeDropper, setShowEyeDropper] = useState(true);
	const [showHexInput, setShowHexInput] = useState(true);
	const [error, setError] = useState(false);

	// Case states
	const [swatchColor, setSwatchColor] = useState("#3B82F6");
	// const [formColor, setFormColor] = useState("#10B981");
	const [inlineColor, setInlineColor] = useState("#8B5CF6");
	const [brandColor, setBrandColor] = useState("#00B5AD");

	return (
		<div className={styles.container}>
			<SectionHeader
				title="ColorPicker"
				description="Selector de color 100% nativo y reactivo. Incluye área 2D de saturación y brillo, barra de tono rainbow, input Hex directo, cuentagotas con EyeDropper API y paleta de presets rápidos. Diseñado para integrarse en cualquier aplicación del ecosistema."
			/>

			{/* ==========================================================================
          PLAYGROUND INTERACTIVO
          ========================================================================== */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>

				<div className={styles.playgroundCard}>
					<div className={styles.previewStage}>
						<div className={styles.previewWrapper}>
							<ColorPicker
								label="Color Principal del Tema"
								info="Selecciona un color o escribe su código Hex directamente."
								value={playgroundColor}
								onChange={(hex) => {
									return setPlaygroundColor(hex);
								}}
								format={format}
								size={size}
								rounded={rounded}
								disabled={disabled}
								showPresets={showPresets}
								showEyeDropper={showEyeDropper}
								showHexInput={showHexInput}
								error={error}
								errorMessage={error ? "El color seleccionado no cumple el contraste mínimo." : undefined}
							/>

							<div className={styles.valueDisplay}>
								<div className={styles.valueColorBox} style={{ backgroundColor: playgroundColor }} />
								Valor activo: <span className={styles.valueHighlight}>{playgroundColor}</span>
							</div>
						</div>
					</div>

					<div className={styles.controlsGrid}>
						{/* Control: Formato */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Formato (Format)</span>
							<div className={styles.segmented}>
								<button
									type="button"
									className={`${styles.segmentBtn} ${format === "input" ? styles.segmentBtnActive : ""}`}
									onClick={() => {
										return setFormat("input");
									}}>
									Input (Campo)
								</button>
								<button
									type="button"
									className={`${styles.segmentBtn} ${format === "swatch" ? styles.segmentBtnActive : ""}`}
									onClick={() => {
										return setFormat("swatch");
									}}>
									Swatch (Botón)
								</button>
							</div>
						</div>

						{/* Control: Tamaño */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Tamaño (Size)</span>
							<div className={styles.segmented}>
								<button
									type="button"
									className={`${styles.segmentBtn} ${size === "small" ? styles.segmentBtnActive : ""}`}
									onClick={() => {
										return setSize("small");
									}}>
									Small
								</button>
								<button
									type="button"
									className={`${styles.segmentBtn} ${size === "medium" ? styles.segmentBtnActive : ""}`}
									onClick={() => {
										return setSize("medium");
									}}>
									Medium
								</button>
								<button
									type="button"
									className={`${styles.segmentBtn} ${size === "large" ? styles.segmentBtnActive : ""}`}
									onClick={() => {
										return setSize("large");
									}}>
									Large
								</button>
							</div>
						</div>

						{/* Control: Toggles de configuración */}
						<div className={styles.controlGroup} style={{ gridColumn: "1 / -1" }}>
							<span className={styles.controlLabel}>Propiedades y Controles</span>
							<div className={styles.togglesGrid}>
								<label className={styles.toggleLabel}>
									<input
										type="checkbox"
										checked={rounded}
										onChange={(e) => {
											return setRounded(e.target.checked);
										}}
										className={styles.toggleCheckbox}
									/>
									Redondeado (rounded)
								</label>
								<label className={styles.toggleLabel}>
									<input
										type="checkbox"
										checked={disabled}
										onChange={(e) => {
											return setDisabled(e.target.checked);
										}}
										className={styles.toggleCheckbox}
									/>
									Deshabilitado (disabled)
								</label>
								<label className={styles.toggleLabel}>
									<input
										type="checkbox"
										checked={showPresets}
										onChange={(e) => {
											return setShowPresets(e.target.checked);
										}}
										className={styles.toggleCheckbox}
									/>
									Mostrar Presets
								</label>
								<label className={styles.toggleLabel}>
									<input
										type="checkbox"
										checked={showEyeDropper}
										onChange={(e) => {
											return setShowEyeDropper(e.target.checked);
										}}
										className={styles.toggleCheckbox}
									/>
									Cuentagotas (EyeDropper)
								</label>
								<label className={styles.toggleLabel}>
									<input
										type="checkbox"
										checked={showHexInput}
										onChange={(e) => {
											return setShowHexInput(e.target.checked);
										}}
										className={styles.toggleCheckbox}
									/>
									Input Hexadecimal
								</label>
								<label className={styles.toggleLabel}>
									<input
										type="checkbox"
										checked={error}
										onChange={(e) => {
											return setError(e.target.checked);
										}}
										className={styles.toggleCheckbox}
									/>
									Estado de Error
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ==========================================================================
          CASOS DE USO PRINCIPALES
          ========================================================================== */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="th large" /> Casos de Uso y Ejemplos
				</h3>

				<div className={casesGridWrapper || styles.casesGrid}>
					{/* Caso 1: Swatch con Label (Estándar de Formularios) */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="tag" /> 1. Swatch con Label (Estándar)
							</h4>
							<p className={styles.demoDesc}>
								Etiqueta superior y botón de muestra (<code>swatch</code>) directo, sin campo de texto input debajo.
							</p>
						</div>
						<div className={styles.demoBody}>
							<ColorPicker
								label="Color del Módulo:"
								info="Haz clic en la muestra de color para abrir el selector"
								value={swatchColor}
								onChange={setSwatchColor}
								format="swatch"
							/>
							<div className={styles.valueDisplay}>
								<span>
									Color seleccionado: <b>{swatchColor}</b>
								</span>
							</div>
						</div>
					</div>

					{/* Caso 2: Swatch con Presets Corporativos */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="palette" /> 2. Swatch con Presets de Marca
							</h4>
							<p className={styles.demoDesc}>Botón swatch con paleta de colores predefinidos de la empresa.</p>
						</div>
						<div className={styles.demoBody}>
							<ColorPicker
								label="Color de la Compañía:"
								required
								format="swatch"
								value={brandColor}
								onChange={setBrandColor}
								presets={BRAND_PALETTE}
							/>
						</div>
					</div>

					{/* Caso 3: Deshabilitado / Bloqueado */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="lock" /> 3. Swatch Deshabilitado
							</h4>
							<p className={styles.demoDesc}>
								Demuestra el estado bloqueado cuando <code>disabled=&#123;true&#125;</code>.
							</p>
						</div>
						<div className={styles.demoBody}>
							<ColorPicker label="Color No Modificable:" disabled format="swatch" value="#64748B" />
						</div>
					</div>

					{/* Caso 4: Modo Inline (Sin Popover) */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="window maximize outline" /> 4. Modo Embebido / Inline
							</h4>
							<p className={styles.demoDesc}>
								Con <code>popover=&#123;false&#125;</code>, el selector se muestra incrustado directamente en el layout sin flotar.
							</p>
						</div>
						<div className={styles.demoBody}>
							<ColorPicker popover={false} value={inlineColor} onChange={setInlineColor} />
						</div>
					</div>
				</div>
			</div>

			{/* ==========================================================================
          CÓDIGO Y TABLA DE PROPS
          ========================================================================== */}
			<CodeBlock code={CODE_SNIPPETS.colorPicker} />
			<PropsTable propsList={COMPONENT_PROPS.colorPicker} />
		</div>
	);
};

// Safety fallback for casesGrid
const casesGridWrapper = styles.casesGrid;

export default ColorPickerSection;
