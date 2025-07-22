<script lang='ts'>
    import { Svg } from '$lib/components';
    let { isMobile } : { isMobile? : boolean } = $props();
</script>

<a href='/' class='{isMobile ? 'w-full p-2 flex bg-black click' : 'w-[200px] h-full md:flex hidden'} gap-2 items-center'>
    <img src='https://cdn.case-battle.life/images/user/6813/3406579/thumb-6870bbb493bf5.jpg' alt='steamImg' class='h-11 -start-1 rounded-full border-2 border-[var(--color-accent)]'>
    <p class='w-full text-[12px] leading-[1.1]'><span class='text-[var(--color-accent)]'>Привет,</span><br>userName<br>На счете: <span class='text-[var(--color-accent)]'>balance</span> ₽</p>
    <Svg name='wallet'/>
</a>