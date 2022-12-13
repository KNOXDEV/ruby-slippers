<script>
  import Slider from "$lib/Slider.svelte";

  let questions = [
    {
      title: "Cost of Living"
    },
    {
      title: "Younger Population"
    }
  ];

</script>

<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow">
    <div class="flex flex-col gap-y-5 mx-5">
      <div class="text-xl font-bold">How important to you are the following?</div>
      {#each questions as question}
        <Slider {...question} />
      {/each}
    </div>
  </div>
  <div class="grid flex-grow">search</div>
  <div class="grid flex-grow">highlighted result</div>
</div>
