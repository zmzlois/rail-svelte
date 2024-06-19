import { OAuth2RequestError } from 'arctic';
import { generateIdFromEntropySize } from 'lucia';
import { github, lucia } from '$lib/server/auth';
import { accounts, db, users, workspaceMembers, workspaces } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { RequestEvent } from '@sveltejs/kit';
import { deserializeState } from '$lib/generate-state';
export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');
	const origin = deserializeState(state!).origin;
	const storedState = event.cookies.get('github_oauth_state') ?? null;

	if (!code || !state || !storedState) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const tokens = await github.validateAuthorizationCode(code);

		const githubUserResponse = await fetch('https://api.github.com/user', {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const githubUser: GitHubUser = await githubUserResponse.json();

		// Replace this with your own DB client.
		const existingUser = await db
			.select()
			.from(users)
			.where(eq(users.github_id, githubUser.id))
			.then((rows) => rows[0]);

		if (existingUser) {
			const updateToken = await db
				.update(accounts)
				.set({
					access_token: tokens.accessToken
				})
				.where(eq(accounts.providerAccountId, githubUser.id));

			console.log('update', updateToken);

			const session = await lucia.createSession(existingUser.id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);

			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			if (!origin || origin === '/') {
				console.log("origin doesn't exist");
				return new Response(null, {
					status: 302,
					headers: {
						Location: '/dashboard'
					}
				});
			}
			return new Response(null, {
				status: 302,
				headers: {
					Location: origin ?? '/dashboard'
				}
			});
		}

		const userId = generateIdFromEntropySize(10); // 16 characters long

		// Replace this with your own DB client.
		await db.transaction(async (trx) => {
			const insertUser = await trx.insert(users).values({
				id: userId,
				github_id: githubUser.id,
				username: githubUser.login,
				name: githubUser.name ?? '',
				image: githubUser.avatar_url ?? ''
				// email: githubUser.email ?? ""
			});

			const insertAccount = await trx.insert(accounts).values({
				userId: userId,
				provider: 'github',
				type: 'oauth',
				providerAccountId: githubUser.id,
				access_token: tokens.accessToken
			});

			const workspaceId = generateIdFromEntropySize(10);

			const insertWorkspace = await trx.insert(workspaces).values({
				id: workspaceId,
				name: githubUser.login,
				creatorId: userId
			});

			const insertWorkspaceMember = await trx.insert(workspaceMembers).values({
				workspaceId: workspaceId,
				userId: userId,
				role: 'owner'
			});

			Promise.all([insertUser, insertAccount, insertWorkspace, insertWorkspaceMember]);
		});
		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/dashboard'
			}
		});
	} catch (e) {
		console.log('error', e);
		// the specific error message depends on the provider
		if (e instanceof OAuth2RequestError) {
			// invalid code
			return new Response(null, {
				status: 400
			});
		}
		return new Response(null, {
			status: 500
		});
	}
}

interface GitHubUser {
	id: number;
	login: string;
	name: string;
	//  email?: string;
	avatar_url?: string;
}
