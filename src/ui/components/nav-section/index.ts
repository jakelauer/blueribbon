// ----------------------------------------------------------------------

export { default as NavSectionVertical } from "./vertical";
export { default as NavSectionHorizontal } from "./horizontal";

export function isExternalLink(path: string) {
	return path.includes(`http`);
}

export function getActive(path: string, pathname: string) {
	const checkPath = path.startsWith(`#`);

	return !checkPath && pathname.includes(path);
}
