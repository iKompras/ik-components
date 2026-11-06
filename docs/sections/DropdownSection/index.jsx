import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Dropdown } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const COUNTRY_OPTIONS = [
	{ key: "co", value: "co", text: "Colombia", flag: "co" },
	{ key: "mx", value: "mx", text: "México", flag: "mx" },
	{ key: "es", value: "es", text: "España", flag: "es" },
	{ key: "ar", value: "ar", text: "Argentina", flag: "ar" },
	{ key: "cl", value: "cl", text: "Chile", flag: "cl" },
	{ key: "pe", value: "pe", text: "Perú", flag: "pe" },
	{ key: "us", value: "us", text: "Estados Unidos", flag: "us" },
];

const MODULE_OPTIONS = [
	{ key: "crm", value: "crm", text: "CRM y Clientes", icon: "address book" },
	{ key: "billing", value: "billing", text: "Facturación Electrónica", icon: "file alternate" },
	{ key: "inventory", value: "inventory", text: "Control de Inventario", icon: "boxes" },
	{ key: "analytics", value: "analytics", text: "Reportes y Métricas", icon: "chart line" },
	{ key: "security", value: "security", text: "Auditoría y Seguridad", icon: "shield" },
	{ key: "marketing", value: "marketing", text: "Campañas de Marketing", icon: "bullhorn" },
];

const ROLE_OPTIONS = [
	{ key: "admin", value: "admin", text: "Super Administrador" },
	{ key: "supervisor", value: "supervisor", text: "Supervisor de Operaciones" },
	{ key: "agent", value: "agent", text: "Agente de Soporte" },
	{ key: "viewer", value: "viewer", text: "Observador de Solo Lectura" },
];

const COMPANY_OPTIONS = [
	{ key: 67, value: 67, text: "allMeV", label: { color: "teal", content: "67" } },
	{ key: 31, value: 31, text: "Company Group", label: { color: "teal", content: "31" } },
	{ key: 30, value: 30, text: "Company inactiva", label: { color: "teal", content: "30" } },
	{ key: 27, value: 27, text: "Logo Company", label: { color: "teal", content: "27" } },
	{ key: 25, value: 25, text: "Luis Company", label: { color: "teal", content: "25" } },
	{ key: 37, value: 37, text: "MásChat", label: { color: "teal", content: "37" } },
	{ key: 1, value: 1, text: "Max Monitor", label: { color: "teal", content: "1" } },
	{ key: 0, value: 0, text: "System", label: { color: "teal", content: "0" } },
];

const PAYMENT_OPTIONS = [
	{ key: "card", value: "card", text: "Tarjeta de Crédito / Débito", icon: "credit card" },
	{ key: "paypal", value: "paypal", text: "PayPal Express", icon: "paypal" },
	{ key: "transfer", value: "transfer", text: "Transferencia Bancaria", icon: "building" },
	{ key: "crypto", value: "crypto", text: "Criptomonedas (USDT / BTC)", icon: "bitcoin" },
];

const DropdownSection = () => {
	// Playground State
	const [playgroundValue, setPlaygroundValue] = useState(["crm"]);
	const [size, setSize] = useState("medium");
	const [multiple, setMultiple] = useState(true);
	const [checkbox, setCheckbox] = useState(true);
	const [search, setSearch] = useState(true);
	const [clearable, setClearable] = useState(true);
	const [rounded, setRounded] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(false);
	const [required, setRequired] = useState(true);
	const [loading, setLoading] = useState(false);

	// Dedicated Demo States
	const [countryVal, setCountryVal] = useState("co");
	const [checkboxModules, setCheckboxModules] = useState(["crm", "billing"]);
	const [standardMultipleVal, setStandardMultipleVal] = useState(["inventory"]);
	const [paymentVal, setPaymentVal] = useState("card");
	const [companyVal, setCompanyVal] = useState(67);

	const handleMultipleToggle = () => {
		setMultiple((prev) => {
			const next = !prev;
			setPlaygroundValue(next ? ["crm"] : "crm");
			return next;
		});
	};

	const handleCheckboxToggle = () => {
		setCheckbox((prev) => {
			const next = !prev;
			if (next && !multiple) {
				setMultiple(true);
				setPlaygroundValue(["crm"]);
			}
			return next;
		});
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="Dropdown"
				description="Menú desplegable estilizado de alta precisión para selección simple o múltiple. Soporta búsqueda predictiva integrada en la posición exacta del placeholder, íconos perfectamente alineados en cada opción, selección múltiple estándar o con checkboxes interactivos que no ocultan las opciones seleccionadas de la lista."
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
							<Dropdown
								label="Módulos del Sistema"
								required={required}
								hint="Configura los accesos habilitados para el usuario actual."
								placeholder="Seleccionar opciones..."
								options={MODULE_OPTIONS}
								value={playgroundValue}
								onChange={(e, data) => {
									return setPlaygroundValue(data.value);
								}}
								size={size}
								multiple={multiple}
								checkbox={checkbox}
								search={search}
								clearable={clearable}
								rounded={rounded}
								disabled={disabled}
								loading={loading}
								error={error}
								errorMessage={error ? "Debe seleccionar una opción válida para continuar." : undefined}
							/>

							<div className={styles.valueDisplay}>
								Valor seleccionado: <span className={styles.valueHighlight}>{JSON.stringify(playgroundValue)}</span>
							</div>
						</div>
					</div>

					<div className={styles.controlsGrid}>
						{/* Control: Size */}
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
									Medium (38px)
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

						{/* Control: Checkbox Variant */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Variante Checkbox</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${checkbox ? styles.toggleButtonActive : ""}`}
								onClick={handleCheckboxToggle}>
								<Icon name={checkbox ? "check square outline" : "square outline"} />
								{checkbox ? "Con Checkboxes (Opciones Visibles)" : "Sin Checkbox (Estándar)"}
							</button>
						</div>

						{/* Control: Multiple */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Modo de Selección</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${multiple ? styles.toggleButtonActive : ""}`}
								onClick={handleMultipleToggle}>
								<Icon name={multiple ? "tags" : "tag"} />
								{multiple ? "Selección Múltiple" : "Selección Simple"}
							</button>
						</div>

						{/* Control: Rounded */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Bordes Redondeados</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${rounded ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setRounded((prev) => {
										return !prev;
									});
								}}>
								<Icon name="circle outline" />
								{rounded ? "Rounded Activo" : "Estándar"}
							</button>
						</div>

						{/* Control: Search */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Búsqueda (Search)</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${search ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setSearch((prev) => {
										return !prev;
									});
								}}>
								<Icon name="search" />
								{search ? "Búsqueda Activada" : "Búsqueda Apagada"}
							</button>
						</div>

						{/* Control: Clearable */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Botón Limpiar (Clearable)</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${clearable ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setClearable((prev) => {
										return !prev;
									});
								}}>
								<Icon name="close" />
								{clearable ? "Limpiable" : "Fijo"}
							</button>
						</div>

						{/* Control: Required */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Campo Requerido</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${required ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setRequired((prev) => {
										return !prev;
									});
								}}>
								<Icon name="asterisk" />
								{required ? "Obligatorio (*)" : "Opcional"}
							</button>
						</div>

						{/* Control: Error */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Estado de Error</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${error ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setError((prev) => {
										return !prev;
									});
								}}>
								<Icon name="warning sign" />
								{error ? "Con Error" : "Normal"}
							</button>
						</div>

						{/* Control: Disabled */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Deshabilitado</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${disabled ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setDisabled((prev) => {
										return !prev;
									});
								}}>
								<Icon name="ban" />
								{disabled ? "Deshabilitado" : "Habilitado"}
							</button>
						</div>

						{/* Control: Loading */}
						<div className={styles.controlGroup}>
							<span className={styles.controlLabel}>Carga (Loading)</span>
							<button
								type="button"
								className={`${styles.toggleButton} ${loading ? styles.toggleButtonActive : ""}`}
								onClick={() => {
									return setLoading((prev) => {
										return !prev;
									});
								}}>
								<Icon name="spinner" />
								{loading ? "Cargando..." : "Listo"}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* ==========================================================================
          CASOS DE USO ESPECÍFICOS
          ========================================================================== */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="grid layout" /> Ejemplos y Casos de Uso
				</h3>

				<div className={styles.cardsGrid}>
					{/* Caso 1: Simple con Búsqueda en la posición del placeholder */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="search" /> 1. Búsqueda Alineada en el Placeholder
							</h4>
							<p className={styles.demoDesc}>
								Al hacer clic, el cursor de escritura se sitúa en la posición exacta del placeholder, con altura de 38px y botón
								&apos;x&apos; para limpiar.
							</p>
						</div>
						<div className={styles.demoBody}>
							<Dropdown
								label="País de Residencia Fiscal"
								required
								hint="El país ingresado determinará las retenciones y normativas fiscales aplicables."
								placeholder="Buscar y seleccionar país..."
								options={COUNTRY_OPTIONS}
								value={countryVal}
								onChange={(e, data) => {
									return setCountryVal(data.value);
								}}
								search
								clearable
							/>
						</div>
					</div>

					{/* Caso 2: Múltiple con Checkbox (Opciones no desaparecen) */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="check square outline" /> 2. Múltiple con Checkbox (Permanecen Visibles)
							</h4>
							<p className={styles.demoDesc}>
								Con <code>checkbox=&#123;true&#125;</code>, las opciones seleccionadas no desaparecen de la lista desplegable al abrir el
								menú, sino que se mantienen marcadas en su checkbox cuadrado.
							</p>
						</div>
						<div className={styles.demoBody}>
							<Dropdown
								label="Módulos Habilitados (Checklist)"
								multiple
								checkbox
								search
								clearable
								placeholder="Seleccionar módulos..."
								options={MODULE_OPTIONS}
								value={checkboxModules}
								onChange={(e, data) => {
									return setCheckboxModules(data.value);
								}}
							/>
						</div>
					</div>

					{/* Caso 3: Múltiple Estándar sin Checkbox */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="tags" /> 3. Múltiple Estándar sin Checkbox
							</h4>
							<p className={styles.demoDesc}>
								Sin la variante checkbox (<code>checkbox=&#123;false&#125;</code>), funciona como selección múltiple estándar de Semantic UI
								React con tags interactivos.
							</p>
						</div>
						<div className={styles.demoBody}>
							<Dropdown
								label="Permisos asignados"
								multiple
								placeholder="Seleccionar permisos..."
								options={ROLE_OPTIONS}
								value={standardMultipleVal}
								onChange={(e, data) => {
									return setStandardMultipleVal(data.value);
								}}
								clearable
							/>
						</div>
					</div>

					{/* Caso 4: Opciones con Iconos Nítidos y Alineados */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="shield" /> 4. Íconos Nítidos y Bloqueo
							</h4>
							<p className={styles.demoDesc}>
								Los íconos y textos en cada opción están perfectamente centrados y alineados verticalmente. Incluye demostración del estado
								deshabilitado.
							</p>
						</div>
						<div className={styles.demoBody}>
							<Dropdown
								label="Método de Pago Preferido"
								placeholder="Selecciona método..."
								options={PAYMENT_OPTIONS}
								value={paymentVal}
								onChange={(e, data) => {
									return setPaymentVal(data.value);
								}}
								rounded
							/>
							<Dropdown
								label="Pasarela Bloqueada"
								disabled
								placeholder="Sin acceso temporal"
								options={PAYMENT_OPTIONS}
								defaultValue="transfer"
							/>
						</div>
					</div>

					{/* Caso 5: Opciones con ID Badge / Tag (Estilo Max Monitor) */}
					<div className={styles.demoCard}>
						<div className={styles.demoHeader}>
							<h4 className={styles.demoTitle}>
								<Icon name="tag" /> 5. Opciones con Badges de ID (Estilo Max Monitor)
							</h4>
							<p className={styles.demoDesc}>
								Soporta badges con ID estilizados tipo Semantic UI (
								<code>label: &#123; color: &apos;teal&apos;, content: &apos;67&apos; &#125;</code> o propiedad <code>id: 67</code> o prop{" "}
								<code>showId</code>). Permite buscar tanto por nombre como por número de ID.
							</p>
						</div>
						<div className={styles.demoBody}>
							<Dropdown
								label="Max Monitor Compañía:"
								placeholder="Buscar por nombre o ID..."
								options={COMPANY_OPTIONS}
								value={companyVal}
								onChange={(e, data) => {
									return setCompanyVal(data.value);
								}}
								search
								clearable
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ==========================================================================
          CÓDIGO Y TABLA DE PROPS
          ========================================================================== */}
			<CodeBlock code={CODE_SNIPPETS.dropdown} />
			<PropsTable propsList={COMPONENT_PROPS.dropdown} />
		</div>
	);
};

export default DropdownSection;
