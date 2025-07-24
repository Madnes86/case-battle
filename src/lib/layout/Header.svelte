<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import {
		Nav,
		Odometer,
		Select,
		Social,
		Svg,
		QuickProfile
	} from '$lib/components';
	import { language } from '$lib/stores/settings';
	import { user } from '$lib/stores/user';

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
	let windowWidth: number = $state(0);
	let show: boolean = $state(false);
	let selectedLang = $state({ optional: $language });

	const update = () => (online += Math.floor(Math.random() * 200));
	const toggleMenu = () => (show = !show);
	const closeMenu = () => (show = false);
	const auth = () => user.set(true);

	$effect(() => {
		windowWidth > 800 && (show = false);
		document.body.style.overflow = show ? 'hidden' : '';
		show == true &&
			afterNavigate(() => {
				show = false;
			});
		language.set(selectedLang.optional); // Реактивно записываем в store
	});

	onMount(() => {
		setInterval(update, 3_000);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header
	class="fixed top-0 z-1 flex h-[68px] w-full bg-[var(--color-header)] md:static lg:pl-[190px]"
>
	<a
		id="logo"
		href="/"
		onclick={closeMenu}
		title={SLOGAN}
		class="left-0 z-1 flex h-[68px] min-w-[190px] flex-col items-center justify-center gap-1 bg-[var(--color-header)] p-2 lg:fixed"
	>
		<img src="/img/logo.svg" alt={SLOGAN} class="cursor-pointer" />
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
		class="flex cursor-help flex-col items-center gap-0.5 p-2"
	>
		<Svg name="users" stroke="var(--color-green)" />
		<Odometer value={online} />
	</div>
	<div class="flex w-full items-center justify-end gap-4 p-2">
		<Social />
		<Select select={CARRENCY_SELECT} selected={{ optional: 'RUB' }} />
		<Select select={LANG_SELECT} bind:selected={selectedLang} />
		{#if $user && !show}
			<QuickProfile />
		{:else}
			<button onclick={auth} class="hidden cursor-pointer md:flex"
				><img src="/img/steam.png" alt="steam" /></button
			>
		{/if}
		<button onclick={toggleMenu} class="click flex md:hidden">
			{#if show}
				<Svg name="close" />
			{:else}
				<Svg name="menu" />
			{/if}
		</button>
	</div>
</header>

{#if show}
	<div
		id="menu"
		class="fixed top-[68px] left-0 z-1 flex h-[calc(100vh-68px)] w-[100vw] flex-col items-center justify-center bg-[var(--color-header)] p-2"
	>
		{#if $user}
			<QuickProfile isMobile={true} />
		{:else}
			<button
				onclick={auth}
				class="click flex w-full justify-center bg-black p-2"
				><img src="/img/steam.png" alt="steam" /></button
			>
		{/if}
		<Nav {navs} mobile={true} />
		<Social mobile={true} />
	</div>
{/if}
