<script setup lang="ts">
import dayjs from 'dayjs'
import { SITE_NAME } from '../config'

const year = dayjs().year()
</script>

<template>
  <footer class="tw-h-14 tw-relative">
    <div class="tw-container tw-relative tw-z-10">
      <div class="tw-flex tw-items-center tw-justify-between tw-text-xs">
        <span>&copy; 2018 - {{ year }} All Rights Reserved - {{ SITE_NAME }} </span>
      </div>
    </div>
  </footer>
</template>
