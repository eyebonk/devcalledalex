import {
  TYPE_GREEN_SCREEN,
  TYPE_RETRO,
  COLOR_VARS,
  TYPE_CODE,
  PRESETS,
} from "@config/colors.js";
import { computed, ref } from "vue";

const type = ref("");

export default function () {
  const presetType = computed(() => type.value);
  const isCodeActive = computed(() => presetType.value === TYPE_CODE);
  const isGreenActive = computed(() => presetType.value === TYPE_GREEN_SCREEN);
  const isRetroActive = computed(() => presetType.value === TYPE_RETRO);

  function changePreset(preset) {
    type.value = preset.type;

    for (let [key, value] of Object.entries(preset.colors)) {
      _addStyle(key, value);
    }
  }

  function setDefaults() {
    _setColors();
    _setDefaultPreset();
  }

  function _setColors() {
    for (let [key, value] of Object.entries(COLOR_VARS)) {
      _addStyle(key, value);
    }
  }

  function _setDefaultPreset() {
    const DEFAULT_TYPE =
      PRESETS[Math.floor(Math.random() * PRESETS.length)].type;
    const index = PRESETS.findIndex((item) => item.type === DEFAULT_TYPE);
    changePreset(PRESETS[index]);
  }

  function _addStyle(key, value) {
    return document.documentElement.style.setProperty(key, value);
  }

  return {
    isRetroActive,
    isGreenActive,
    isCodeActive,
    changePreset,
    setDefaults,
    presetType,
  };
}
