<script lang="ts">
	import { onMount } from "svelte";
    import { Nav, Odometer, Select, Social } from '$lib/components';
    import { language } from '$lib/stores/settings';
    import { user } from '$lib/stores/user';
    
    const SLOGAN       : string = "У нас выйгрывают";
    const ONLINE_TITLE : string = "Пользователей онлайн";
    const CARRENCY_SELECT : { optional : string, img? : string }[] = [{ optional : "RUB" }, { optional : "USD" }, { optional : "EUR" }]
    const LANG_SELECT     : { optional : string, img? : string }[] = [{ optional : "РУССКИЙ"}, { optional : "ENGLISH"}];
    let navs : string[] = ["upgrade", "contract", "giveaway", "tournament"];
    let online : number = $state(3917);

    // re locate
    let windowWidth : number = $state(0);
    let show : boolean = $state(false);

    let selectedLang = $state({ optional: $language }); 

    function update() {
        online = online + Math.floor(Math.random() * 200);
    }
    function toggleMenu() { show = !show };
    function closeMenu() { show = false };
    function Auth() { user.set(true) }; 

    $effect(() => {
        if (windowWidth > 800) { show = false; };
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        language.set(selectedLang.optional) // Реактивно записываем в store
    });

    onMount(() => {
        setInterval(update, 3_000);
    });

</script>

<svelte:window bind:innerWidth={windowWidth} />

<header class="flex pl-[190px] h-[68px] md:static fixed w-full z-1 bg-[var(--color-header)]">
    <!-- Logo -->
    <a id="logo" href="/" onclick={closeMenu} title="{SLOGAN}" class="fixed top-0 left-0 p-2 w-[190px] h-[68px] z-1 flex flex-col gap-1 items-center bg-[var(--color-header)]">
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
        <Select select={CARRENCY_SELECT} selected={{ optional : 'RUB' }}/>
        <Select select={LANG_SELECT} bind:selected={ selectedLang }/>
        <button onclick={Auth} data-testid="auth" class="hidden md:flex cursor-pointer"><img src="/img/steam.png" alt="steam"></button>
        <button onclick={toggleMenu} class="flex md:hidden">menu</button>
    </div>
</header>

<!-- Menu -->
{#if show }
<div id="menu" class="fixed z-1 flex flex-col justify-center items-center p-2 top-[68px] left-0 w-[100vw] h-[calc(100vh-68px)] bg-[var(--color-header)]">
    <button class="flex justify-center w-full p-2 bg-black"><img src="/img/steam.png" alt="steam"></button>
    <Nav navs={navs} mobile={true} classP={"mt-2"}/> 
    <Social mobile={true} classP={"hidden sm:flex p-2 mt-2 w-full bg-black justify-center"}/>
</div>
{/if}


