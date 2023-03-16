<script>
  import { variantStyle } from "../../utils/colors.js";
  import { getHeaderClass } from "./card";
  export let variant = "filled";
  export let color = "blue";
  export let shadow = false;
  export let floated = false;

  const options = ["filled", "gradient"];

  function getClasses(variant, color, floated) {
    variant = options.includes(variant) ? variant : "filled";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const style = getHeaderClass(color, variant, shadow, floated);
    return `${style}`;
  }
</script>

<div
  class="{getClasses(variant, color, floated)} {$$props.class
    ? $$props.class
    : ''}"
>
  <slot />
</div>
