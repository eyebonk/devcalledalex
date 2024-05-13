<script setup lang="ts">
import StackItem from '@components/stack/StackItem.vue'
import BaseHeader from '@components/BaseHeader.vue'
import { REFERRALS } from '@config/referrals'
</script>

<template>
  <div class="tw-py-10">
    <BaseHeader text="My Stack" />

    <StackItem :items="REFERRALS" />
  </div>
</template>
