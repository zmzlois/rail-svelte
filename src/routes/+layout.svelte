<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	// import './styles.css';
	import type { PageData } from './$types';
	export let data: PageData;
	const user = data.user;
</script>

<div class="dark flex min-h-screen flex-col bg-black">
	<Header {user}></Header>
	<main>
		<slot></slot>
	</main>
</div>
