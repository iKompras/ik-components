import React, { useState } from "react";
import { Loading } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const LoadingSection = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSimulateLoading = () => {
		setIsLoading(true);
		setTimeout(() => {
			return setIsLoading(false);
		}, 2000);
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Modales"
				title="Loading"
				description="Dimmer de pantalla completa con loader animado para estados de carga y peticiones asíncronas."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>🧪 Playground Interactivo</h3>
				<div className={styles.playgroundCard}>
					<button className={styles.primaryBtn} onClick={handleSimulateLoading}>
						Simular Carga (2 segundos)
					</button>
					<Loading isFetching={isLoading} />
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.loading} />
			<PropsTable propsList={COMPONENT_PROPS.loading} />
		</div>
	);
};

export default LoadingSection;
