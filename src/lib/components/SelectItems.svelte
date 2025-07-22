<script lang='ts'>
    import { Svg, NavList } from '$lib/components'
    let { 
        version = 'upgrade',
    } : { 
        version? : 'upgrade' | 'contract' | 'log',
    } = $props();
    const TRUE = true
    const FALSE = false
</script>

    <div class="gradient w-full flex flex-col gap-2 items-center border border-[#333d4f]">
        <div class="w-full h-12 p-2 flex justify-between items-center bg-[#090a0e]">
            <p class='whitespace-nowrap'>Мои предметы {2}</p>
            {#if version == 'upgrade'}
                <div class="flex gap-2 items-center">
                    <button><Svg name='one'  stroke={TRUE  ? 'var(--color-accent' : '#333d4f'} {...{class: 'click'}}/></button>
                    <button><Svg name='many' stroke={FALSE ? 'var(--color-accent' : '#333d4f'} {...{class: 'click'}}/></button>
                    <button><Svg name='sort' stroke={FALSE ? 'var(--color-accent' : '#333d4f'} {...{class: 'rotate-90 scale-x-[-1] click'}}/></button>
                </div>
            {:else if version == 'contract'}
            <button class='flex gap-2 click'>Цена <Svg name='sort' {...{class: 'rotate-90 scale-x-[-1]'}}/></button>
            {:else if version == 'log'}
            <button class='whitespace-nowrap сlick'>
                <Svg name='money' size={24} />
                <p class='uppercase'>Продать 5 предметов за {100} ₽</p>
            </button>
            {/if}
        </div>
        <div class="w-full px-2 grid gap-2 justify-center" style="grid-template-columns: repeat(auto-fit, minmax(110px, 110px));">
        {#each {length: 20} as item, index}
            <div class="w-[110px] h-[110px] relative flex justify-center items-center border border-[#2F374E] bg-[#0000005b] hover:border-red-400">
                {#if item == index}<svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>{/if}
                <Svg name='gun' stroke='' {...{class: 'w-2/3 rotate-10', viewBox: '0 0 31.2 11.6', fill: '#000'}}/>
            </div>
        {/each}
        
        </div>
        <NavList number={5} />
    </div>