<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';
	import ProjectBreadcrumb from '../lib/components/ProjectBreadcrumb.svelte';
	import DashboardButton from '../lib/components/DashboardButton.svelte';
	import { getContext } from 'svelte';
	import type { User } from 'lucia';

export let user: User | undefined

const path = $page.url.pathname
console.log("path", path)
</script>

<header class="flex justify-between container mx-auto  items-center py-10 px-6">
	<div class="col-span-1 flex items-center gap-4">
	<h3 class="font-bold text-zinc-100 text-lg">Rail In Svelte</h3>
	</div>
	<div class="justify-end  flex col-span-1 space-x-6">
        <DashboardButton user={user} path={path} />
      </div>

	
</header>
