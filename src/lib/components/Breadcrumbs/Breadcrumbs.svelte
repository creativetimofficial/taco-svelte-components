<script>
  import { getRootClass, separator, list, getItemClass } from "./breadcrumbs";
  import { makeid } from "../../utils/generateID.js";

  export let items = [];
  export let divider = "/";
  export let fullWidth = false;
  export let id = makeid(7);
</script>

<nav
  {id}
  class="{getRootClass(fullWidth)} {$$props.class ? $$props.class : ''}"
>
  <ol class={list}>
    {#each items as item, index (index)}
      <li class={getItemClass(item.disabled)} disabled={item.disabled}>
        <a href="/{item.href}">
          {item.text}
        </a>
        {#if items.length - 1 !== index}
          <span class={separator}>{divider}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
