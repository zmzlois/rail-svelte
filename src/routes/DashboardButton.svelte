<script lang="ts">

    import DialogContent from "$lib/components/ui/dialog/dialog-content.svelte";

 interface User {
githubId: number;
username: string;
    image: string;
    email: string | undefined;
    name: string | undefined;
}
  
    export let user: User | undefined; 
    export let path = undefined;
</script>