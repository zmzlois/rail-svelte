<script lang="ts">
	import { stringify } from "postcss";
    import Button from "./ui/button/button.svelte";
    import { GithubLogo } from "svelte-radix";
    export let className: string | undefined;

    export let origin: undefined | string;
</script>

<a href={`/login/github?origin=${origin}`} class={className}>
<Button class="flex gap-4 border-[0.2px]">
    <span>Sign In</span><GithubLogo/>
</Button>
</a>