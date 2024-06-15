<script lang="ts">

    import DialogContent from "$lib/components/ui/dialog/dialog-content.svelte";
import type { User } from "lucia";
import UserButton from "./UserButton.svelte";
import SignInDialog from "$lib/components/SignInDialog.svelte";
    export let user: User | undefined; 
    export let path: string;
</script>
<div>
{#if user }
<UserButton/>
{:else if user && path.length > 2}
<a href="#/dashboard" class="text-sm font-medium text-muted-foreground hover:text-primary">Dashboard</a>
{:else}
<SignInDialog triggerText="Sign In" path={path}/>
{/if}
</div>