import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { AUTH_DRIZZLE_URL } from '$env/static/private';
import { dev } from '$app/environment';

// const client = dev ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: 'require' });
const client = postgres(AUTH_DRIZZLE_URL)
export const db = drizzle(client, {});

export { users, accounts, sessions } from "./schema/user"
export { projects, services, environments, projectTeams, teamMembers } from "./schema/project"
export { workspaces, workspaceMembers } from "./schema/workspace"