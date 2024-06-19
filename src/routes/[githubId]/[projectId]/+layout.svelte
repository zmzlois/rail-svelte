<script>
	import * as Card from '$lib/components/ui/card';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import { user } from '$lib/store/user';
	export let data;

	$user = { projectName: data.project.name };

	let value = '';

	$: result = '';
</script>

<div class="max-h-[90vh] min-h-[80vh] w-screen bg-dot-pattern">
	<div
		class="container mx-auto flex max-h-[80vh] min-h-[80vh] max-w-[70vw] items-center justify-center py-10"
	>
		<section class=" items-center justify-center">
			<div>
				{#await data}
					<Skeleton class="h-4 w-20" />
				{:then services}
					<ol class="container mx-auto flex flex-wrap items-start justify-center gap-10">
						{#each data.services as service (service.id)}
							<a href={`/${data.user.github_id}/${data.projectId}`}>
								<Card.Root class="min-w-[200px] max-w-[230px]">
									<Card.Header>
										<Card.Title>{service.name}</Card.Title>
										<Card.Description>{service.description ?? ''}</Card.Description>
									</Card.Header>
									<Card.Content></Card.Content>
									<Card.Footer>
										<p>{service.createdAt.split(' ')[0]}</p>
									</Card.Footer>
								</Card.Root></a
							>
						{/each}
					</ol>
				{/await}
			</div>
		</section>
	</div>
	<slot></slot>
</div>
