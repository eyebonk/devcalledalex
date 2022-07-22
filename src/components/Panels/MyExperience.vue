<template>
  <div>
    <base-header text="Experience" />

    <div class="tw-flex tw-flex-col tw-space-y-6">
      <component
        v-for="(item, index) in data"
        :key="index"
        :is="item.link ? 'a' : 'div'"
        :href="item.link ? item.link : null"
        :target="item.link ? '_blank' : null"
        class="tw-flex tw-items-center tw-space-x-4 tw-group"
      >
        <div
          class="tw-h-16 tw-w-16 tw-flex-shrink-0 tw-rounded tw-overflow-hidden"
        >
          <img
            :src="item.icon"
            :alt="item.company"
            class="tw-h-full tw-w-full"
          />
        </div>

        <div class="tw-flex tw-flex-col tw-text-sm tw-space-y-1">
          <h3 class="tw-text-pink tw-filter group-hover:tw-saturate-200">
            {{ item.role }}
          </h3>
          <div
            class="tw-flex tw-flex-col tw-opacity-80 tw-text-md tw-space-y-1"
          >
            <span> {{ item.company }} | {{ item.type }} </span>

            <span class="tw-space-x-4 tw-opacity-80">
              <span v-for="(date, dateIndex) in item.date" :key="dateIndex">
                {{ date }}
              </span>
            </span>
          </div>
        </div>
      </component>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { EXPERIENCE } from "@config/experience.js";
import { computed } from "vue";
import dayjs from "dayjs";
import AboutMe from "./AboutMe.vue";

export default {
  components: {
    BaseHeader,
    AboutMe,
  },
  setup() {
    const data = computed(() => _mapData(EXPERIENCE));

    // function findNumbers(value) {
    //   let regex = /[0-9]/g;
    //   if (regex.test(value)) {
    //     return value.replace(/(\d+)/g, `<span class='tw-text-green'>$1</span>`);
    //   }

    //   return value;
    // }

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
      // findNumbers,
      EXPERIENCE,
      data,
    };
  },
};
</script>
