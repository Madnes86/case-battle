<script lang="ts">
    import { FAQS } from '$lib/data/faqs';
	import { slide } from "svelte/transition";

    let hover : number | null = $state(null);
    let show  : number | null = $state(null);
    function onEnter(index: number) { hover = index };
    function onLeave() { hover = null };
    function openAnswer(index: number) {
        show == index ? show = null : show = index;
    };
</script>

    <div class="m-auto w-[40vw] flex flex-col gap-2 p-2">
        {#each FAQS as { question, answer }, index }
            {@const isHover = hover == index}
            {@const isShow = show == index}
            <div onmouseenter={() => {onEnter(index)}} onmouseleave={onLeave} role="group" class="{isShow ? 'bg-[var(--color-faq)]' : 'bg-[var(--color-header)]'} hover:bg-[var(--color-faq)] pl-8 p-2 relative">
                <span class="{isHover ? 'rotate-360' : ''} transition-all duration-300 
                px-3 py-1 absolute flex items-center
                left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 aspect-square 
                border-4 border-[var(--color-filter)] rounded-full font-bold bg-[var(--color-accent)]">{index + 1}</span>
                <button 
                onclick={() => {openAnswer(index)}} 
                class="w-full flex justify-between items-center gap-2
                cursor-pointer text-white hover:opacity-90">
                    <h3 class="text-left font-bold text-[18px] text-[var(--color-accent)]">{question}</h3>
                    <img src="/icon/arrow-down.svg" alt="" class="{isShow ? 'rotate-180' : ''} transition-all duration-300">
                </button>
                {#if show == index }<div transition:slide class="p-2 text-justify text-white">{@html answer}</div>{/if}
            </div>
        {/each}
    </div>