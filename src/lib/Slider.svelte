<script>
  export let title = "Question here?";
</script>

<div>
  <div class="mb-2 text-lg">
    {title}
  </div>
  <input type="range" class="range" min="1" max="5" step="1" value="2" />
  <div class="w-full flex justify-between text-xs px-2">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
</div>