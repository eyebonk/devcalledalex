import {
  COLOR_VARS,
  PRESETS,
  TYPE_CODE,
  TYPE_GREEN_SCREEN,
  TYPE_RETRO,
} from '@config/colors.ts'
import { computed, ref } from 'vue'
import type { PRESET } from '@models/Preset.ts'

const type = ref('')

export function usePresets() {
  const presetType = computed(() => type.value)
  const isCodeActive = computed(() => presetType.value === TYPE_CODE)
  const isGreenActive = computed(() => presetType.value === TYPE_GREEN_SCREEN)
  const isRetroActive = computed(() => presetType.value === TYPE_RETRO)

  function changePreset(preset: PRESET) {
    type.value = preset.type

    for (const [key, value] of Object.entries(preset.colors))
      _addStyle(key, value)
  }

  function setDefaults() {
    setColors()
    setDefaultPreset()
  }

  function setColors() {
    for (const [key, value] of Object.entries(COLOR_VARS))
      _addStyle(key, value)
  }

  function setDefaultPreset() {
    const DEFAULT_TYPE
      = PRESETS[Math.floor(Math.random() * PRESETS.length)].type
    const index = PRESETS.findIndex(item => item.type === DEFAULT_TYPE)
    const randomPreset: PRESET = PRESETS[index]
    changePreset(randomPreset)
  }

  function _addStyle(key: string, value: string) {
    return document.documentElement.style.setProperty(key, value)
  }

  return {
    isRetroActive,
    isGreenActive,
    isCodeActive,
    changePreset,
    setDefaults,
    presetType,
  }
}
