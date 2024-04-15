<script setup lang="ts">
import { useFilter } from '@composables/useFilter.ts'
import { usePresets } from '@composables/usePresets.ts'
import PixelImage from '@components/PixelImage.vue'

interface Projects {
  title: string
  text: string
  link: string
  image: string
  stack: string[]
}

defineProps<{
  items: Projects[]
}>()

const { stackClass } = useFilter()
const { isGreenActive, isRetroActive } = usePresets()
</script>

<template>
  <div class="tw-grid lg:tw-grid-cols-2 tw-gap-x-4 tw-gap-y-8">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tw-flex"
      :class="isRetroActive ? 'tw-space-x-6' : 'tw-space-x-4'"
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
          <PixelImage
            v-if="isGreenActive"
            :image="item.image"
            class="tw-h-full tw-w-full tw-relative tw-filter tw-grayscale tw-opacity-70 tw-z-20"
          />

          <div
            v-else
            role="img"
            class="tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-relative tw-z-20 tw-rounded-global"
            :class="{ 'tw-border-4 tw-border-blue': isRetroActive }"
            :style="`background-image: url(${item.image});`"
          />

          <div
            v-if="isGreenActive"
            class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-green tw-opacity-80 tw-z-10"
          />
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
              isGreenActive
                ? 'tw-text-h3'
                : 'tw-text-pink hover:tw-text-blue focus:tw-text-blue'
            "
          >
            {{ item.title }}
          </a>
        </h3>

        <p class="tw-opacity-80">
          {{ item.text }}
        </p>

        <div class="tw-flex">
          <span
            v-for="(stack, stackIndex) in item.stack"
            :key="stackIndex"
            class="tw-space-x-1"
          >
            <span v-if="stackIndex > 0">,</span>
            <span class="tw-whitespace-nowrap" :class="stackClass(stack)">
              {{ stack }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
