import { Emitter } from 'event-kit';

export default class ConsoleManager {
  constructor(view) {
    this.view = view;
    this.emitter = new Emitter();
  }

  destroy() {
    this.emitter.dispose();
  }

  // Toggle console panel
  hide() {
    this.view.hide();
  }

  show() {
    this.view.show();
  }

  toggle() {
    this.view.toggle();
  }

  stickBottom() {
    this.view.stickTop = false;
  }

  stickTop() {
    this.view.stickTop = true;
  }

  // Log message with default level
  log(message, level = 'log') {
    this.view.log(message, level);
  }

  // Log error
  error(message) {
    this.log(message, 'error');
  }

  // Log warning
  warn(message) {
    this.log(message, 'warning');
  }

  // Log notice
  info(message) {
    this.log(message, 'info');
  }

  // Log debug message
  debug(message) {
    this.log(message, 'debug');
  }

  // Log raw text
  raw(rawText, level = 'raw', lineEnding = '\n') {
    console.log('Raw output', rawText);
    // rawText.split(lineEnding).map(line => {
      this.log(String(true), level);
    // });
  }

  // Clear console panel
  clear() {
    this.view.clear();
  }
}
