<script setup lang="ts">
import { SITE_NAME, SUB_HEADING } from '../config'
import MySocial from './MySocial.vue'
</script>

<template>
  <header class="tw-flex tw-flex-col tw-item-center tw-justify-center tw-w-full tw-py-10 tw-z-20">
    <div class="tw-container">
      <div class="tw-flex tw-flex-col tw-item-center tw-justify-center tw-text-center tw-space-y-4">
        <h1 class="tw-text-5xl sm:tw-text-7xl md:tw-text-8xl lg:tw-text-9xl tw-text-pink tw-drop-shadow-glow">
          {{ SITE_NAME }}
        </h1>

        <span class="tw-font-heading tw-text-2xl tw-tracking-wider">{{ SUB_HEADING }}</span>

        <MySocial class="tw-block sm:tw-hidden" />
      </div>
    </div>
  </header>
</template>
