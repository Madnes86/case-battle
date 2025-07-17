<script lang=ts>
    import { onMount } from 'svelte';
    import { Svg, SelectItems, Select } from '$lib/components';

    const TRUE = true
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

<div class="m-auto w-[1200px] flex flex-col gap-2 items-center">
    <div class="w-full grid grid-cols-3">
        <div class="flex gap-2 items-center click"><img src="/icon/contract.svg" alt="" class="w-6"><p class="text-[var(--color-accent)]">Правила игры</p></div>
        <h1 class="uppercase text-[24px] text-center">КОНТРАКТЫ</h1>
    </div>
    <div class="flex">
        {#each {length: 10} as item}
            <div class="w-[110px] h-[110px] relative flex justify-center border-1 border-[#2F374E] bg-[#191d26] hover:border-red-400">
                <svg class="w-2/3 rotate-10" id="icon-usp" viewBox="0 0 31.2 11.6">
                    <path d="M24.377 5.263h-.002c0-.2-.096-.448-.174-.593-.182-.343-.257-.26-.308-.456.198.094.532.1.78.35.253.254.45.782.19 1.143-.193.27-.28.334-.526.44-.404.177-1.672.203-2.136.203l-1.048-.04c-.11-.475-1.214-2.178-.363-2.178h2.297c.134 0 .928.8.928 1.29 0 .248-.037.472-.12.646.082.044.094.056.2.08.073-.305.283-.528.283-.886zM16.473.06h-.922c-.26.025-.246.127-.246.486-.31.008-.282.25-.282.485h-.363V.75h-.606V.185h-2.016c-.178 0-.133-.075-.276-.066-.094.005-.085.046-.248.063l-4.68.003c-.24-.003-.36-.044-.643-.043H1.514C.203.143.06-.127.06 1.433c0 1.04.103.812.243 1.412 1.99 0 3.98-.01 5.97 0 .3.002.423-.043.724-.04 1.333.007 3.21-.045 4.44-.003.266.01.153.046.29.07.102.016.146-.025.31-.025h1.936v-.363h.686V2.16h.403c0 1.31-.098.432-.126.93-.015.25.034.162.09.276.03.06.007-.046.033.088a.556.556 0 0 1 .006.075c.015.25-.043.183.038.526h3.106c1.8 0 1.486-.293 2.022 1.042.143.357.29.727.442 1.09.078.185.195.327.392.376.79.04 1.368.072 2.027.02.53-.043 1.02-.11 1.586-.146.106-.006.27 0 .627 0 0 .218.81 3.558.894 3.904.29 1.163.04.89-.048 1.218h4.314c0-1.387-.174-2.528-.52-3.715-.84-2.875-1.826-2.827-.12-3.377.194-.062.382-.14.4-.37.007-.08-.058-.596-.083-.644.22 0 1.01.005 1.01-.282 0-.44-.275-.3-.486-.282-.005-.2-.076-.323-.08-.524l-.606.363c-.08-.173-.188-1.063-.28-1.29-.243-.604-.405-.52-.405-1.13-.31.025-.03.167-.684.16-1.532-.01-.723.068-1.168.12h-3.71c-.902 0-.42.035-.728.08-.357.052-1.24.002-1.652.002-.928 0-.474-.035-.768-.08h-4.11V.06z"></path>
                </svg>
            </div>
        {/each}
    </div>
    <div class="w-full p-2 flex justify-between items-center bg-[var(--color-header)]">
        <div class="flex gap-2"><img src="/img/pay.png" alt="" class="w-6 h-6"><p class="align-middle">Ваш баланс: <b class="text-[20px]">{60} ₽</b></p><Svg name='add'/></div>
        <h2 class="uppercase text-[var(--color-accent)]">ПОЛОЖИТЕ ЕЩЕ МИНИМУМ {3} ПРЕДМЕТА</h2>
        <p class="uppercase">СУММА КОНТАРКТА: {0} ₽</p>
    </div>
    <div class="w-full flex gap-2">
        <SelectItems version='contract'/>

        <div class='gradient w-full flex flex-col gap-2 items-center border border-[#333d4f]'>
            <div class='w-full h-12 p-2 flex gap-4 justify-between items-center bg-[#090a0e]'>
                <p class='whitespace-nowrap'>Использовать баланс</p>
                <Svg name='invest' width={40} height={40} />
                <input type='range' min='0' max='{100}' value='0' class='w-full bg-[var(--color-accent)]'>
                <p class='whitespace-nowrap'>{0} ₽</p>
            </div>
            <div class='h-full flex flex-col items-center justify-center gap-4'>
                <h2 class='uppercase text-center text-[18px]'>Вы получите предмет <br>
                От <b class='text-[var(--color-accent)]'>{0} ₽</b> До <b class='text-[var(--color-accent)]'>{0} ₽</b></h2>
                <p class='flex gap-2 items-center text-[18px]'>Цель: <Select select={[{optional: 'random'}, {optional: 'case'}]} /></p>
                <div class='flex gap-4 items-center'>
                    <canvas bind:this={canvas} width={300} class='border border-black'></canvas>
                    <div class='flex flex-col gap-4'>
                        <Svg name='pencil' classP='click'/>
                        <Svg name='eraser' stroke='#FFF' classP='click'/>
                        <Svg name='clear' stroke='#FFF' classP='click'/>
                        <input type='color' class='w-6 h-6 rounded-full border'>
                    </div>
                </div>
                <button class:click={FALSE} class:disabled={TRUE} class='px-2 py-1 flex gap-2 uppercase border font-medium text-[var(--color-accent)]'><Svg name='sign' />Подписать!</button>
            </div>
        </div>
    </div>
</div>