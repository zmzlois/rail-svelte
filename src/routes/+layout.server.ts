import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/');

	console.log('server.user', event.locals.user);
	return {
		user: event.locals.user
	};
};
