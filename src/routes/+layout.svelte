<script lang="ts">
	import '../app.css';
	import { Header, LiveDrop, Footer } from '$lib/layout';

	let { children } = $props();
</script>

	<Header />
	<LiveDrop />
	<main class="lg:pl-[190px] md:pl-[clamp(100px,14vw,190px)] min-h-[calc(100vh-68px)] bg-[var(--color-main)]">
		{@render children()}
	</main>
	<Footer />