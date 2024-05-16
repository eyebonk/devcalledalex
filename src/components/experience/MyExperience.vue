<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'
import BaseHeader from '@components/BaseHeader.vue'
import { EXPERIENCE } from '@config/experience.ts'
import { computed } from 'vue'
import ItemImage from './ItemImage.vue'
import ItemContent from './ItemContent.vue'
import StackItem from './StackItem.vue'

const { isRetroActive, isTeletextActive } = usePresets()

const itemSpacing = computed(() => {
  if (isRetroActive.value)
    return 'tw-space-y-8'

  if (isTeletextActive.value)
    return 'tw-space-y-20'

  return 'tw-space-y-6'
})
</script>

<template>
  <div>
    <BaseHeader text="Experience" />

    <div
      class="tw-flex tw-flex-col"
      :class="itemSpacing"
    >
      <div
        v-for="(item, index) in EXPERIENCE"
        :key="index"
        class="tw-flex tw-w-full"
        :class="isRetroActive ? 'tw-space-x-6' : 'tw-space-x-4'"
      >
        <ItemImage :item="item" />

        <div class="tw-flex tw-flex-col tw-text-sm tw-flex-1 tw-space-y-4">
          <ItemContent :item="item" :first="index === 0" />

          <div class="tw-flex tw-flex-wrap tw-text-md">
            <StackItem
              v-for="(stack, stackIndex) in item.stack" :key="stackIndex"
              :item="stack"
              :index="index"
              :stack-index="stackIndex"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
