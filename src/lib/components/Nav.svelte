<script lang="ts">
    import { page }    from '$app/stores';
    import { derived } from 'svelte/store';

    let active = derived(page, ($page) => $page.url.pathname.slice(1));
 
    let { 
        navs,
        mobile,
        ...rest
    } : {
        navs    : string[],
        mobile? : boolean,
    } = $props();

</script>

<nav class={mobile ? 'w-full mt-2 flex flex-col gap-2' : 'hidden md:flex h-full'} {...rest}>
    {#each navs as nav}
        <a 
        href="/{nav}"
        class="group {$active == nav ? 'bg-gray-950/50' : ''} {mobile ? 'items-center bg-black' : 'flex-col'} flex gap-0.5 p-2 justify-center transition-all duration-300 hover:-translate-y-0.5 hover:gap-2 hover:text-carrot-400 hover:bg-gray-950/50">
            <img src="/icon/{nav}.svg" alt="{nav}" class="min-w-[32px] h-[50%]">
            <p class="{mobile ?? 'hidden lg:block'} uppercase text-[80%] {$active == nav ? 'text-[var(--color-accent)]' : 'text-[var(--color-gray)] group-hover:text-[var(--color-accent)]'}">{nav}</p>
        </a>
    {/each}
</nav>

