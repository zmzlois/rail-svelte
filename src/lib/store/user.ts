import { writable } from 'svelte/store';

export const user = writable<{
	name?: string;
	id?: number;
	projectName?: string;
	avatar?: string;
}>({
	name: '',
	id: 0,
	projectName: '',
	avatar: ''
});
