<script lang="ts">
	import { Svg, LabelText, Button, ProfileCard } from '$lib/components';

	let src = 'https://cdn.case-battle.life/images/user/6813/3406579/thumb-6870bbb493bf5.jpg';
	const PROFILE_CARDS = [
		{
			title: 'TRADE URL',
			desc: 'Трейд-ссылка сохранена',
			name: 'link',
			placeholder: 'Введите ссылку трейда',
			text: 'обновить',
			href: '/',
			label: 'Узнать Trade-ссылку можно здесь'
		},
		{
			title: 'Персональный',
			desc: 'купон',
			name: 'descount',
			placeholder: 'Введите код купона',
			text: 'применить',
			label: 'Что такое персональный купон'
		},
		{
			title: 'E-mail добавлен',
			desc: 'получайте купоны',
			name: 'mailAdd',
			placeholder: 'Введите email',
			text: 'подтвердить',
			label: 'E-mail подтвержден'
		}
	]

</script>

<div class="m-auto mt-[68px] flex max-w-[1300px] flex-col items-center bg-[var(--color-main)] bg-[url(https://case-battle.life/img/bg_case.webp)] bg-contain bg-no-repeat p-2 md:mt-0">
	<h1 class="my-4 text-[24px] uppercase">Профиль</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
		<div class="relative flex h-[200px] max-w-100 w-full justify-between gap-4 bg-[#090a0ec6] p-4">
			<div class="flex flex-col justify-between">
				<a href="/" class="click">
					<LabelText>
						<img src="icon/steam.png" alt="" class="h-[18px]" />
						<p class="text-[12px] text-[var(--color-gray)]">nameSteam</p>
					</LabelText>
				</a>
				<div class="flex flex-col gap-1">
					<LabelText>
						<img src="icon/coin.svg" alt="BattelCoin" title="BattleCoin (BNC)" class="cursor-help" />
						<p class="text-[14px] whitespace-nowrap text-[var(--color-gray)]">
							x {14}
						</p>
					</LabelText>
					<LabelText>
						<Svg name="wallet" size={18} />
						<p class="text-[14px] whitespace-nowrap">{2025} ₽</p>
					</LabelText>
					<LabelText>
						<Svg name="history" size={18} />
						<p class="text-[12px] text-[var(--color-gray)] hover:underline">История</p>
					</LabelText>
				</div>
			</div>
			<img {src} alt="" class="my-auto h-25 rounded-full border-2 border-[var(--color-accent)] object-cover" />
			<div class="flex flex-col justify-between">
				<div class="flex flex-col items-end gap-2">
					{#each [{text: 'Настройки', name: 'settings'}, {text: 'Вход', name: 'exit'}] as {text, name} }
						<a href="/" class="click flex items-center gap-2 text-[12px] text-[var(--color-gray)] uppercase">{text}<Svg {name} size={18} stroke="var(--color-gray)" /></a>
					{/each}
				</div>
			</div>
			<!-- Button add components -->
			<Button {...{class: 'absolute right-4 bottom-4'}}>
				<Svg name="add"/>
				<p class="text-[11px] uppercase">пополнить</p>
			</Button>
		</div>
		<div class="flex max-h-[200px] max-w-100 w-full flex-col items-center bg-[#090a0ec6]">
			<h3 class="mt-2 text-[16px] font-bold uppercase">Лучший дроп</h3>
			<div class="flex items-center justify-between gap-4">
				<div class="flex w-1/2 flex-col gap-1">
					<p class="w-full truncate text-[12px] whitespace-nowrap">StatTrak™ P250 | test test</p>
					<LabelText>
						<Svg name="box" size={18} stroke="var(--color-gray)" />
						<p class="text-[12px] text-[var(--color-gray)] uppercase">MAJOR 2021</p>
					</LabelText>
					<p class="text-[var(--color-accent)]">852.06 ₽</p>
				</div>
				<img src="https://cdn.case-battle.life/images/skin/2129/middle-5c793dc886662.png" alt="" class="w-1/3" />
			</div>
		</div>
		<div class="flex max-h-[250px]  max-w-100 w-full flex-col gap-3 bg-[#090a0ec6] p-4">
			<div class="flex w-full justify-between">
				<span>
					<h3 class="text-[16px] font-bold uppercase">Статистика</h3>
					<p class="text-[12px] text-[var(--color-gray)]">Аккаунта</p>
				</span>
				<Svg name="statistics" size={32} />
			</div>
			<div class="flex justify-between">
				<LabelText>
					<Svg name="box" size={32} />
					<p>945</p>
				</LabelText>
				<LabelText>
					<img src="icon/upgrade.svg" alt="" class="h-8" />
					<p>337</p>
				</LabelText>
				<LabelText>
					<img src="icon/contract.svg" alt="" class="h-8" />
					<p>18</p>
				</LabelText>
			</div>
			<h3 class="text-[16px] uppercase">Выведено в steam</h3>
			<div class="flex items-center gap-4">
				<LabelText>
					<Svg name="wallet" size={32} />
					<p class="font-[500] text-[var(--color-accent)]">78 ₽</p>
				</LabelText>
				<p class="whitesrape-nowrap text-[12px] text-[var(--color-gray)]">2 предмета</p>
			</div>
		</div>
		{#each PROFILE_CARDS as {title, desc, name, placeholder, text, label}}
			<ProfileCard {title} {desc} {name} {placeholder} {text} {label}/>
		{/each}
	</div>
</div>
