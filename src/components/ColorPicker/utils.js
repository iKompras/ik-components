/**
 * Color conversion and manipulation utilities for ColorPicker
 */

export const DEFAULT_PRESETS = [
	"#00b5ad", // Teal (Daykal / Max Monitor)
	"#3b82f6", // Blue (Primary)
	"#10b981", // Emerald (Success)
	"#f59e0b", // Amber (Warning)
	"#ef4444", // Red (Danger)
	"#8b5cf6", // Violet
	"#ec4899", // Pink
	"#06b6d4", // Cyan
	"#64748b", // Slate
	"#0f172a", // Dark / Black
	"#ffffff", // White
];

/**
 * Validate hex string (3, 6 or 8 digits with leading #)
 */
export const isValidHex = (hex) => {
	if (!hex || typeof hex !== "string") return false;
	const clean = hex.startsWith("#") ? hex.slice(1) : hex;
	return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$|^[0-9A-Fa-f]{8}$/.test(clean);
};

/**
 * Normalize hex string to 6-digit uppercase hex with leading #
 */
export const normalizeHex = (hex, defaultColor = "#000000") => {
	if (!hex || typeof hex !== "string") return defaultColor;
	let clean = hex.trim();
	if (!clean.startsWith("#")) {
		clean = `#${clean}`;
	}
	if (/^#[0-9A-Fa-f]{3}$/.test(clean)) {
		const r = clean[1];
		const g = clean[2];
		const b = clean[3];
		return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
	}
	if (/^#[0-9A-Fa-f]{6}$/.test(clean)) {
		return clean.toUpperCase();
	}
	if (/^#[0-9A-Fa-f]{8}$/.test(clean)) {
		return clean.slice(0, 7).toUpperCase();
	}
	return defaultColor;
};

/**
 * Convert Hex (#RRGGBB or #RGB) to RGB object { r, g, b }
 */
export const hexToRgb = (hex) => {
	const normalized = normalizeHex(hex);
	const r = parseInt(normalized.slice(1, 3), 16);
	const g = parseInt(normalized.slice(3, 5), 16);
	const b = parseInt(normalized.slice(5, 7), 16);
	return { r, g, b };
};

/**
 * Convert RGB to 6-digit Hex
 */
export const rgbToHex = (r, g, b) => {
	const clamp = (val) => {
		return Math.max(0, Math.min(255, Math.round(val)));
	};
	const toHex = (n) => {
		return clamp(n).toString(16).padStart(2, "0");
	};
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

/**
 * Convert RGB to HSV { h: 0-360, s: 0-100, v: 0-100 }
 */
export const rgbToHsv = (r, g, b) => {
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	const delta = max - min;

	let h = 0;
	if (delta !== 0) {
		if (max === rNorm) {
			h = ((gNorm - bNorm) / delta) % 6;
		} else if (max === gNorm) {
			h = (bNorm - rNorm) / delta + 2;
		} else {
			h = (rNorm - gNorm) / delta + 4;
		}
		h = Math.round(h * 60);
		if (h < 0) h += 360;
	}

	const s = max === 0 ? 0 : Math.round((delta / max) * 100);
	const v = Math.round(max * 100);

	return { h, s, v };
};

/**
 * Convert HSV { h: 0-360, s: 0-100, v: 0-100 } to RGB { r, g, b }
 */
export const hsvToRgb = (h, s, v) => {
	const sNorm = s / 100;
	const vNorm = v / 100;

	const c = vNorm * sNorm;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = vNorm - c;

	let rPrime = 0;
	let gPrime = 0;
	let bPrime = 0;

	if (h >= 0 && h < 60) {
		rPrime = c;
		gPrime = x;
		bPrime = 0;
	} else if (h >= 60 && h < 120) {
		rPrime = x;
		gPrime = c;
		bPrime = 0;
	} else if (h >= 120 && h < 180) {
		rPrime = 0;
		gPrime = c;
		bPrime = x;
	} else if (h >= 180 && h < 240) {
		rPrime = 0;
		gPrime = x;
		bPrime = c;
	} else if (h >= 240 && h < 300) {
		rPrime = x;
		gPrime = 0;
		bPrime = c;
	} else {
		rPrime = c;
		gPrime = 0;
		bPrime = x;
	}

	return {
		r: Math.round((rPrime + m) * 255),
		g: Math.round((gPrime + m) * 255),
		b: Math.round((bPrime + m) * 255),
	};
};

/**
 * Convert Hex to HSV directly
 */
export const hexToHsv = (hex) => {
	const { r, g, b } = hexToRgb(hex);
	return rgbToHsv(r, g, b);
};

/**
 * Convert HSV to Hex directly
 */
export const hsvToHex = (h, s, v) => {
	const { r, g, b } = hsvToRgb(h, s, v);
	return rgbToHex(r, g, b);
};

/**
 * Get contrast color (black or white) for text over background
 */
export const getContrastColor = (hex) => {
	const { r, g, b } = hexToRgb(hex);
	// Calculate relative luminance
	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq >= 128 ? "#0f172a" : "#ffffff";
};

/**
 * Check if browser supports EyeDropper API
 */
export const isEyeDropperSupported = () => {
	return typeof window !== "undefined" && "EyeDropper" in window;
};
