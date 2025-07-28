<script lang="ts">
    import { Svg, Button } from '$lib/components';
    let {
        title,
        desc,
        name,
        placeholder,
        text,
        href,
        label
    } : {
        title : string;
        desc : string;
        name : string;
        placeholder : string;
        text : string;
        href? : string;
        label : string;
    } = $props();

</script>

<div class=" max-w-100 w-full p-4 flex flex-col gap-4 justify-between bg-[#090a0ec6]">
    <div class="flex justify-between">
        <span class="flex flex-col">
            <h3 class="font-bold">{title}</h3>
            <p class="text-[12px] text-[var(--color-gray)]">{desc}</p>
        </span>
        <Svg {name} size={32}/>
    </div>
    <div class="flex gap-2">
        <input type="text" placeholder="{placeholder}" class="w-full border border-[var(--color-gray)] text-gray bg-[var(--color-mail)]">
        <Button>
            <p class="text-[11px] uppercase">{text}</p>
        </Button>
    </div>
    <a {href} class="flex gap-2 items-center click">
        <Svg name="info" stroke="var(--color-gray)"/>
        <p class="text-sm text-[var(--color-gray)]">{label}</p>
    </a>
</div>