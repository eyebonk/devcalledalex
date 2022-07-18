<template>
  <div class="tw-bg-off-black tw-text-off-white">
    <base-header text="Social" />

    <div class="tw-flex tw-space-x-2">
      <a
        v-for="(item, index) in SOCIAL"
        :key="index"
        :href="item.link"
        :title="item.text"
        class="tw-h-8 tw-w-8 tw-rounded tw-flex tw-items-center tw-justify-center tw-bg-orange"
        target="_blank"
      >
        <font-awesome-icon :icon="item.icon" />
      </a>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { SOCIAL } from "@config/social.js";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    return {
      SOCIAL,
    };
  },
};
</script>
