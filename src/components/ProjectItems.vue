<template>
  <div class="tw-grid lg:tw-grid-cols-2 tw-gap-x-4 tw-gap-y-8">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tw-flex sm:tw-items-center tw-space-x-4 tw-group"
    >
      <div
        class="tw-h-16 sm:tw-h-40 tw-w-16 sm:tw-w-40 tw-rounded tw-overflow-hidden tw-flex-shrink-0"
      >
        <a :href="item.link" :title="item.title" target="_blank">
          <div
            role="img"
            class="tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center"
            :style="`background-image: url(${item.image})`"
          ></div>
        </a>
      </div>

      <div class="tw-space-y-2">
        <h3
          class="tw-text-pink tw-leading-tight tw-filter group-hover:tw-saturate-200"
        >
          <a :href="item.link" :title="item.title" target="_blank">
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
            <span class="tw-text-green">{{ item }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { items } = toRefs(props);
    function lastItem(index) {
      return items.value[index].stack.length - 1;
    }

    return {
      lastItem,
    };
  },
};
</script>
