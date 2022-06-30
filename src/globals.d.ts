declare module '*.png' {
	export default ``;
}

declare module '*.html' {
	export default ``;
}
declare module '*.css' {
	const content: { [className: string]: string };
	export default content;
}

declare module '*.webm' {
	export default ``;
}
