<script lang="ts">
    import { LabelText, Button, Svg } from '$lib/components';
    const TITLE = 'Ваши предметы';
    const stateDrop = $state([
        {category: 'Весь дроп', selected: false},
        {category: 'Новые', selected: false},
        {category: 'Ошибки', selected: false},
        {category: 'В процессе', selected: false}
    ]);
    function selecteStateDrop() {};
    function filterDrop() {};
    function sellDrop() {};
</script>

<div class="p-3 flex flex-col gap-4 items-center">
    <h1>{TITLE}</h1>
    <div class="w-full flex gap-4 flex-wrap items-center justify-center">
        {#each stateDrop as {category}}
            <LabelText {...{class: 'text-sm'}}>
                <input id={category} type="checkbox">
                <label for={category} class="click">{category}</label>
                <span>{0}</span>
            </LabelText>
        {/each}
        <Button>
            <Svg name='wallet'/>
            <p>Нет предметов для продажи</p>
        </Button>
    </div>
</div>

