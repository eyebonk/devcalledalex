<template>
  <div class="tw-flex tw-space-x-2.5">
    <a
      v-for="(item, index) in SOCIAL"
      :key="index"
      :href="item.link"
      :title="item.text"
      class="tw-h-8 tw-w-8 tw-text-h4 tw-rounded tw-flex tw-items-center tw-justify-center tw-bg-blue tw-text-black tw-filter hover:tw-saturate-200"
      target="_blank"
    >
      <font-awesome-icon :icon="item.icon" />
    </a>
  </div>
</template>

<script>
import { SOCIAL } from "@config/social.js";

export default {
  setup() {
    return {
      SOCIAL,
    };
  },
};
</script>
