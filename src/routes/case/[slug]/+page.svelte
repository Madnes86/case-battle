<script lang="ts">
    import { ITEMS } from '$lib/data/items';
    import { user } from '$lib/stores/user';
    const { data } = $props();
    const c = data.c;

    // Roll
    let isRolling : boolean = $state(false);
    let result = $state({ img: 'https://cdn.case-battle.life/images/skin/1867/middle-5c793d99d3104.png', name: '', price: 0, skin: '' });
    const RESULT_INDEX : number = 2;
    let reel : HTMLDivElement;
    let scrollItems = $state([]);

    function roll() {
        isRolling = true;
        Object.assign(result, ITEMS[RESULT_INDEX]);
        const index = ITEMS.findIndex(item => item.name === result.name);

        scrollItems = Array.from({ length: ITEMS.length * 8 }, (_, i) => ITEMS[i % ITEMS.length]);

        const itemWidth = 150;
        const scrollTo = itemWidth * Math.floor(scrollItems.length - index - scrollItems.length / 2);
        reel.style.transition = `transform 7s cubic-bezier(0.1, 0.8, 0.3, 1)`;
        reel.style.transform = `translateX(-${scrollTo}px)`;
    };
    function fastRoll() {
        isRolling = true
        Object.assign(result, ITEMS[RESULT_INDEX]);
        const index = ITEMS.findIndex(item => item.name === result.name);

        scrollItems = Array.from({ length: ITEMS.length * 8 }, (_, i) => ITEMS[i % ITEMS.length]);

        const itemWidth = 150;
        const scrollTo = itemWidth * Math.floor(scrollItems.length - index - scrollItems.length / 2);
        reel.style.transform = `translateX(-${scrollTo}px)`;
    };
    const auth = () => user.set(true)

</script>

<div class="h-[100vh] flex flex-col items-center bg-no-repeat bg-[url(https://case-battle.life/img/bg_case.webp)] bg-[var(--color-header)]">
    <div class="text-center">
        <b class="text-[14px] text-[var(--color-gray)]">{c.category}</b>
        <h1 class="uppercase text-[22px]">«{c.name}»</h1>
    </div>
    <div class="w-[30vw] h-[30vw] m-10 relative flex justify-center items-center">
        <img src="/img/case/circle.png" alt="" class="absolute top-1/2 left-1/2 -translate-1/2 spin">
        {#if isRolling }
            <div bind:this={reel} class="flex">
                {#each scrollItems as { img, price, name, skin, rarity }}
                    <div style="border-color: rgb(41, 49, 63)" class="w-[170px] h-[170px] relative border-1 bg-[url(/img/case/bg-base.jpg)]">
                        <img src={img} alt="" class="h-2/3 m-auto">
                        <b class="absolute left-0 top-1/2 py-1 px-4 bg-[var(--color-filter)] text-[var(--color-accent)]">{price} ₽</b>
                        <div style="border-bottom: 4px solid {rarity}" class="truncate p-2 text-[13px]">
                            <b>{name}</b>
                            <p>{skin}</p>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
        <img src={c.backImg} alt="" class="z-[1]">
        <img src={c.frontImg} alt="" class="absolute top-1/2 left-1/2 -translate-1/2 z-[1]">
        {/if}
    </div>
    {#if $user}
        <div class="flex gap-2">
            <button onclick={roll} class="px-2 py-1 border-2 border-[var(--color-accent)] bg-[#181412] click">ОТКРЫТЬ ЗА {c.price} ₽</button>
            <button onclick={fastRoll} class="px-2 py-1 border-2 border-[var(--color-accent)] bg-[#181412] click">БЫСТРО ЗА {c.price} ₽</button>
        </div>
    {:else}
        <div class="w-[320px] flex gap-2 p-2 items-center bg-[#00000076] ">
            <img src="/icon/steam.png" alt="" class="h-1/2">
            <div class="flex flex-col gap-2">
                <p class="text-center">Пожалуйста, авторизуйтесь <b class="text-[var(--color-accent)]">через Steam</b></p>
                <button onclick={auth} class="px-2 py-1 click border-2 border-[var(--color-accent)]">Авторизоваться</button>
            </div>
        </div>
    {/if}
    <section>
        <h1 class="uppercase my-6 text-[20px] text-center">СОДЕРЖИМОЕ КЕЙСА</h1>
        <div class="w-[1120px] flex flex-wrap gap-x-[20px] gap-y-[15px]">
            {#each ITEMS as { img, price, name, skin, rarity }}
                <div style="border-color: rgb(41, 49, 63)" class="w-[170px] h-[170px] relative border-1 bg-[url(/img/case/bg-base.jpg)]">
                    <img src={img} alt="" class="h-2/3 m-auto">
                    <b class="absolute left-0 top-1/2 py-1 px-4 bg-[var(--color-filter)] text-[var(--color-accent)]">{price} ₽</b>
                    <div style="border-bottom: 4px solid {rarity}" class="truncate p-2 text-[13px]">
                        <b>{name}</b>
                        <p>{skin}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</div>

<style>
    .spin {
        animation: spinr 12s linear infinite;
    }
    @keyframes spinr {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>