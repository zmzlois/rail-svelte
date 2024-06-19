import { client } from '$lib/server/graphql';
import { db, projects } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const gql = await client();

	const project = await db
		.select()
		.from(projects)
		.where(eq(projects.id, params.projectId))
		.then((res) => res[0]);

	if (!project) return null;

	const results = await gql.query({
		project: {
			__args: {
				id: project.externalId!
			},
			__scalar: true,

			id: true,
			name: true,
			__typename: true,
			environments: {
				edges: {
					node: {
						id: true,
						__scalar: true
					}
				}
			},
			services: {
				edges: {
					node: {
						id: true,
						name: true,
						__scalar: true,

						deployments: {
							edges: {
								node: {
									id: true,
									staticUrl: true,
									__scalar: true
								}
							}
						}
					}
				}
			}
		}
	});

	return {
		services: results.project.services.edges.map((item) => item.node),
		projectId: params.projectId,
		project
	};
};
