<template>
  <h2 class="tw-mb-3 tw-text-blue">
    <span v-if="isCodeActive">["</span>
    <span :class="isCodeActive ? 'tw-text-orange' : 'tw-text-green'">
      {{ text }}
    </span>
    <span v-if="isCodeActive">"]</span>
  </h2>
</template>

<script>
import { usePresets } from "@composables";

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { isCodeActive } = usePresets();

    return {
      isCodeActive,
    };
  },
};
</script>
