<script setup lang="ts">
import PixelImage from '@components/PixelImage.vue'
import { usePresets } from '@composables/usePresets.ts'

interface Service {
  title: string
  text: string
  image: string
}

defineProps<{
  items: Service[]
}>()

const { isGreenActive } = usePresets()
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
        class="tw-shrink-0 tw-overflow-hidden tw-rounded-global tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16 tw-flex tw-items-center tw-justify-center"
      >
        <FontAwesomeIcon :icon="item.icon" size="2x" />
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
    </div>
  </div>
</template>
