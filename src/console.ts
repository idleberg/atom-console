import { applyStyles } from '@children-of-atom/rosetta';
import { CompositeDisposable } from 'atom';
import config from './config';
import ConsoleManager from './console-manager';
import ConsoleView from './console-view';
import Logger from './log';

export default {
	config: config.schema,
	consoleView: null as ConsoleView | null,
	consoleManager: null as ConsoleManager | null,
	subscriptions: new CompositeDisposable(),

	activate(): void {
		Logger.log('Activating package');

		const consoleView = new ConsoleView();

		this.consoleView = consoleView;
		this.consoleManager = new ConsoleManager(consoleView);

		this.subscriptions.add(applyStyles());

		// Register command that toggles this view
		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'console:show': () => this.consoleManager?.show(),
			}),
		);

		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'console:hide': () => this.consoleManager?.hide(),
			}),
		);

		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'console:toggle': () => this.consoleManager?.toggle(),
			}),
		);

		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'console:clear': () => this.consoleManager?.clear(),
			}),
		);

		if (atom.inDevMode()) {
			window.cp = this.consoleManager;

			atom.commands.add('atom-workspace', {
				'console:log': () => this.consoleManager?.raw('Hello World'),
			});
		}
	},

	deactivate(): void {
		Logger.log('Deactivating package');

		this.subscriptions?.dispose();
		this.consoleView?.destroy();
	},

	provideConsole(): ConsoleManager | null {
		Logger.log('Providing service');

		return this.consoleManager;
	},
};
