import { isEmpty, map, get, takeRight } from "lodash";
import Moment from "moment";

export function phoneFormat(string) {
	if (string != null) {
		const cleanString = string.replace(/[^\d]/g, "");
		if (cleanString.length === 10) {
			return cleanString.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
		}
		if (cleanString.length === 11) {
			return cleanString.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
		}
		return string;
	}
	return string;
}

export function currencyFormat(num, integer = false, widthZero = false, nullToZero = false) {
	const moneyInstance = new Intl.NumberFormat("ja-JP", {
		style: "currency",
		currency: "dop",
	});

	if ([null, "", undefined].includes(num) && !nullToZero) return "";
	if (!widthZero && parseFloat(num || 0) === 0) return "";
	const strNum = moneyInstance.format(num).replace("DOP", "");
	if (integer) return strNum.split(".")[0];
	return strNum;
}

export function decimalFormat(num, widthZero = false, nullToZero = false) {
	const decimalInstance = new Intl.NumberFormat("ja-JP", {
		maximumSignificantDigits: 14,
		style: "currency",
		currency: "dop",
	});
	if ([null, "", undefined].includes(num) && !nullToZero) return "";
	if (!widthZero && parseFloat(num || 0) === 0) return "";
	return decimalInstance.format(num).replace("DOP", "");
}

export function timeBetweenDates(time, timeEnd) {
	const today = new Date(time);
	let endDate = new Date();
	if (!isEmpty(time)) {
		if (!isEmpty(timeEnd)) {
			endDate = new Date(timeEnd);
		}
		const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24), 10);
		const hours = parseInt((Math.abs(today - endDate) / (1000 * 60 * 60)) % 24, 10);
		const minutes = parseInt((Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60, 10);
		const seconds = parseInt((Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60, 10);

		let timeString = "";
		if (days === 0) {
			if (hours === 0) {
				if (minutes === 0) {
					timeString = `${String(seconds)}s`;
				} else {
					timeString = `${String(minutes)}m ${String(seconds)}s`;
				}
			} else {
				timeString = `${String(hours)}h ${String(minutes)}m ${String(seconds)}s`;
			}
		} else {
			timeString = `${String(days)}d ${String(hours)}h ${String(minutes)}m ${String(seconds)}s`;
		}
		return timeString;
	}
	return "";
}

export function pastDays(time) {
	if (time) {
		const fechaInicio = new Date(time).getTime();
		const fechaFin = new Date().getTime();
		const diff = fechaFin - fechaInicio;
		const days = parseInt(diff / (1000 * 60 * 60 * 24), 10);
		if (days === 0) return null;
		return days;
	}
	return null;
}

export function getTimeLabel(time, dateOnly = false, hourOnly = false, both = false, day = false, monthYear = false, DMY = false) {
	if (!isEmpty(time) && time !== null) {
		const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

		const propTime = new Date(time);

		if (hourOnly) {
			return propTime.toLocaleString("en-US", {
				hour12: true,
				hour: "2-digit",
				minute: "2-digit",
			});
		}

		if (day) {
			return `${days[propTime.getUTCDay() - 1]} 
				${propTime.toLocaleString("es-US", {
					hour12: true,
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
				})}`;
		}
		if (dateOnly) {
			return propTime.toLocaleString("es-US", {
				hour12: true,
				day: "2-digit",
				month: "2-digit",
				year: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
			});
		}
		if (DMY) {
			return Moment(time, "DD/MM/YYYY").format("DD/MM/YYYY");
		}
		if (monthYear) {
			if (time.length === 7) {
				const newTime = time.split("-");
				if (newTime.length > 1) {
					return `${newTime[1]}/${newTime[0].slice(2, 4)}`;
				}
				return `${time.slice(0, 3)}${time.slice(5, 7)}`;
			}
			return propTime.toLocaleString("es-US", {
				month: "2-digit",
				year: "2-digit",
			});
		}
		if (both) {
			return propTime.toLocaleString("es-US", {
				hour12: true,
				day: "2-digit",
				month: "2-digit",
				year: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
			});
		}

		return Moment(time).format("DD/MM/YYYY");
	}
	return time;
}

export function renderTranslate(value, translate) {
	let newValue = value;
	if (translate) {
		translate.forEach((item) => {
			if (item.onName === value) {
				newValue = String(item.translate);
			}
		});
	}
	return newValue;
}

export function dropdownFormat(data, label, value) {
	const formatData = map(data, (item, index) => {
		return { key: index + 1, text: get(item, label, ""), value: get(item, value, "") };
	});
	return formatData;
}

export function searchKeyFormatter(value) {
	let noCommaValue = value.split(",").join(".");
	if (noCommaValue.split(".").length > 2) {
		const separateValue = noCommaValue.split(".");
		noCommaValue = `${separateValue[0]}:${takeRight(separateValue, separateValue.length - 1).join(".")}`;
	}
	return noCommaValue;
}

// Calcula un tamaño adaptativo automático: por cada X píxeles que baje el ancho, reduce 1 unidad
export function getAutoAdaptiveSize(windowWidth, referenceWidth = 768, referenceSize = 55, pixelsPerUnit = 10, minSize = 10) {
	if (windowWidth >= referenceWidth) {
		return referenceSize;
	}
	const pixelDifference = referenceWidth - windowWidth;
	const unitsToReduce = Math.floor(pixelDifference / pixelsPerUnit);
	const newSize = referenceSize - unitsToReduce;
	return Math.max(newSize, minSize);
}
