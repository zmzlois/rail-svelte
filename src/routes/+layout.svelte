<script>
	import '../app.css';
	import Header from './Header.svelte';
	// import './styles.css';
</script>

<div class="flex flex-col min-h-screen dark bg-black ">
	<Header></Header>
	<main>
		<slot></slot>
	</main>

	
</div>


