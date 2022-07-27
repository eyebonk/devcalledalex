<template>
  <h2 class="tw-heading">
    <span v-if="typeCode">["</span>
    <span :class="typeCode ? 'tw-text-orange' : 'tw-text-green'">
      {{ text }}
    </span>
    <span v-if="typeCode">"]</span>
  </h2>
</template>

<script>
import { TYPE_CODE } from "@config/colors.js";
import { usePresets } from "@composables";
import { computed } from "vue";

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { presetType } = usePresets();

    const typeCode = computed(() => presetType.value === TYPE_CODE);

    return {
      typeCode,
    };
  },
};
</script>
