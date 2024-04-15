<script setup lang="ts">
import { EXPERIENCE } from '@config/experience.ts'
import { useFilter } from '@composables/useFilter.ts'

defineProps<{
  item: string
  stackIndex: number
  index: number
}>()

const { stackClass } = useFilter()

function lastItem(index: number) {
  return EXPERIENCE[index].stack.length - 1
}
</script>

<template>
  <div
    class="tw-flex"
  >
    <span class="tw-flex tw-flex-nowrap tw-space-x-0">
      <span class="tw-whitespace-nowrap" :class="stackClass(item)">
        {{ item }}
      </span>
      <span v-if="stackIndex !== lastItem(index)">,</span>
        &nbsp;
    </span>
  </div>
</template>
