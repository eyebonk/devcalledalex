<script setup lang="ts">
import { PRESETS } from '@config/colors'
import { usePresets } from '@composables/usePresets.ts'

const {
  isRetroActive,
  changePreset,
  presetType,
} = usePresets()

function isActive(type: string) {
  return type === presetType.value ? 'tw-bg-pink' : 'tw-bg-green'
}
</script>

<template>
  <div
    class="tw-fixed tw-bottom-2 tw-right-2 tw-p-2 tw-flex tw-flex-col tw-space-y-2 tw-z-50"
  >
    <button
      v-for="(item, index) in PRESETS"
      :key="index"
      class="tw-h-8 tw-w-8 tw-rounded-lg tw-text-sm tw-text-off-black"
      :class="isActive(item.type)"
      @click="changePreset(item)"
    >
      <FontAwesomeIcon :icon="item.icon" />
    </button>
  </div>

  <div v-if="isRetroActive" class="tw-text-sm tw-opacity-0">
    <a
      href="https://www.freepik.com/free-vector/retro-futuristic-landscape-background-with-sun_5072279.htm#query=80s%20background&position=0&from_view=keyword&track=ais"
    >
      Image by pikisuperstar</a>
    on Freepik
  </div>
</template>
