<script lang="ts">
    import { fade } from "svelte/transition"; 
    let {
        select,
        selected = $bindable(),
        ...rest
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

<div bind:this={selectHTML} class='relative flex' {...rest}>
    <button onclick={toggleShow} class='text-[var(--color-accent)] border-[var(--color-accent)] flex gap-1 cursor-pointer px-2 rounded-sm border click'>
        {#if selected?.img }<img src="{selected?.img}" alt="{selected?.optional}" class="">{/if}
        <p>{selected?.optional}</p>
    </button>

    {#if show }
    <div transition:fade={{duration: 150}} class='flex flex-col w-max absolute top-8 z-2 rounded-sm border border-[var(--color-accent)] bg-[var(--color-header)] text-[var(--color-accent)]'>
        {#each select as {optional, img} }
            {#if optional != selected?.optional}
            <button onclick={() => {setSelected({optional, img})}} class='flex gap-2 px-2 click'>
                {#if img }<img src="{img}" alt="{img}">{/if} {optional}
            </button>
            {/if}
        {/each}
    </div>
    {/if}
</div>

<!-- @component
- Список выбора 
 -->