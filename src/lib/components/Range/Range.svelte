<script>
  import { labelClass, getInputClass } from "./range.js";
  import { makeid } from "@/utils/generateID.js";

  const uuid = makeid(7);

  export let label = "Range";
  export let size = "sm";
  export let disabled = false;
  export let value;
  export let min;
  export let max;
  export let step;
  export let id = makeid(7);

  function getClassBySize(size) {
    const validSize = ["sm", "md", "lg"];
    size = validSize.includes(size) ? size : "sm";
    const style = getInputClass(size);
    return `${style}`;
  }
</script>

<div {id} class={$$props.class ? $$props.class : ""}>
  <label for={uuid} class={labelClass}>{label}</label>
  <input
    id={uuid}
    type="range"
    {disabled}
    {min}
    {max}
    {step}
    bind:value
    class={getClassBySize(size)}
  />
</div>
