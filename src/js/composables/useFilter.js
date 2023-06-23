import { usePresets } from "@composables";
import { ref, computed } from "vue";

const state = ref([]);

export default function () {
  const { isGreenActive } = usePresets();
  const activeFilters = computed(() => state.value);

  function addFilter(filter) {
    const index = state.value.indexOf(filter);
    if (index === -1) {
      _addFilter(filter);
    } else {
      _removeFilter(index);
    }
  }

  function isActive(item) {
    return state.value.indexOf(item) !== -1;
  }

  function stackClass(item) {
    const index = state.value.indexOf(item) !== -1;

    if (isGreenActive.value) {
      return index
        ? "tw-bg-red-500 tw-bg-opacity-50"
        : "tw-opacity-70 tw-text-green";
    } else {
      return index
        ? "tw-opacity-100 tw-text-yellow"
        : "tw-opacity-70 tw-text-green";
    }
  }

  function _addFilter(value) {
    state.value.push(value);
  }

  function _removeFilter(index) {
    state.value.splice(index, 1);
  }

  return {
    activeFilters,
    stackClass,
    addFilter,
    isActive,
  };
}
