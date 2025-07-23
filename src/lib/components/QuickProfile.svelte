<script lang='ts'>
    import { Svg } from '$lib/components';
    let { 
        isMobile,
        steamImg = 'https://cdn.case-battle.life/images/user/6813/3406579/thumb-6870bbb493bf5.jpg',
        userName = 'New test user',
        balance  =  2025
    } : { 
        isMobile? : boolean 
        steamImg  : string
        userName  : string
        balance   : number
    } = $props();
</script>

<div class='{isMobile ? 'w-full p-4 flex bg-black click' : 'w-[200px] h-full md:flex hidden'} gap-2 items-center'>
    <a href='/' class='{isMobile ? 'gap-4' : 'gap-2'} w-full flex click items-center'>
        <img src={steamImg} alt='steamImg' class='{isMobile 
            ? 'h-18' 
            : 'h-11'} -start-1 rounded-full border-2 border-[var(--color-accent)]'>
        <p class='{isMobile ? 'text-[15px]' : 'text-[12px]'} leading-[1.1] trancate'>
            <span class='text-[var(--color-accent)]'>Привет,</span><br>
            <span class='{isMobile && 'max-w-100'} truncate max-w-30 inline-block'>{userName}</span><br>
            На счете: <span class='text-[var(--color-accent)]'>{balance} ₽</span>
        </p>
    </a>
    <Svg name='wallet' {...{class: `${isMobile && 'w-8 h-8'} click`}}/>
</div>