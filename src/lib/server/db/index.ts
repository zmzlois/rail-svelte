import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { AUTH_DRIZZLE_URL } from '$env/static/private';

// const client = dev ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: 'require' });
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
let pool: postgres.Sql<{}>;
if (process.env.NODE_ENV === 'production') {
	pool = postgres(AUTH_DRIZZLE_URL, { max: 30 });
} else {
	// @ts-expect-error shut up
	if (!global.pool) {
		// @ts-expect-error shut up
		global.pool = postgres(AUTH_DRIZZLE_URL, { max: 30 });
	}

	// @ts-expect-error shut up
	pool = global.pool;
}

export const db = drizzle(pool);

export { users, accounts, sessions } from './schema/user';
export { projects, services, environments, projectTeams, teamMembers } from './schema/project';
export { workspaces, workspaceMembers } from './schema/workspace';
