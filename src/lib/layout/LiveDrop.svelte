<script lang="ts">
	import { DROPS } from '$lib/data/drops';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	const DROPS_DEL: number = 3;
	let windowHeight: number = $state(
		typeof window !== 'undefined' ? window.innerHeight : 800
	);
	let windowWidth: number = $state(
		typeof window !== 'undefined' ? window.innerWidth : 1000
	);
	let dropsMax: number = $derived(
		Math.floor(windowHeight / (windowWidth > 1000 ? 100 : 80))
	);
	let hover: number | null = $state(null);
	let drops = $state(
		DROPS.slice(0, 4).map((drop) => ({ ...drop, id: crypto.randomUUID() }))
	);

	const onHover = (index: number) => (hover = index);
	const outHover = () => (hover = null);

	function addDrop() {
		if (hover != null) return;
		const RANDOM = Math.floor(Math.random() * DROPS.length); // Рандом по длине массива
		const newDrop = { ...DROPS[RANDOM], id: crypto.randomUUID() }; // Рандомное добавление в массив
		let newDrops = [newDrop, ...drops];
		if (newDrops.length > dropsMax + DROPS_DEL) {
			newDrops = newDrops.slice(0, newDrops.length - DROPS_DEL);
		}
		drops = newDrops;
	}
	function getDrop() {
		const waveSize = 6;
		const waveInterval = 200;
		function launchWave() {
			for (let i = 0; i < waveSize; i++) {
				setTimeout(addDrop, i * waveInterval);
			}
		}
		setInterval(launchWave, 3_000);
		setInterval(addDrop, Math.floor(Math.random() * 800) + 400); // от 400 до 800 мс
	}

	onMount(getDrop);
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<img
	src="img/live-drops.jpg"
	alt=""
	class="fixed top-0 left-0 h-[68px] w-[clamp(100px,14vw,190px)] object-cover lg:w-[190px] xl:hidden"
/>

<aside
	onmouseleave={outHover}
	class="fixed top-[68px] left-0 z-2 hidden w-[clamp(100px,14vw,190px)] flex-col gap-[1px] md:flex"
>
	{#each drops as { id, rarity, itemImg, itemName, fromName, fromLink, fromImg, steamLink, steamImg }, index (id)}
		<div class="relative">
			<div
				in:slide={{ duration: 500 }}
				onmouseenter={() => {
					onHover(index);
				}}
				role="group"
				style="background: rgba({rarity}, .2)"
				class="{hover != index
					? 'flex flex-col items-center justify-center gap-2'
					: 'hidden'} 
                h-[clamp(80px,10vw,100px)] w-[clamp(100px,14vw,190px)] overflow-hidden p-[4%] text-[12px] lg:w-[190px]"
			>
				<img src={itemImg} alt="item img" class="h-[70%] object-contain" />
				<p class="w-full truncate text-center whitespace-nowrap">{itemName}</p>
			</div>
			<div
				onmouseleave={outHover}
				role="group"
				style="background: rgb({rarity})"
				class="{hover != index
					? 'absolute -translate-x-[98%]'
					: 'translate-0'} top-0 left-0 grid h-[clamp(80px,10vw,100px)]
                w-[clamp(175px,20vw,250px)] grid-cols-3 grid-rows-4 justify-items-center gap-2 p-[4%] transition-all duration-500"
			>
				<p
					class="col-span-2 max-w-[100px] truncate text-[12px] whitespace-nowrap uppercase"
				>
					{fromName}
				</p>
				<a href={fromLink} class="col-span-2 col-start-1 row-span-3 row-start-2"
					><img
						loading="lazy"
						src={fromImg}
						alt="from img"
						class="h-full object-contain"
					/></a
				>
				<a href={steamLink} class="col-start-3 row-span-2 row-start-1"
					><img
						loading="lazy"
						src={steamImg}
						alt="steam img"
						class="h-full rounded-full"
					/></a
				>
				<img
					loading="lazy"
					src={itemImg}
					alt="item img"
					class="col-start-3 row-span-2 row-start-3 h-full object-contain"
				/>
			</div>
		</div>
	{/each}
</aside>

<!-- @component
- Онлайн лента дропа
 -->
