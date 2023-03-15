import { variantStyle } from "@/utils/colors.js";

export function getClass(variant, color) {
  const structureClass = {
    base: "font-regular relative block w-full rounded-lg p-4 text-base leading-5 text-white opacity-100",
    variants: {
      filled: `${variantStyle[variant][color]}`,
      gradient: `${variantStyle[variant][color]}`,
    },
  };

  return `${structureClass.base} ${structureClass.variants[variant]}`;
}

export const dismissibleClass =
  "absolute top-3 right-3 w-max rounded-lg hover:bg-white hover:bg-opacity-20 transition-all";

export const iconClass = "absolute top-4 left-4";
