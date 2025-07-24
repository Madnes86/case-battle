<script lang="ts">
	import { CASES } from '$lib/data/cases';
	import { Case, Svg } from '$lib/components';
	import { user } from '../lib/stores/user';
	import { language } from '$lib/stores/settings';
	import { fly } from 'svelte/transition';

	// Search
	const PLACEHOLDER: string = 'Что ищем?';
	let cases = CASES;
	let windowWidth: number = $state(0);
	let scrollY: number = $state(0);
	let isScrollY: boolean = $derived(scrollY > 68);
	let search: string = $state('');
	let show: boolean = $derived(windowWidth > 800);
	let selCats: string[] = $derived([]);
	let showCases: typeof CASES = $derived(filterCases(cases, search));
	let cats: string[] = Array.from(new Set(cases.map((c) => c.category)));
	let showCats: string[] = $derived(
		selCats.length == 0
			? Array.from(new Set(showCases.map((c) => c.category)))
			: selCats
	);

	const searchView = () => (show = !show);
	function filterCases(cases: typeof CASES, query: string): typeof CASES {
		const q = query.toString().toLowerCase();
		return cases.filter((c) => {
			const matchQuery =
				c.name.toLowerCase().includes(q) ||
				c.price.toString().includes(q) ||
				c.category.toLowerCase().includes(q);

			return matchQuery;
		});
	}
	function addCategory(category: string) {
		if (!selCats.includes(category)) {
			selCats = [...selCats, category];
		} else {
			selCats = selCats.filter((c) => c !== category);
		}
	}

	let translated = $state([]);

	async function translateCases() {
		const translateNameCase = cases.map((c) => c.name);
		const res = await fetch('/api/translate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ texts: translateNameCase, from: 'ru', to: 'en' })
		});
		translated = await res.json();
		cases = cases.map((c, i) => ({ ...c, name: translated[i] }));
		console.log(cases);
	}
	$effect(() => {
		console.log($language);
		if ($language === 'ENGLISH') {
			translateCases();
		}
	});
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY />

<div
	class="relative m-auto flex max-w-[1300px] flex-col justify-center gap-2 p-2 pb-10"
>
	<nav
		class="{isScrollY
			? 'fixed top-0 z-1 bg-[var(--color-main)]'
			: ''} flex h-[68px] w-full items-center gap-2 text-[var(--color-gray)]"
	>
		<button onclick={searchView} class="click"
			><Svg name="search" stroke="var(--color-gray)" /></button
		>
		{#if show}<input
				bind:value={search}
				placeholder={PLACEHOLDER}
				type="text"
				class="h-[30px] w-[200px] border border-[#2F374E] bg-[#0F1318]"
			/>{/if}
		{#if $user}<button class="click"><Svg name="like" /></button>{/if}
		{#if selCats.length > 0}<button
				onclick={() => {
					selCats = [];
				}}
				class="{selCats != null && 'text-[var(--color-accent)]'} click"
				><Svg name="clear" /></button
			>{/if}
		{#each cats as cat}
			<button
				onclick={() => {
					addCategory(cat);
				}}
				class="{selCats.includes(cat) &&
					'text-[var(--color-accent)]'} click text-[15px]">{cat}</button
			>
		{/each}
	</nav>
	<div class="{isScrollY && 'pt-[68px]'} flex flex-col">
		{#each showCats as cat}
			<b
				transition:fly={{ duration: 140 }}
				class="flex h-[87px] w-full items-center justify-center bg-[url(/img/case/category.png)] bg-center bg-no-repeat text-[15px] uppercase"
				>{cat}</b
			>
			<div
				transition:fly={{ duration: 140 }}
				class="flex w-full flex-wrap justify-center"
			>
				{#each showCases.filter((c) => c.category == cat) as c}
					<Case {c} />
				{/each}
			</div>
		{/each}
	</div>
</div>
