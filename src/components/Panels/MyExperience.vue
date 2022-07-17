<template>
  <div>
    <base-header text="Experience" />

    <div v-for="(item, index) in EXPERIENCE" :key="index">
      <div class="tw-h-10 tw-w-10">
        <img :src="item.icon" :alt="item.company" class="tw-h-full tw-w-full" />
      </div>

      <div class="tw-flex tw-flex-col">
        <span class="tw-text-pink">{{ item.role }}</span>
        <div class="tw-flex tw-flex-col tw-text-green tw-text-md">
          <span> {{ item.company }} | {{ item.type }} </span>
          <span> {{ item.date }} | 1 yr 6 mos | {{ item.country }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { EXPERIENCE } from "@config/experience.js";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    return {
      EXPERIENCE,
    };
  },
};
</script>
