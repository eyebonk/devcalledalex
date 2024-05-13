<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'

defineProps<{
  text: string
}>()

const { isCodeActive, isTeletextActive } = usePresets()

const headerStyle = computed(() => {
  if (isCodeActive.value)
    return 'tw-text-orange'
  if (isTeletextActive.value)
    return 'tw-text-off-white'

  return 'tw-text-green'
})
</script>

<template>
  <h2 class="tw-mb-3 tw-text-blue" :class="isTeletextActive ? 'tw-teletext-h2' : 'tw-h2'">
    <span v-if="isCodeActive">["</span>
    <span :class="headerStyle">
      {{ text }}
    </span>
    <span v-if="isCodeActive">"]</span>
  </h2>
</template>
