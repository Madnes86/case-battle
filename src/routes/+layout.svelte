<script lang="ts">
	import '../app.css';
	import { Header, LiveDrop, Footer } from '$lib/layout';

	let { children } = $props();
</script>

	<Header />
	<LiveDrop />
	<main class="md:pl-[190px] min-h-[calc(100vh-68px)] bg-[var(--color-filter)]">
		{@render children()}
	</main>
	<Footer />