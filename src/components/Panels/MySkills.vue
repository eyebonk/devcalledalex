<template>
  <div>
    <BaseHeader text="Skills" />

    <div class="tw-content tw-mb-3">
      <p>
        This can be used as a filter to filter experience and project items.
      </p>
    </div>

    <div class="tw-flex tw-flex-wrap">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="tw-flex tw-items-center tw-whitespace-nowrap tw-mr-2 tw-mb-3 tw-outline-none"
        :class="[baseTagStyles, tagStyles(item)]"
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
import * as type from "@config";
import { computed } from "vue";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const { addFilter, isActive } = useFilter();
    const { isCodeActive, isRetroActive } = usePresets();

    const items = computed(() => {
      const tempItems = [];
      for (const property in type) {
        tempItems.push(type[property]);
      }

      return tempItems.sort((a, b) => a - b);
    });

    const baseTagStyles = computed(() => {
      if (isCodeActive.value) {
        return "tw-h-8 tw-px-3 tw-border-2 tw-rounded-full";
      }

      if (isRetroActive.value) {
        return "tw-h-12 tw-px-4 tw-bg-yellow tw-rounded-lg tw-font-heading tw-text-off-black tw-text-sm";
      }

      return "tw-h-8 tw-px-3 tw-bg-red-500";
    });

    function tagStyles(item) {
      if (isActive(item)) {
        if (isCodeActive.value) {
          return "tw-opacity-100 tw-border-yellow tw-text-yellow";
        }
        if (isRetroActive.value) {
          return "tw-opacity-100";
        }
        return "tw-opacity-100";
      }

      if (isCodeActive.value) {
        return "tw-opacity-60";
      }
      if (isRetroActive.value) {
        return "tw-opacity-60";
      }
      return "tw-bg-opacity-50";
    }

    return {
      baseTagStyles,
      addFilter,
      tagStyles,
      isActive,
      items,
    };
  },
};
</script>
