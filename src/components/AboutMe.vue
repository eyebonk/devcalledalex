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
      <p>Hi, I'm Alex, a Web Developer/Engineer with over <b>{{ howLong }} years </b> of experience in  <b>crafting high-quality</b>, <b>scalable</b>, and <b>accessible</b> websites. I take pride in ensuring every project I work on is built with clean, maintainable code and a strong attention to detail, from <b>pixel-perfec</b>t design to <b>cross-browser compatibility</b>.</p>

      <p>I specialise in <b>component libraries</b> and front-end technologies like HTML5, CSS3, SCSS, JavaScript, and Vue.js. I'm also well-versed in frameworks such as Tailwind and Bootstrap, and I'm passionate about creating responsive, W3C-compliant websites that deliver exceptional user experiences.</p>
    </div>
  </div>
</template>
