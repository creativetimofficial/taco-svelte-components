<script>
  import { body } from "./card";
</script>

<div class="{body} {$$props.class ? $$props.class : ''}">
  <slot />
</div>
