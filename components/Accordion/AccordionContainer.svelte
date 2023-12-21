<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let multiple = false;

  setContext("accordionMultiple", {
    selected: multiple ? undefined : writable(),
  });
</script>

<div class="w-full">
  <slot />
</div>
