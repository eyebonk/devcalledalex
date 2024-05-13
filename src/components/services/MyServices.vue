<script setup lang="ts">
import ServiceItem from '@components/services/ServiceItem.vue'
import BaseHeader from '@components/BaseHeader.vue'
import { MY_SERVICES } from '@config/services.ts'
</script>

<template>
  <div class="tw-py-10">
    <BaseHeader text="My Services" />

    <ServiceItem :items="MY_SERVICES" />
  </div>
</template>
