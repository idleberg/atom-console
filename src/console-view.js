import store from './store';
import { getConfig, getTimestamp, hideDock, showDock } from './utils';
import Console from './views/console.svelte';
const Logger = console;

export default class ConsoleView {

  destroy() {
    this.disposables?.dispose();
  }

  getElement() {
    const element = document.createElement('console');

    new Console({
      target: element
    });

    return element;
  }

  getTitle() {
    return 'Console';
  }

  getPath() {
    return 'panel';
  }

  getURI() {
    return `atom://console/${this.getPath()}`;
  }

  getDefaultLocation() {
    return getConfig('panelLocation');
  }

  show() {
    atom.workspace.open(this, { activatePane: false });
    showDock();
  }

  hide() {
    hideDock();
  }

  toggle() {
    atom.workspace.toggle(this);
  }

  log(message, level) {
    store.update(state => {
      state.lines = [
        ...state.lines || [],
        {
          level,
          message,
          timestamp: getTimestamp(),
        }
      ];

      state.action = 'log';

      return state;
    });
  }

  clear() {
    if (atom.inDevMode()) console.log('Clearing console');

    store.update(state => {
      state.action = 'clear';
      state.lines = [];

      return state;
    });
  }
}
