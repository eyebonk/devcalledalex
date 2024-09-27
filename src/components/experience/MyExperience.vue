<script setup lang="ts">
import { EXPERIENCE } from '../../config/experience.ts'
import SectionTitle from '../SectionTitle.vue'
import ItemContent from './ItemContent.vue'
</script>

<template>
  <div>
    <SectionTitle>Experience</SectionTitle>

    <div
      class="tw-flex tw-flex-col tw-space-y-16"
    >
      <div
        v-for="(item, index) in EXPERIENCE"
        :key="index"
        class="tw-flex tw-w-full"
      >
        <ItemContent :item="item" :first="index === 0" />
      </div>
    </div>
  </div>
</template>
