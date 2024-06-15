<script type="module">

    import { writable } from "svelte/store";
    import { setContext } from "svelte";

    export const user = writable({
        name: "",
        id: "",
        projectName: "",
    })
</script>