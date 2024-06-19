import { writable } from 'svelte/store';

export const user = writable({
	name: '',
	id: 0,
	projectName: '',
	avatar: ''
});

export const projectsList = writable<{ projects: { name: string; id: string } }[]>({
	projects: [{ name: '', id: '' }]
});
