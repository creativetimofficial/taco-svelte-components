<script>
    import {
        getContainerStyling,
        imageContainerClass,
        imageClass,
        getButtonStyling,
        beltContainerClass,
        getBeltButtonStyling,
    } from "./carousel.js";
    import { variantStyle } from "@/utils/colors.js";

    export let images = [];
    export let color = "gray";
    export let colorActive = "blue";
    export let size = "md";

    const sizeOptions = ["sm", "md", "lg"];
    $: currentImageIndex = 0;

    function previousImage() {
        currentImageIndex =
            (currentImageIndex - 1 + images.length) % images.length;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function changeImage(index) {
        currentImageIndex = index;
    }

    function getContainerClasses(size) {
        size = sizeOptions.includes(size) ? size : "md";
        const style = getContainerStyling(size);

        return style;
    }

    function getButtonClasses(position, size) {
        size = sizeOptions.includes(size) ? size : "md";

        const style = getButtonStyling(position, size);
        return style;
    }

    function getBeltButtonClasses(index, color, colorActive, currentImageIndex) {
        const active = index === currentImageIndex ? "true" : "false";
        color = variantStyle.filled.hasOwnProperty(color) ? color : "gray";
        colorActive = variantStyle.filled.hasOwnProperty(colorActive)
            ? colorActive
            : "blue";

        const style = getBeltButtonStyling(active, color, colorActive);
        return style;
    }
</script>

<div class={getContainerClasses(size)}>
    <div class={imageContainerClass}>
        <img
            src={images[currentImageIndex]}
            alt="carousel"
            class={imageClass}
        />
        <button
            on:click={previousImage}
            class={getButtonClasses("left", size)}>←</button
        >
        <button
            on:click={nextImage}
            class={getButtonClasses("right", size)}>→</button
        >
    </div>
    <div class={beltContainerClass}>
        {#each images as image, index}
            <button
                on:click={() => changeImage(index)}
                class={getBeltButtonClasses(index, color, colorActive, currentImageIndex)}
            />
        {/each}
    </div>
</div>