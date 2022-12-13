<script lang="ts">
  import Slider from "./Slider.svelte";
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  function sliderChanged() {
    const params = new URLSearchParams();
    data.questions.forEach(({ name, value }) => params.set(name, value));
    goto(`?${params.toString()}`);
  }

</script>

<div class="flex flex-col w-full lg:flex-row">
  <div class="grid flex-grow">
    <div class="flex flex-col gap-y-5 mx-5">
      <div class="text-xl font-bold">How important to you are the following?</div>
      {#each data.questions as question}
        <Slider {...question} bind:value={question.value} on:change={sliderChanged} />
      {/each}
    </div>
  </div>
  <div class="grid flex-grow">
    {#each data.cities as city}
      <h1>{city.name}</h1>
    {/each}
  </div>
</div>
