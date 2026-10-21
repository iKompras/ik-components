import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const CodeBlock = ({ code, language = "JSX" }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => {
			return setCopied(false);
		}, 2000);
	};

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>💻 Ejemplo de Código</h3>
			<div className={styles.card}>
				<div className={styles.header}>
					<span>{language}</span>
					<button className={styles.copyBtn} onClick={handleCopy}>
						{copied ? "¡Copiado!" : "Copiar Código"}
					</button>
				</div>
				<pre className={styles.pre}>{code}</pre>
			</div>
		</div>
	);
};

CodeBlock.propTypes = {
	code: PropTypes.string.isRequired,
	language: PropTypes.string,
};

export default CodeBlock;
