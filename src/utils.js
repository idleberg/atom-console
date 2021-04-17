function getConfig(key = '') {
  const packageName = 'console';

  return (key
    ? atom.config.get(`${packageName}.${key}`)
    : atom.config.get(packageName)
  );
}

function showDock() {
  const panelLocation = getConfig('panelLocation');

  switch (panelLocation.toLowerCase()) {
    case 'left':
      atom.workspace.getLeftDock().show();
      break;

    case 'right':
      atom.workspace.getRightDock().show();
      break;

    default:
      atom.workspace.getBottomDock().show();
      break;
  }
}

function hideDock() {
  const panelLocation = getConfig('panelLocation');

  switch (panelLocation.toLowerCase()) {
    case 'left':
      atom.workspace.getLeftDock().hide();
      break;

    case 'right':
      atom.workspace.getRightDock().hide();
      break;

    default:
      atom.workspace.getBottomDock().hide();
      break;
  }
}

function getTimestamp() {
  const date = new Date();

  const hh = `0${date.getHours()}`.slice(-2);
  const mm = `0${date.getMinutes()}`.slice(-2);
  const ss = `0${date.getSeconds()}`.slice(-2);
  const ms = `${date.getMilliseconds()}0`.slice(0, 3);

  return {
    visible: `${hh}:${mm}:${ss}.${ms}`,
    tooltip: date.toString()
  };
}

function mapLevel(level) {
  console.log('mapLevel', level);

  switch (level) {
    case 'debug':
      return {
        text: `debug`,
        icon: 'icon-bug'
      };

    case 'error':
      return {
        text: `error`,
        icon: 'icon-flame'
      };

    case 'info':
      return {
        text: `info`,
        icon: 'icon-info'
      };

    case 'warn':
    case 'warning':
      return {
        text: `warning`,
        icon: 'icon-issue-opened'
      };

    case 'raw':
      return {
        text: `info`,
        icon: 'icon-code'
      };

    default: {
      return {
        text: `highlight`,
        icon: 'icon-quote'
      };
    }
  }
}

function handleOverflow() {
  return getConfig('wordWrap')
  ? `
    overflow: hidden;
    white-space: pre-wrap;
  ` : '';
}

function initStatusBarHeight() {
  const statusBar = document.querySelector('status-bar');

  if (statusBar?.offsetHeight) {
    document.documentElement.style.setProperty('--status-bar-height', `${statusBar.offsetHeight}px`);
  }
}

export {
  getConfig,
  getTimestamp,
  handleOverflow,
  hideDock,
  initStatusBarHeight,
  mapLevel,
  showDock
};
