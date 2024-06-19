<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { ChevronDown } from 'svelte-radix';
	import { getContext } from 'svelte';
	import SignOut from '$lib/components/SignOut.svelte';
	import type { User } from 'lucia';
	import { user as userdata } from '$lib/store/user';

	export let user: User | undefined;

	userdata.set({ name: user?.username, avatar: user?.avatar, id: user?.githubId });
</script>

<div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<img class="h-10 w-10 rounded-full" src={user?.avatar} alt={user?.username} />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item><a href={`/${user?.githubId}`}>Projects</a></DropdownMenu.Item>
				<DropdownMenu.Item>Billing</DropdownMenu.Item>
				<DropdownMenu.Item>Team</DropdownMenu.Item>
				<DropdownMenu.Item><SignOut /></DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
