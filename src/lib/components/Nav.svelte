<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let active = derived(page, ($page) => $page.url.pathname.slice(1));

	let {
		navs,
		mobile,
		...rest
	}: {
		navs: string[];
		mobile?: boolean;
	} = $props();
</script>

<nav
	class={mobile ? 'mt-2 flex w-full flex-col gap-2' : 'hidden h-full md:flex'}
	{...rest}
>
	{#each navs as nav}
		<a
			href="/{nav}"
			class="group {$active == nav ? 'bg-gray-950/50' : ''} {mobile
				? 'items-center bg-black'
				: 'flex-col'} hover:text-carrot-400 flex justify-center gap-0.5 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:gap-2 hover:bg-gray-950/50"
		>
			<img src="/icon/{nav}.svg" alt={nav} class="h-[50%] min-w-[32px]" />
			<p
				class="{mobile ?? 'hidden lg:block'} text-[80%] uppercase {$active ==
				nav
					? 'text-[var(--color-accent)]'
					: 'text-[var(--color-gray)] group-hover:text-[var(--color-accent)]'}"
			>
				{nav}
			</p>
		</a>
	{/each}
</nav>
