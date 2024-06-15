<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { cn } from '$lib/utils';
	import url from "$lib/hooks/url"
	import ProjectBreadcrumb from './ProjectBreadcrumb.svelte';
	import DashboardButton from './DashboardButton.svelte';
	import { getContext } from 'svelte';
	import { User } from 'lucia';

export let user: User | undefined
</script>

<header class="grid grid-cols-3 justify-between container mx-auto  items-center py-10 p-4">
	<div class="col-span-1 flex items-center gap-4">
	<h3 class="font-bold text-zinc-100 text-lg">Tiny Rail</h3>
	</div>
	<div class="justify-end  flex col-span-1 space-x-6">
        <DashboardButton user={user} path={path} />
      </div>

	
</header>
