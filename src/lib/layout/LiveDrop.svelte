<script lang="ts">
    import { DROPS } from '$lib/data/drops';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

    // bg opacity ??
    // alt = ? 
    // add key ? 
    // Разделить название item и скин 

    const DROPS_DEL  : number        = 3;
    let windowHeight : number        = $state(typeof window !== 'undefined' ? window.innerHeight : 800);
    let dropsMax     : number        = $derived((Math.floor(windowHeight / 100)));
    let hover        : number | null = $state(null);
    let drops = $state(DROPS.slice(0, 4).map(drop => ({ ...drop, id: crypto.randomUUID() })));

    function onEnter(index : number) { hover = index };
    function onLeave() { hover = null };

    function addDrop() {
        if (hover != null) return;
        const RANDOM = Math.floor(Math.random() * DROPS.length);
        const newDrop = { ...DROPS[RANDOM], id: crypto.randomUUID() };
        let newDrops = [newDrop, ...drops];
        if (newDrops.length > dropsMax + DROPS_DEL) {
            newDrops = newDrops.slice(0, newDrops.length - DROPS_DEL);
        }
        drops = newDrops;
    };
    function getDrop() {
        const waveSize = 6;
        const waveInterval = 200;
        function launchWave() {
            for (let i = 0; i < waveSize; i++) {
                setTimeout(addDrop, i * waveInterval);
            };
        };
        setInterval(launchWave, 3_000);
        setInterval(addDrop, Math.floor(Math.random() * 800) + 400); // от 400 до 800 мс
    };

    onMount(getDrop);

</script>

<svelte:window bind:innerHeight={windowHeight} /> 

<aside class="hidden md:flex fixed left-0 top-[68px] w-[190px] flex-col gap-[1px]">
    {#each drops as { id, rarity, itemImg, itemName, fromName, fromLink, fromImg, steamLink, steamImg }, index (id)}
        <div class="relative">
            <div 
            in:slide={{ duration: 500 }}
            onmouseenter={() => {onEnter(index)}} 
            role="group" 
            style={`background: ${rarity.replace('rgb', 'rgba').replace(')', ', 0.6)')}`}
            class="{hover != index 
                ? 'flex flex-col gap-2 justify-center items-center' 
                : 'hidden'} 
                p-[4%] w-[190px] h-[100px] overflow-hidden text-[12px] text-white">
                <img src={itemImg} alt="" class="h-[70%] object-contain">
                <p class="truncate whitespace-nowrap w-full text-center">{itemName}</p>
            </div>
            <div 
            onmouseleave={onLeave} 
            role="group" 
            style="background: {rarity}" 
            class="{hover != index 
                ? '-translate-x-[98%] absolute' 
                : 'translate-0'} top-0 left-0 w-[250px] h-[100px]
                transition-all duration-500 grid grid-rows-4 grid-cols-3 gap-2 p-[4%] justify-items-center">
                <p class="col-span-2 uppercase truncate whitespace-nowrap text-[12px] text-white">{fromName}</p>
                <a href={fromLink} class="col-span-2 row-span-3 col-start-1 row-start-2"><img src={fromImg} alt="" class="h-full object-contain"></a>
                <a href={steamLink} class="row-span-2 col-start-3 row-start-1"><img src={steamImg} alt="" class="h-full rounded-full"></a>
                <img src={itemImg} alt="" class="row-span-2 col-start-3 row-start-3 h-full object-contain">
            </div>
        </div>
    {/each}
</aside>

<!-- @component
- Онлайн лента дропа
 -->