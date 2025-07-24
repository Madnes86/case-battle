<script lang="ts">
	import { Svg, LabelText } from '$lib/components';

	let src = 'https://cdn.case-battle.life/images/user/6813/3406579/thumb-6870bbb493bf5.jpg';
</script>

<div class="m-auto mt-[68px] flex max-w-[1300px] flex-col items-center bg-[var(--color-main)] bg-[url(https://case-battle.life/img/bg_case.webp)] bg-contain bg-no-repeat p-2 md:mt-0">
	<h1 class="my-4 text-[24px] uppercase">Профиль</h1>
	<div class="grid grid-cols-2 grid-rows-3 gap-4">
		<div class="relative flex h-[200px] w-[clamp(350px,40vw,450px)] justify-between gap-4 bg-[#090a0ec6] p-4">
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
					<a href="/" class="click flex items-center gap-2 text-[12px] text-[var(--color-gray)] uppercase">НАСТРОЙКИ<Svg name="settings" size={18} stroke="var(--color-gray)" /></a>
					<a href="/" class="click flex items-center gap-2 text-[12px] text-[var(--color-gray)] uppercase">Выход<Svg name="exit" size={18} stroke="var(--color-gray)" /></a>
				</div>
			</div>
			<!-- Button add components -->
			<button class="click absolute right-4 bottom-4 flex items-center gap-2 border-2 border-[var(--color-accent)] bg-[var(--color-header)] px-3 py-2 text-[11px] uppercase"><Svg name="add" size={18} />пополнить</button>
		</div>
		<div class="row-start-2 flex max-h-[140px] w-[clamp(350px,40vw,450px)] flex-col items-center bg-[#090a0ec6]">
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
		<div class="col-start-2 flex max-h-[250px] w-[clamp(350px,40vw,450px)] flex-col gap-3 bg-[#090a0ec6] p-4">
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
        {#snippet card(title, desc, name)}
            <div class="w-[clamp(350px,40vw,450px)] max-h-[250px] p-4 flex flex-col gap-2 bg-[#090a0ec6]">
                <div class="flex justify-between">
                    <span class="flex flex-col gap-2">
                        <h3 class="font-bold">{title}</h3>
                        <p class="text-[12px] text-[var(--color-gray)]">{desc}</p>
                    </span>
                    <Svg {name}/>
                </div>
            </div>
        {/snippet}
        {@render card('TRADE URL', 'Трейд-ссылка сохранена', 'link')}
        {@render card('Персональный', 'купон', '')}
        {@render card('E-mail добавлен', 'получайте купоны', '')}
	</div>
</div>
