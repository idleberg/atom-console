import { DisposableLike, Emitter } from 'event-kit';

export default class ConsoleManager {
  emitter: DisposableLike;
  view: any;

  constructor(view: any) {
    this.view = view;
    this.emitter = new Emitter();
  }

  destroy(): void {
    this.emitter?.dispose();
  }

  // Toggle console panel
  hide(): void {
    this.view.hide();
  }

  show(): void {
    this.view.show();
  }

  toggle(): void {
    this.view.toggle();
  }

  stickBottom(): void {
    this.view.stickTop = false;
  }

  stickTop(): void {
    this.view.stickTop = true;
  }

  // Log message with default level
  log(message: string, level = 'log'): void {
    this.view.log(message, level);
  }

  // Log error
  error(message: string): void {
    this.log(message, 'error');
  }

  // Log warning
  warn(message: string): void {
    this.log(message, 'warning');
  }

  // Log notice
  info(message: string): void {
    this.log(message, 'info');
  }

  // Log debug message
  debug(message: string): void {
    this.log(message, 'debug');
  }

  // Log raw text
  raw(rawText: string, level = 'info', lineEnding = '\n'): void {
    rawText.split(lineEnding).map((line) => {
      this.log(line, level);
    });
  }

  // Clear console panel
  clear(): void {
    this.view.clear();
  }
}
