<script>
  import { getBodyClass } from "./dialog.js";

  export let divider = false;
</script>

<div class="{getBodyClass(divider)} {$$props.class ? $$props.class : ''}">
  <slot />
</div>
