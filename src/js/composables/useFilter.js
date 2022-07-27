import { ref, computed } from "vue";

const state = ref([]);

export default function () {
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
    return index
      ? "tw-opacity-100 tw-text-yellow"
      : "tw-opacity-70 tw-text-green";
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
