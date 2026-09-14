import { isEmpty } from "lodash";

const dataHandler = async ({ url, params, fetchData }) => {
	const urlParams = new URLSearchParams(params).toString();
	
	if (fetchData) {
		const data = await fetchData(`${url}?${urlParams}`);
		if (isEmpty(data)) return [];
		return data;
	}
	
	console.error("IkTable: Se requiere la función 'fetchData' cuando se proporciona una 'url'.");
	return [];
};

export default dataHandler;
