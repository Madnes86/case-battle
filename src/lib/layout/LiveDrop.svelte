<script lang="ts">
    import { drops } from '$lib/data/drops'; // re name
	import { onMount } from 'svelte';

    const DROPS_MAX : number = 8;
    let hover : number | null = $state(null);
    let thisDrops = $state(drops); // re name 

    function onEnter(index : number) { hover = index };
    function onLeave() { hover = null };

    function addDrop() {
        if (hover != null) return;
        if (thisDrops.length >= 8) { thisDrops.pop() };
        const RANDOM = Math.floor(Math.random() * drops.length);
        thisDrops = [drops[RANDOM], ...thisDrops];
    };
    function getDrop() {
        setInterval(addDrop, 1_000);
    };

    onMount(getDrop);
</script>

<aside class="fixed left-0 top-[68px] w-[190px] h-[calc(100vh-68px)] flex flex-col gap-1">
    {#each thisDrops as { rarity, itemImg, itemName, fromName, fromLink, fromImg, steamLink, steamImg }, index }
    <div 
    onmouseenter="{() => {onEnter(index)}}" 
    onmouseleave="{onLeave}" 
    role="list" 
    style="{hover == index 
        ? `width: 250px; background: ${rarity}; border-color: ${rarity}` 
        : `border-color: ${rarity}`}"
    class="flex overflow-hidden border-l-4 h-[100px]">
        <div class="p-2 w-[190px] flex flex-col gap-2 justify-center items-center text-white">
            {#if hover != index }
            <img src="{itemImg}" alt="test" class="max-w-full max-h-full object-contain">
            <p>{itemName}</p>
            {:else}
            <p>{fromName}</p>
            <a href="{fromLink}" class="max-w-full h-[50%]"><img src="{fromImg}" alt="test" class="max-w-full max-h-full object-contain"></a>
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