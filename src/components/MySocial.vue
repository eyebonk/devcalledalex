<script setup lang="ts">
import { SOCIAL } from '@config/social.ts'
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'

const { isGreenActive, isRetroActive } = usePresets()

const buttonStyles = computed(() => {
  if (isRetroActive.value)
    return 'tw-h-10 tw-w-10 tw-bg-pink'

  if (isGreenActive.value)
    return 'tw-h-8 tw-w-8 tw-bg-green tw-opacity-70'

  return 'tw-h-8 tw-w-8 tw-bg-blue'
})
</script>

<template>
  <div
    class="tw-flex"
    :class="isRetroActive ? 'tw-space-x-1.5' : 'tw-space-x-2.5'"
  >
    <a
      v-for="(item, index) in SOCIAL"
      :key="index"
      :href="item.link"
      :title="item.text"
      class="tw-text-h4 tw-rounded-global tw-flex tw-items-center tw-justify-center tw-text-black tw-filter hover:tw-saturate-200 focus:tw-saturate-200 tw-outline-none"
      :class="buttonStyles"
      target="_blank"
    >
      <FontAwesomeIcon :icon="item.icon" />
    </a>
  </div>
</template>
