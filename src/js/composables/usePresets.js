import { PRESET_CODE, COLOR_VARS } from "@config/colors.js";
import { computed, ref } from "vue";

const type = ref("");

export default function () {
  const presetType = computed(() => type.value);

  function changePreset(preset) {
    console.log("preset ", preset);
    for (let [key, value] of Object.entries(preset)) {
      console.log("sss ", key, value);
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
    setDefaults,
    changePreset,
    presetType,
  };
}
