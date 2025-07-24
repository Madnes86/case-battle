<script lang="ts">
	import { Svg, NavList } from '$lib/components';

	let CURRENCY = '₽';
	const cards: {
		code: string;
		price: number;
		name: string;
		skin: string;
		skinImg: string;
		lastTime: data;
	}[] = [
		{
			code: '#H27511',
			price: 316,
			name: 'P90',
			skin: 'Вектор атаки',
			skinImg:
				'https://cdn.case-battle.life/images/skin/18864/middle-67271f8d581ab.png',
			lastTime: new Date().toLocaleTimeString()
		},
		{
			code: '#D27515',
			price: 3029,
			name: 'Dual Berettas',
			skin: 'Погребальный костёр',
			skinImg:
				'https://cdn.case-battle.life/images/skin/9868/middle-5ddd1d23846d7.png',
			lastTime: new Date().toLocaleTimeString()
		},
		{
			code: '#W27417',
			price: 9666,
			name: 'M4A1-S',
			skin: 'Шедевр',
			skinImg:
				'https://cdn.case-battle.life/images/skin/740/middle-5c793c316387c.png',
			lastTime: new Date().toLocaleTimeString()
		}
	];
	const winners: {
		steamImg: string;
		steamName: string;
		date: Date;
		code: string;
		name: string;
		skin: string;
		price: number;
	}[] = [
		{
			steamImg:
				'https://cdn.case-battle.life/images/user/3335/1667592/thumb-684ad0405b34f.jpg',
			steamName: 'tumen&amp',
			date: new Date().toLocaleTimeString(),
			code: '#H27510',
			name: 'StatTrak™ AK-47',
			skin: 'Элитное снаряжение',
			price: 292
		},
		{
			steamImg:
				'https://cdn.case-battle.life/images/user/3335/1667592/thumb-684ad0405b34f.jpg',
			steamName: 'tumen&amp',
			date: new Date().toLocaleTimeString(),
			code: '#H27510',
			name: 'StatTrak™ AK-47',
			skin: 'Элитное снаряжение',
			price: 292
		},
		{
			steamImg:
				'https://cdn.case-battle.life/images/user/3335/1667592/thumb-684ad0405b34f.jpg',
			steamName: 'tumen&amp',
			date: new Date().toLocaleTimeString(),
			code: '#H27510',
			name: 'StatTrak™ AK-47',
			skin: 'Элитное снаряжение',
			price: 292
		},
		{
			steamImg:
				'https://cdn.case-battle.life/images/user/3335/1667592/thumb-684ad0405b34f.jpg',
			steamName: 'tumen&amp',
			date: new Date().toLocaleTimeString(),
			code: '#H27510',
			name: 'StatTrak™ AK-47',
			skin: 'Элитное снаряжение',
			price: 292
		},
		{
			steamImg:
				'https://cdn.case-battle.life/images/user/3335/1667592/thumb-684ad0405b34f.jpg',
			steamName: 'tumen&amp',
			date: new Date().toLocaleTimeString(),
			code: '#H27510',
			name: 'StatTrak™ AK-47',
			skin: 'Элитное снаряжение',
			price: 292
		},
		{
			steamImg:
				'https://cdn.case-battle.life/images/user/3335/1667592/thumb-684ad0405b34f.jpg',
			steamName: 'tumen&amp',
			date: new Date().toLocaleTimeString(),
			code: '#H27510',
			name: 'StatTrak™ AK-47',
			skin: 'Элитное снаряжение',
			price: 292
		}
	];
</script>

<div
	class="m-auto mt-[68px] flex max-w-[1300px] flex-col items-center justify-center gap-6 p-4 md:mt-0"
>
	<div class="grid h-10 w-full grid-cols-3">
		<div class="click my-auto flex gap-2 text-[var(--color-accent)]">
			<Svg name="info" />
			<p>Правила участия</p>
		</div>
		<h1 class="m-auto text-[24px] uppercase">Розыгрыши</h1>
	</div>
	<div class="flex w-full flex-wrap justify-center gap-8 xl:flex-row">
		{#each cards as { code, price, name, skin, skinImg, lastTime }}
			<div
				class="border-[] flex w-90 flex-col gap-2 border-t bg-[var(--color-filter)] p-4"
			>
				<div
					class="flex items-center justify-between bg-gradient-to-r from-blue-200/20 to-green-600/40 p-1"
				>
					<span
						class="flex items-center gap-2 text-[14px] text-[var(--color-gray)]"
						>{code}
						<h3 class="text-[16px] text-[var(--color-blue)]">
							Розыгрыш каждый час
						</h3></span
					><b class="text-[var(--color-green)]">{price} {CURRENCY}</b>
				</div>
				<div class="flex justify-between">
					<div class="flex flex-col justify-between">
						<p>
							<b>{name}</b><br />
							{skin}
						</p>
						<span class="text-[14px] text-[var(--color-gray)]">
							<p>
								При пополнении от: <b class="text-[var(--color-accent)]"
									>{50} {CURRENCY}</b
								>
							</p>
							<p>
								Осталось: <b class="text-[var(--color-accent)]">{lastTime}</b>
							</p>
						</span>
						<div class="h-1.5 w-full rounded-full bg-[var(--color-header)]">
							<div
								class="h-1.5 w-1/2 rounded-full bg-[var(--color-blue)]"
							></div>
						</div>
					</div>
					<div class="relative w-[120px]">
						<img src={skinImg} />
						<button
							class="click absolute bottom-0 left-1/2 -translate-x-1/2 bg-[var(--color-gray)] px-2 text-[14px]"
							>Участвовать</button
						>
					</div>
				</div>
				<div class="flex flex-col items-center">
					<Svg name="winner" stroke="" {...{ fill: 'var(--color-blue)' }} />
					<b class="text-[var(--color-blue)]">Победители</b>
				</div>
				<div class="flex flex-col gap-2">
					{#each winners as { steamImg, steamName, date, code, name, skin, price }}
						<div class="bg-[var(--color-header)] px-3 py-2">
							<div class="flex items-center">
								<p class="flex w-full gap-2 whitespace-nowrap">
									<img src={steamImg} class="w-6 rounded-full" />{steamName}
								</p>
								<p class="mr-2 text-[14px] text-[var(--color-gray)]">{date}</p>
								<b class="text-[14px]">{code}</b>
							</div>
							<div class="flex items-center justify-between">
								<p
									class="text-[12px] whitespace-nowrap text-[var(--color-blue)]"
								>
									{name} | {skin}
								</p>
								<p
									class="text-[14px] whitespace-nowrap text-[var(--color-accent)]"
								>
									{price}
									{CURRENCY}
								</p>
							</div>
						</div>
					{/each}
				</div>
				<NavList number={3} />
			</div>
		{/each}
	</div>
</div>
