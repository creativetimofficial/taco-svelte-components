<script>
  import { variantStyle } from "../../utils/colors.js";
  import { getContainerClass } from "./card";
  export let variant = "filled";
  export let color = "white";
  export let shadow = false;

  const options = ["filled", "gradient"];

  function getClasses(variant, color, shadow) {
    variant = options.includes(variant) ? variant : "filled";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const style = getContainerClass(shadow, color, variant);
    return `${style}`;
  }
</script>

<div
  class="{getClasses(variant, color, shadow)} {$$props.class
    ? $$props.class
    : ''}"
>
  <slot />
</div>
