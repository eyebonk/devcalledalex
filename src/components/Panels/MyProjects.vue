<template>
  <div>
    <base-header text="Projects" />

    <div class="tw-grid lg:tw-grid-cols-2 tw-gap-x-4 tw-gap-y-8">
      <a
        v-for="(item, index) in PROJECTS"
        :key="index"
        :href="item.link"
        target="_blank"
        class="tw-flex tw-items-center tw-space-x-4 tw-space-y-2 tw-group"
      >
        <div
          class="tw-h-28 sm:tw-h-40 tw-w-28 sm:tw-w-40 tw-rounded tw-overflow-hidden tw-flex-shrink-0"
        >
          <div
            role="img"
            class="tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center"
            :style="`background-image: url(${item.image})`"
          ></div>
        </div>

        <div>
          <h3
            class="tw-text-pink tw-leading-tight tw-filter group-hover:tw-saturate-200"
          >
            {{ item.title }}
          </h3>
          <p class="tw-opacity-80">{{ item.text }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { PROJECTS } from "@config/projects.js";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    return {
      PROJECTS,
    };
  },
};
</script>
