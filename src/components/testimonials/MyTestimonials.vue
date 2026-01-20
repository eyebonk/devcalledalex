<script setup lang="ts">
import { TESTIMONIALS } from '../../config/testimonials.ts'
import SectionTitle from '../SectionTitle.vue'
import TestimonialItem from './TestimonialItem.vue'
</script>

<template>
  <div>
    <SectionTitle>What people say:</SectionTitle>

    <TestimonialItem :items="TESTIMONIALS" />
  </div>
</template>
