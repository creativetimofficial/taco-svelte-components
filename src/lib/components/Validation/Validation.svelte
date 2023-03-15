<script>
  import { validationClass } from "./validation.js";
  import { makeid } from "../../utils/generateID.js";
  export let errors = "";
  export let id = makeid(7);
</script>

{#if errors && errors.length}
  <div {id} class="{validationClass} {$$props.class ? $$props.class : ''}">
    {errors}
  </div>
{/if}
