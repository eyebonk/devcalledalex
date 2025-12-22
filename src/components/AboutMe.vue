<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import SectionTitle from './SectionTitle.vue'

const DEV_START_DATE = dayjs('01/09/2007')
const current = dayjs()

const howLong = computed(() => current.diff(DEV_START_DATE, 'year'))
</script>

<template>
  <div>
    <SectionTitle>About Me</SectionTitle>
    <div class="tw-space-y-5">
      <p>Hi, I'm Alex — a frontend engineer with over <b>{{ howLong }} years </b> of experience building and scaling high-quality, accessible web interfaces. I care deeply about clean, maintainable code and strong fundamentals, from pixel-perfect UI and accessibility through to performance and long-term maintainability.</p>

      <p>My background is heavily rooted in design systems, component libraries, and frontend architecture, where I've helped teams ship consistently high-quality UI at scale. I've worked across startups and scale-ups, often operating at a platform level — defining standards, improving developer experience, and making it easier for teams to move fast without compromising quality.</p>

      <p>I specialise in modern frontend technologies including JavaScript, TypeScript, Vue, React, and CSS, and I've spent much of my career working closely with design and product to turn complex requirements into simple, usable interfaces. I'm also comfortable mentoring engineers, reviewing code, and contributing to technical direction, even when I'm not in a formal leadership role.</p>
    </div>
  </div>
</template>
