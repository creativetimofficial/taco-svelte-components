<script>
  import { header } from "./dialog.js";
</script>

<div class="{header} {$$props.class ? $$props.class : ''}">
  <slot />
</div>
