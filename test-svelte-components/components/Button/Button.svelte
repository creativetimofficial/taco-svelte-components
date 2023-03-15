<script>
  import { getStyling } from "./button.js";
  import { variantStyle } from "@/utils/colors.js";
  import Ripple from "material-ripple-effects";
  import { forwardEventsBuilder } from "../forwardEvents";
  import { get_current_component } from "svelte/internal";
  import { makeid } from "@/utils/generateID.js";
  const self = get_current_component();

  const forwardEvents = forwardEventsBuilder(self);

  const rippleInit = new Ripple();

  export let variant = "filled";
  export let size = "md";
  export let color = "blue";
  export let fullWidth = false;
  export let ripple = false;
  export let id = makeid(7);

  function setRipple(e) {
    ripple == "light" || ripple == "dark" ? rippleInit.create(e, ripple) : null;
  }

  const variantOptions = ["filled", "gradient", "outlined", "text"];
  const sizeOptions = ["sm", "md", "lg"];

  function getClasses(variant, size, color, fullWidth) {
    size = sizeOptions.includes(size) ? size : "md";

    variant = variantOptions.includes(variant) ? variant : "filled";

    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";

    const valueFullWidth = fullWidth === true ? "w-full" : "";

    const style = getStyling(color, variant, size);

    return `${valueFullWidth} ${style}`;
  }
</script>

<button
  {id}
  class="{getClasses(variant, size, color, fullWidth)} {$$props.class
    ? $$props.class
    : ''}"
  use:forwardEvents
  on:click={(e) => setRipple(e)}
>
  <slot />
</button>
