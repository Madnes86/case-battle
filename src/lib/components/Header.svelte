<script lang="ts">
	import { onMount } from "svelte";
    import Nav    from "$lib/components/Nav.svelte";
    import Odometer from "$lib/components/Odometer.svelte";
    import Select from "$lib/components/Select.svelte";
    import Social from "$lib/components/Social.svelte";
    
    const SLOGAN       : string = "У нас выйгрывают";
    const ONLINE_TITLE : string = "Пользователей онлайн";
    const CARRENCY_SELECT : { optional : string, img? : string }[] = [{ optional : "RUB" }, { optional : "USD" }, { optional : "EUR" }]
    const LANG_SELECT     : { optional : string, img? : string }[] = [{ optional : "РУССКИЙ"}, { optional : "ENGLISH"}];
    let navs : string[] = ["upgrade", "contract", "giveaway", "tournament"];
    let online : number = $state(3917);

    // re locate
    let windowWidth : number = $state(0);
    let show : boolean = $state(false);

    function update() {
        online = online + Math.floor(Math.random() * 200);
    }
    function toggleMenu() {
        show = !show;
    }

    $effect(() => {
        if (windowWidth > 800) { show = false; };
    });

    onMount(() => {
        setInterval(update, 3_000);
    });

</script>

<svelte:window bind:innerWidth={windowWidth} />

<header class="flex pl-[190px] h-[68px] bg-[var(--color-header)]">
    <!-- Logo -->
    <a id="logo" href="/" onclick={toggleMenu} title="{SLOGAN}" class="fixed top-0 left-0 p-2 w-[190px] h-[68px] flex flex-col gap-1 items-center">
        <img data-testid="logo" src="/img/logo.svg" alt="{SLOGAN}" class="cursor-pointer">
        <p class="w-full text-center truncate tracking-wide uppercase text-[10px] text-gray-200">{SLOGAN}</p>
    </a>

    <Nav navs={navs} />
    <!-- Online -->
    <div title="{ONLINE_TITLE}" class="flex flex-col gap-0.5 p-2 tems-center justify-center cursor-help">
        <img src="/icon/users.svg" alt="{ONLINE_TITLE}">
        <Odometer value={online}/>
    </div>

    <div class="flex gap-4 w-full p-2 items-center justify-end">
        <Social />
        <Select select={CARRENCY_SELECT} selected={{ optional : "RUB" }}/>
        <Select select={LANG_SELECT}/>
        <button data-testid="auth" class="hidden md:flex cursor-pointer"><img src="/img/steam.png" alt="steam"></button>
        <button onclick={toggleMenu} class="flex md:hidden text-white">menu</button>
    </div>
</header>

<!-- Menu -->
{#if show }
<div id="menu" class="fixed flex flex-col justify-center items-center p-2 top-[68px] left-0 w-[100vw] h-[calc(100vh-68px)] bg-[var(--color-header)]">
    <button class="flex justify-center w-full p-2 bg-black"><img src="/img/steam.png" alt="steam"></button>
    <Nav navs={navs} mobile={true} classP={"mt-2"}/> 
    <Social mobile={true} classP={"hidden sm:flex p-2 mt-2 w-full bg-black justify-center"}/>
</div>
{/if}


