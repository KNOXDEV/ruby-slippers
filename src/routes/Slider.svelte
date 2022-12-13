<script>
  export let title = "Question here?";
  export let name;
  export let value;
</script>

<div>
  <div class="mb-2 text-lg">
    {title}
  </div>
  <input {name} on:change type="range" class="range" min="1" max="5" step="1" bind:value={value} />
  <div class="w-full flex justify-between text-xs px-2">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
</div>