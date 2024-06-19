<script lang="ts">
	import type { PageData } from '../$types';
	import * as Card from '$lib/components/ui/card';
	import * as Dropdown from '$lib/components/ui/dropdown-menu';
	import * as Select from '$lib/components/ui/select';
	export let data: PageData;

	const user = data.user;
	const projects = data.projects;
</script>

<div class="container mx-auto flex flex-col gap-10 p-10">
	<section>
		<Select.Root>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Database View"/>
			</Select.Trigger>
			<Select.Content>
				<Select.Item value="database">Database View</Select.Item>
				<Select.Item value="gql">Railway View</Select.Item>
			</Select.Content>
		</Select.Root>
	</section>
	<section class="flex flex-wrap gap-6">
		{#each projects as project (project.id)}
			<a href={`/${user.github_id}/${project.id}`}>
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

		some dive
	</section>
</div>
