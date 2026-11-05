import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { SideBar } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS, SIDEBAR_SAMPLE_MENU } from "../../staticData";
import styles from "./styles.module.css";

const SideBarSection = () => {
	const [isExtended, setIsExtended] = useState(true);
	const [currentPath, setCurrentPath] = useState("/dashboard");

	const handleToggle = () => {
		setIsExtended(!isExtended);
	};

	const handleNavigate = (path) => {
		setCurrentPath(path);
		alert(`Navegando hacia: ${path}`);
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="SideBar y SideBarMenu"
				description="Menú lateral responsivo y colapsable con submenús flotantes (Popup) cuando está colapsado, totalmente desacoplado de dependencias globales."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.sidebarWrapper}>
						<SideBar
							isExtended={isExtended}
							handleToggle={handleToggle}
							companyName="iKompras Inc"
							currentPath={currentPath}
							onNavigate={handleNavigate}
							menu={SIDEBAR_SAMPLE_MENU}
						/>
						<div className={styles.mainContent} style={{ marginLeft: isExtended ? "16.5rem" : "3.5rem" }}>
							<h4 className={styles.contentTitle}>Contenido Principal</h4>
							<p className={styles.currentPathText}>
								Ruta actual activa: <code>{currentPath}</code>
							</p>
							<button className={styles.primaryBtn} onClick={handleToggle}>
								{isExtended ? "Colapsar Barra" : "Expandir Barra"}
							</button>
						</div>
					</div>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.sideBar} />
			<PropsTable propsList={COMPONENT_PROPS.sideBar} />
		</div>
	);
};

export default SideBarSection;
