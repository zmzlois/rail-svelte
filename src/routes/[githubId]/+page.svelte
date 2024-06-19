<script lang="ts">
	import type { PageData } from '../$types';
	import * as Card from '$lib/components/ui/card';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import * as Select from '$lib/components/ui/select';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { projectsList } from '$lib/store/user';
	export let data: PageData;

	$projectsList = { projects: data.projects };

	console.log('page.project.list', projectsList);
</script>

<div class="container mx-auto flex flex-col gap-10 p-10">
	<section>
		<Select.Root>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Database View" />
			</Select.Trigger>
			<Select.Content>
				<Select.Item value="database">Database View</Select.Item>
				<Select.Item value="gql">Railway View</Select.Item>
			</Select.Content>
		</Select.Root>
	</section>
	<section class="flex flex-wrap gap-6">
		{#await data.projects}
			{#each Array.from(['projects']) as i}
				<Card.Root class="min-w-[260px] max-w-[300px]">
					<Card.Header>
						<Card.Title><Skeleton class="h-8 w-1/2 rounded-lg" /></Card.Title>
						<Card.Description><Skeleton class="h-8 w-1/3 rounded-lg" /></Card.Description>
					</Card.Header>
					<Card.Content>
						<p><Skeleton class="h-8 w-1/5 rounded-lg" /></p>
					</Card.Content>
					<Card.Footer>
						<p><Skeleton class="h-8 w-1/4 rounded-lg" /></p>
					</Card.Footer>
				</Card.Root>
			{/each}
		{:then value}
			<ol class="flex flex-wrap gap-6">
				{#each value as project (project.id)}
					<a href={`/${data.user.github_id}/${project.id}`}>
						<Card.Root class="min-w-[260px] max-w-[300px]">
							<Card.Header>
								<Card.Title>{project.name}</Card.Title>
								<Card.Description>{project.description ?? ''}</Card.Description>
							</Card.Header>
							<Card.Content>
								<p>{project.createdAt.split(' ')[0]}</p>
							</Card.Content>
							<Card.Footer>
								<p>Card Footer</p>
							</Card.Footer>
						</Card.Root></a
					>
				{/each}
			</ol>
		{/await}
	</section>
</div>
