<script lang="ts">
	import { Svg } from '$lib/components';
	let {
		isMobile,
		steamImg = 'https://cdn.case-battle.life/images/user/6813/3406579/thumb-6870bbb493bf5.jpg',
		userName = 'New test user',
		balance = 2025
	}: {
		isMobile?: boolean;
		steamImg: string;
		userName: string;
		balance: number;
	} = $props();
</script>

<div
	class="{isMobile
		? 'click flex w-full bg-black p-4'
		: 'hidden h-full w-[200px] md:flex'} items-center gap-2"
>
	<a
		href="/profile"
		class="{isMobile ? 'gap-4' : 'gap-2'} click flex w-full items-center"
	>
		<img
			src={steamImg}
			alt="steamImg"
			class="{isMobile
				? 'h-18'
				: 'h-11'} -start-1 rounded-full border-2 border-[var(--color-accent)]"
		/>
		<p
			class="{isMobile ? 'text-[15px]' : 'text-[12px]'} trancate leading-[1.1]"
		>
			<span class="text-[var(--color-accent)]">Привет,</span><br />
			<span class="{isMobile && 'max-w-100'} inline-block max-w-30 truncate"
				>{userName}</span
			><br />
			На счете: <span class="text-[var(--color-accent)]">{balance} ₽</span>
		</p>
	</a>
	<Svg name="wallet" {...{ class: `${isMobile && 'w-8 h-8'} click` }} />
</div>
