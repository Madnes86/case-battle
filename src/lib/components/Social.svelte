<script lang="ts">
    const SOCIALS : object = {
        "telegram" : "https://m.sitehelp.me/telegram?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Ft.me%2Fcasebattle_official",
        "youtube"  : "https://www.youtube.com/c/CaseBattle",
        "vk"       : "https://m.sitehelp.me/vkGroup?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Fvk.com%2Fcasebattle",
        "twitch"   : "https://www.twitch.tv/casebattle_official",
    };

    let {
        mobile,
        classP,
    } : {
        mobile? : boolean,
        classP? : string,
    } = $props();
</script>

<!-- @component
- Социальные сети. Имеет мобильный вариант
 -->

<div class="{classP} {mobile ? 'flex' : 'hidden md:flex h-[80%]'} gap-2 items-center border-y-1 border-[var(--color-accent)]">
    {#each Object.entries(SOCIALS) as [name, link] }
        <a href="{link}"><img src="/icon/{name}" alt="{name}" title={name} class="hover:bg-white"></a>
    {/each}
</div>