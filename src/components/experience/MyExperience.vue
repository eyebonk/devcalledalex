<script setup lang="ts">
import { useFilter } from '@composables/useFilter.ts'
import { usePresets } from '@composables/usePresets.ts'
import BaseHeader from '@components/BaseHeader.vue'
// import PixelImage from '@components/PixelImage.vue'
import { EXPERIENCE } from '@config/experience.ts'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import ItemImage from './ItemImage.vue'
import ItemTitle from './ItemTitle.vue'

const { stackClass } = useFilter()
const { isGreenActive, isRetroActive } = usePresets()

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

function lastItem(index: number) {
  return EXPERIENCE[index].stack.length - 1
}
</script>

<template>
  <div>
    <BaseHeader text="Experience" />

    <div
      class="tw-flex tw-flex-col"
      :class="isRetroActive ? 'tw-space-y-8' : 'tw-space-y-6'"
    >
      <div
        v-for="(item, index) in EXPERIENCE"
        :key="index"
        class="tw-flex tw-w-fit"
        :class="isRetroActive ? 'tw-space-x-6' : 'tw-space-x-4'"
      >
        <ItemImage :item="item" />

        <div class="tw-flex tw-flex-col tw-text-sm">
          <ItemTitle :item="item" />

          <!-- <h3 class="tw-leading-tight">
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
              {{ item.role }}
            </component>
          </h3> -->
          <div class="tw-flex tw-flex-col tw-opacity-80 tw-text-md">
            <span> {{ item.company }} | {{ item.type }} </span>

            <span class="tw-space-x-4 tw-opacity-80">
              <span v-for="(date, dateIndex) in getDate(item.dateFrom, item.dateTo)" :key="dateIndex">
                {{ date }}
              </span>
            </span>
          </div>

          <div class="tw-flex tw-flex-wrap tw-text-md">
            <div
              v-for="(stack, stackIndex) in item.stack"
              :key="stackIndex"
              class="tw-flex"
            >
              <span class="tw-flex tw-flex-nowrap tw-space-x-0">
                <span class="tw-whitespace-nowrap" :class="stackClass(stack)">
                  {{ stack }}
                </span>
                <span v-if="stackIndex !== lastItem(index)">,</span>
                &nbsp;
              </span>
            </div>
          </div>

          <div
            v-if="item.blurb"
            class="tw-mt-6 tw-content"
            v-html="item.blurb"
          />
        </div>
      </div>
    </div>
  </div>
</template>
