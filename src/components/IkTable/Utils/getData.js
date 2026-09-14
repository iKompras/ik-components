import { isEmpty, takeRight } from "lodash";

const getKeyValue = (object, currentKey, keyArray) => {
	if (isEmpty(keyArray)) {
		return object[currentKey];
	}
	if (object[currentKey]) {
		const newKeyArray = takeRight(keyArray, keyArray.length - 1);
		return getKeyValue(object[currentKey], keyArray[0], newKeyArray);
	}
	return "";
};

export default function getData(key, rowData, zero = false, sum) {
	if (key) {
		if (sum) {
			const sumData = getKeyValue(rowData, key, null);
			return sumData;
		}
		let keyOptions = key.split(".");
		if (keyOptions.length < 2) {
			keyOptions = key.split(",");
			if (keyOptions.length >= 2) {
				const newRowData = getKeyValue(rowData, keyOptions[0], null);
				return newRowData;
			}
		}

		const remainingKeys = takeRight(keyOptions, keyOptions.length - 1);
		const value = getKeyValue(rowData, keyOptions[0], remainingKeys);

		if ([null, "", undefined].includes(value) && zero) return 0;
		return value;
	}
	if (zero) return 0;
	return null;
}
