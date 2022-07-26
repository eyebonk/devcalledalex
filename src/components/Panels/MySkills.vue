<template>
  <div>
    <base-header text="Skills" />

    <!-- <div class="tw-content tw-mb-3">
      <p>
        This can be used as a filter to filter experience and project items.
      </p>
    </div> -->

    <div class="tw-flex tw-flex-wrap">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="tw-flex tw-items-center tw-border-2 tw-rounded-full tw-px-3 tw-h-8 tw-whitespace-nowrap tw-mr-2 tw-mb-3 tw-opacity-60 hover:tw-opacity-100"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import * as type from "@config";
import { computed } from "@vue/reactivity";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const items = computed(() => {
      const tempItems = [];
      for (const property in type) {
        if (type[property] !== type.BOOTSTRAP) {
          tempItems.push(type[property]);
        }
      }

      return tempItems;
    });
    return {
      items,
      type,
    };
  },
};
</script>
