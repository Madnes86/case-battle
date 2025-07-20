<script lang='ts'>
    import { CASES } from '$lib/data/cases';
    import { Case, Svg } from '$lib/components';
    import { user } from '../lib/stores/user';
    import { language } from '$lib/stores/settings';
	import { fly } from 'svelte/transition';

    // Search
    const PLACEHOLDER : string = 'Что ищем?';
    let cases = CASES;
    let windowWidth : number   = $state(0);
    let scrollY     : number   = $state(0);
    let isScrollY   : boolean  = $derived(scrollY > 68);
    let search      : string   = $state('');
    let show        : boolean  = $derived(windowWidth > 800);   
    let selCats     : string[] = $derived([]);
    let showCases   : typeof CASES = $derived(filterCases(cases, search));
    let cats        : string[] = Array.from(new Set(cases.map(c => c.category)));
    let showCats    : string[] = $derived(selCats.length == 0 ? Array.from(new Set(showCases.map(c => c.category))) : selCats);

    const searchView = () => show = !show
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
        };
    };

    let translated = $state([]);

    async function translateCases() {
        const translateNameCase = cases.map(c => c.name);
        const res = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texts: translateNameCase, from: 'ru', to: 'en'})
        });
        translated = await res.json();
        cases = cases.map((c, i) => ({ ...c, name: translated[i]}))
        console.log(cases)
    }
    $effect(() => {
        console.log($language)
        if ($language === 'ENGLISH') {
            translateCases()
        }
    });

</script>   <svelte:window bind:innerWidth={windowWidth} bind:scrollY={scrollY} />

    <div class='m-auto pb-10 w-[1300px] p-2 flex flex-col gap-2'>
        <nav class='{isScrollY ? 'fixed top-0 z-1 bg-[var(--color-header)]' : ''} w-full flex gap-2 items-center h-[68px] text-[var(--color-gray)]'>
            <button onclick={searchView} class='click'><Svg name='search' stroke='var(--color-gray)'/></button>
            {#if show }<input bind:value={search} placeholder={PLACEHOLDER} type='text' class='w-[200px] h-[30px] border border-[#2F374E] bg-[#0F1318]'>{/if}
            {#if $user }<button class='click'><Svg name='like' /></button>{/if}
            {#if selCats.length > 0 }<button onclick={() => {selCats = []}} class='{selCats != null && 'text-[var(--color-accent)]'} click'><Svg name='clear' /></button>{/if} 
            {#each cats as cat }
                <button onclick={() => {addCategory(cat)}} class='{selCats.includes(cat) && 'text-[var(--color-accent)]'} text-[15px] click'>{cat}</button>
            {/each}
        </nav>
        <div class='{isScrollY && 'pt-[68px]'} w-[1250px] flex flex-col items-center'>
        {#each showCats as cat }
            <b transition:fly={{duration: 140}} class='w-full h-[87px] flex justify-center items-center uppercase text-[15px] bg-center bg-no-repeat bg-[url(/img/case/category.png)]'>{cat}</b>
            <div transition:fly={{duration: 140}} class='flex flex-wrap w-full'>
            {#each showCases.filter(c => c.category == cat) as c }
                <Case {c} />
            {/each}
            </div>
        {/each}
        </div>
    </div>