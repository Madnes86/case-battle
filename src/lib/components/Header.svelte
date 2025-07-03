<script lang="ts">
    import { page } from "$app/stores"
	import { onMount } from "svelte";
    import { derived } from 'svelte/store';
    import Online from "$lib/components/Online.svelte" // re name
    import Select from "$lib/components/Select.svelte"
    
    const SLOGAN       : string = "У нас выйгрывают";
    const ONLINE_TITLE : string = "Пользователей онлайн";
    const SOCIALS      : object = {
        "telegram" : "https://m.sitehelp.me/telegram?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Ft.me%2Fcasebattle_official",
        "youtube"  : "https://www.youtube.com/c/CaseBattle",
        "vk"       : "https://m.sitehelp.me/vkGroup?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Fvk.com%2Fcasebattle",
        "twitch"   : "https://www.twitch.tv/casebattle_official",
    };
    const CARRENCY_SELECT : { optional : string, img? : string }[] = [{ optional : "RUB" }, { optional : "USD" }, { optional : "EUR" }]
    const LANG_SELECT : { optional : string, img? : string }[] = [{ optional : "РУССКИЙ"}, { optional : "ENGLISH"}];
    let active = derived(page, ($page) => $page.url.pathname.slice(1));
    let navs : string[] = ["upgrade", "contract", "giveaway", "tournament"];
    let online : number = $state(3917);

    function update() {
        online = online + Math.floor(Math.random() * 200);
    }

    onMount(() => {
        setInterval(update, 3_000);
    });

</script>

<header class="flex pl-[190px] h-[68px] bg-[#191d26]">
    <!-- Logo -->
    <a href="/" title="{SLOGAN}" class="fixed top-0 left-0 p-2 w-[190px] h-[68px] flex flex-col gap-1 items-center">
        <img src="/img/logo.svg" alt="{SLOGAN}" class="cursor-pointer">
        <p class="tracking-wide uppercase text-[10px] text-gray-200">{SLOGAN}</p>
    </a>
    <!-- Nav -->
    <nav class="flex h-full">
        {#each navs as nav}
            <a 
            href="/{nav}" 
            class="{$active == nav ? 'bg-gray-950/50' : ''} flex flex-col gap-0.5 p-2 justify-center transition-all duration-300 hover:-translate-y-0.5 hover:gap-2 hover:text-carrot-400 hover:bg-gray-950/50"
            style="">
                <img src="/icon/{nav}.svg" alt="{nav}" class="h-[50%]">
                <p class="hidden lg:block uppercase text-[80%] {$active == nav ? 'text-[#d3863c]' : 'text-[#929292]'}">{nav}</p>
            </a>
        {/each}
    </nav>
    <!-- Online -->
    <div title="{ONLINE_TITLE}" class="flex flex-col gap-0.5 items-center justify-center cursor-help">
        <img src="/icon/users.svg" alt="{ONLINE_TITLE}">
        <Online value={online}/>
    </div>

    <div class="w-full p-2 flex gap-4 items-center justify-end">
        <div class="flex gap-2 items-center h-[80%] border-y-1 border-white">
            {#each Object.entries(SOCIALS) as [name, link]}
                <a href="{link}"><img src="/icon/{name}" alt="{name}" title={name} class="hover:bg-white"></a>
            {/each}
        </div>
        <Select select={CARRENCY_SELECT} selected={{ optional : "RUB" }}/>
        <Select select={LANG_SELECT}/>
        <button class="cursor-pointer"><img src="/img/steam.png" alt=""></button>
        <div class="flex md:hidden">menu</div>
    </div>
</header>
