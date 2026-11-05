import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Card } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const CardSection = () => {
	const [variant, setVariant] = useState("elevated");
	const [colorPreset, setColorPreset] = useState("primary");
	const [customAccent, setCustomAccent] = useState("#3b82f6");
	const [useCustomAccent, setUseCustomAccent] = useState(false);
	const [accentPosition, setAccentPosition] = useState("left");
	const [direction, setDirection] = useState("vertical");
	const [radius, setRadius] = useState("large");
	const [hoverable, setHoverable] = useState(true);
	const [glow, setGlow] = useState(false);
	const [loading, setLoading] = useState(false);
	const [collapsible, setCollapsible] = useState(true);
	const [collapseTrigger, setCollapseTrigger] = useState("button");

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="Card"
				description="Componente de tarjeta modular, escalable y responsivo. Diseñado bajo la arquitectura de Compound Components (Card.Header, Card.Body, Card.Footer, Card.Media, Card.Badge, Card.Icon), con soporte para colapso animado y variantes visuales modernas (elevated, soft/tinted, glassmorphism, flat, gradient)."
			/>

			{/* Demostración: Tarjeta Informativa Corporativa Colapsable */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="info circle" /> Caso de Uso: Centro de Información y Directrices Operativas
				</h3>
				<Card variant="elevated" radius="large" collapsible defaultCollapsed={false} bgColor="#ffffff" textColor="#0f172a">
					<Card.Header
						title="Centro de Información y Políticas Corporativas"
						subtitle="Normativas vigentes, protocolos de compras y lineamientos de auditoría"
						avatar={<Card.Icon name="info circle" color="primary" size="small" />}
						action={<Card.Badge variant="primary">Actualizado 2026</Card.Badge>}
						divider
						style={{ padding: "1.25rem 1.5rem" }}
					/>
					<Card.Body padding="large" style={{ backgroundColor: "#f8fafc" }}>
						<p className={styles.introText}>
							Este panel centraliza la documentación normativa y directrices operativas para la gestión de adquisiciones, control
							presupuestario y acuerdos de servicio dentro de la plataforma iKompras:
						</p>

						{/* Grid superior: 2 Sub-Tarjetas Informativas */}
						<div className={styles.nestedGridTop}>
							{/* Sub-tarjeta 1: Adquisiciones */}
							<Card variant="soft" color="primary" radius="large" hoverable>
								<Card.Body padding="medium">
									<div className={styles.subCardInner}>
										<Card.Icon name="file alternate outline" color="primary" shape="circle" />
										<div className={styles.subCardDetails}>
											<h4 className={styles.subCardTitle} style={{ color: "#1e3a8a" }}>
												POLÍTICA GENERAL DE ADQUISICIONES
											</h4>
											<p className={styles.subCardText}>
												Toda compra o contratación de bienes y servicios debe tramitarse exclusivamente a través de la plataforma con una
												orden previa autorizada. Los pedidos que excedan el fondo rotatorio requieren un comparativo formal con un mínimo de
												tres cotizaciones de proveedores homologados antes de su liberación.
											</p>
											<div className={styles.subCardRow}>
												<Card.Badge variant="primary">
													<Icon name="check" /> Aprobación Digital
												</Card.Badge>
												<Card.Badge variant="primary">
													<Icon name="shield" /> 3 Cotizaciones Obligatorias
												</Card.Badge>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>

							{/* Sub-tarjeta 2: Cumplimiento Fiscal */}
							<Card variant="soft" color="success" radius="large" hoverable>
								<Card.Body padding="medium">
									<div className={styles.subCardInner}>
										<Card.Icon name="shield alternate" color="success" shape="circle" />
										<div className={styles.subCardDetails}>
											<h4 className={styles.subCardTitle} style={{ color: "#14532d" }}>
												AUDITORÍA Y CONTROL FINANCIERO
											</h4>
											<p className={styles.subCardText}>
												La recepción y validación de facturas electrónicas se procesa de forma automatizada con validación ante la autoridad
												tributaria. Las conciliaciones bancarias son cotejadas al cierre de cada día hábil asegurando la trazabilidad de los
												fondos asignados a cada centro de costo.
											</p>
											<div className={styles.subCardRow}>
												<Card.Badge variant="success">
													<Icon name="certificate" /> Certificación Fiscal
												</Card.Badge>
												<Card.Badge variant="success">
													<Icon name="sync" /> Conciliación Diaria
												</Card.Badge>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>

						{/* Fila inferior: Soporte y Resolución */}
						<Card variant="soft" color="warning" radius="large" hoverable>
							<Card.Body padding="medium">
								<div className={styles.subCardInner}>
									<Card.Icon name="help circle outline" color="warning" shape="circle" />
									<div className={styles.subCardDetails}>
										<h4 className={styles.subCardTitle} style={{ color: "#78350f" }}>
											ATENCIÓN DE DISCREPANCIAS Y MESA DE AYUDA
										</h4>
										<p className={styles.subCardText}>
											Ante cualquier diferencia en precios convenidos, recepciones parciales de mercancía o dudas en la asignación
											presupuestal, los departamentos deben levantar un ticket en la mesa de ayuda. El equipo de soporte operativo garantiza
											una primera respuesta en un plazo máximo de 30 minutos y un seguimiento continuo hasta la solución definitiva.
										</p>
										<div className={styles.subCardRow}>
											<Card.Badge variant="warning">
												<Icon name="clock outline" /> SLA Respuesta: 30 min
											</Card.Badge>
											<Card.Badge variant="warning">
												<Icon name="headphones" /> Mesa de Ayuda 24/7
											</Card.Badge>
											<Card.Badge variant="warning">
												<Icon name="tag" /> Prioridad Operativa
											</Card.Badge>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Card.Body>
				</Card>
			</div>

			{/* Playground interactivo */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playground}>
					<div className={styles.controlsGrid}>
						<div className={styles.controlItem}>
							<label>Variante:</label>
							<select
								value={variant}
								onChange={(e) => {
									return setVariant(e.target.value);
								}}
								className={styles.select}>
								<option value="elevated">Elevated (Shadow)</option>
								<option value="soft">Soft / Tinted (Sub-Card)</option>
								<option value="outlined">Outlined (Minimal)</option>
								<option value="flat">Flat (Subtle BG)</option>
								<option value="glass">Glass (Glassmorphism)</option>
								<option value="gradient">Gradient (Dark Modern)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Tema Preset:</label>
							<select
								value={colorPreset}
								onChange={(e) => {
									return setColorPreset(e.target.value);
								}}
								className={styles.select}
								disabled={useCustomAccent}>
								<option value="primary">Primary (Blue)</option>
								<option value="secondary">Secondary (Slate)</option>
								<option value="success">Success (Emerald)</option>
								<option value="warning">Warning (Amber)</option>
								<option value="danger">Danger (Rose)</option>
								<option value="info">Info (Cyan)</option>
								<option value="dark">Dark (Deep Slate)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Borde de Acento:</label>
							<select
								value={accentPosition}
								onChange={(e) => {
									return setAccentPosition(e.target.value);
								}}
								className={styles.select}>
								<option value="none">Ninguno</option>
								<option value="top">Superior (Top)</option>
								<option value="left">Izquierda (Left)</option>
								<option value="bottom">Inferior (Bottom)</option>
								<option value="right">Derecha (Right)</option>
								<option value="left bottom">Combinado: Izquierda + Inferior (Left y Bottom)</option>
								<option value="top left">Combinado: Superior + Izquierda (Top y Left)</option>
								<option value="top bottom">Combinado: Superior + Inferior (Top y Bottom)</option>
								<option value="left right">Combinado: Izquierda + Derecha (Left y Right)</option>
								<option value="all">Completo: Todos los bordes (All)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Dirección:</label>
							<select
								value={direction}
								onChange={(e) => {
									return setDirection(e.target.value);
								}}
								className={styles.select}>
								<option value="vertical">Vertical</option>
								<option value="horizontal">Horizontal (Responsive)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Radio de Esquinas:</label>
							<select
								value={radius}
								onChange={(e) => {
									return setRadius(e.target.value);
								}}
								className={styles.select}>
								<option value="none">None (0px)</option>
								<option value="small">Small (6px)</option>
								<option value="medium">Medium (12px)</option>
								<option value="large">Large (16px)</option>
								<option value="xl">Extra Large (24px)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Disparador de Colapso:</label>
							<select
								value={collapseTrigger}
								onChange={(e) => {
									return setCollapseTrigger(e.target.value);
								}}
								className={styles.select}
								disabled={!collapsible}>
								<option value="button">Solo botón Chevron</option>
								<option value="header">Toda la cabecera (Header)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Color Personalizado:</label>
							<div
								style={{
									display: "flex",
									gap: "0.5rem",
									alignItems: "center",
								}}>
								<input
									type="color"
									value={customAccent}
									onChange={(e) => {
										return setCustomAccent(e.target.value);
									}}
									className={styles.colorInput}
								/>
								<label className={styles.switchRow}>
									<input
										type="checkbox"
										checked={useCustomAccent}
										onChange={(e) => {
											return setUseCustomAccent(e.target.checked);
										}}
									/>
									Activar
								</label>
							</div>
						</div>

						<div className={styles.controlItem} style={{ justifyContent: "center" }}>
							<label className={styles.switchRow}>
								<input
									type="checkbox"
									checked={collapsible}
									onChange={(e) => {
										return setCollapsible(e.target.checked);
									}}
								/>
								Permitir Colapsar (collapsible)
							</label>
							<label className={styles.switchRow} style={{ marginTop: "0.5rem" }}>
								<input
									type="checkbox"
									checked={hoverable}
									onChange={(e) => {
										return setHoverable(e.target.checked);
									}}
								/>
								Hoverable (Elevación)
							</label>
							<label className={styles.switchRow} style={{ marginTop: "0.5rem" }}>
								<input
									type="checkbox"
									checked={glow}
									onChange={(e) => {
										return setGlow(e.target.checked);
									}}
								/>
								Glow (Aura de color)
							</label>
							<label className={styles.switchRow} style={{ marginTop: "0.5rem" }}>
								<input
									type="checkbox"
									checked={loading}
									onChange={(e) => {
										return setLoading(e.target.checked);
									}}
								/>
								Estado Loading
							</label>
						</div>
					</div>

					{/* Escenario de renderizado interactivo */}
					<div className={styles.previewStage}>
						<div
							style={{
								width: "100%",
								maxWidth: direction === "horizontal" ? "680px" : "420px",
							}}>
							<Card
								variant={variant}
								color={useCustomAccent ? customAccent : colorPreset}
								accentColor={useCustomAccent ? customAccent : undefined}
								accent={accentPosition}
								direction={direction}
								radius={radius}
								hoverable={hoverable}
								glow={glow}
								loading={loading}
								collapsible={collapsible}
								collapseTrigger={collapseTrigger}>
								<Card.Media
									src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
									aspectRatio={direction === "horizontal" ? "auto" : "16/9"}
									position={direction === "horizontal" ? "left" : "top"}
									badge={<Card.Badge variant="glass">Auditoría Q3</Card.Badge>}
								/>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										flex: 1,
										minWidth: 0,
									}}>
									<Card.Header
										title="Balance Financiero Consolidado"
										subtitle="Gestión de Tesorería y Cobranzas"
										avatar={<Icon name="chart line" size="large" color="blue" />}
										action={<Card.Badge variant="success">99.98% SLA</Card.Badge>}
										divider
									/>
									<Card.Body>
										<p
											style={{
												margin: 0,
												color: variant === "gradient" ? "#cbd5e1" : "#475569",
											}}>
											Informe consolidado de transacciones electrónicas, conciliaciones bancarias automatizadas y cumplimiento normativo en
											tiempo real.
										</p>
									</Card.Body>
									<Card.Footer align="between" divider>
										<span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Registro: #IK-TX-2026</span>
										<Button primary size="tiny">
											Ver Informe Completo
										</Button>
									</Card.Footer>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>

			{/* Ejemplos de Casos de Uso Profesionales */}
			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="grid layout" /> Catálogo de Variantes para Plataformas Corporativas
				</h3>
				<div className={styles.cardsShowcaseGrid}>
					{/* KPI Card */}
					<Card variant="elevated" hoverable glow color="primary" accent="top">
						<Card.Body padding="large">
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "flex-start",
								}}>
								<span
									style={{
										fontSize: "0.875rem",
										fontWeight: 600,
										color: "#64748b",
									}}>
									Volumen de Facturación Anual
								</span>
								<div
									style={{
										background: "rgba(59, 130, 246, 0.1)",
										padding: "0.5rem",
										borderRadius: "0.5rem",
									}}>
									<Icon name="dollar sign" color="blue" style={{ margin: 0 }} />
								</div>
							</div>
							<p className={styles.statNumber}>$1,842,500.00 USD</p>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
								<Card.Badge variant="success">+18.4%</Card.Badge>
								<p className={styles.statSubtext}>vs. trimestre fiscal previo</p>
							</div>
						</Card.Body>
					</Card>

					{/* Soft Cloud / Infrastructure */}
					<Card variant="soft" color="info" radius="large" hoverable>
						<Card.Body padding="medium">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "1rem",
								}}>
								<Card.Icon name="server" color="info" shape="circle" />
								<div>
									<h4
										style={{
											margin: 0,
											fontSize: "1rem",
											fontWeight: 700,
											color: "#164e63",
										}}>
										GATEWAY DE PAGOS IKOMPRAS
									</h4>
									<p
										style={{
											margin: "0.25rem 0 0 0",
											fontSize: "0.85rem",
											color: "#0e7490",
										}}>
										Infraestructura distribuida de alta disponibilidad
									</p>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									gap: "0.5rem",
									marginTop: "1rem",
									alignItems: "center",
								}}>
								<Card.Badge variant="info">Latencia 14ms</Card.Badge>
								<Card.Badge variant="info">Alta Concurrencia</Card.Badge>
							</div>
						</Card.Body>
					</Card>

					{/* Glassmorphism Security Card con Acento Combinado (Left + Bottom) */}
					<Card
						variant="glass"
						hoverable
						glow
						accent={["left", "bottom"]}
						accentColor="#8b5cf6"
						bgColor="rgba(30, 41, 59, 0.85)"
						textColor="#f8fafc">
						<Card.Header
							title="Seguridad y Cumplimiento"
							subtitle="Certificación PCI-DSS Nivel 1 & ISO 27001 (Acento Left + Bottom)"
							avatar={<Icon name="shield" size="large" style={{ color: "#a78bfa" }} />}
							action={<Card.Badge variant="glass">Verificado</Card.Badge>}
							divider
						/>
						<Card.Body>
							<p style={{ margin: 0, color: "#cbd5e1" }}>
								Encriptación de datos de punto a punto (E2EE), gestión de identidades basada en roles (RBAC) y auditorías automatizadas
								continuas.
							</p>
						</Card.Body>
						<Card.Footer align="right">
							<Button inverted color="violet" size="small">
								Gestionar Políticas
							</Button>
						</Card.Footer>
					</Card>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.card} />
			<PropsTable propsList={COMPONENT_PROPS.card} />
		</div>
	);
};

export default CardSection;
