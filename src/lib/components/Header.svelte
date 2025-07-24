<script lang="ts">
	import { onMount } from 'svelte';
	import { Nav, Svg, Odometer, Select, Social } from '$lib/components';

	const SLOGAN: string = 'У нас выйгрывают';
	const ONLINE_TITLE: string = 'Пользователей онлайн';
	const CARRENCY_SELECT: { optional: string; img?: string }[] = [
		{ optional: 'RUB' },
		{ optional: 'USD' },
		{ optional: 'EUR' }
	];
	const LANG_SELECT: { optional: string; img?: string }[] = [
		{ optional: 'РУССКИЙ' },
		{ optional: 'ENGLISH' }
	];
	let navs: string[] = ['upgrade', 'contract', 'giveaway', 'tournament'];
	let online: number = $state(3917);

	// re locate
	let windowWidth: number = $state(0);
	let show: boolean = $state(false);

	function update() {
		online = online + Math.floor(Math.random() * 200);
	}
	function toggleMenu() {
		show = !show;
	}

	$effect(() => {
		if (windowWidth > 800) {
			show = false;
		}
	});

	onMount(() => {
		setInterval(update, 3_000);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header class="flex h-[68px] bg-[var(--color-header)] pl-[190px]">
	<!-- Logo -->
	<a
		id="logo"
		href="/"
		onclick={toggleMenu}
		title={SLOGAN}
		class="fixed top-0 left-0 flex h-[68px] w-[190px] flex-col items-center gap-1 p-2"
	>
		<img
			data-testid="logo"
			src="/img/logo.svg"
			alt={SLOGAN}
			class="cursor-pointer"
		/>
		<p
			class="w-full truncate text-center text-[10px] tracking-wide text-gray-200 uppercase"
		>
			{SLOGAN}
		</p>
	</a>

	<Nav {navs} />
	<!-- Online -->
	<div
		title={ONLINE_TITLE}
		class="tems-center flex cursor-help flex-col justify-center gap-0.5 p-2"
	>
		<Svg name="users" />
		<Odometer value={online} />
	</div>

	<div class="flex w-full items-center justify-end gap-4 p-2">
		<Social />
		<Select select={CARRENCY_SELECT} selected={{ optional: 'RUB' }} />
		<Select select={LANG_SELECT} />
		<button data-testid="auth" class="hidden cursor-pointer md:flex"
			><img src="/img/steam.png" alt="steam" /></button
		>
		<button onclick={toggleMenu} class="flex md:hidden">menu</button>
	</div>
</header>

<!-- Menu -->
{#if show}
	<div
		id="menu"
		class="fixed top-[68px] left-0 flex h-[calc(100vh-68px)] w-[100vw] flex-col items-center justify-center bg-[var(--color-header)] p-2"
	>
		<button class="flex w-full justify-center bg-black p-2"
			><img src="/img/steam.png" alt="steam" /></button
		>
		<Nav {navs} mobile={true} classP={'mt-2'} />
		<Social
			mobile={true}
			classP={'hidden sm:flex p-2 mt-2 w-full bg-black justify-center'}
		/>
	</div>
{/if}
