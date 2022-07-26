<template>
  <div>
    <base-header text="Skills" />

    <div class="tw-content tw-mb-3">
      <p>
        This can be used as a filter to filter experience and project items.
      </p>
    </div>

    <div class="tw-flex tw-flex-wrap">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="tw-flex tw-items-center tw-border-2 tw-rounded-full tw-px-3 tw-h-8 tw-whitespace-nowrap tw-mr-2 tw-mb-3 focus:tw-opacity-80 tw-outline-none"
        :class="
          isActive(item)
            ? 'tw-opacity-100 tw-border-yellow tw-text-yellow '
            : 'tw-opacity-60'
        "
        @click="addFilter(item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { useFilter } from "@composables";
import * as type from "@config";
import { computed } from "vue";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const { addFilter, activeFilters, isActive } = useFilter();

    const items = computed(() => {
      const tempItems = [];
      for (const property in type) {
        tempItems.push(type[property]);
      }

      return tempItems.sort((a, b) => a - b);
    });
    return {
      activeFilters,
      addFilter,
      isActive,
      items,
      type,
    };
  },
};
</script>
