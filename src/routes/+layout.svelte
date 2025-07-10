<script lang="ts">
	import '../app.css';
	import { Header, LiveDrop, Footer } from '$lib/layout';

	let { children } = $props();
</script>

	<Header />
	<LiveDrop />
	{@render children()}
	<Footer />