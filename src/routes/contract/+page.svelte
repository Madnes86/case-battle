<script lang=ts>
    import { onMount } from 'svelte';
    import { Svg, Faqs, SelectItems, Select } from '$lib/components';

    const RULES : { question: string, answer: string }[] = [{ question: 'ВЫБИРАЙ', answer: 'Выберите минимум 3 своих предмета, взамен которых Вы бы хотели получить один, но дорогой скин.'}, { question: 'ПОДПИСЫВАЙ', answer: 'Чем выше суммарная стоимость предметов в контракте, тем ценнее скин из него выпадет. Чтобы ещё увеличить вероятность выпадения крутого скина Вы можете использовать баланс.'}, { question: 'ВЫИГРЫВАЙ', answer: 'Жмите "Подписать" и получайте один новый скин взамен Ваших. Вы можете вывести его в Steam или использовать далее на сайте, в том числе и повторно в контракте.'} ]
    const TRUE  = true
    const FALSE = false
    let canvas  : HTMLCanvasElement;
    let ctx     : CanvasRenderingContext2D | null;
    let color   : string = '#FFF';
    onMount(() => {
        if (canvas) {
            ctx = canvas.getContext('2d');
        }
    });
</script>

<div class='m-auto md:mt-0 mt-[68px] p-4 pt-10 xl:w-[1200px] flex flex-col gap-2 items-center bg-no-repeat bg-contain bg-[url(https://case-battle.life/img/bg_case.webp)]'>
    <div class="w-full grid grid-cols-3">
        <div class="flex gap-2 items-center click"><img src="/icon/contract.svg" alt="" class="w-6"><p class="text-[var(--color-accent)]">Правила игры</p></div>
        <h1 class="uppercase text-[24px] text-center">КОНТРАКТЫ</h1>
    </div>
    <div class="w-full flex xl:flex-nowrap flex-wrap gap-2 xl:justify-between justify-center">
        {#each {length: 10} as item}
            <div class="w-[110px] h-[110px] relative flex justify-center items-center border border-[#2F374E] bg-[#0000005b] hover:border-red-400">
                <Svg name='gun' stroke='' {...{class: 'w-2/3 rotate-10', viewBox: '0 0 31.2 11.6', fill: '#000'}}/>
            </div>
        {/each}
    </div>
    <div class="w-full p-2 flex justify-between items-center bg-[#0000005b]">
        <div class="flex gap-2 items-center"><Svg name='wallet' /><p class="align-middle">Ваш баланс: <b class="text-[20px]">{60} ₽</b></p><Svg name='add' {...{class: 'click'}}/></div>
        <h2 class="uppercase text-[var(--color-accent)]">ПОЛОЖИТЕ ЕЩЕ МИНИМУМ {3} ПРЕДМЕТА</h2>
        <p class="uppercase">СУММА КОНТАРКТА: {0} ₽</p>
    </div>
    <div class="w-full flex xl:flex-row flex-col gap-2">
        <SelectItems version='contract'/>

        <div class='gradient w-full flex flex-col gap-2 items-center border border-[#333d4f] bg-[#0000005b]'>
            <div class='w-full h-12 p-2 flex gap-4 justify-between items-center bg-[#090a0e]'>
                <p class='whitespace-nowrap'>Использовать баланс</p>
                <Svg name='invest' width={40} height={40} />
                <input type='range' min='0' max='{100}' value='0' class='w-full bg-[var(--color-accent)]'>
                <p class='whitespace-nowrap'>{0} ₽</p>
            </div>
            <div class='h-full p-2 flex flex-col items-center justify-center gap-4'>
                <h2 class='uppercase text-center text-[18px]'>Вы получите предмет <br>
                От <b class='text-[var(--color-accent)]'>{0} ₽</b> До <b class='text-[var(--color-accent)]'>{0} ₽</b></h2>
                <p class='flex gap-2 items-center text-[18px]'>Цель: <Select select={[{optional: 'перчатки'}, {optional: 'винтовки'}]} {...{class: `${TRUE && 'disabled'}`}}/></p>
                <div class='flex gap-4 items-center'>
                    <canvas bind:this={canvas} width={300} class='border border-black'></canvas>
                    <div class='flex flex-col gap-4'>
                        <Svg name='pencil' {...{class: 'click'}}/>
                        <Svg name='eraser' stroke='#FFF' {...{class: 'click'}}/>
                        <Svg name='clear'  stroke='#FFF' {...{class: 'click'}}/>
                        <input type='color' class='w-6 h-6 rounded-full border'>
                    </div>
                </div>
                <button class:click={FALSE} class:disabled={TRUE} class='px-2 py-1 flex gap-2 uppercase border font-medium text-[var(--color-accent)]'><Svg name='sign' />Подписать!</button>
            </div>
        </div>
    </div>
</div>

{#if FALSE }<Faqs data={RULES} {...{ class: 'absolute top-1/2 left-1/2 -translate-1/2 w-90' }} />{/if}