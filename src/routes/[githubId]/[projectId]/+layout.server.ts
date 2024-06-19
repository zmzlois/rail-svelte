import { client } from '$lib/server/graphql';
import { db, projects, services } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const project = await db
		.select()
		.from(projects)
		.where(eq(projects.id, params.projectId))
		.then((res) => res[0]);

	if (!project) return null;

	const results = await db.select().from(services).where(eq(services.projectId, params.projectId));

	return {
		services: results,
		projectId: params.projectId,
		project
	};
};
