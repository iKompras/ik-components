import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import { FilterSelector, Input } from "../../../src/index.js";
import SectionHeader from "../../components/SectionHeader";
import CodeBlock from "../../components/CodeBlock";
import PropsTable from "../../components/PropsTable";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import styles from "./styles.module.css";

const TASK_FIELDS = [
	{ key: "all", value: "all", text: "Todos", icon: "filter" },
	{ key: "user", value: "user", text: "Responsable", icon: "user" },
	{ key: "status", value: "status", text: "Estado", icon: "tag" },
	{ key: "priority", value: "priority", text: "Prioridad", icon: "flag" },
];

const TASK_USERS = [
	{ key: 1, value: 1, text: "Jeremy Reyes", subtitle: "jeremy@ikompras.com · Super Admin" },
	{ key: 2, value: 2, text: "Ana Torres", subtitle: "ana.torres@ikompras.com · Supervisor" },
	{ key: 3, value: 3, text: "Carlos López", subtitle: "carlos.l@ikompras.com · Soporte" },
	{ key: 4, value: 4, text: "María Gómez", subtitle: "maria.g@ikompras.com · Operaciones" },
	{ key: 5, value: 5, text: "Luis Fernández", subtitle: "luis.f@ikompras.com · Ventas" },
	{ key: 6, value: 6, text: "Sofía Ramírez", subtitle: "sofia.r@ikompras.com · Soporte" },
	{ key: 7, value: 7, text: "Diego Mendoza", subtitle: "diego.m@ikompras.com · Logística" },
	{ key: 8, value: 8, text: "Valentina Cruz", subtitle: "valentina.c@ikompras.com · Operaciones" },
	{ key: 9, value: 9, text: "Andrés Castro", subtitle: "andres.c@ikompras.com · Ventas" },
	{ key: 10, value: 10, text: "Camila Herrera", subtitle: "camila.h@ikompras.com · Supervisor" },
	{ key: 11, value: 11, text: "Mateo Silva", subtitle: "mateo.s@ikompras.com · Soporte" },
	{ key: 12, value: 12, text: "Lucía Morales", subtitle: "lucia.m@ikompras.com · Operaciones" },
];

const FilterSelectorSection = () => {
	const [selectedUsers, setSelectedUsers] = useState([1, 2]);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeField, setActiveField] = useState("user");
	const [isLoading, setIsLoading] = useState(false);
	const [isRounded, setIsRounded] = useState(false);
	const [isCompact, setIsCompact] = useState(false);

	const [modalTableUsers, setModalTableUsers] = useState([1]);
	const [modalListUsers, setModalListUsers] = useState([2]);
	const [formUser, setFormUser] = useState([1]);
	const [taskTitle, setTaskTitle] = useState("");

	const simulateRemoteFetch = ({ query, field, page, rows }) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const q = (query || "").toLowerCase().trim();
				const filtered = TASK_USERS.filter((u) => {
					if (!q) return true;
					if (field === "user") return u.text.toLowerCase().includes(q);
					return u.text.toLowerCase().includes(q) || u.subtitle.toLowerCase().includes(q);
				});
				const start = (page - 1) * rows;
				resolve({
					data: filtered.slice(start, start + rows),
					totalRows: filtered.length,
				});
			}, 450);
		});
	};

	return (
		<div className={styles.container}>
			<SectionHeader
				category="Componentes"
				title="FilterSelector (InputFilter)"
				description="Componente selector con búsqueda y petición remota en modal (con tabla IkTable o lista interactiva), además de filtro inline con chips, skeleton y paginación."
			/>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo (Filtro Inline)
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.controlsRow}>
						<Button
							size="mini"
							toggle
							active={isLoading}
							onClick={() => {
								return setIsLoading((prev) => {
									return !prev;
								});
							}}>
							<Icon name="spinner" /> {isLoading ? "Ocultar Skeleton" : "Simular Carga"}
						</Button>
						<Button
							size="mini"
							toggle
							active={isRounded}
							onClick={() => {
								return setIsRounded((prev) => {
									return !prev;
								});
							}}>
							<Icon name="circle outline" /> Rounded
						</Button>
						<Button
							size="mini"
							toggle
							active={isCompact}
							onClick={() => {
								return setIsCompact((prev) => {
									return !prev;
								});
							}}>
							<Icon name="compress" /> Compact
						</Button>
					</div>

					<FilterSelector
						label="Filtrar tareas por responsable"
						placeholder="Buscar usuario por nombre o correo..."
						fields={TASK_FIELDS}
						fieldValue={activeField}
						onFieldChange={(val) => {
							return setActiveField(val);
						}}
						options={TASK_USERS}
						multiple
						selectedValues={selectedUsers}
						onSelectChange={(vals) => {
							return setSelectedUsers(vals);
						}}
						value={searchQuery}
						onChange={(q) => {
							return setSearchQuery(q);
						}}
						loading={isLoading}
						rounded={isRounded}
						compact={isCompact}
						showSubmitButton
						submitLabel="Filtrar"
					/>

					<div className={styles.stateBox}>
						<strong>Estado actual:</strong> campo = <code>{activeField}</code> | búsqueda = <code>{searchQuery || '""'}</code> | usuarios
						seleccionados = <code>{JSON.stringify(selectedUsers)}</code>
					</div>
				</div>
			</div>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="th large" /> Versiones con Modal (Petición Async + Skeleton)
				</h3>
				<div className={styles.grid}>
					<div className={styles.demoCard}>
						<h4 className={styles.demoTitle}>1. Modal con Tabla (IkTable)</h4>
						<FilterSelector
							label="Explorar responsables en Tabla"
							placeholder="Haz clic para buscar en tabla..."
							useModal
							modalView="table"
							modalTitle="Seleccionar responsables"
							modalIcon="users"
							options={TASK_USERS}
							fetchOptions={simulateRemoteFetch}
							multiple
							pageSize={3}
							selectedValues={modalTableUsers}
							onSelectChange={(vals) => {
								return setModalTableUsers(vals || []);
							}}
						/>
						<div className={styles.stateBox}>
							Seleccionados (Tabla): <code>{JSON.stringify(modalTableUsers)}</code>
						</div>
					</div>

					<div className={styles.demoCard}>
						<h4 className={styles.demoTitle}>2. Modal con Lista (Scroll Infinito)</h4>
						<FilterSelector
							label="Explorar responsables en Lista"
							placeholder="Haz clic para buscar en lista..."
							useModal
							modalView="list"
							modalTitle="Seleccionar responsables"
							modalIcon="list ul"
							options={TASK_USERS}
							fetchOptions={simulateRemoteFetch}
							multiple
							pageSize={6}
							selectedValues={modalListUsers}
							onSelectChange={(vals) => {
								return setModalListUsers(vals || []);
							}}
						/>
						<div className={styles.stateBox}>
							Seleccionados (Lista): <code>{JSON.stringify(modalListUsers)}</code>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="wpforms" /> Modo Formulario (asInput) alineado con Input
				</h3>
				<div className={styles.playgroundCard}>
					<div className={styles.grid}>
						<Input
							label="Título de la tarea"
							placeholder="Ej. Revisar factura..."
							value={taskTitle}
							onChange={(e) => {
								return setTaskTitle(e.target.value);
							}}
						/>
						<FilterSelector
							asInput
							useModal
							modalView="list"
							label="Responsable asignado"
							placeholder="Seleccionar usuario..."
							options={TASK_USERS}
							fetchOptions={simulateRemoteFetch}
							multiple
							selectedValues={formUser}
							onSelectChange={(vals) => {
								return setFormUser(vals || []);
							}}
						/>
					</div>
				</div>
			</div>

			<CodeBlock code={CODE_SNIPPETS.filterSelector} />
			<PropsTable propsList={COMPONENT_PROPS.filterSelector} />
		</div>
	);
};

export default FilterSelectorSection;
