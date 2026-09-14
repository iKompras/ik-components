import Compressor from "compressorjs";
import moment from "moment";
import "moment/dist/locale/es";
import { includes, join, split, startsWith, toLower, trim } from "lodash";

moment.locale("es");

export const compressImage = (image) => {
	return new Promise((resolve, reject) => {
		new Compressor(image, {
			quality: 0.6,
			maxHeight: 1024,
			maxWidth: 1024,
			success(result) {
				resolve(result);
			},
			error(err) {
				reject(err);
			},
		});
	});
};

export const getFileExt = (name = "") => {
	const parts = split(name, ".");
	return toLower(parts.length > 1 ? parts.pop() : "");
};

export const getFileTypeFromDataUrl = (dataUrl = "") => {
	const match = String(dataUrl).match(/^data:([^;]+);base64,/i);
	const mime = match ? toLower(match[1]) : "";
	if (startsWith(mime, "image/")) return "image";
	if (startsWith(mime, "audio/")) return "audio";
	if (startsWith(mime, "video/")) return "video";
	if (mime === "application/pdf" || includes(mime, "pdf")) return "pdf";
	if (includes(mime, "word") || includes(mime, "officedocument.wordprocessingml")) return "doc";
	if (includes(mime, "excel") || includes(mime, "spreadsheetml")) return "xls";
	if (includes(mime, "powerpoint") || includes(mime, "presentationml")) return "ppt";
	if (includes(mime, "zip") || includes(mime, "x-7z-compressed") || includes(mime, "x-rar-compressed")) return "zip";
	if (includes(mime, "text/")) return "txt";
	return "file";
};

const buildLookupString = (entries = []) => {
	return ` ${join(entries, " ")} `;
};

const hasAnyExtension = (lookup, ext) => {
	const normalized = ` ${trim(toLower(ext))} `;
	return includes(lookup, normalized);
};

const docLookup = buildLookupString(["doc", "docx"]);
const sheetLookup = buildLookupString(["xls", "xlsx", "csv"]);
const deckLookup = buildLookupString(["ppt", "pptx"]);
const archiveLookup = buildLookupString(["zip", "rar", "7z"]);
const textLookup = buildLookupString(["txt", "md", "rtf"]);
const imageLookup = buildLookupString(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg"]);

export const getFileTypeByName = (name = "", mime = "") => {
	const mimeLower = toLower(mime);
	if (mimeLower && startsWith(mimeLower, "image/")) return "image";
	if (mimeLower && startsWith(mimeLower, "audio/")) return "audio";
	if (mimeLower && startsWith(mimeLower, "video/")) return "video";
	const ext = getFileExt(name);
	if (ext === "pdf") return "pdf";
	if (hasAnyExtension(docLookup, ext)) return "doc";
	if (hasAnyExtension(sheetLookup, ext)) return "xls";
	if (hasAnyExtension(deckLookup, ext)) return "ppt";
	if (hasAnyExtension(archiveLookup, ext)) return "zip";
	if (hasAnyExtension(textLookup, ext)) return "txt";
	if (hasAnyExtension(imageLookup, ext)) return "image";
	return "file";
};

export const getTimeLabel = (time, format) => {
	if (!time) {
		return "-";
	}
	const date = moment(time);
	if (!date.isValid()) {
		return "-";
	}
	return date.format(format || "DD MMM YYYY HH:mm");
};
