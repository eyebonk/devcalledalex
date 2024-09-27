<script setup lang="ts">
import { useFilter } from '../composables/useFilter'

defineProps<{
  item: string
  stackIndex: number
  index: number
}>()

const { addFilter, isActive } = useFilter()
</script>

<template>
  <div
    class="tw-flex"
  >
    <button
      class="tw-flex tw-items-center tw-whitespace-nowrap tw-space-x-0 tw-h-8 tw-px-4 tw-rounded-full"
      :class="isActive(item) ? 'tw-bg-green tw-bg-opacity-20 tw-text-green' : 'tw-bg-light-blue tw-bg-opacity-20 tw-text-light-blue'"
      @click="addFilter(item)"
    >
      {{ item }}
    </button>
  </div>
</template>
