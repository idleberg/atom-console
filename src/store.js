import { writable } from 'svelte/store';

export default writable({
    lines: [],
    showTimestamp: true,
    clear: false,
    filters: []
});
