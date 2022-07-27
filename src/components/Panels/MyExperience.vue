<template>
  <div>
    <base-header text="Experience" />

    <div class="tw-flex tw-flex-col tw-space-y-6">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="tw-flex tw-space-x-4 tw-w-fit"
      >
        <div
          class="tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16 tw-flex-shrink-0 tw-rounded tw-overflow-hidden"
        >
          <component
            :is="item.link ? 'a' : 'div'"
            :href="item.link ? item.link : null"
            :target="item.link ? '_blank' : null"
            :title="item.link ? item.company : null"
            :tabindex="item.link ? -1 : null"
          >
            <img
              :src="item.icon"
              :alt="item.company"
              class="tw-h-full tw-w-full"
            />
          </component>
        </div>

        <div class="tw-flex tw-flex-col tw-text-sm">
          <h3 class="tw-text-pink">
            <component
              :is="item.link ? 'a' : 'span'"
              :href="item.link ? item.link : null"
              :target="item.link ? '_blank' : null"
              :title="item.link ? item.company : null"
              class="hover:tw-text-blue focus:tw-text-blue tw-outline-none"
            >
              {{ item.role }}
            </component>
          </h3>
          <div class="tw-flex tw-flex-col tw-opacity-80 tw-text-md">
            <span> {{ item.company }} | {{ item.type }} </span>

            <span class="tw-space-x-4 tw-opacity-80">
              <span v-for="(date, dateIndex) in item.date" :key="dateIndex">
                {{ date }}
              </span>
            </span>
          </div>

          <div class="tw-flex tw-flex-wrap">
            <div
              v-for="(item, stackIndex) in item.stack"
              :key="stackIndex"
              class="tw-flex"
            >
              <span class="tw-flex tw-flex-nowrap tw-space-x-0">
                <span class="tw-whitespace-nowrap" :class="stackClass(item)">
                  {{ item }}
                </span>
                <span v-if="stackIndex !== lastItem(index)">,</span>
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { EXPERIENCE } from "@config/experience.js";
import { useFilter } from "@composables";
import { computed } from "vue";
import dayjs from "dayjs";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const { stackClass } = useFilter();

    const data = computed(() => _mapData(EXPERIENCE));

    function lastItem(index) {
      return data.value[index].stack.length - 1;
    }

    function _mapData(exData) {
      let data = [];
      exData.forEach((item) => {
        data.push({
          role: item.role,
          company: item.company,
          icon: item.icon,
          type: item.type,
          country: item.country,
          date: _getDate(item.dateFrom, item.dateTo),
          link: item.link,
          stack: item.stack,
        });
      });

      return data;
    }

    function _getDate(dateFrom, dateTo) {
      let formatFrom = dayjs(dateFrom).format("DD-MM-YYYY");
      let formatTo = dayjs(dateTo).format("DD-MM-YYYY");

      const MONTHS_IN_YEAR = 12;
      const current = formatTo ? dayjs(formatTo) : dayjs();
      const monthDiff = current.diff(formatFrom, "month");
      const yearSince = current.diff(formatFrom, "year");

      const miyTimesYears = MONTHS_IN_YEAR * yearSince;
      const monthSince = monthDiff - miyTimesYears;

      return {
        dateRange: _formatDateTo(dateFrom, dateTo),
        timeSince: _formatTimeSince(yearSince, monthSince),
      };
    }

    function _formatDateTo(from, to) {
      let toTemp = to ? dayjs(to).format("MMM YYYY") : "present";
      return `${dayjs(from).format("MMM YYYY")} - ${toTemp}`;
    }

    function _formatTimeSince(year, month) {
      if (!isNaN(year) && !isNaN(month)) {
        return `${_plural(year)} ${_plural(month, "mo")}`;
      } else {
        return null;
      }
    }

    function _plural(date, type = "yr") {
      return date > 1 ? `${date} ${type}s` : `${date} ${type}`;
    }

    return {
      EXPERIENCE,
      stackClass,
      lastItem,
      data,
    };
  },
};
</script>
