import React from "react";
import { IkTable } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS, IK_TABLE_COLUMNS, IK_TABLE_SAMPLE_DATA } from "../../staticData";
import styles from "./styles.module.css";

const IkTableSection = () => {
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
				<h3 className={styles.title}>🧪 Playground Interactivo</h3>
				<div className={styles.playgroundCard}>
					<IkTable
						columns={IK_TABLE_COLUMNS}
						data={IK_TABLE_SAMPLE_DATA}
						totalRows={IK_TABLE_SAMPLE_DATA.length}
						defaultParams={{ rows: 5, page: 1 }}
						showAddButton
						addButton={{ label: "Nuevo Usuario", icon: "plus" }}
						onAddButtonClick={handleAddClick}
						searcher={{ placeholder: "Buscar usuarios...", show: true }}
						visibleTopPlace
						visiblePagination
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
