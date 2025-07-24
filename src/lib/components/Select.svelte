<script lang="ts">
	import { fade } from 'svelte/transition';
	let {
		select,
		selected = $bindable(),
		...rest
	}: {
		select: { optional: string; img?: string }[];
		selected?: { optional: string; img?: string };
	} = $props();

	let show: boolean = $state(false);
	let selectHTML: HTMLElement;

	function toggleShow() {
		show = !show;
	}
	function closeShow() {
		show = false;
	}
	function clickWindow(event: MouseEvent) {
		if (selectHTML && !selectHTML.contains(event.target as Node)) {
			closeShow();
		}
	}
	function setSelected(item: { optional: string; img?: string }) {
		selected = item;
		closeShow();
	}

	$effect(() => {
		if (!selected && select?.length) {
			selected = select[0];
		}
	});
</script>

<svelte:window onclick={clickWindow} />

<div bind:this={selectHTML} class="relative flex" {...rest}>
	<button
		onclick={toggleShow}
		class="click flex cursor-pointer gap-1 rounded-sm border border-[var(--color-accent)] px-2 text-[var(--color-accent)]"
	>
		{#if selected?.img}<img
				src={selected?.img}
				alt={selected?.optional}
				class=""
			/>{/if}
		<p>{selected?.optional}</p>
	</button>

	{#if show}
		<div
			transition:fade={{ duration: 150 }}
			class="absolute top-8 z-2 flex w-max flex-col rounded-sm border border-[var(--color-accent)] bg-[var(--color-header)] text-[var(--color-accent)]"
		>
			{#each select as { optional, img }}
				{#if optional != selected?.optional}
					<button
						onclick={() => {
							setSelected({ optional, img });
						}}
						class="click flex gap-2 px-2"
					>
						{#if img}<img src={img} alt={img} />{/if}
						{optional}
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<!-- @component
- Список выбора 
 -->
