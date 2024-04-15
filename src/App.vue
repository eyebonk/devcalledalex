<script setup lang="ts">
import MyExperience from '@components/experience/MyExperience.vue'
import OtherProjects from '@components/projects/OtherProjects.vue'
import AboutMe from '@components/AboutMe.vue'
import MySkills from '@components/MySkills.vue'
import MySocial from '@components/MySocial.vue'
import MyProjects from '@components/projects/MyProjects.vue'
import TheBackgrounds from '@components/TheBackgrounds.vue'
import ThemeButtons from '@components/ThemeButtons.vue'
import { usePresets } from '@composables/usePresets.ts'
import type { PRESET } from '@models/Preset.ts'
import { onMounted } from 'vue'

const {
  isGreenActive,
  setDefaults,
} = usePresets()

onMounted(() => {
  setDefaults()
})
</script>

<template>
  <div class="tw-relative tw-pt-4" :class="{ 'green-shadow': isGreenActive }">
    <div
      class="tw-container tw-mx-auto tw-space-y-20 tw-pb-40 tw-relative tw-z-10"
    >
      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-space-y-1 lg:tw-space-y-0"
      >
        <h1>devcalledalex</h1>
        <MySocial />
      </div>

      <AboutMe />
      <MySkills />
      <MyExperience />
      <MyProjects />
      <OtherProjects />
    </div>

    <TheBackgrounds />
    <ThemeButtons />
  </div>
</template>

<style>
.green-shadow {
  box-shadow: rgb(0 73 0) 0px 0px 170px inset;
}
</style>
