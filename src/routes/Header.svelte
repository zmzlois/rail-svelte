<script lang="ts">
	import { page } from '$app/stores';
	import ProjectBreadcrumb from '../lib/components/ProjectBreadcrumb.svelte';
	import DashboardButton from '../lib/components/DashboardButton.svelte';

	const path = $page.url.pathname;
	export let user;
</script>

<header class="container mx-auto flex items-center justify-between px-6 py-6">
	<div class="col-span-1 flex items-center gap-4">
		<h3 class="text-lg font-bold text-zinc-100">Rail In Svelte</h3>
	</div>
	<div class="col-span-1 flex justify-end space-x-6">
		<DashboardButton {user} {path} />
	</div>
</header>
