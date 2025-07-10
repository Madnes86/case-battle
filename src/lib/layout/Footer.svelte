<script lang="ts">
    const TITLE : string = "CASE-BATTLE © 2018-2025";
    const ABOUT_COMPANY : string = "• THE MILLENNIUM GAMES LIMITED, The Walbrook Building 25 Walbrook, London, England, EC4N 8AF, Company number: 16457870";
    const TEXT : string = "На нашем сайте вы можете открыть CS2 кейсы по выгодным ценам.";
    let navs : { icon: string, title: string, href: string }[] = [
        { icon: "clear", title: "Техподдрежка", href: "support" },
        { icon: "clear", title: "Пользовательское соглашение", href: "" },
        { icon: "clear", title: "Политика безопасности", href: "" },
        { icon: "clear", title: "AML политика", href: "" },
        { icon: "clear", title: "Вопром - ответ", href: "" },
    ];
</script>

<footer class="md:pl-[210px] px-[20px] py-4 min-h-[150px] flex md:flex-nowrap flex-wrap md:justify-between justify-center items-center gap-4 bg-[var(--color-header)]">
    <div class="flex flex-col gap-2 text-[#333e52]">
        <b>{TITLE}</b>
        <ul>{ABOUT_COMPANY}</ul>
        <p>{TEXT}</p>
        <div class="flex flex-col md:flex-row items-center flex-wrap gap-4 font-bold">
            {#each navs as { icon, title, href }}
                <div class="flex gap-2"><img src="/icon/{icon}.svg" alt="{icon}"><a href="/{href}" class="whitespace-nowrap hover:underline">{title}</a></div>
            {/each}
        </div>
    </div>
    <a href="/" class="w-[190px]">
        <img src="/img/logo.svg" alt="logo">
        <img src="/img/payment.png" alt="" class="p-2">
    </a>
</footer>