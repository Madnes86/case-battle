<script lang='ts'>
	import type { Snippet } from "svelte";

    let {
        children
    } : {
        children : Snippet
    } = $props();
</script>

<span class="flex items-center gap-2 text-[20px]">
    {@render children()}
</span>