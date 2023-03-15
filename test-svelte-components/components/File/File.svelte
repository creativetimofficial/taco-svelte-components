<script>
  import { fileClass } from "./file.js";
  import { makeid } from "@/utils/generateID.js";

  const uuid = makeid(7);
</script>

<input
  class="{fileClass} {$$props.class ? $$props.class : ''}"
  id={uuid}
  type="file"
/>
