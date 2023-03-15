<script>
  import {
    getClass,
    getButtonClassChip,
    iconClass,
    dismissibleClass,
  } from "./chip.js";
  import { variantStyle } from "@/utils/colors.js";
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { makeid } from "@/utils/generateID.js";

  export let variant = "filled";
  export let color = "blue";
  export let show = true;
  export let dismissible = false;
  export let animation = { y: 0, duration: 0 };
  export let id = makeid(7);

  const emit = createEventDispatcher();

  function emitEvent() {
    emit("closed");
  }

  const options = ["filled", "gradient"];

  function getClasses(variant, color) {
    variant = options.includes(variant) ? variant : "filled";
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const style = getClass(variant, color);
    return `${style}`;
  }
  function getColorButton(color) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "blue";
    const style = getButtonClassChip(color);
    return `${style}`;
  }
</script>

{#if show}
  <div
    {id}
    class="{getClasses(variant, color)} {$$props.class ? $$props.class : ''}"
    transition:fly={animation ? animation : { y: 0, duration: 0 }}
  >
    {#if $$slots.icon}
      <span class={iconClass}>
        <slot name="icon" />
      </span>
    {/if}
    <div
      class="{$$slots.icon ? 'ml-4' : null} {$$slots.icon || dismissible
        ? 'mt-px'
        : null} {dismissible ? 'mr-5' : null} font-bold"
    >
      <slot />
    </div>
    {#if dismissible}
      <div
        class="{getColorButton(color)} {dismissibleClass}"
        on:click={emitEvent}
      >
        <div role="button" class="w-5 h-5 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    {/if}
  </div>
{/if}
