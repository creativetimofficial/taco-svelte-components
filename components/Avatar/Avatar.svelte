<script>
  import { getClass } from "./avatar.js";
  export let variant = "rounded";
  export let size = "md";
  export let src;

  const sizeOptions = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const variantOptions = ["rounded", "circular"];

  function getClasses(variant, size) {
    size = sizeOptions.includes(size) ? size : "md";
    variant = variantOptions.includes(variant) ? variant : "rounded";
    const style = getClass(variant, size);
    return `${style}`;
  }
</script>

<img
  alt="avatar"
  class="{getClasses(variant, size)} {$$props.class ? $$props.class : ''}"
  src={src ? src : "https://www.material-tailwind.com/img/face-2.jpg"}
/>
