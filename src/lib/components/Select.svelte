<script lang="ts">
    import { fade } from "svelte/transition"; 
    let {
        select,
        selected,
    } : {
        select    : { optional : string, img? : string }[],
        selected? : { optional : string, img? : string },
    } = $props();

    let show : boolean = $state(false);
    let selectHTML : HTMLElement;

    function toggleShow() { show = !show; };
    function closeShow()  { show = false; };
    function clickWindow(event: MouseEvent) {
        if (selectHTML && !selectHTML.contains(event.target as Node)) {
            closeShow();
        };
    };
    function setSelected(item : { optional : string, img? : string }) {
        selected = item;
        closeShow();
    };

    $effect(() => {
        if (!selected && select?.length) {
            selected = select[0];
        };
    });

</script>

<svelte:window onclick={clickWindow} />

<div bind:this={selectHTML} class="relative">
    <button onclick={toggleShow} class="{show ? 'text-[var(--color-accent)] border-[var(--color-accent)]' : 'text-[var(--color-gray)] border-[var(--color-gray)]'} flex gap-1 cursor-pointer p-1 rounded-sm border hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
        {#if selected?.img }<img src="{selected?.img}" alt="{selected?.optional}" class="">{/if}
        <p>{selected?.optional}</p>
    </button>

    {#if show }
    <div transition:fade={{duration: 150}} class="flex w-max absolute flex-col rounded-sm border-1 border-[var(-color-gray)] bg-[var(--color-header)] text-[var(--color-gray)]">
        {#each select as {optional, img} }
            <button onclick={() => {setSelected({optional, img})}} class="flex gap-2 p-1 click hover:text-[var(--color-accent)]">
                {#if img }<img src="{img}" alt="{img}">{/if} {optional}
            </button>
        {/each}
    </div>
    {/if}
</div>

<!-- @component
- Список выбора 
 -->