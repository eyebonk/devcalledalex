<template>
  <div>
    <base-header text="About me" />
    <div class="tw-content">
      <p>
        Hi, I'm Alex, a Senior Front End Web Developer/workaholic with over
        {{ howLong }}
        years of development experience.
      </p>

      <p v-for="(item, index) in BLURB" :key="index">
        {{ item }}
      </p>

      <p>
        Specialties:
        <span class="tw-space-x-2">
          <span
            v-for="(item, skillIndex) in SKILLS"
            :key="skillIndex"
            class="tw-text-green"
          >
            <span v-if="skillIndex > 0" class="tw-text-off-white">/</span>
            {{ item }}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@components/BaseHeader.vue";
import { BLURB, SKILLS } from "@config/about.js";
import { computed } from "vue";
import dayjs from "dayjs";

export default {
  components: {
    BaseHeader,
  },
  setup() {
    const DEV_START_DATE = dayjs("01-09-2007");
    const current = dayjs();

    const howLong = computed(() => current.diff(DEV_START_DATE, "year"));

    return {
      howLong,
      SKILLS,
      BLURB,
    };
  },
};
</script>
