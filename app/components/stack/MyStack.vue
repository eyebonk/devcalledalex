<script setup lang="ts">
import { REFERRALS } from '../../config/referrals.ts'
import SectionTitle from '../SectionTitle.vue'
import ReferralList from './ReferralList.vue'
</script>

<template>
  <div class="tw-py-10">
    <SectionTitle>Wanna be like me? This is what I use:</SectionTitle>

    <ReferralList :items="REFERRALS" />
  </div>
</template>
