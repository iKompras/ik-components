import { isEmpty } from "lodash";

/**
 * Combina grupos de datos evitando duplicados
 * @param {Array} prevItems - Grupos existentes
 * @param {Array} newItems - Nuevos grupos a combinar
 * @param {Object} options - Opciones de merge
 * @param {string} options.groupKey - Key para identificar grupos (default: 'groupName')
 * @param {string} options.itemsKey - Key para items dentro del grupo (default: 'tasks')
 * @param {string} options.idKey - Key para identificar items únicos (default: 'id')
 * @returns {Array} Grupos combinados sin duplicados
 */
const mergeGroupsData = (prevItems, newItems, options = {}) => {
	if (isEmpty(newItems)) {
		return prevItems;
	}

	if (isEmpty(prevItems)) {
		return newItems;
	}

	const { groupKey = "groupName", itemsKey = "tasks", idKey = "id" } = options;

	const existingGroupsMap = new Map();
	prevItems.forEach((group) => {
		existingGroupsMap.set(group[groupKey], group);
	});

	const mergedItems = [];

	// Procesar grupos existentes
	prevItems.forEach((group) => {
		const newGroup = newItems.find((ng) => {
			return ng[groupKey] === group[groupKey];
		});

		if (newGroup && newGroup[itemsKey] && newGroup[itemsKey].length > 0) {
			const existingItemIds = new Set(
				(group[itemsKey] || []).map((item) => {
					return item[idKey];
				})
			);

			const newUniqueItems = (newGroup[itemsKey] || []).filter((item) => {
				return !existingItemIds.has(item[idKey]);
			});

			if (newUniqueItems.length > 0) {
				mergedItems.push({
					...group,
					[itemsKey]: [...(group[itemsKey] || []), ...newUniqueItems],
				});
			} else {
				mergedItems.push(group);
			}
		} else {
			mergedItems.push(group);
		}
	});

	// Agregar nuevos grupos que no existían antes
	newItems.forEach((newGroup) => {
		if (!existingGroupsMap.has(newGroup[groupKey])) {
			mergedItems.push(newGroup);
		}
	});

	// Eliminar duplicados a nivel global
	const allItemIds = new Set();
	return mergedItems.map((group) => {
		if (!group[itemsKey] || group[itemsKey].length === 0) {
			return group;
		}

		const uniqueItems = group[itemsKey].filter((item) => {
			if (allItemIds.has(item[idKey])) {
				return false;
			}
			allItemIds.add(item[idKey]);
			return true;
		});

		return {
			...group,
			[itemsKey]: uniqueItems,
		};
	});
};

export default mergeGroupsData;
