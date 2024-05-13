<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'
import PixelImage from '@components/PixelImage.vue'

interface Referal {
  title: string
  text: string
  image: string
  link: string
}

defineProps<{
  items: Referal[]
}>()

const { isGreenActive, isTeletextActive } = usePresets()
</script>

<template>
  <div
    class="tw-flex tw-flex-col tw-space-y-10"
  >
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.link"
      class="tw-flex tw-w-fit tw-space-x-6"
      target="_blank"
    >
      <div
        class="tw-shrink-0 tw-overflow-hidden tw-rounded-global tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16 tw-flex tw-items-center tw-justify-center tw-relative"
      >
        <PixelImage
          v-if="isGreenActive || isTeletextActive"
          :image="item.image"
          class="tw-h-full tw-w-full tw-relative tw-filter tw-z-20"
          :class="{ 'tw-grayscale tw-opacity-70': isGreenActive }"
        />

        <img v-else :src="item.image" :alt="item.text">

        <div
          v-if="isGreenActive"
          class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-green tw-opacity-80 tw-z-10"
        />
      </div>

      <div class="tw-flex tw-flex-col tw-text-sm tw-space-y-1 tw-pt-1">
        <h3 class="tw-leading-tight">
          <span
            class="tw-outline-none"
            :class="
              isGreenActive
                ? 'tw-text-h3'
                : 'tw-text-pink'
            "
          >
            {{ item.title }}
          </span>
        </h3>

        <div
          v-if="item.text"
          class="tw-mt-6 tw-content"
          v-html="item.text"
        />
      </div>
    </a>
  </div>
</template>
