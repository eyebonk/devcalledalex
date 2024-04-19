<script setup lang="ts">
import type { EXPERIENCE_ITEM } from '@models/Experience.ts'
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  item: EXPERIENCE_ITEM
  first: boolean
}>()

const { isGreenActive, isRetroActive } = usePresets()

const MONTHS_IN_YEAR = 12
const hasMultiPosition = computed(() => props.item.positions.length > 1)

function dateDiff(dateFrom: string, dateTo: string | null) {
  const formatFrom = dayjs(dateFrom)
  const formatTo = dayjs(dateTo)

  const current = formatTo ? dayjs(formatTo) : dayjs()
  const monthDiff = current.diff(formatFrom, 'month')
  const yearSince = current.diff(formatFrom, 'year')

  const miyTimesYears = MONTHS_IN_YEAR * yearSince
  const monthSince = monthDiff - miyTimesYears

  return {
    formatFrom,
    formatTo,
    yearSince,
    monthSince,
  }
}

function getDate(dateFrom: string, dateTo: string | null) {
  const { formatFrom, formatTo, yearSince, monthSince } = dateDiff(dateFrom, dateTo)

  return {
    dateRange: _formatDateTo(formatFrom, formatTo),
    timeSince: _formatTimeSince(yearSince, monthSince),
  }
}

function getTotalDate() {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  const todaysDate = `${mm}-${dd}-${yyyy}`
  const positionsCount = props.item.positions.length - 1
  const dateFrom = props.item.positions[positionsCount].dateFrom
  const dateTo = props.item.positions[0].dateTo ? props.item.positions[0].dateTo : todaysDate

  const { yearSince, monthSince } = dateDiff(dateFrom, dateTo)
  return _formatTimeSince(yearSince, monthSince)
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
  <div>
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
        {{ hasMultiPosition ? item.company : item.positions[0].role }}
      </component>
    </h3>

    <div class="tw-flex tw-flex-col tw-opacity-80 tw-text-md">
      <template v-if="hasMultiPosition">
        <span> {{ item.type }} |{{ getTotalDate() }}  </span>
        <span class="tw-opacity-80">{{ item.country }} | {{ item.attendance }}</span>
      </template>

      <template v-else>
        <span> {{ item.company }} | {{ item.type }} </span>
        <span class="tw-space-x-4 tw-opacity-80">
          <span v-for="(date, dateIndex) in getDate(item.positions[0].dateFrom, item.positions[0].dateTo)" :key="dateIndex">
            {{ date }}
          </span>
        </span>
        <span class="tw-opacity-80">{{ item.country }}</span>

        <div
          v-if="item.positions[0].blurb"
          class="tw-mt-6 tw-content"
          v-html="item.positions[0].blurb"
        />
      </template>
    </div>

    <div v-if="hasMultiPosition" class="tw-space-y-10" :class="isRetroActive ? 'tw-mt-14' : 'tw-mt-4'">
      <div v-for="(position, index) in item.positions" :key="index" class="tw-flex tw-flex-col tw-relative ">
        <FontAwesomeIcon
          icon="circle" class="tw-absolute tw-top-2 tw-text-[8px] tw-opacity-50" :class="isRetroActive
            ? 'tw--left-16 sm:tw--left-20'
            : 'tw--left-10 sm:tw--left-12 tw-transform tw--translate-x-[3px]'"
        />
        <div
          v-if="index !== item.positions.length - 1" class="tw-absolute tw-top-6  tw-w-px line-height tw-bg-white tw-opacity-50"
          :class="isRetroActive ? 'tw--left-16 sm:tw--left-20 tw-transform tw-translate-x-[3px]' : 'tw--left-10 sm:tw--left-12'"
        />
        <h4 class="tw-h3 tw-leading-tight tw-font-bold">
          {{ position.role }}
        </h4>
        <span class="tw-space-x-4 tw-opacity-80">
          <span v-for="(date, dateIndex) in getDate(position.dateFrom, position.dateTo)" :key="dateIndex">
            {{ date }}
          </span>
        </span>

        <div
          v-if="position.blurb"
          class="tw-mt-6 tw-content"
          v-html="position.blurb"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .line-height {
    height: calc(100% + 15px)
  }
</style>
