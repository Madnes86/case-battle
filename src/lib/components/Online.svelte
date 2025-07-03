<script lang="ts">

    let { 
        value = $bindable() 
    } : { 
        value : number 
    } = $props();
    let digits : string[] = $derived(value.toString().split(''));

</script>
<!-- @component
- Счетчик онлайна сайта с анимацией одометра
 -->

    <b class="text-[100%] whitespace-nowrap text-green-600">
        {#each digits as digit, i (`${digit}-${i}`)}
            <span class="animation inline-block transition-transform duration-300 ease-in-out">{digit}</span>
        {/each}
    </b>

<style>
  .animation {
    backface-visibility: hidden;
    animation: rotateYIn 0.5s ease forwards;
  }
  @keyframes rotateYIn {
    from {
      transform: rotateX(90deg);
      opacity: 0;
    }
    to {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
</style>