export function getClockLabel(seconds) {
	if (isNaN(seconds)) return "";
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	const hrs = hours - days * 24;
	const mins = minutes - hrs * 60 - days * 24 * 60;

	if (hrs < 1) return `${mins}m`;
	if (days < 1) return `${hrs}h ${mins}m`;
	return `${days}d ${hrs}h ${mins}m`;
}
