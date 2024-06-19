<script>
</script>

<svelte:head>
	<title>Rail in Svelte</title>
	<meta name="description" content="Rail in Svelte" />
</svelte:head>

<section class="container mx-auto flex max-h-screen flex-col">
	<div class="bg-[var(--hero_gradient)]">
		<div class="relative z-10 flex min-h-[70vh] flex-col items-start justify-center">
			<div class="flex w-full flex-col gap-4 sm:w-[60vw] lg:gap-8">
				<h1>
					Just deploy it.
					<br />
					No tracing. No logs. No fuzz.
				</h1>
				<h2>
					Rail In Svelte is a light mock of railway. <br /> See the{' '}
					<a
						href="https://railway.app"
						target="_blank"
						rel="noreferrer"
						class="text-purple-500 underline decoration-1 underline-offset-4"
					>
						<b>actual thing</b>
					</a>
				</h2>
				<a
					href="/new"
					class="items-center rounded-lg bg-gradient-to-r from-purple-800/80 via-purple-800 to-accent_1 p-4 sm:w-1/3"
				>
					<p class="text-center text-primary">Start a New Project</p>
				</a>
			</div>
		</div>
	</div>
	<footer>
		<p class="text-center">
			Look, this is a toy project. Please don&apos;t deploy anything for production or store
			sensitive data here. <br /> If you really want to... remember to encrypt your data. <br />
			If you don&lsquo;t I will see everything!
		</p>
	</footer>
</section>
