import React, { useState } from "react";
import { filter, includes, toLower, map } from "lodash";
import { COMPONENTS_DATA } from "../staticData";

// Sections
import IkModalSection from "../sections/IkModalSection";
import ConfirmModalSection from "../sections/ConfirmModalSection";
import NotificationDialogSection from "../sections/NotificationDialogSection";
import LoadingSection from "../sections/LoadingSection";
import TextSection from "../sections/TextSection";
import TextAreaSection from "../sections/TextAreaSection";
import InputSection from "../sections/InputSection";
import SideBarSection from "../sections/SideBarSection";
import IkTableSection from "../sections/IkTableSection";
import CardSection from "../sections/CardSection";
import ToggleSection from "../sections/ToggleSection";
import FileManagerSection from "../sections/FileManagerSection";

import styles from "./styles.module.css";

const SECTIONS_MAP = {
	"ik-modal": <IkModalSection />,
	"confirm-modal": <ConfirmModalSection />,
	"notification-dialog": <NotificationDialogSection />,
	loading: <LoadingSection />,
	"ik-table": <IkTableSection />,
	card: <CardSection />,
	"file-manager": <FileManagerSection />,
	toggle: <ToggleSection />,
	text: <TextSection />,
	"text-area": <TextAreaSection />,
	input: <InputSection />,
	sidebar: <SideBarSection />,
	"sidebar-menu": <SideBarSection />,
};

const App = () => {
	const [activeComponentId, setActiveComponentId] = useState("ik-modal");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredComponents = filter(COMPONENTS_DATA, (comp) => {
		const q = toLower(searchQuery);
		return includes(toLower(comp.name), q) || includes(toLower(comp.category), q) || includes(toLower(comp.tag), q);
	});

	const modalComponents = filter(filteredComponents, { category: "Modales" });
	const uiComponents = filter(filteredComponents, { category: "Componentes" });

	return (
		<div className={styles.layout}>
			{/* Barra lateral de navegación */}
			<aside className={styles.sidebar}>
				<div className={styles.brand}>
					<span className={styles.brandBadge}>UI Library v1.0.0</span>
					<h1 className={styles.brandTitle}>ik-components</h1>
					<p className={styles.brandSubtitle}>Guía visual y catálogo interactivo de componentes para iKompras</p>
				</div>

				<div className={styles.search}>
					<input
						type="text"
						placeholder="Buscar componente..."
						value={searchQuery}
						onChange={(e) => {
							return setSearchQuery(e.target.value);
						}}
						className={styles.searchInput}
					/>
				</div>

				<div className={styles.nav}>
					<div className={styles.navGroupTitle}>Modales y Diálogos</div>
					{map(modalComponents, (comp) => {
						return (
							<button
								type="button"
								key={comp.id}
								className={`${styles.navItem} ${activeComponentId === comp.id ? styles.activeNavItem : ""}`}
								onClick={() => {
									return setActiveComponentId(comp.id);
								}}>
								<span>{comp.name}</span>
								<span className={styles.tag}>{comp.tag}</span>
							</button>
						);
					})}

					<div className={styles.navGroupTitle} style={{ marginTop: "1rem" }}>
						Componentes UI
					</div>
					{map(uiComponents, (comp) => {
						return (
							<button
								type="button"
								key={comp.id}
								className={`${styles.navItem} ${activeComponentId === comp.id ? styles.activeNavItem : ""}`}
								onClick={() => {
									return setActiveComponentId(comp.id);
								}}>
								<span>{comp.name}</span>
								<span className={styles.tag}>{comp.tag}</span>
							</button>
						);
					})}
				</div>
			</aside>

			{/* Vista principal del componente seleccionado */}
			<main className={styles.main}>
				<div className={styles.container}>{SECTIONS_MAP[activeComponentId] || null}</div>
			</main>
		</div>
	);
};

export default App;
