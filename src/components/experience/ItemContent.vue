<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { EXPERIENCE_ITEM } from '../../types'
import StackItem from '../StackItem.vue'
import LinkItem from '../LinkItem.vue'

const props = defineProps<{
  item: EXPERIENCE_ITEM
}>()

const MONTHS_IN_YEAR = 12

const dateFrom = computed(() => {
  const totalItems = props.item.positions.length
  return props.item.positions[totalItems - 1].dateFrom
})
const dateTo = computed(() => props.item.positions[0].dateTo)

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
  const { formatFrom, formatTo } = dateDiff(dateFrom, dateTo)

  return {
    dateRange: _formatDateTo(formatFrom, formatTo),
  }
}

function _formatDateTo(from: Dayjs, to: Dayjs) {
  const toTemp = to.isValid() ? dayjs(to).format('MMM YYYY') : 'present'
  return `${dayjs(from).format('MMM YYYY')} - ${toTemp}`
}
</script>

<template>
  <div class="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-space-y-4 lg:tw-space-y-0">
    <div class="lg:tw-w-2/12">
      <span v-for="(date, dateIndex) in getDate(dateFrom, dateTo)" :key="dateIndex" class="tw-opacity-60">
        {{ date }}
      </span>
    </div>
    <div class="lg:tw-w-10/12 tw-space-y-4">
      <div>
        <div class="tw-flex tw-items-center tw-space-x-2">
          <span>{{ item.positions[0].role }}</span>
          <FontAwesomeIcon icon="circle" class="tw-text-[6px] tw-opacity-40" />
          <span>{{ item.company }}</span>
        </div>

        <div v-if="item.positions.length > 1" class="tw-opacity-60">
          <template v-for="(position, index) in item.positions" :key="index">
            <span v-if="index !== 0">
              {{ position.role }}
            </span>
          </template>
        </div>
      </div>

      <div v-if="item.blurb" class="tw-space-y-6" v-html="item.blurb" />

      <div class="tw-py-2">
        <div v-if="Array.isArray(item.link)" class="tw-flex tw-gap-6">
          <LinkItem v-for="(linkItem, linkIndex) in item.link" :key="linkIndex" :link="linkItem.link" :text="linkItem.text" />
        </div>
        <template v-else>
          <LinkItem :link="item.link" :text="item.company" />
        </template>
      </div>

      <div class="tw-flex tw-flex-wrap tw-text-sm tw-gap-y-2.5 tw-gap-x-2">
        <StackItem
          v-for="(stack, stackIndex) in item.stack" :key="stackIndex"
          :item="stack"
          :index="stackIndex"
          :stack-index="stackIndex"
        />
      </div>
    </div>
  </div>
</template>
