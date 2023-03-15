<script>
    import { getButtonStyling, inputClass, containerClass } from "./counter.js";
    import { variantStyle } from "../../utils/colors.js";
    import { makeid } from "../../utils/generateID.js";

    export let value = 0;
    export let color = "green";

    let uuid = makeid(7);

    function getButtonClass(color) {
        color = variantStyle.filled.hasOwnProperty(color) ? color : "green";

        const style = getButtonStyling(color);

        return style;
    }

    function counterUp() {
        value++;
    }

    function counterDown() {
        value--;
    }
</script>

<template>
    <div class={containerClass}>
        <button class={getButtonClass(color)} on:click={counterDown}>
            <span><strong> − </strong></span>
        </button>
        <input class={inputClass} type="number" id={uuid} bind:value readonly/>
        <button class={getButtonClass(color)} on:click={counterUp}>
            <span><strong> + </strong></span>
        </button>
    </div>
</template>
