import {
  TYPE_GREEN_SCREEN,
  TYPE_CEEFAX,
  PRESET_CODE,
  COLOR_VARS,
  TYPE_CODE,
} from "@config/colors.js";
import { computed, ref } from "vue";

const type = ref("");

export default function () {
  const presetType = computed(() => type.value);
  const isCodeActive = computed(() => presetType.value === TYPE_CODE);
  const isGreenActive = computed(() => presetType.value === TYPE_GREEN_SCREEN);
  const isCeefaxActive = computed(() => presetType.value === TYPE_CEEFAX);

  function changePreset(preset) {
    for (let [key, value] of Object.entries(preset)) {
      if (key === "type") {
        _addType(value);
      } else {
        _addStyle(key, value);
      }
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
    changePreset(PRESET_CODE);
  }

  function _addStyle(key, value) {
    return document.documentElement.style.setProperty(key, value);
  }

  function _addType(value) {
    type.value = value;
  }

  return {
    isCeefaxActive,
    isGreenActive,
    isCodeActive,
    changePreset,
    setDefaults,
    presetType,
  };
}
