<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import ProjectBreadcrumb from '../lib/components/ProjectBreadcrumb.svelte';
	import { projectsList, user as userInfo } from '$lib/store/user';
	import DashboardButton from '../lib/components/DashboardButton.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	const path = $page.url.pathname;
	// show project related information
	export let user;
	let userInfoValue = '';
	let projects = [{ name: '', id: '' }];

	projectsList.subscribe((value) => (projects = value));
	userInfo.subscribe((value) => (userInfoValue = value));
	$: console.log('project.list', projects);

	// handle project interactivity
	let isExpanded = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}
	function onSelect() {}
</script>

<header class="container mx-auto flex items-center justify-between px-6 py-6">
{#if outer}
<svelte:self bind:this={component} outer={false}/>
{/if}

	<div class="col-span-1 flex items-center gap-4 text-zinc-100">
		<a href="/{user.githubId}"><h3 class="text-lg font-bold">Rail In Svelte</h3></a>
		{#if path.split('/').length > 2 && userInfoValue.projectName !== undefined}
			<span>/</span>
			<div class="">
				<button on:click={clickHandler}>{userInfoValue.projectName}</button>
				{#if isExpanded}
					<ul transition:slide>
						{#each projects as project (project.id)}
							<li>
								<a href="/{user.id}/{project.id}">{project.name}</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/if}
	</div>
	<div class="col-span-1 flex justify-end space-x-6">
		<DashboardButton {user} {path} />
	</div>
</header>
