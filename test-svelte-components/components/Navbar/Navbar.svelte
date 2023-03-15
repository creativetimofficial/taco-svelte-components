<script>
  import {
    getNavbarClass,
    containerClass,
    listClass,
    getItemClass,
    buttonToggleClass,
    navbarButton,
    spanClass,
    getIconClass,
    linksClass,
  } from "./navbar.js";
  import { variantStyle } from "@/utils/colors.js";
  import { makeid } from "@/utils/generateID.js";

  export let variant = "filled";
  export let color = "white";
  export let blurred = true;
  export let shadow = true;
  export let fullWidth = false;
  export let items = [];
  export let id = makeid(7);

  let show = false;

  const options = ["filled", "gradient"];

  function getClasses(variant, color, blurred, fullWidth, shadow) {
    color = variantStyle.filled.hasOwnProperty(color) ? color : "white";
    variant = options.includes(variant) ? variant : "filled";
    const style = getNavbarClass(variant, color, blurred, fullWidth, shadow);
    return `${style}`;
  }
</script>

<nav
  {id}
  class="{getClasses(variant, color, blurred, fullWidth, shadow)} {$$props.class
    ? $$props.class
    : ''}"
>
  <div class={containerClass}>
    <slot name="title" />
    <ul class="{listClass} {show ? '' : 'hidden'}">
      {#each items as item, index (index)}
        <li class={getItemClass(color)}>
          <a class={linksClass} href={item.href}>
            {#if item.icon}
            <span class="m-1">{@html item.icon}</span>
            {/if}
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
    <span class="{spanClass} {show ? '' : 'hidden'}">
      <slot name="button" />
    </span>

    <button
      on:click={() => {
        show = !show;
      }}
      class={buttonToggleClass}
      type="button"
    >
      {#if !show}
        <span class={navbarButton}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class={getIconClass(color)}
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          ></span
        >
      {:else}
        <span class={navbarButton}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class={getIconClass(color)}
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            /></svg
          ></span
        >
      {/if}
    </button>
  </div>
</nav>
