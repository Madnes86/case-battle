<script lang="ts">
	import '../app.css';
	import { Header, LiveDrop, Footer } from '$lib/layout';

	let { children } = $props();
</script>

<Header />
<LiveDrop />
<main
	class="min-h-[calc(100vh-68px)] bg-[var(--color-main)] md:pl-[clamp(100px,14vw,190px)] lg:pl-[190px]"
>
	{@render children()}
</main>
<Footer />
