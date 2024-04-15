<script setup lang="ts">
import PixelImage from '@components/PixelImage.vue'
import { usePresets } from '@composables/usePresets.ts'
import type { EXPERIENCE } from '@models/Experience.ts'

defineProps<{
  item: EXPERIENCE
}>()

const { isGreenActive, isRetroActive } = usePresets()
</script>

<template>
  <div
    class="tw-shrink-0 tw-overflow-hidden tw-rounded-global"
    :class="
      isRetroActive
        ? 'tw-h-20 sm:tw-h-28 tw-w-20 sm:tw-w-28'
        : 'tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16'
    "
  >
    <component
      :is="item.link ? 'a' : 'div'"
      :href="item.link ? item.link : null"
      :target="item.link ? '_blank' : null"
      :title="item.link ? item.company : null"
      :tabindex="item.link ? -1 : null"
      class="tw-relative"
    >
      <PixelImage
        v-if="isGreenActive"
        :image="item.icon"
        class="tw-h-full tw-w-full tw-relative tw-filter tw-grayscale tw-opacity-70 tw-z-20"
      />

      <img
        v-else
        :src="item.icon"
        :alt="item.company"
        class="tw-h-full tw-w-full tw-relative tw-rounded-global"
        :class="{ 'tw-border-4 tw-border-blue': isRetroActive }"
      >

      <div
        v-if="isGreenActive"
        class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-green tw-opacity-80 tw-z-10"
      />
    </component>
  </div>
</template>
