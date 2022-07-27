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
        class="tw-flex tw-items-center tw-px-3 tw-h-8 tw-whitespace-nowrap tw-mr-2 tw-mb-3 tw-outline-none"
        :class="[
          typeCode
            ? 'tw-border-2 tw-rounded-full focus:tw-opacity-80'
            : 'tw-bg-red-500 focus:tw-opacity-100',
          isActive(item)
            ? typeCode
              ? 'tw-opacity-100 tw-border-yellow tw-text-yellow'
              : 'tw-opacity-100'
            : typeCode
            ? 'tw-opacity-60'
            : 'tw-bg-opacity-50',
        ]"
        @click="addFilter(item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
import { useFilter, usePresets } from "@composables";
import BaseHeader from "@components/BaseHeader.vue";
import { TYPE_CODE } from "@config/colors.js";
import * as type from "@config";
import { computed } from "vue";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const { addFilter, activeFilters, isActive } = useFilter();
    const { presetType } = usePresets();

    const typeCode = computed(() => presetType.value === TYPE_CODE);

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
      typeCode,
      items,
      type,
    };
  },
};
</script>
