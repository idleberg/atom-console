import { writable } from 'svelte/store';

export interface ConsoleLine {
	level: string;
	message: string;
	timestamp: TimestampObject;
}

export interface ConsoleState {
	action: 'clear' | 'log' | undefined;
	lines: ConsoleLine[];
	showTimestamp: boolean;
	clear: boolean;
	filters: string[];
}

export default writable<ConsoleState>({
	action: undefined,
	lines: [],
	showTimestamp: true,
	clear: false,
	filters: [],
});
