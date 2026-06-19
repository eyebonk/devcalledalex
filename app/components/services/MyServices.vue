<script setup lang="ts">
import { MY_SERVICES } from '../../config/services.ts'
import SectionTitle from '../SectionTitle.vue'
import ServiceItem from './ServiceItem.vue'
</script>

<template>
  <div>
    <SectionTitle>What I can offer you:</SectionTitle>

    <ServiceItem :items="MY_SERVICES" />
  </div>
</template>
