<script lang="ts">
    import { CASES } from '$lib/data/cases';
    import { Case } from '$lib/components';
    import { user } from '../stores/user';

    // Search
    const PLACEHOLDER : string = "Что ищем?";
    let cases = CASES;
    let windowWidth : number = $state(0);
    let search      : string = $state('');
    let show        : boolean = $derived(windowWidth > 800);   
    let selCats : string[] = $derived([]);
    let showCases : typeof CASES = $derived(filterCases(cases, search));
    let cats = Array.from(new Set(cases.map(c => c.category)));
    let showCats = $derived(selCats.length == 0 ? Array.from(new Set(showCases.map(c => c.category))) : selCats);

    function searchView() { show = !show };
    function filterCases(cases: typeof CASES, query: string): typeof CASES {
        const q = query.toString().toLowerCase();
        return cases.filter(c => {
            const matchQuery = 
                c.name.toLowerCase().includes(q) ||
                c.price.toString().includes(q)   ||
                c.category.toLowerCase().includes(q);
            
            return matchQuery
        });
    };
    function addCategory(category: string) {
        if (!selCats.includes(category)) {
            selCats = [...selCats, category];
        } else {
            selCats = selCats.filter(c => c !== category);
        }
    };

</script>   <svelte:window bind:innerWidth={windowWidth} />

    <nav class="flex gap-2 justify-center items-center p-2 h-[60px] bg-[var(--color-filter)] text-[var(--color-gray)]">
        <button onclick={searchView} class="hover:opacity-50"><img src="/icon/search.svg" alt=""></button>
        {#if show }<input bind:value={search} placeholder={PLACEHOLDER} type="text" class="w-[200px] h-[30px] bg-[var(--color-header)] text-white">{/if}
        {#if $user }<button class="hover:opacity-50"><img src="/icon/like.svg" alt=""></button>{/if}
        {#if selCats.length > 0 }<button onclick={() => {selCats = []}} class="{selCats != null && 'text-[var(--color-accent)]'} hover:opacity-50"><img src="/icon/clear.svg" alt=""></button>{/if} 
        {#each cats as cat }
            <button onclick={() => {addCategory(cat)}} class="{selCats.includes(cat) && 'text-[var(--color-accent)]'} text-[15px] hover:opacity-50">{cat}</button>
        {/each}
    </nav>
    <div class="flex flex-col items-center">
    {#each showCats as cat }
        <b class="w-full h-[87px] flex justify-center items-center uppercase text-[15px] bg-center bg-no-repeat bg-[url(/img/case/category.png)] text-white">{cat}</b>
        <div class="flex flex-wrap w-full px-[8%]">
        {#each showCases.filter(c => c.category == cat) as c }
            <Case {c} />
        {/each}
        </div>
    {/each}
    </div>
