<script lang="ts">
	import { onMount, setContext, getContext } from "svelte";
	

    let url = undefined
  // import url from "$lib/hooks/url"
onMount(() => url = console.log("url", window.location.pathname))

// const projectId = url!.split("/").pop()  ?? ""

// const user = getContext("user")



</script>

