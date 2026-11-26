import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import { IkTable } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS, IK_TABLE_COLUMNS, IK_TABLE_SAMPLE_DATA } from "../../staticData";
import styles from "./styles.module.css";

const IkTableSection = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [filteredData, setFilteredData] = useState(IK_TABLE_SAMPLE_DATA);

	const handleData = (params = {}) => {
		const reserved = ["rows", "page", "orderKey", "orderDir", "fields"];
		const activeKeys = Object.keys(params).filter((k) => {
			return !reserved.includes(k) && params[k];
		});
		if (activeKeys.length === 0) {
			setFilteredData(IK_TABLE_SAMPLE_DATA);
			return;
		}
		const next = IK_TABLE_SAMPLE_DATA.filter((row) => {
			return activeKeys.every((field) => {
				const q = String(params[field]).toLowerCase().trim();
				if (field === "all") {
					return Object.values(row).some((val) => {
						return String(val).toLowerCase().includes(q);
					});
				}
				return String(row[field] ?? "")
					.toLowerCase()
					.includes(q);
			});
		});
		setFilteredData(next);
	};

	const handleAddClick = () => {
		// eslint-disable-next-line no-alert
		window.alert("¡Botón 'Nuevo Usuario' presionado!");
	};

	const handleTableAction = (action, row) => {
		console.log("Acción de tabla:", action, row);
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="IkTable"
				description="Componente de tabla de datos de alto rendimiento con barra superior de filtros y búsquedas, ordenamiento dinámico por columnas, paginación, selección múltiple, exportación a Excel/PDF y botones de acción rápida."
			/>

			<div className={styles.section}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: "1rem",
						gap: "1rem",
						flexWrap: "wrap",
					}}>
					<h3 className={styles.title} style={{ margin: 0 }}>
						<Icon name="sliders horizontal" /> Playground Interactivo
					</h3>
					<Button
						size="small"
						toggle
						active={isLoading}
						onClick={() => {
							return setIsLoading((prev) => {
								return !prev;
							});
						}}>
						<Icon name={isLoading ? "eye" : "spinner"} />
						{isLoading ? "Mostrar datos" : "Simular carga (Skeleton)"}
					</Button>
				</div>
				<div className={styles.playgroundCard}>
					<IkTable
						columns={IK_TABLE_COLUMNS}
						data={filteredData}
						totalRows={filteredData.length}
						dataHandler={handleData}
						defaultParams={{ rows: 5, page: 1 }}
						showAddButton
						addButton={{ label: "Nuevo Usuario", icon: "plus" }}
						onAddButtonClick={handleAddClick}
						searcher={{ placeholder: "Buscar usuarios...", show: true }}
						print={{
							printable: true,
							visiblePDF: true,
							visibleExcel: true,
							onPrint: () => {
								return new Promise((resolve) => {
									setTimeout(resolve, 1500);
								});
							},
							onExcel: () => {
								return new Promise((resolve) => {
									setTimeout(resolve, 1500);
								});
							},
						}}
						visibleTopPlace
						visiblePagination
						loading={isLoading}
						skeletonRows={5}
						handlerTable={handleTableAction}
					/>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.ikTable} />
			<PropsTable propsList={COMPONENT_PROPS.ikTable} />
		</div>
	);
};

export default IkTableSection;
