<script lang="ts">
    const TITLE: string = "Запрос в техподдрежку";
    const TEXT: string = "Если у Вас возникли какие-либо вопросы, Вы можете связаться с нами через форму ниже.";

    let inputs : { label: string, type: string }[] = [
        { label: "Ваше имя",  type: "text" },
        { label: "E-mail",    type: "email" },
        { label: "Сообщение", type: "text" },
    ]

</script>

    <div class="w-[400px] m-auto p-2 flex flex-col gap-2 bg-[var(--color-header)]">
        <h1>{TITLE}</h1>
        <p>{TEXT}</p>
        {#each inputs as { label, type } }
            <div class="grid">
                <label for={label}>{label}</label>
                <input id={label} type={type} placeholder="Введите {label}">
            </div>
        {/each}
    </div>