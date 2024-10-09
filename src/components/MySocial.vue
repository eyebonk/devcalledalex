<script setup lang="ts">
import { SOCIAL } from '../config/social.ts'

defineProps<{
  stack?: boolean
}>()
</script>

<template>
  <div
    class="tw-flex tw-gap-1"
    :class="stack ? 'tw-flex-col' : 'tw-justify-center'"
  >
    <a
      v-for="(item, index) in SOCIAL"
      :key="index"
      :href="item.link"
      :title="item.text"
      class="tw-h-8 tw-aspect-square tw-shrink-0 tw-text-xl tw-flex tw-items-center tw-justify-center tw-filter hover:tw-text-green focus:tw-text-green tw-outline-none tw-no-underline tw-relative tw-group tw-transition"
      target="_blank"
    >
      <FontAwesomeIcon :icon="item.icon" />

      <div
        class="tw-absolute tw-mx-auto tw-transform tw-text-center tw-text-xs tw-flex tw-items-center tw-justify-center tw-z-10 tw-transition tw-opacity-0 group-hover:tw-opacity-100"
        :class="[
          stack ? 'tw--translate-x-full tw-top-1 tw--left-1' : 'tw-bottom-10 tw-left-4 tw--translate-x-1/2 tw-w-32',
        ]"
      >
        <div
          class="tw-whitespace-nowrap tw-bg-light-blue tw-text-black tw-rounded tw-py-1.5 tw-px-3"
        >
          {{ item.text }}
        </div>

        <div
          class="tw-absolute tw-mx-auto tw-w-0 tw-h-0 tw-border-l-[6px] tw-border-l-transparent tw-border-t-[8px] tw-border-t-light-blue tw-border-r-[6px] tw-border-r-transparent"
          :class="stack ? 'tw--right-2 tw-transform -tw-rotate-90' : 'tw-top-7 tw-left-0 tw-right-0'"
        />
      </div>
    </a>
  </div>
</template>
