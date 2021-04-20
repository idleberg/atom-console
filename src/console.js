import { CompositeDisposable } from 'atom';
import ConsoleManager from './console-manager';
import ConsoleView from './console-view';
import configSchema from './config';

export default {
  config: configSchema,
  consoleView: null,
  subscriptions: null,

  activate() {
    if (atom.inDevMode()) console.log('Activating package');

    this.consoleView = new ConsoleView();
    this.consoleManager = new ConsoleManager(this.consoleView);

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'console:show': () => this.consoleManager.show()
      })
    );

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'console:hide': () => this.consoleManager.hide()
      })
    );

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'console:toggle': () => this.consoleManager.toggle()
      })
    );

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'console:clear': () => this.consoleManager.clear()
      })
    );

    if (atom.inDevMode()) {
      window.cp = this.consoleManager;

      atom.commands.add('atom-workspace', {
        'console:log': () => this.consoleManager.raw({ msg: 'Hello World'})
      });
    }
  },

  deactivate() {
    if (atom.inDevMode()) console.log('Deactivating package');

    this.subscriptions?.dispose();
    this.consoleView?.destroy();
  },

  provideConsole() {
    if (atom.inDevMode()) console.log('Providing service');

    return this.consoleManager;
  }
};
