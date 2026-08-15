import { writable } from 'svelte/store';

export default writable({
    action: undefined,
    lines: [],
    showTimestamp: true,
    clear: false,
    filters: []
});
