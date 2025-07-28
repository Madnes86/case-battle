<script lang="ts">
    import { Svg, Button } from '$lib/components';
	import { slide } from 'svelte/transition';
    let {
        title,
        desc,
        name,
        placeholder,
        text,
        href,
        label
    } : {
        title : string;
        desc : string;
        name : string;
        placeholder : string;
        text : string;
        href? : string;
        label : string;
    } = $props();

    let windowWidth = $state(0);
    let isMobile = $derived(768 > windowWidth);
    let isShow = $state(false);
    function showToggling() {
        isShow = isShow ? false : true;
    }
</script>

<!-- TODO: add description | link on switch  -->

<svelte:window bind:innerWidth={windowWidth}/>

<div class="max-w-100 w-full p-4 flex flex-col gap-4 justify-between bg-[#090a0ec6]">
    <div class="flex gap-3 md:justify-between items-center">
        {#if isMobile}
            <Svg {name} size={32}/>
        {/if}
        <span class="flex flex-col">
            <h3 class="font-bold">{title}</h3>
            <p class="text-[12px] text-[var(--color-gray)]">{desc}</p>
        </span>
        {#if isMobile}
            <button onclick={showToggling} class:-rotate-180={!isShow} class={`ml-auto click transition-all`}>
                <Svg name='arrow'/>
            </button>
        {/if}
    </div>
    {#if isShow}
        <div transition:slide class="flex gap-2">
            <input type="text" placeholder="{placeholder}" class="w-full border border-[var(--color-gray)] text-gray bg-[var(--color-mail)]">
            <Button>
                <p class="text-[11px] uppercase">{text}</p>
            </Button>
        </div>
        <a {href} class="flex gap-2 items-center click">
            <Svg name="info" stroke="var(--color-gray)"/>
            <p class="text-sm text-[var(--color-gray)]">{label}</p>
        </a>
    {/if}
</div>