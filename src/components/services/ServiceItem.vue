<script setup lang="ts">
import PixelImage from '@components/PixelImage.vue'
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'

interface Service {
  title: string
  text: string
  icon: string
  svg: string
}

defineProps<{
  items: Service[]
}>()

const { isGreenActive, isTeletextActive } = usePresets()

const textStyle = computed(() => {
  if (isGreenActive.value)
    return 'tw-text-h3'
  if (isTeletextActive.value)
    return 'tw-h2 tw-text-off-white'

  return 'tw-text-pink'
})
</script>

<template>
  <div
    class="tw-flex tw-flex-col tw-space-y-10"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tw-flex tw-w-fit tw-space-x-6"
    >
      <div
        class="tw-shrink-0 tw-overflow-hidden tw-rounded-global tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16 tw-flex tw-items-center tw-justify-center tw-relative"
      >
        <PixelImage
          v-if="isGreenActive || isTeletextActive"
          :image="item.svg"
          class="tw-h-full tw-w-full tw-relative tw-z-20"
          :class="{ 'tw-grayscale tw-opacity-70': isGreenActive }"
        />

        <FontAwesomeIcon v-else :icon="item.icon" size="2x" />

        <div
          v-if="isGreenActive"
          class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-green tw-opacity-20 tw-z-10"
        />
      </div>

      <div class="tw-flex tw-flex-col tw-text-sm tw-space-y-1 tw-pt-1">
        <h3 class="tw-leading-tight">
          <span
            class="tw-outline-none"
            :class="textStyle"
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
    </div>
  </div>
</template>
