import store from './store';
import { getConfig, getTimestamp, hideDock, showDock } from './utils';
import Console from './views/console.svelte';

export default class ConsoleView {

  destroy() {
    if (this.disposables !== null) {
      this.disposables.dispose();
    }
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
    console.log({level, message});

<<<<<<< Updated upstream
    if (at_bottom && !this.stickTop) {
      this.body.scrollTop(this.body[0].scrollHeight);
    } else if (this.stickTop) {
      this.body.scrollTop(0);
    }
    
    if (atom.config.get('console-panel.show') === true) {
      this.show();
    }
=======
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
>>>>>>> Stashed changes
  }

  clear() {
    console.log('Clearing console');

    store.update(state => {
      state.action = 'clear';
      state.lines = [];

      return state;
    });
  }
}
