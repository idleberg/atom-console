interface MapLevelObject {
	icon: string;
	text: string;
}

interface TimestampObject {
	visible: string;
	tooltip: string;
}

interface Window {
	// Exposed in dev mode only, see `activate()`.
	cp?: unknown;
}

declare module '*.svelte' {
	const component: typeof import('svelte').SvelteComponent;

	export default component;
}

// The package ships no type declarations of its own.
declare module '@atxm/developer-console' {
	interface DeveloperConsoleOptions {
		name?: string;
		backgroundColor?: string;
		color?: string;
	}

	export default class DeveloperConsole {
		constructor(options?: DeveloperConsoleOptions);

		debug(...data: unknown[]): void;
		error(...data: unknown[]): void;
		info(...data: unknown[]): void;
		log(...data: unknown[]): void;
		trace(...data: unknown[]): void;
		warn(...data: unknown[]): void;
	}
}
