<script lang='ts'>
    import { Svg } from '$lib/components';

    let steamImg = 'https://cdn.case-battle.life/images/user/6813/3406579/thumb-6870bbb493bf5.jpg';

</script>

<div class='m-auto md:mt-0 mt-[68px] p-2 max-w-[1300px] flex flex-col items-center bg-no-repeat bg-contain bg-[url(https://case-battle.life/img/bg_case.webp)] bg-[var(--color-main)]'>
    <h1 class='my-4 uppercase text-[24px]'>Профиль</h1>
    <div class='grid grid-cols-2 grid-rows-3 gap-4'>
        <div class='relative p-4 w-[clamp(350px,40vw,450px)] h-[200px] flex gap-4 justify-between bg-[#090a0e]'>
            <div class='flex flex-col justify-between'>
                <a href='/' class='flex gap-2 items-center text-[12px] text-[var(--color-gray)] click'><img src='icon/steam.png' alt='' class='h-[18px]'> nameSteam</a>
                <div class='flex flex-col gap-1'>
                    <div class='flex gap-2 items-center text-[12px] text-[var(--color-gray)]'><img src='icon/coin.svg' alt='BattleCoin' title='ButtleCoin (BNC)' class='cursor-help'>x 14</div>
                    <div class='flex gap-2 items-center'><Svg name='wallet' size={18}/>{2025}₽</div>
                    <span class='flex gap-2 items-center text-[12px] text-[var(--color-gray)] hover:underline click'><Svg name='history' size={18}/>История</span>
                </div>
            </div>
            <img src={steamImg} alt='' class='my-auto h-25 object-cover rounded-full border-2 border-[var(--color-accent)]'>
            <div class='flex flex-col justify-between'>
                <div class='flex flex-col gap-2 items-end'>
                    <a href='/' class='flex gap-2 items-center uppercase text-[12px] text-[var(--color-gray)] click'>НАСТРОЙКИ<Svg name='settings' size={18} stroke='var(--color-gray)'/></a>
                    <a href='/' class='flex gap-2 items-center uppercase text-[12px] text-[var(--color-gray)] click'>Выход<Svg name='exit' size={18} stroke='var(--color-gray)'/></a>
                </div>
            </div>
            <button class='absolute bottom-4 right-4 py-2 px-3 flex gap-2 items-center uppercase border-2 border-[var(--color-accent)] text-[11px] bg-[var(--color-header)] click'><Svg name='add' size={18}/>пополнить</button>
        </div>
        <div class='w-[clamp(350px,40vw,450px)] max-h-[140px] flex flex-col items-center row-start-2 bg-[#090a0e]'>
            <h3 class='mt-2 uppercase font-bold text-[16px]'>Лучший дроп</h3>
            <div class='flex gap-4 justify-between items-center'>
                <div class='w-1/2 flex flex-col gap-1'>
                    <p class='w-full truncate whitespace-nowrap text-[12px]'>StatTrak™ P250 | test test</p>
                    <span class='whitespace-nowrap uppercase flex gap-2 items-center text-[12px] text-[var(--color-gray)]'><Svg name='box' size={18} stroke='var(--color-gray)'/>MAJOR 2021</span>
                    <span class='text-[var(--color-accent)]'>852.06 ₽</span>
                </div>
                <img src='https://cdn.case-battle.life/images/skin/2129/middle-5c793dc886662.png' alt='' class='w-1/3'>
            </div>
        </div>
        <div class='w-[clamp(350px,40vw,450px)] max-h-[250px] col-start-2 p-4 flex flex-col gap-3 bg-[#090a0e]'>
            <div class='w-full flex justify-between'>
                <span>
                    <h3 class='uppercase font-bold text-[16px]'>Статистика</h3>
                    <p class='text-[12px] text-[var(--color-gray)]'>Аккаунта</p>
                </span>
                <Svg name='statistics' size={32}/>
            </div>
            <div class='flex justify-between'>
                <span class='flex gap-2 items-center text-[20px]'>
                    <Svg name='box' size={32}/>945
                </span>
                <span class='flex gap-2 items-center text-[20px]'>
                    <img src='icon/upgrade.svg' alt='' class='h-8'>337
                </span>
                <span class='flex gap-2 items-center text-[20px]'>
                    <img src='icon/contract.svg' alt='' class='h-8'>18
                </span>
            </div>
            <h3 class='uppercase text-[16px]'>Выведено в steam</h3>
            <div class='flex gap-4 items-center'>
                <span class='flex gap-2 items-center font-[500] text-[20px] text-[var(--color-accent)]'>
                    <Svg name='wallet' size={32}/>78 ₽
                </span>
                <p class='whitesrape-nowrap text-[12px] text-[var(--color-gray)]'>2 предмета</p>
            </div>
        </div>
    </div>
</div>