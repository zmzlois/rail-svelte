import type { PageServerLoad } from '../$types';
import { db, projects, users, workspaces } from '$lib/server/db';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const github_id = params.githubId;

	const result = await db
		.select()
		.from(projects)
		.leftJoin(workspaces, eq(workspaces.id, projects.workspaceId))
		.rightJoin(users, eq(users.id, workspaces.creatorId))
		.where(eq(users.github_id, github_id));

	await setTimeout(() => {}, 50000);

	return { user: result[0].user, projects: result.map((item) => item.projects) };
};
