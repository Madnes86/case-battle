<script lang="ts">
    import { Svg } from '$lib/components';
    const LINKS : string[] = [
        'https://m.sitehelp.me/telegram?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Ft.me%2Fcasebattle_official',
        'https://www.youtube.com/c/CaseBattle',
        'https://m.sitehelp.me/vkGroup?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Fvk.com%2Fcasebattle',
        'https://www.twitch.tv/casebattle_official'
    ];
    let { mobile = false } = $props();
</script>

<div class='{mobile ? 'w-full mt-2 p-2 flex gap-4 justify-center bg-black' : 'p-2 hidden lg:flex gap-4 border-y border-[var(--color-accent)]'}'>
    <a href={LINKS[0]}><Svg name='telegram' stroke='' {...{class: 'click', fill: 'var(--color-accent)'}}/></a>
    <a href={LINKS[1]}><Svg name='youtube'  stroke='' {...{class: 'click', fill: 'var(--color-accent)', viewBox: '0 0 576 512'}}/></a>
    <a href={LINKS[2]}><Svg name='vk'       stroke='' {...{class: 'click', fill: 'var(--color-accent)', viewBox: '0 0 2048 1792'}}/></a>
    <a href={LINKS[3]}><Svg name='twitch'   stroke='' {...{class: 'click', fill: 'var(--color-accent)'}}/></a>
</div>

<!-- @component
- Социальные сети. Имеет мобильный вариант
 -->