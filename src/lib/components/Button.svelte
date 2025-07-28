<script lang="ts">
	import type { Snippet } from "svelte";

    let {
        children,
        ...rest
    } : {
        children : Snippet
        class?: string
    } = $props();
    
</script>

<button class="px-3 py-1 flex items-center gap-2 border-2 border-[var(--color-accent)] bg-[var(--color-header)] click {rest.class}">
    {@render children()}
</button>