<script setup lang="ts">
import BaseHeader from '@components/BaseHeader.vue'
import { BLURB, SKILLS } from '@config/about.ts'
import { usePresets } from '@composables/usePresets.ts'
import { computed } from 'vue'
import dayjs from 'dayjs'

const { isGreenActive } = usePresets()

const DEV_START_DATE = dayjs('01-09-2007')
const current = dayjs()

const howLong = computed(() => current.diff(DEV_START_DATE, 'year'))
</script>

<template>
  <div>
    <BaseHeader text="About me" />
    <div class="tw-content">
      <p>
        Hi, I'm Alex, a Web Developer/Engineer with a passion for pushing
        boundaries and delivering outstanding results. With over
        {{ howLong }} years of experience in the industry, I bring a wealth of
        expertise to every project I undertake.
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

        <span
          v-if="isGreenActive"
          class="tw-ml-1 tw-w-5 tw-h-8 tw-bg-green tw-animate-pulse"
          style="animation-duration: 1s"
        >&nbsp;</span>
      </p>
    </div>
  </div>
</template>
