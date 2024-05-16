<script setup lang="ts">
import { useFilter } from '@composables/useFilter.ts'
import { usePresets } from '@composables/usePresets.ts'
import BaseHeader from '@components/BaseHeader.vue'
import * as type from '@config'
import { computed } from 'vue'

const { addFilter, isActive } = useFilter()
const { isCodeActive, isRetroActive, isTeletextActive } = usePresets()

const items = computed(() => {
  const tempItems = []
  for (const property in type)
    tempItems.push(type[property])

  return tempItems.sort((a, b) => a - b)
})

const baseTagStyles = computed(() => {
  if (isCodeActive.value)
    return 'tw-h-8 tw-px-3 tw-border-2 tw-rounded-full'

  if (isRetroActive.value)
    return 'tw-h-12 tw-px-4 tw-bg-yellow tw-rounded-lg tw-font-heading tw-text-off-black tw-text-sm'

  if (isTeletextActive.value)
    return 'tw-px-1'

  return 'tw-h-8 tw-px-3 tw-bg-green tw-text-black'
})

function tagStyles(item: string) {
  if (isActive(item)) {
    if (isCodeActive.value)
      return 'tw-opacity-100 tw-border-yellow tw-text-yellow'

    if (isRetroActive.value)
      return 'tw-text-green'

    if (isTeletextActive.value)
      return 'tw-text-red'

    return 'tw-opacity-100'
  }

  if (isCodeActive.value)
    return 'tw-opacity-60'

  if (isTeletextActive.value)
    return 'tw-text-green'

  return 'tw-opacity-50'
}
</script>

<template>
  <div :class="{ 'tw--top-10 tw-p-10 tw-relative': isTeletextActive }">
    <BaseHeader text="Skills" :class="{ 'tw-bg-black tw-inline-flex tw-px-4 tw-relative tw-z-10': isTeletextActive }" />

    <div class="tw-content tw-mb-3">
      <p>
        This can be used as a filter to filter experience and project items.
      </p>
    </div>

    <div class="tw-flex tw-flex-wrap">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="tw-flex tw-items-center tw-whitespace-nowrap tw-mr-2 tw-mb-3 tw-outline-none"
        :class="[baseTagStyles, tagStyles(item)]"
        @click="addFilter(item)"
      >
        {{ item }}
      </button>
    </div>

    <div v-if="isTeletextActive" class="tw-absolute tw-top-20 tw-left-0 border-height tw-w-full tw-border-[8px] tw-border-blue tw-z-0 tw-pointer-events-none" />
  </div>
</template>

<style>
  .border-height {
    height: calc(100% - 4rem)
  }
</style>
