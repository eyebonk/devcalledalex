<script setup lang="ts">
import type { EXPERIENCE_ITEM } from '@models/Experience.ts'
import { usePresets } from '@composables/usePresets.ts'

defineProps<{
  item: EXPERIENCE_ITEM
}>()

const { isGreenActive } = usePresets()
</script>

<template>
  <h3 class="tw-leading-tight">
    <component
      :is="item.link ? 'a' : 'span'"
      :href="item.link ? item.link : null"
      :target="item.link ? '_blank' : null"
      :title="item.link ? item.company : null"
      class="tw-outline-none"
      :class="
        isGreenActive
          ? 'tw-text-h3'
          : 'tw-text-pink hover:tw-text-blue focus:tw-text-blue'
      "
    >
      {{ item.role }}
    </component>
  </h3>
</template>
