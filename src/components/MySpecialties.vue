<script setup lang="ts">
import { SKILLS } from '@config/about.ts'
import { usePresets } from '@composables/usePresets.ts'

const { isGreenActive, isTeletextActive } = usePresets()
</script>

<template>
  <div :class="{ 'tw-border-[8px] tw-border-red tw-p-6': isTeletextActive }">
    <p>
      Specialties:
      <span class="tw-space-x-2">
        <span
          v-for="(item, skillIndex) in SKILLS"
          :key="skillIndex"
          :class="isTeletextActive ? 'tw-text-yellow' : 'tw-text-green'"
        >
          <span v-if="skillIndex > 0" class="tw-text-off-white">/</span>
          {{ item }}
        </span>
      </span>

      <span
        v-if="isGreenActive"
        class="tw-ml-1 tw-w-5 tw-h-8 tw-bg-green tw-animate-pulse"
        style="animation-duration: 1s"
      >&nbsp;</span>
    </p>
  </div>
</template>
