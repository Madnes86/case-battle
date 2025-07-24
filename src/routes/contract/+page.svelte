<script lang="ts">
	import { onMount } from 'svelte';
	import { Svg, Faqs, SelectItems, Select } from '$lib/components';

	const RULES: { question: string; answer: string }[] = [
		{
			question: 'ВЫБИРАЙ',
			answer:
				'Выберите минимум 3 своих предмета, взамен которых Вы бы хотели получить один, но дорогой скин.'
		},
		{
			question: 'ПОДПИСЫВАЙ',
			answer:
				'Чем выше суммарная стоимость предметов в контракте, тем ценнее скин из него выпадет. Чтобы ещё увеличить вероятность выпадения крутого скина Вы можете использовать баланс.'
		},
		{
			question: 'ВЫИГРЫВАЙ',
			answer:
				'Жмите "Подписать" и получайте один новый скин взамен Ваших. Вы можете вывести его в Steam или использовать далее на сайте, в том числе и повторно в контракте.'
		}
	];
	const TRUE = true;
	const FALSE = false;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let color: string = '#FFF';
	onMount(() => {
		if (canvas) {
			ctx = canvas.getContext('2d');
		}
	});
</script>

<div
	class="m-auto mt-[68px] flex flex-col items-center gap-2 bg-[url(https://case-battle.life/img/bg_case.webp)] bg-contain bg-no-repeat p-4 pt-10 md:mt-0 xl:w-[1200px]"
>
	<div class="grid w-full grid-cols-3">
		<div class="click flex items-center gap-2">
			<img src="/icon/contract.svg" alt="" class="w-6" />
			<p class="text-[var(--color-accent)]">Правила игры</p>
		</div>
		<h1 class="text-center text-[24px] uppercase">КОНТРАКТЫ</h1>
	</div>
	<div
		class="flex w-full flex-wrap justify-center gap-2 xl:flex-nowrap xl:justify-between"
	>
		{#each { length: 10 } as item}
			<div
				class="relative flex h-[110px] w-[110px] items-center justify-center border border-[#2F374E] bg-[#0000005b] hover:border-red-400"
			>
				<Svg
					name="gun"
					stroke=""
					{...{
						class: 'w-2/3 rotate-10',
						viewBox: '0 0 31.2 11.6',
						fill: '#000'
					}}
				/>
			</div>
		{/each}
	</div>
	<div class="flex w-full items-center justify-between bg-[#0000005b] p-2">
		<div class="flex items-center gap-2">
			<Svg name="wallet" />
			<p class="align-middle">Ваш баланс: <b class="text-[20px]">{60} ₽</b></p>
			<Svg name="add" {...{ class: 'click' }} />
		</div>
		<h2 class="text-[var(--color-accent)] uppercase">
			ПОЛОЖИТЕ ЕЩЕ МИНИМУМ {3} ПРЕДМЕТА
		</h2>
		<p class="uppercase">СУММА КОНТАРКТА: {0} ₽</p>
	</div>
	<div class="flex w-full flex-col gap-2 xl:flex-row">
		<SelectItems version="contract" />

		<div
			class="gradient flex w-full flex-col items-center gap-2 border border-[#333d4f] bg-[#0000005b]"
		>
			<div
				class="flex h-12 w-full items-center justify-between gap-4 bg-[#090a0e] p-2"
			>
				<p class="whitespace-nowrap">Использовать баланс</p>
				<Svg name="invest" width={40} height={40} />
				<input
					type="range"
					min="0"
					max={100}
					value="0"
					class="w-full bg-[var(--color-accent)]"
				/>
				<p class="whitespace-nowrap">{0} ₽</p>
			</div>
			<div class="flex h-full flex-col items-center justify-center gap-4 p-2">
				<h2 class="text-center text-[18px] uppercase">
					Вы получите предмет <br />
					От <b class="text-[var(--color-accent)]">{0} ₽</b> До
					<b class="text-[var(--color-accent)]">{0} ₽</b>
				</h2>
				<p class="flex items-center gap-2 text-[18px]">
					Цель: <Select
						select={[{ optional: 'перчатки' }, { optional: 'винтовки' }]}
						{...{ class: `${TRUE && 'disabled'}` }}
					/>
				</p>
				<div class="flex items-center gap-4">
					<canvas bind:this={canvas} width={300} class="border border-black"
					></canvas>
					<div class="flex flex-col gap-4">
						<Svg name="pencil" {...{ class: 'click' }} />
						<Svg name="eraser" stroke="#FFF" {...{ class: 'click' }} />
						<Svg name="clear" stroke="#FFF" {...{ class: 'click' }} />
						<input type="color" class="h-6 w-6 rounded-full border" />
					</div>
				</div>
				<button
					class:click={FALSE}
					class:disabled={TRUE}
					class="flex gap-2 border px-2 py-1 font-medium text-[var(--color-accent)] uppercase"
					><Svg name="sign" />Подписать!</button
				>
			</div>
		</div>
	</div>
</div>

{#if FALSE}<Faqs
		data={RULES}
		{...{ class: 'absolute top-1/2 left-1/2 -translate-1/2 w-90' }}
	/>{/if}
