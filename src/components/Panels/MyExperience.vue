<template>
  <div>
    <base-header text="Experience" />

    <div class="tw-space-y-4">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="tw-flex tw-space-x-4"
      >
        <div class="tw-h-10 tw-w-10">
          <img
            :src="item.icon"
            :alt="item.company"
            class="tw-h-full tw-w-full"
          />
        </div>

        <div class="tw-flex tw-flex-col tw-text-sm">
          <span class="tw-text-pink">{{ item.role }}</span>
          <div class="tw-flex tw-flex-col tw-text-green tw-text-md">
            <span> {{ item.company }} | {{ item.type }} </span>

            <span>
              <span v-for="(date, dateIndex) in item.date" :key="dateIndex">
                {{ date }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { EXPERIENCE } from "@config/experience.js";
import { computed } from "vue";
import dayjs from "dayjs";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const data = computed(() => _mapData(EXPERIENCE));

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
      console.log("date ", date, type);
      return date > 1 ? `${date} ${type}s` : `${date} ${type}`;
    }

    return {
      EXPERIENCE,
      data,
    };
  },
};
</script>
