import { redirect } from "@sveltejs/kit";
import { github } from "$lib/server/auth";
import { serializeState } from "$lib/generate-state";
import type { RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent): Promise<Response> {

    const requestUrl = new URL(event.url);
    const origin = requestUrl.searchParams.get("origin")
    const state = serializeState(origin)
    const url = await github.createAuthorizationURL(state);

    event.cookies.set("github_oauth_state", state, {
        path: "/",
        secure: import.meta.env.PROD,
        httpOnly: true,
        maxAge: 60 * 10,
        sameSite: "lax"
    });

    redirect(302, url.toString());
}