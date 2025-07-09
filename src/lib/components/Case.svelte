<script lang="ts">

    let { c } = $props();

    const LIMIT_IMG : string = "https://case-battle.life/img/ico-limit.png";
    let isDisabled = $derived(c.state === 'desable');
    let hover : string = $state('');
    let isHovered = $derived(hover === c.name && !isDisabled);
    let declension : string = "Предметы";

    function onEnter(name : string) { hover = name }; // re name onHover ?
    function onLeave() { hover = '' }; // re name outHover ?
    // function declension() {

    // }

    // Проверка связанных параметров
</script>

    <button 
    onclick={() => !isDisabled && (window.location.href = `/case/${c.slug}`)}
    onmouseenter={() => {onEnter(c.name)}} 
    onmouseleave={onLeave}
    class="{isDisabled && 'grayscale text-[var(--color-gray)]'} {isHovered ? 'bg-black cursor-pointer' : 'cursor-not-allowed'} relative p-2 w-[250px] h-[300px] flex flex-col text-white">
        <h3 class="uppercase">{name}</h3>
        <div class="w-full flex gap-1 text-[12px] text-[var(--color-gray)]"><p>{c.items}</p><p>{declension}</p></div>
        <div style="background-image: url({c.backImg});" class="relative w-full h-full bg-cover">
            <img src={c.frontImg} alt="" class="{isHovered ? '-top-4' : 'top-2'} transition-all absolute">
            {#if c.limit != null }
            <div class="absolute top-0 right-0 flex flex-col gap-1 items-center">
                <img src={LIMIT_IMG} alt="">
                <div class="flex gap-1 text-[11px]"><b class="text-[var(--color-accent)]">{c.limitOld}</b><p>из {c.limit}</p></div>
            </div>
            {/if}
        </div>
        <div class="w-full flex gap-4 justify-end items-center">
            {#if c.priceOld != null }<strike class="text-[var(--color-gray)]">{c.priceOld}</strike>{/if}
            <p class="px-4 border-[1px] border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-header)]">{c.price}</p>
        </div>
    </button>
