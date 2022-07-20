<template>
  <div>
    <base-header text="Projects" />

    <div class="tw-flex tw-flex-wrap">
      <a
        v-for="(item, index) in PROJECTS"
        :key="index"
        :href="item.link"
        target="_blank"
        class="tw-w-1/3 tw-px-4"
      >
        <div
          class="tw-h-20 tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center"
          :styles="`background-image: url(${item.image})`"
        />

        <h5>{{ item.title }}</h5>
        <p>{{ item.text }}</p>
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
