<script setup lang="ts">
import type { EXPERIENCE_ITEM } from '@models/Experience.ts'
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

const props = defineProps<{
  item: EXPERIENCE_ITEM
  first: boolean
}>()

const { isGreenActive } = usePresets()

const title = computed(() => props.first ? props.item.company : props.item.role)
const company = computed(() => props.first ? props.item.role : props.item.company)

function getDate(dateFrom: string, dateTo: string | null) {
  const formatFrom = dayjs(dateFrom)
  const formatTo = dayjs(dateTo)

  const MONTHS_IN_YEAR = 12
  const current = formatTo ? dayjs(formatTo) : dayjs()
  const monthDiff = current.diff(formatFrom, 'month')
  const yearSince = current.diff(formatFrom, 'year')

  const miyTimesYears = MONTHS_IN_YEAR * yearSince
  const monthSince = monthDiff - miyTimesYears

  return {
    dateRange: _formatDateTo(formatFrom, formatTo),
    timeSince: _formatTimeSince(yearSince, monthSince),
  }
}

function _formatDateTo(from: Dayjs, to: Dayjs) {
  const toTemp = to.isValid() ? dayjs(to).format('MMM YYYY') : 'present'
  return `${dayjs(from).format('MMM YYYY')} - ${toTemp}`
}

function _formatTimeSince(year: number, month: number) {
  if (!Number.isNaN(year) && !Number.isNaN(month)) {
    const yearTxt = year === 0 ? '' : _plural(year)
    const monthTxt = month === 0 ? '' : _plural(month, 'mo')

    return `${yearTxt} ${monthTxt}`
  }
  else { return null }
}

function _plural(date: number, type = 'yr') {
  return date > 1 ? `${date} ${type}s` : `${date} ${type}`
}
</script>

<template>
  <h3 class="tw-leading-tight">
    <component
      :is="item.link ? 'a' : 'span'"
      :href="item.link ? item.link : null"
      :target="item.link ? '_blank' : null"
      :title="item.link ? item.company : null"
      class="tw-outline-none"
      :class="
        isGreenActive
          ? 'tw-text-h3'
          : 'tw-text-pink hover:tw-text-blue focus:tw-text-blue'
      "
    >
      {{ title }}
    </component>
  </h3>

  <div class="tw-flex tw-flex-col tw-opacity-80 tw-text-md">
    <span> {{ company }} | {{ item.type }} </span>

    <span class="tw-space-x-4 tw-opacity-80">
      <span v-for="(date, dateIndex) in getDate(item.dateFrom, item.dateTo)" :key="dateIndex">
        {{ date }}
      </span>
    </span>
  </div>
</template>
