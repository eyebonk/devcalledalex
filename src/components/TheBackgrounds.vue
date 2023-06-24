<template>
  <div
    class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-z-1"
    :class="bgStyles"
    :style="`background-image: url(${bgImage})`"
  ></div>
</template>

<script>
import { usePresets } from "@composables";
import { computed } from "vue";

export default {
  setup() {
    const { isRetroActive, isGreenActive, isCodeActive } = usePresets();

    const bgImage = computed(() => {
      if (isCodeActive.value) {
        return "images/codebg.jpg";
      }
      if (isGreenActive.value) {
        return "images/screen-lines.png";
      }
      if (isRetroActive.value) {
        return "images/retro.jpg";
      }
      return "";
    });

    const bgStyles = computed(() => {
      if (isCodeActive.value) {
        return "tw-blur-sm tw-opacity-5 tw-filter tw-grayscale";
      }
      if (isGreenActive.value) {
        return "tw-opacity-30 tw-animate-pulse";
      }
      if (isRetroActive.value) {
        return "tw-opacity-40";
      }
      return "";
    });

    return {
      bgStyles,
      bgImage,
    };
  },
};
</script>
