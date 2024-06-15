// src/lib/server/auth.ts
import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "./db";
import { sessions, users } from "./db/schema/user";
import { GitHub } from "arctic";

import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from "$env/static/private";

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users)

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            // set to `true` when using HTTPS
            secure: !dev
        }
    },
    getUserAttributes: (attributes) => {
        return {
            // attributes has the type of DatabaseUserAttributes
            githubId: attributes.github_id,
            username: attributes.username
        };
    }
});

export const github = new GitHub(AUTH_GITHUB_ID, AUTH_GITHUB_ID);

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}


interface DatabaseUserAttributes {
    github_id: number;
    username: string;
    image: string;
    email?: string;
    name?: string;

}

