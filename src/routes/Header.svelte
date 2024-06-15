<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { cn } from '$lib/utils';
	import url from "$lib/hooks/url"
	import ProjectBreadcrumb from './ProjectBreadcrumb.svelte';
	export let user = undefined;

</script>

<header class="grid grid-cols-3 justify-between container mx-auto  items-center py-10 p-4">
	<div class="col-span-1 flex items-center gap-4">
	<ProjectBreadcrumb/>
	</div>

	
</header>
