<script lang="ts">
	let {
		number
	}: {
		number: number;
	} = $props();
	let pages: number[] = [];
	for (let i = 0; i < number; i++) {
		pages.push(i + 1);
	}
</script>

<div class="flex flex-col items-center pb-2">
	<div class="flex">
		<svg
			viewBox="0 0 24 18"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="click h-6 w-6 rotate-90 text-[var(--color-gray)]"
			><path d="m6 9 6 6 6-6" /></svg
		>
		{#each pages as page, index}
			{@const thisPage = 1 == index + 1}
			<button
				class:thisPage
				class="click w-[20px] rounded-sm font-medium text-[var(--color-gray)] hover:bg-black"
				>{page}</button
			>
		{/each}
		<svg
			viewBox="0 0 24 18"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="click h-6 w-6 -rotate-90 text-[var(--color-gray)]"
			><path d="m6 9 6 6 6-6" /></svg
		>
	</div>
</div>
