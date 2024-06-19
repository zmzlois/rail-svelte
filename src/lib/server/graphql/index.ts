import { RAILWAY_TEAM_TOKEN } from '$env/static/private';
import { createClient } from './generated';

export const client = async () =>
	createClient({
		// batch: true,
		url: 'https://backboard.railway.app/graphql/v2',
		headers: {
			Authorization: `Bearer ${RAILWAY_TEAM_TOKEN}`,
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	});
