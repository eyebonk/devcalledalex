<template>
  <div class="tw-grid lg:tw-grid-cols-2 tw-gap-x-4 tw-gap-y-8">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tw-flex sm:tw-items-center tw-space-x-4"
    >
      <div
        class="tw-h-16 sm:tw-h-40 tw-w-16 sm:tw-w-40 tw-overflow-hidden tw-flex-shrink-0 tw-rounded-global"
      >
        <a
          :href="item.link"
          :title="item.title"
          target="_blank"
          tabindex="-1"
          class="tw-relative"
        >
          <pixel-image
            v-if="isPresetGreen"
            :image="item.image"
            class="tw-h-full tw-w-full tw-relative tw-filter tw-grayscale tw-opacity-70 tw-z-20"
          />

          <div
            v-else
            role="img"
            class="tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-relative tw-z-20"
            :style="`background-image: url(${item.image});`"
          ></div>

          <div
            v-if="isPresetGreen"
            class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-green tw-opacity-80 tw-z-10"
          ></div>
        </a>
      </div>

      <div class="tw-space-y-2">
        <h3 class="tw-leading-tight">
          <a
            :href="item.link"
            :title="item.title"
            target="_blank"
            class="tw-outline-none"
            :class="
              isPresetGreen
                ? 'tw-text-h3'
                : 'tw-text-pink hover:tw-text-blue focus:tw-text-blue'
            "
          >
            {{ item.title }}
          </a>
        </h3>

        <p class="tw-opacity-80">{{ item.text }}</p>

        <div class="tw-flex">
          <span
            v-for="(item, stackIndex) in item.stack"
            :key="stackIndex"
            class="tw-space-x-1"
          >
            <span v-if="stackIndex > 0">,</span>
            <span class="tw-whitespace-nowrap" :class="stackClass(item)">
              {{ item }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFilter, usePresets } from "@composables";
import PixelImage from "@components/PixelImage.vue";
import { toRefs } from "vue";

export default {
  components: {
    PixelImage,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { items } = toRefs(props);

    const { stackClass } = useFilter();
    const { isPresetGreen } = usePresets();

    function lastItem(index) {
      return items.value[index].stack.length - 1;
    }

    return {
      isPresetGreen,
      stackClass,
      lastItem,
    };
  },
};
</script>
