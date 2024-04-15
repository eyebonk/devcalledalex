<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'

defineProps<{
  text: string
}>()

const { isCodeActive } = usePresets()
</script>

<template>
  <h2 class="tw-mb-3 tw-text-blue">
    <span v-if="isCodeActive">["</span>
    <span :class="isCodeActive ? 'tw-text-orange' : 'tw-text-green'">
      {{ text }}
    </span>
    <span v-if="isCodeActive">"]</span>
  </h2>
</template>
