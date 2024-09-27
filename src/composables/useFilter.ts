import { computed, ref } from 'vue'

const state = ref<string[]>([])

export function useFilter() {
  const activeFilters = computed(() => state.value)

  function addFilter(filter: string) {
    const index = state.value.indexOf(filter as string)
    if (index === -1)
      _addFilter(filter)
    else
      _removeFilter(index)
  }

  function isActive(item: string) {
    return state.value.includes(item as string)
  }

  function _addFilter(value: string) {
    state.value.push(value as string)
  }

  function _removeFilter(index: number) {
    state.value.splice(index, 1)
  }

  return {
    activeFilters,
    addFilter,
    isActive,
  }
}
