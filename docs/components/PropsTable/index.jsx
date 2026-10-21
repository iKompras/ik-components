import React from "react";
import PropTypes from "prop-types";
import { map, isEmpty } from "lodash";
import styles from "./styles.module.css";

const PropsTable = ({ propsList = [] }) => {
	if (isEmpty(propsList)) return null;

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>📋 Props Principales</h3>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Prop</th>
						<th>Tipo</th>
						<th>Por defecto</th>
						<th>Descripción</th>
					</tr>
				</thead>
				<tbody>
					{map(propsList, (prop) => {
						return (
							<tr key={prop.name}>
								<td className={styles.propName}>{prop.name}</td>
								<td className={styles.propType}>{prop.type}</td>
								<td className={styles.propDefault}>{prop.default}</td>
								<td>{prop.description}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

PropsTable.propTypes = {
	propsList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			default: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	),
};

export default PropsTable;
