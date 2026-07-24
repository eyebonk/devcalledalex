<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import SectionTitle from './SectionTitle.vue'

const DEV_START_DATE = dayjs('2007-09-01')
const current = dayjs()

const howLong = computed(() => current.diff(DEV_START_DATE, 'year'))
</script>

<template>
  <div>
    <SectionTitle>About Me</SectionTitle>
    <div class="tw-space-y-5">
      <p>Hi, I'm Alex — a frontend engineer with over <b>{{ howLong }} years </b> of experience building and scaling high-quality, accessible web interfaces. I care deeply about clean, maintainable code and strong fundamentals, from pixel-perfect UI and accessibility (to WCAG 2.2 AA) through to performance and long-term maintainability.</p>

      <p>My background is heavily rooted in design systems, component libraries, and frontend architecture — including building a company-wide design system from the ground up and driving its adoption across engineering teams. I've worked across startups and scale-ups, often operating at a platform level — defining standards and contribution models, improving developer experience, and making it easier for teams to move fast without compromising quality.</p>

      <p>I specialise in modern frontend technologies including React, Next.js, TypeScript, Vue, and modern CSS, and I've delivered UI across multiple surfaces — from responsive web through to embedded and native (iOS) experiences. I've spent much of my career working closely with design and product to turn complex requirements into simple, usable interfaces, and I'm comfortable mentoring engineers, reviewing code, and contributing to technical direction, even when I'm not in a formal leadership role.</p>
    </div>
  </div>
</template>
