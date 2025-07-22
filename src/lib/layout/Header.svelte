<script lang='ts'>
	import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import { Nav, Odometer, Select, Social, Svg, QuickProfile } from '$lib/components';
    import { language } from '$lib/stores/settings';
    import { user } from '$lib/stores/user';
    
    const SLOGAN       : string = 'У нас выйгрывают';
    const ONLINE_TITLE : string = 'Пользователей онлайн';
    const CARRENCY_SELECT : { optional : string, img? : string }[] = [{ optional : 'RUB' }, { optional : 'USD' }, { optional : 'EUR' }]
    const LANG_SELECT     : { optional : string, img? : string }[] = [{ optional : 'РУССКИЙ'}, { optional : 'ENGLISH'}];
    let navs        : string[] = ['upgrade', 'contract', 'giveaway', 'tournament'];
    let online      : number   = $state(3917);
    let windowWidth : number   = $state(0);
    let show        : boolean  = $state(false);
    let selectedLang = $state({ optional: $language }); 

    const update = () => online += Math.floor(Math.random() * 200) 
    const toggleMenu = () => show = !show
    const closeMenu  = () => show = false
    const auth = () => user.set(true)

    $effect(() => {
        windowWidth > 800 && (show = false);
        document.body.style.overflow = show ? 'hidden' : '';
        show == true && afterNavigate(() => { show = false });
        language.set(selectedLang.optional) // Реактивно записываем в store
    });

    onMount(() => {setInterval(update, 3_000)});

</script>

<svelte:window bind:innerWidth={windowWidth} />

<header class='flex pl-[190px] h-[68px] md:static fixed top-0 w-full z-1 bg-[var(--color-header)]'>
    <a id='logo' href='/' onclick={closeMenu} title='{SLOGAN}' class='fixed left-0 p-2 w-[190px] h-[68px] z-1 flex flex-col gap-1 items-center bg-[var(--color-header)]'>
        <img data-testid='logo' src='/img/logo.svg' alt='{SLOGAN}' class='cursor-pointer'>
        <p class='w-full text-center truncate tracking-wide uppercase text-[10px] text-gray-200'>{SLOGAN}</p>
    </a>
    <Nav {navs} />
    <!-- Online -->
    <div title='{ONLINE_TITLE}' class='flex flex-col gap-0.5 p-2 items-center cursor-help'>
        <Svg name='users' stroke='var(--color-green)'/>
        <Odometer value={online}/>
    </div>
    <div class='flex gap-4 w-full p-2 items-center justify-end'>
        <Social />
        <Select select={CARRENCY_SELECT} selected={{ optional : 'RUB' }}/>
        <Select select={LANG_SELECT} bind:selected={ selectedLang }/>
        {#if $user && !show }
            <QuickProfile />
        {:else}
            <button onclick={auth} class='hidden md:flex cursor-pointer'><img src='/img/steam.png' alt='steam'></button>
        {/if}
        <button onclick={toggleMenu} class='flex md:hidden click'>
                {#if show }
                    <Svg name='close'/>
                {:else}
                    <Svg name='menu'/>
                {/if}
        </button>
    </div>
</header>

{#if show }
<div id='menu' class='fixed z-1 flex flex-col justify-center items-center p-2 top-[68px] left-0 w-[100vw] h-[calc(100vh-68px)] bg-[var(--color-header)]'>
    {#if $user }
        <QuickProfile isMobile={true}/>
    {:else}
        <button onclick={auth} class='flex justify-center w-full p-2 bg-black click'><img src='/img/steam.png' alt='steam'></button>
    {/if}
    <Nav {navs} mobile={true}/>
    <Social mobile={true} />
</div>
{/if}


