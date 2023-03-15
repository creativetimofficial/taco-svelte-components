<script>
  import { getContainerClass, getBarClass } from "./progress.js";
  import { variantStyle } from "@/utils/colors.js";
  import { makeid } from "@/utils/generateID.js";

  export let variant = "filled";
  export let color = "blue";
  export let value = 0;
  export let label = "";
  export let id = makeid(7);

  const options = ["filled", "gradient"];

  function getClasses(variant, color) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    variant = options.includes(variant) ? variant : "filled";
    const style = getBarClass(variant, color);
    return `${style}`;
  }
</script>

<div
  {id}
  class="{getContainerClass(label ? true : false)} {$$props.class
    ? $$props.class
    : ''}"
>
  <div class={getClasses(variant, color)} style={`width: ${value}%`}>
    {label ? value + "% " : ""}{label ? label : ""}
  </div>
</div>
