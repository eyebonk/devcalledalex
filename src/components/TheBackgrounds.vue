<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'

const { isRetroActive, isGreenActive, isCodeActive } = usePresets()

const bgImage = computed(() => {
  if (isCodeActive.value)
    return 'images/codebg.png'

  if (isGreenActive.value)
    return 'images/screen-lines.png'

  if (isRetroActive.value)
    return 'images/retro.png'

  return ''
})

const bgStyles = computed(() => {
  if (isCodeActive.value)
    return 'tw-blur-sm tw-opacity-5 tw-filter tw-grayscale'

  if (isGreenActive.value)
    return 'tw-opacity-30 tw-animate-pulse'

  if (isRetroActive.value)
    return 'tw-opacity-40'

  return ''
})
</script>

<template>
  <div
    class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-z-1"
    :class="bgStyles"
    :style="`background-image: url(${bgImage})`"
  />

  <div
    v-if="isGreenActive"
    class="tw-h-2 tw-w-full tw-bg-green tw-absolute tw-top-0 tw-left-0 line"
  />
</template>

<style>
.line {
  animation: bar 40s ease infinite;
  filter: blur(30px);
}
@keyframes bar {
  0% {
    top: 0%;
  }
  100% {
    top: 100%;
  }
}
</style>
