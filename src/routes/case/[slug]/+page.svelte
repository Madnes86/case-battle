<script context="module" lang="ts">
    import type { PageLoad } from '@sveltejs/kit';
    import { CASES } from '$lib/data/cases';
    
    export const load: PageLoad = ({ params }) => {
        const caseData = CASES.find(c => c.slug === params.slug); // add error catch ?
    }

</script> <script lang="ts">
    export let data;
    const caseData = data.caseData;
</script>
<main class="pl-[190px] h-[100vh] bg-no-repeat bg-[url(https://case-battle.life/img/bg_case.webp)] bg-[var(--color-header)]">
    <img src="/img/case/circle.png" alt="">
    <h1>{caseData.name}</h1>
</main>