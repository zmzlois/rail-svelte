<script lang="ts">
    export let triggerText: string
    export let path: string;
    let open: undefined
    import { Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription, } from "./ui/dialog";
  import SignIn from "./SignIn.svelte";


</script>
{#if open === undefined}
<Dialog>
    <DialogTrigger>
      <p class="text-sm font-medium text-foreground hover:text-primary">
        {triggerText}
      </p>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader class="flex flex-col items-center gap-10">
        <DialogTitle class="text-4xl">Login</DialogTitle>
        <DialogDescription>
          <SignIn origin={path} className="" />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  {:else}
  <Dialog open={open}>
    <DialogTrigger>
      <p class="text-sm font-medium text-muted-foreground hover:text-primary">
        {triggerText}
      </p>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader class="flex flex-col items-center gap-10">
        <DialogTitle class="text-4xl">Login</DialogTitle>
        <DialogDescription>
          <SignIn origin={path} className="" />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
{/if}