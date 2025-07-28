<script lang='ts'>
	import type { Snippet } from "svelte";

    // TODO: add rest
    let {
        children,
        ...rest
    } : {
        children : Snippet
        class?: string
    } = $props();
</script>

<span class="flex items-center gap-2 text-[20px]">
    {@render children()}
</span>