<template>
  <div>
    <base-header text="Experience" />

    <div class="tw-space-y-4">
      <div
        v-for="(item, index) in EXPERIENCE"
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
              {{ getDate(item.dateFrom, item.dateTo).dateFrom }} -
              {{
                getDate(item.dateFrom, item.dateTo).dateTo
                  ? getDate(item.dateFrom, item.dateTo).dateTo
                  : "present"
              }}
              | {{ getDate(item.dateFrom, item.dateTo).timeSince }} |
              {{ item.country }}
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
import dayjs from "dayjs";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    function getDate(dateFrom, dateTo) {
      let formatFrom = dayjs(dateFrom).format("DD-MM-YYYY");
      let formatTo = dayjs(dateTo).format("DD-MM-YYYY");
      let activeRole = false;
      if (!dateTo) {
        activeRole = true;
      }

      const MONTHS_IN_YEAR = 12;
      const current = formatTo ? dayjs(formatTo) : dayjs();
      const monthDiff = current.diff(formatFrom, "month");
      const yearSince = current.diff(formatFrom, "year");
      console.log(
        "monthDiff - MONTHS_IN_YEAR",
        monthDiff,
        MONTHS_IN_YEAR,
        yearSince
      );
      const miyTimesYears = MONTHS_IN_YEAR * yearSince;
      const monthSince = monthDiff - miyTimesYears;

      return {
        dateFrom: _formatDateTo(dateFrom),
        dateTo: _formatDateTo(dateTo),
        timeSince: `${_plural(yearSince)} ${_plural(monthSince, "mo")}`,
        active: activeRole,
      };
    }

    function _formatDateTo(date) {
      return date ? dayjs(date).format("MMM YYYY") : null;
    }

    function _plural(date, type = "yr") {
      return date > 1 ? `${date} ${type}s` : `${date} ${type}`;
    }

    return {
      EXPERIENCE,
      getDate,
    };
  },
};
</script>
