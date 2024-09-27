<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import SectionTitle from './SectionTitle.vue'

const DEV_START_DATE = dayjs('01-09-2007')
const current = dayjs()

const howLong = computed(() => current.diff(DEV_START_DATE, 'year'))
</script>

<template>
  <div>
    <SectionTitle>About Me</SectionTitle>
    <div class="tw-space-y-5">
      <p>Hi, I'm Alex, a <b>Web Developer/Engineer </b> with a passion for pushing boundaries and delivering outstanding results. With over <b>{{ howLong }} years </b> of experience in the industry, I bring a wealth of expertise to every project I undertake.</p>
      <p>I take immense pride in my meticulous approach, ensuring that every line of code I write is clean, every element is pixel-perfect, and every website is accessible and scalable.</p>
      <p>Specialties: HTML5/ CSS3/ SCSS/ JavaScript/ Vue 2 & 3/ Bootstrap/ Tailwind/ JQuery/ Bespoke Component Libraries/ Responsive design/ W3C Guidelines/ Cross Browser & Accessibility</p>
    </div>
  </div>
</template>
