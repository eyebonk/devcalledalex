import { usePresets } from '@composables/usePresets.ts'
import { computed, ref } from 'vue'

export function useFilter() {
  const state = ref<string[]>([])

  const { isGreenActive } = usePresets()
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

  function stackClass(item) {
    console.log('stackClass ', item)
    const index = state.value.includes(item as string)

    if (isGreenActive.value) {
      return index
        ? 'tw-bg-red-500 tw-bg-opacity-50'
        : 'tw-opacity-70 tw-text-green'
    }
    else {
      return index
        ? 'tw-opacity-100 tw-text-yellow'
        : 'tw-opacity-70 tw-text-green'
    }
  }

  function _addFilter(value: string) {
    state.value.push(value as string)
  }

  function _removeFilter(index: number) {
    state.value.splice(index, 1)
  }

  return {
    activeFilters,
    stackClass,
    addFilter,
    isActive,
  }
}
