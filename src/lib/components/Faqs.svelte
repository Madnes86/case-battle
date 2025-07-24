<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Svg } from '$lib/components';

	let { data, ...rest }: { data: { question: string; answer: string }[] } =
		$props();

	let hover: number | null = $state(null);
	let show: number | null = $state(0);
	function onEnter(index: number) {
		hover = index;
	}
	function onLeave() {
		hover = null;
	}
	function openAnswer(index: number) {
		show == index ? (show = null) : (show = index);
	}
</script>

<div class="m-auto flex w-[40vw] flex-col gap-2 p-2" {...rest}>
	{#each data as { question, answer }, index}
		{@const isHover = hover == index}
		{@const isShow = show == index}
		<div
			onmouseenter={() => {
				onEnter(index);
			}}
			onmouseleave={onLeave}
			role="group"
			class="{isShow
				? 'bg-[var(--color-faq)]'
				: 'bg-[var(--color-main)]'} relative p-2 pl-8 hover:bg-[var(--color-faq)]"
		>
			<span
				class="{isHover ? 'rotate-360' : ''} absolute top-1/2
                left-0 flex aspect-square -translate-1/2 items-center
                rounded-full border-4 border-[var(--color-filter)] bg-[var(--color-accent)]
                px-3 py-1 font-bold transition-all duration-300"
				>{index + 1}</span
			>
			<button
				onclick={() => {
					openAnswer(index);
				}}
				class="click flex w-full items-center justify-between gap-2"
			>
				<h3 class="text-left text-[18px] font-bold text-[var(--color-accent)]">
					{question}
				</h3>
				<Svg
					name="arrow"
					{...{
						class: `transition-all duration-300 ${isShow && 'rotate-180'}`
					}}
				/>
			</button>
			{#if show == index}<div transition:slide class="p-2 text-justify">
					{@html answer}
				</div>{/if}
		</div>
	{/each}
</div>
