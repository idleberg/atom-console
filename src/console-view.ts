import type { Disposable } from 'atom';
import { name } from '../package.json';
import Config from './config';
import store from './store';
import { getTimestamp, hideDock, showDock } from './utils';
import Console from './views/console.svelte';

export default class ConsoleView {
	disposables?: Disposable;

	// Set via ConsoleManager's `stickTop()`/`stickBottom()` service methods.
	stickTop = false;

	destroy(): void {
		this.disposables?.dispose();
	}

	getElement(): HTMLElement {
		const element = document.createElement('console');

		new Console({
			target: element,
		});

		return element;
	}

	getTitle(): string {
		return 'Console';
	}

	getPath(): string {
		return 'panel';
	}

	getURI(): string {
		return `atom://${name}/${this.getPath()}`;
	}

	getDefaultLocation(): string {
		return String(Config.get('panelLocation'));
	}

	show(): void {
		atom.workspace.open(this, { activatePane: false });
		showDock();
	}

	hide(): void {
		hideDock();
	}

	toggle(): void {
		atom.workspace.toggle(this);
	}

	log(message: string, level: string): void {
		store.update((state) => {
			state.lines = [
				...(state.lines || []),
				{
					level,
					message,
					timestamp: getTimestamp(),
				},
			];

			state.action = 'log';

			return state;
		});
	}

	clear(): void {
		if (atom.inDevMode()) console.log('Clearing console');

		store.update((state) => {
			state.action = 'clear';
			state.lines = [];

			return state;
		});
	}
}
