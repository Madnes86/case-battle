<script lang="ts">
	import '../app.css';
	import { Header, LiveDrop } from '$lib/layout';

	let { children } = $props();
</script>

	<Header />
	<LiveDrop />

	{@render children()}
