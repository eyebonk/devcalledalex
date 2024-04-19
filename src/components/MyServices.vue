<script setup lang="ts">
import ServiceItems from '@components/services/ServiceItems.vue'
import BaseHeader from '@components/BaseHeader.vue'
import { MY_SERVICES } from '@config/services.ts'
</script>

<template>
  <div>
    <BaseHeader text="My Services" />

    <ServiceItems :items="MY_SERVICES" />
  </div>
</template>
