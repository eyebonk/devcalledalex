<template>
  <div class="tw-flex tw-space-x-2.5">
    <a
      v-for="(item, index) in SOCIAL"
      :key="index"
      :href="item.link"
      :title="item.text"
      class="tw-h-8 tw-w-8 tw-text-h4 tw-rounded-global tw-flex tw-items-center tw-justify-center tw-text-black tw-filter hover:tw-saturate-200 focus:tw-saturate-200 tw-outline-none"
      :class="isPresetGreen ? 'tw-bg-green' : 'tw-bg-blue'"
      target="_blank"
    >
      <font-awesome-icon :icon="item.icon" />
    </a>
  </div>
</template>

<script>
import { SOCIAL } from "@config/social.js";
import { usePresets } from "@composables";

export default {
  setup() {
    const { isPresetGreen } = usePresets();

    return {
      isPresetGreen,
      SOCIAL,
    };
  },
};
</script>
