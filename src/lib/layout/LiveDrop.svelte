<script lang='ts'>
    import { DROPS } from '$lib/data/drops';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

    const DROPS_DEL  : number        = 3;
    let windowHeight : number        = $state(typeof window !== 'undefined' ? window.innerHeight : 800);
    let windowWidth  : number        = $state(typeof window !== 'undefined' ? window.innerWidth : 1000);
    let dropsMax     : number        = $derived((Math.floor(windowHeight / (windowWidth > 1000 ? 100 : 80))));
    let hover        : number | null = $state(null);
    let drops = $state(DROPS.slice(0, 4).map(drop => ({ ...drop, id: crypto.randomUUID() })));

    const onHover  = (index: number) => hover = index
    const outHover = () => hover = null

    function addDrop() {
        if (hover != null) return;
        const RANDOM = Math.floor(Math.random() * DROPS.length); // Рандом по длине массива
        const newDrop = { ...DROPS[RANDOM], id: crypto.randomUUID() }; // Рандомное добавление в массив
        let newDrops = [newDrop, ...drops];
        if (newDrops.length > dropsMax + DROPS_DEL) {
            newDrops = newDrops.slice(0, newDrops.length - DROPS_DEL);
        }
        drops = newDrops;
    };
    function getDrop() {
        const waveSize = 6;
        const waveInterval = 200;
        function launchWave() {
            for (let i = 0; i < waveSize; i++) {
                setTimeout(addDrop, i * waveInterval);
            };
        };
        setInterval(launchWave, 3_000);
        setInterval(addDrop, Math.floor(Math.random() * 800) + 400); // от 400 до 800 мс
    };

    onMount(getDrop);

</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}/> 

<img src='img/live-drops.jpg' alt='' class='w-[clamp(100px,14vw,190px)] h-[68px] object-cover xl:hidden fixed left-0 top-0'>

<aside onmouseleave={outHover} class='hidden md:flex fixed left-0 top-[68px] w-[clamp(100px,14vw,190px)] flex-col gap-[1px] z-2'>
    {#each drops as { id, rarity, itemImg, itemName, fromName, fromLink, fromImg, steamLink, steamImg }, index (id)}
        <div class='relative'>
            <div 
            in:slide={{ duration: 500 }}
            onmouseenter={() => {onHover(index)}} 
            role='group' 
            style='background: rgba({rarity}, .2)'
            class='{hover != index 
                ? 'flex flex-col gap-2 justify-center items-center' 
                : 'hidden'} 
                p-[4%] w-[clamp(100px,14vw,190px)] h-[clamp(80px,10vw,100px)] overflow-hidden text-[12px]'>
                <img src={itemImg} alt='item img' class='h-[70%] object-contain'>
                <p class='truncate whitespace-nowrap w-full text-center'>{itemName}</p>
            </div>
            <div 
            onmouseleave={outHover} 
            role='group' 
            style='background: rgb({rarity})' 
            class='{hover != index 
                ? '-translate-x-[98%] absolute' 
                : 'translate-0'} top-0 left-0 w-[clamp(175px,20vw,250px)] h-[clamp(80px,10vw,100px)]
                transition-all duration-500 grid grid-rows-4 grid-cols-3 gap-2 p-[4%] justify-items-center'>
                <p class='max-w-[100px] col-span-2 uppercase truncate whitespace-nowrap text-[12px]'>{fromName}</p>
                <a href={fromLink} class='col-span-2 row-span-3 col-start-1 row-start-2'><img loading='lazy' src={fromImg} alt='from img' class='h-full object-contain'></a>
                <a href={steamLink} class='row-span-2 col-start-3 row-start-1'><img loading='lazy' src={steamImg} alt='steam img' class='h-full rounded-full'></a>
                <img loading='lazy' src={itemImg} alt='item img' class='row-span-2 col-start-3 row-start-3 h-full object-contain'>
            </div>
        </div>
    {/each}
</aside>

<!-- @component
- Онлайн лента дропа
 -->