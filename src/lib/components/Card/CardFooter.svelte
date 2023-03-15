<script>
  import { getFooterClass } from "./card";

  export let divider = false;

  function getClasses(divider) {
    const style = getFooterClass(divider);
    return `${style}`;
  }
</script>

<div class="{getClasses(divider)} {$$props.class ? $$props.class : ''}">
  <slot />
</div>
