<script lang="ts">
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
    function closeShow() { show = false };
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
    <button onclick={toggleShow} class="{show ? 'text-[#d3863c] border-[#d3863c]' : 'text-[#929292] border-[#929292]'} flex gap-1 cursor-pointer p-1 rounded-sm border hover:border-[#d3863c] hover:text-[#d3863c]">
        {#if selected?.img }<img src="{selected?.img}" alt="{selected?.optional}" class="">{/if}
        <p>{selected?.optional}</p>
    </button>

    <div class="{show ? 'flex' : 'hidden'} w-max absolute flex-col rounded-sm bg-gray-200 text-[#929292]">
        {#each select as {optional, img} }
            <button onclick={() => {setSelected({optional, img})}} class="flex gap-2 p-1 cursor-pointer hover:opacity-50">
                {#if img }<img src="{img}" alt="{img}">{/if} {optional}
            </button>
        {/each}
    </div>
</div>