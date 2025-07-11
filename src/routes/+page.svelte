<script lang="ts">
    import { CASES } from '$lib/data/cases';
    import { Case } from '$lib/components';

    // Search
    const PLACEHOLDER : string = "Что ищем?";
    let cases = CASES;
    let windowWidth : number = $state(0);
    let search : string = $state('');
    let show : boolean = $derived(windowWidth > 800);
    let selectedCategory : string | null = $state(null);
    let filteredCases = $derived(filterCases(cases, search, selectedCategory));
    let categories = Array.from(new Set(cases.map(c => c.category)));

    function searchView() { 
        show = !show 
    };
    function filterCases(cases: typeof CASES, query: string, category?: string | null): typeof CASES {
        const q = query.toString().toLowerCase();
        return cases.filter(c => {
            const matchQuery = 
                c.name.toLowerCase().includes(q) ||
                c.price.toString().includes(q)   ||
                c.category.toLowerCase().includes(q);
            
            const matchCategory = category ? c.category === category : true;
            return matchQuery && matchCategory;
        });
    };

    // перевод в uppercase categiry


</script>   <svelte:window bind:innerWidth={windowWidth} />

    <nav class="flex gap-2 justify-center items-center p-2 h-[60px] bg-[var(--color-filter)] text-[var(--color-gray)]">
        <button onclick={searchView} class="hover:opacity-50"><img src="/icon/search.svg" alt=""></button>
        {#if show }<input bind:value={search} placeholder={PLACEHOLDER} type="text" class="w-[200px] h-[30px] bg-[var(--color-header)] text-white">{/if}
        <button class="hover:opacity-50"><img src="/icon/like.svg" alt=""></button>
        <button onclick={() => {selectedCategory = null}} class="{selectedCategory != null && 'text-[var(--color-accent)]'} hover:opacity-50"><img src="/icon/clear.svg" alt=""></button>
        {#each categories as category }
            <button onclick={() => {selectedCategory = category}} class="{selectedCategory == category && 'text-[var(--color-accent)]'} text-[15px] hover:opacity-50">{category}</button>
        {/each}
    </nav>
    <div class="flex flex-col items-center">
    {#each categories as category }
        <b class="w-full h-[87px] flex justify-center items-center uppercase text-[15px] bg-center bg-no-repeat bg-[url(/img/case/category.png)] text-white">{category}</b>
        <div class="flex flex-wrap w-full px-[8%]">
        {#each filteredCases.filter(c => c.category == category) as c }
            <Case {c} />
        {/each}
        </div>
    {/each}
    </div>
