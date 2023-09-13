export function config(document: Document, name: string) {
	return document.querySelector<HTMLMetaElement>('meta[name="abineo:' + name + '"]')?.content;
}

export function random() {
	let array = new BigInt64Array(1);
	crypto.getRandomValues(array);
	return array[0] + '';
}

export function getScrollDistance(element: Element, innerHeight: number) {
	return element.scrollTop / (element.scrollHeight - innerHeight);
}

export function Visitor(navigator: Navigator, screen: Screen): Visitor {
	return {
		tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
		lang: navigator.language,
		screen: [screen.width, screen.height],
	};
}

export function Page(location: Location, document: Document, ref?: string): Page {
	return {
		host: location.host,
		path: document.querySelector<HTMLLinkElement>('link[rel=canonical]')?.href || location.pathname,
		search: location.search,
		ref,
	};
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type Document = {
	querySelector<T extends HTMLElement>(selectors: string): T | null;
};

export type Element = {
	scrollTop: number;
	scrollHeight: number;
};

export type Navigator = {
	language: string;
};

export type Screen = {
	width: number;
	height: number;
};

export type Location = {
	protocol: string;
	host: string;
	pathname: string;
	search: string;
};

export type Visitor = {
	tz: string;
	lang: string;
	screen: [number, number];
};

export type Page = {
	host: string;
	path: string;
	search?: string;
	ref?: string;
};
