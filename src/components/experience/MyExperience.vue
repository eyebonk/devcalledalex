<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'
import BaseHeader from '@components/BaseHeader.vue'
import { EXPERIENCE } from '@config/experience.ts'
import ItemImage from './ItemImage.vue'
import ItemTitle from './ItemTitle.vue'
import StackItem from './StackItem.vue'

const { isRetroActive } = usePresets()
</script>

<template>
  <div>
    <BaseHeader text="Experience" />

    <div
      class="tw-flex tw-flex-col"
      :class="isRetroActive ? 'tw-space-y-8' : 'tw-space-y-6'"
    >
      <div
        v-for="(item, index) in EXPERIENCE"
        :key="index"
        class="tw-flex tw-w-fit"
        :class="isRetroActive ? 'tw-space-x-6' : 'tw-space-x-4'"
      >
        <ItemImage :item="item" />

        <div class="tw-flex tw-flex-col tw-text-sm tw-space-y-4">
          <ItemTitle :item="item" :first="index === 0" />

          <div
            v-if="item.blurb"
            class="tw-mt-6 tw-content"
            v-html="item.blurb"
          />

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
