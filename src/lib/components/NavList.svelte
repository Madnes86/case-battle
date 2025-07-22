<script lang='ts'>
    let { number } : {
        number: number
    } = $props();
    let pages: number[] = []
    for (let i = 0 ; i < number ; i++) {
        pages.push(i + 1)
    }
</script>

    <div class="pb-2 flex flex-col items-center">
        <div class="flex">
            <svg viewBox="0 0 24 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 click text-[var(--color-gray)] rotate-90"><path d="m6 9 6 6 6-6" /></svg>
            {#each pages as page, index }
            {@const thisPage = 1 == index +1}
            <button class:thisPage class="w-[20px] rounded-sm font-medium text-[var(--color-gray)] click hover:bg-black">{page}</button>
            {/each}
            <svg viewBox="0 0 24 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 click text-[var(--color-gray)] -rotate-90"><path d="m6 9 6 6 6-6" /></svg>
        </div>
    </div>