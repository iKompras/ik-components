import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import SectionHeader from "../../components/SectionHeader";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import { COMPONENT_PROPS, CODE_SNIPPETS } from "../../staticData";
import { FileManager } from "../../../src";
import styles from "./styles.module.css";

const SAMPLE_FILES = [
	"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
	"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
	"https://www.w3schools.com/html/mov_bbb.mp4",
	"https://www.w3schools.com/html/horse.mp3",
	"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
];

const FileManagerSection = () => {
	const [files, setFiles] = useState(SAMPLE_FILES);
	const [type, setType] = useState("all");
	const [multiple, setMultiple] = useState(true);
	const [rounded, setRounded] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [tileWidth, setTileWidth] = useState(4.5);
	const [tileHeight, setTileHeight] = useState(4.5);

	// Casos de uso específicos
	const [videoFiles, setVideoFiles] = useState(["https://www.w3schools.com/html/mov_bbb.mp4"]);
	const [audioFiles, setAudioFiles] = useState(["https://www.w3schools.com/html/horse.mp3"]);
	const [avatarFiles, setAvatarFiles] = useState(["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"]);

	return (
		<div className={styles.container}>
			<SectionHeader
				title="FileManager"
				tag="Archivos & Multimedia"
				description="Gestor universal de adjuntos y archivos multimedia para iKompras. Soporta de forma nativa imágenes, videos, audios, documentos PDF, hojas de cálculo, presentaciones y archivos comprimidos con visor interactivo Lightbox y descargas directas."
			/>

			{/* ==========================================================================
			   Playground Interactivo
			   ========================================================================== */}
			<section className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="sliders horizontal" /> Playground Interactivo
				</h3>

				<div className={styles.playgroundCard}>
					{/* Badges de formatos admitidos */}
					<div className={styles.formatBadgesBar}>
						<span className={`${styles.formatBadge} ${styles.formatBadgeActive}`}>
							<Icon name="image" color="blue" /> Fotos (.jpg, .png, .webp, .svg)
						</span>
						<span className={`${styles.formatBadge} ${styles.formatBadgeActive}`}>
							<Icon name="video" color="purple" /> Videos (.mp4, .webm, .mov)
						</span>
						<span className={`${styles.formatBadge} ${styles.formatBadgeActive}`}>
							<Icon name="music" color="teal" /> Audios (.mp3, .wav, .m4a)
						</span>
						<span className={`${styles.formatBadge} ${styles.formatBadgeActive}`}>
							<Icon name="file pdf" color="red" /> PDFs (.pdf)
						</span>
						<span className={`${styles.formatBadge} ${styles.formatBadgeActive}`}>
							<Icon name="file excel" color="green" /> Hojas de Cálculo (.xlsx, .csv)
						</span>
						<span className={`${styles.formatBadge} ${styles.formatBadgeActive}`}>
							<Icon name="file archive" color="grey" /> Comprimidos (.zip, .rar)
						</span>
					</div>

					{/* Escenario de vista previa en vivo */}
					<div className={styles.previewStage}>
						<FileManager
							files={files}
							setFiles={(newFiles) => {
								return setFiles(newFiles);
							}}
							type={type}
							multiple={multiple}
							rounded={rounded}
							disabled={disabled}
							width={tileWidth}
							height={tileHeight}
						/>
					</div>

					{/* Botones de presets para cargar muestras rápidamente */}
					<div className={styles.presetsBar}>
						<span className={styles.presetsLabel}>Cargar Muestras por Categoría:</span>
						<div className={styles.presetsButtons}>
							<button
								type="button"
								className={styles.presetBtn}
								onClick={() => {
									return setFiles(SAMPLE_FILES);
								}}>
								<Icon name="asterisk" color="blue" /> Todos los Formatos
							</button>
							<button
								type="button"
								className={styles.presetBtn}
								onClick={() => {
									return setFiles([
										"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
										"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
									]);
								}}>
								<Icon name="image" color="blue" /> Sólo Fotos
							</button>
							<button
								type="button"
								className={styles.presetBtn}
								onClick={() => {
									return setFiles(["https://www.w3schools.com/html/mov_bbb.mp4"]);
								}}>
								<Icon name="video" color="purple" /> Sólo Video
							</button>
							<button
								type="button"
								className={styles.presetBtn}
								onClick={() => {
									return setFiles(["https://www.w3schools.com/html/horse.mp3"]);
								}}>
								<Icon name="music" color="teal" /> Sólo Audio
							</button>
							<button
								type="button"
								className={styles.presetBtn}
								onClick={() => {
									return setFiles(["https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"]);
								}}>
								<Icon name="file pdf" color="red" /> Sólo PDF
							</button>
							<button
								type="button"
								className={styles.presetBtn}
								onClick={() => {
									return setFiles([]);
								}}>
								<Icon name="trash alternate" color="red" /> Limpiar Todo
							</button>
						</div>
					</div>

					{/* Controles del Playground */}
					<div className={styles.controlsGrid}>
						<div className={styles.controlItem}>
							<label htmlFor="file-type-select">Filtro de Tipo (`type`)</label>
							<select
								id="file-type-select"
								className={styles.selectInput}
								value={type}
								onChange={(e) => {
									return setType(e.target.value);
								}}>
								<option value="all">all (Fotos, videos, audios, pdf, docs, zip)</option>
								<option value="image">image (Sólo imágenes)</option>
								<option value="video">video (Sólo videos)</option>
								<option value="audio">audio (Sólo audios)</option>
								<option value="media">media (Fotos, videos y audios)</option>
								<option value="file">file (*/* cualquier archivo)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label htmlFor="tile-size-select">Tamaño de Miniatura</label>
							<select
								id="tile-size-select"
								className={styles.selectInput}
								value={tileWidth}
								onChange={(e) => {
									const val = parseFloat(e.target.value);
									setTileWidth(val);
									setTileHeight(val);
								}}>
								<option value={3.5}>Pequeño (3.5rem)</option>
								<option value={4.5}>Mediano (4.5rem - Estándar)</option>
								<option value={6}>Grande (6rem)</option>
							</select>
						</div>

						<div className={styles.controlItem}>
							<label>Opciones Booleanas</label>
							<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
								<label className={styles.switchRow}>
									<input
										type="checkbox"
										checked={multiple}
										onChange={(e) => {
											return setMultiple(e.target.checked);
										}}
									/>
									<span>`multiple` (múltiples adjuntos)</span>
								</label>
								<label className={styles.switchRow}>
									<input
										type="checkbox"
										checked={rounded}
										onChange={(e) => {
											return setRounded(e.target.checked);
										}}
									/>
									<span>`rounded` (forma circular)</span>
								</label>
								<label className={styles.switchRow}>
									<input
										type="checkbox"
										checked={disabled}
										onChange={(e) => {
											return setDisabled(e.target.checked);
										}}
									/>
									<span>`disabled` (sólo lectura)</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ==========================================================================
			   Casos de Uso Especializados
			   ========================================================================== */}
			<section className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="th large" /> Casos de Uso Especializados
				</h3>

				<div className={styles.cardsGrid}>
					{/* Caso 1: Grabaciones y Mensajes de Voz */}
					<div className={styles.showcaseCard}>
						<h4 className={styles.showcaseTitle}>
							<Icon name="music" color="teal" /> Notas de Voz y Audios de Soporte
						</h4>
						<p className={styles.showcaseDesc}>Filtrado restringido para audios con reproducción directa desde la galería.</p>
						<FileManager
							files={audioFiles}
							setFiles={(val) => {
								return setAudioFiles(val);
							}}
							type="audio"
							multiple={false}
							icon="microphone"
							width={4.5}
							height={4.5}
						/>
					</div>

					{/* Caso 2: Evidencias en Video */}
					<div className={styles.showcaseCard}>
						<h4 className={styles.showcaseTitle}>
							<Icon name="video" color="purple" /> Evidencias de Operación en Video
						</h4>
						<p className={styles.showcaseDesc}>
							Soporta videos (.mp4, .webm, .mov) con reproductor HTML5 en pantalla completa y descarga directa.
						</p>
						<FileManager
							files={videoFiles}
							setFiles={(val) => {
								return setVideoFiles(val);
							}}
							type="video"
							multiple
							icon="video"
							width={4.5}
							height={4.5}
						/>
					</div>

					{/* Caso 3: Foto de Perfil o Avatar Redondeado */}
					<div className={styles.showcaseCard}>
						<h4 className={styles.showcaseTitle}>
							<Icon name="user circle" color="blue" /> Foto de Perfil / Avatar
						</h4>
						<p className={styles.showcaseDesc}>Modo de imagen única con recorte circular `rounded`, zoom y rotación interactiva.</p>
						<FileManager
							files={avatarFiles}
							setFiles={(val) => {
								return setAvatarFiles(val);
							}}
							type="image"
							rounded
							multiple={false}
							icon="camera"
							width={5}
							height={5}
						/>
					</div>
				</div>
			</section>

			{/* ==========================================================================
			   Tabla de Propiedades
			   ========================================================================== */}
			<section className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="table" /> Propiedades del Componente
				</h3>
				<PropsTable data={COMPONENT_PROPS.fileManager} />
			</section>

			{/* ==========================================================================
			   Ejemplos de Código
			   ========================================================================== */}
			<section className={styles.section}>
				<h3 className={styles.title}>
					<Icon name="code" /> Ejemplos de Implementación
				</h3>
				<CodeBlock code={CODE_SNIPPETS.fileManager} />
			</section>
		</div>
	);
};

export default FileManagerSection;
