<script lang="ts">

import * as Card from "$lib/components/ui/card"
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import type { PageData } from "../$types";
    export let data: PageData

    let value = ""

    $: result = ""

    console.log("project.data", data)
</script>

<div class="bg-dot-pattern  w-screen max-h-[90vh] min-h-[80vh]">
    <div class="items-center flex justify-center mx-auto py-10 min-h-[80vh] container max-h-[80vh] max-w-[70vw]">
        <section class=" items-center justify-center">
            <div>
                {#await data}
                <Skeleton class="h-4 w-20"/>
                {:then services}
                <ol class='flex flex-wrap container mx-auto gap-10 items-start justify-center'>
                {#each data.services as service (service.id)}
                <a href={`/${data.user.github_id}/${data.projectId}`}>
                    <Card.Root class="min-w-[200px] max-w-[230px]">
                        <Card.Header>
                            <Card.Title>{service.name}</Card.Title>
                            <Card.Description>{service.description ?? ''}</Card.Description>
                        </Card.Header>
                        <Card.Content>
                          
                        </Card.Content>
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