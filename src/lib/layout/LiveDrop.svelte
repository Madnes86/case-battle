<script lang="ts">
    import { DROPS } from '$lib/data/drops'; // re name
	import { onMount } from 'svelte';

    const DROPS_MAX : number = 8;
    let hover : number | null = $state(null);
    let drops = $state(DROPS); // re name 

    function onEnter(index : number) { hover = index };
    function onLeave() { hover = null };

    function addDrop() {
        if (hover != null) return;
        if (drops.length >= 8) { drops.pop() };
        const RANDOM = Math.floor(Math.random() * DROPS.length);
        drops = [DROPS[RANDOM], ...drops];
    };
    function getDrop() {
        setInterval(addDrop, 1_000);
    };

    onMount(getDrop);
</script>

<aside class="fixed left-0 top-[68px] w-[190px] h-[calc(100vh-68px)] flex flex-col gap-1">
    {#each drops as { rarity, itemImg, itemName, fromName, fromLink, fromImg, steamLink, steamImg }, index }
    <div 
    onmouseenter="{() => {onEnter(index)}}" 
    onmouseleave="{onLeave}" 
    role="list" 
    style="{hover == index 
        ? `width: 250px; background: ${rarity}; border-color: ${rarity}` 
        : `border-color: ${rarity}; background: ${rarity.replace('rgb', 'rgba').replace(')', ', 0.6)')}`}"
    class="flex overflow-hidden border-l-4 h-[100px] text-[12px]">
        <div class="p-2 w-[190px] flex flex-col gap-2 justify-center items-center text-white">
            {#if hover != index }
            <img src="{itemImg}" alt="test" class="h-[70%] object-contain">
            <p class="truncate whitespace-nowrap w-full text-center">{itemName}</p>
            {:else}
            <p class="uppercase truncate whitespace-nowrap w-full text-center">{fromName}</p>
            <a href="{fromLink}" class="h-[70%]"><img src="{fromImg}" alt="test" class="h-full object-contain"></a>
            {/if}
        </div>
        {#if hover == index }
        <div class="p-2 w-[60px] flex flex-col gap-2 justify-start items-end">
            <a href="{steamLink}"><img src="{steamImg}" alt="test steam" class="rounded-full"></a>
            <img src="{itemImg}" alt="test" class="max-w-full max-h-full object-contain">
        </div>
        {/if}
    </div>
    {/each}
</aside>