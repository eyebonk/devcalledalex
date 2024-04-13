import {
  COLOR_VARS,
  PRESETS,
  TYPE_CODE,
  TYPE_GREEN_SCREEN,
  TYPE_RETRO,
} from '@config/colors.js'
import { computed, ref } from 'vue'

interface COLORS {
  '--font': string
  '--heading': string
  '--heading-spacing': string
  '--font-size': string
  '--radius': string
  'line-height': string
  'color': string
  'background': string
  '--off-black': string
  '--off-white': string
  '--pink': string
  '--blue': string
  '--green': string
  '--yellow': string
  '--orange': string
}
interface PRESET {
  type: string
  icon: string
  colors: COLORS
}

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
    const randomPreset = PRESETS[index]
    console.log('randomPreset ', randomPreset)
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
