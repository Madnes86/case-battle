<script lang="ts">
	let { c } = $props();

	const src: string = 'https://case-battle.life/img/ico-limit.png';
	const alt: string = 'image';
	let hover: string = $state('');
	let isDisabled: boolean = $derived(c.state === 'desable');
	let isHovered: boolean = $derived(hover === c.name && !isDisabled);
	let declension: string | undefined = $state(declensions());

	function onHover(name: string) {
		hover = name;
	}
	function outHover() {
		hover = '';
	}
	function declensions() {
		if (c.items == 1) {
			return 'Предмет';
		}
		if (c.items > 1 && c.item < 5) {
			return 'Предмета';
		}
		if (c.items > 5) {
			return 'Предметов';
		}
	}

	// Проверка связанных параметров
</script>

<button
	onclick={() => !isDisabled && (window.location.href = `/case/${c.slug}`)}
	onmouseenter={() => {
		onHover(c.name);
	}}
	onmouseleave={outHover}
	class="{isDisabled && 'text-[var(--color-gray)] grayscale'} {isHovered
		? 'cursor-pointer bg-black'
		: 'cursor-not-allowed'} relative flex h-[300px] w-[250px] flex-col p-2"
>
	<h3 class="uppercase">{c.name}</h3>
	<div class="flex w-full gap-1 text-[12px] text-[var(--color-gray)]">
		<p>{c.items}</p>
		<p>{declension}</p>
	</div>
	<div
		style="background-image: url({c.backImg});"
		class="relative h-full w-full bg-cover"
	>
		<img
			loading="lazy"
			src={c.frontImg}
			{alt}
			class="{isHovered ? '-top-4' : 'top-2'} absolute transition-all"
		/>
		{#if c.limit != null}
			<div class="absolute top-0 right-0 flex flex-col items-center gap-1">
				<img {src} {alt} />
				<div class="flex gap-1 text-[11px]">
					<b class="text-[var(--color-accent)]">{c.limitOld}</b>
					<p>из {c.limit}</p>
				</div>
			</div>
		{/if}
	</div>
	<div class="flex w-full items-center justify-end gap-4">
		{#if c.priceOld != null}<strike class="text-[var(--color-gray)]"
				>{c.priceOld}</strike
			>{/if}
		<p
			class="border-[1px] border-[var(--color-accent)] bg-[var(--color-header)] px-4 text-[var(--color-accent)]"
		>
			{c.price}
		</p>
	</div>
</button>
