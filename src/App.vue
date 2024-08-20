<script setup lang="ts">
import MyExperience from '@components/experience/MyExperience.vue'
import OtherProjects from '@components/projects/OtherProjects.vue'
import AboutMe from '@components/AboutMe.vue'
import MySkills from '@components/MySkills.vue'
import MySocial from '@components/MySocial.vue'
import MyProjects from '@components/projects/MyProjects.vue'
import TheBackgrounds from '@components/TheBackgrounds.vue'
import MyServices from '@components/services/MyServices.vue'
import ThemeButtons from '@components/ThemeButtons.vue'
import MyStack from '@components/stack/MyStack.vue'
import ContactMe from '@components/ContactMe.vue'
import { usePresets } from '@composables/usePresets.ts'
import { onMounted } from 'vue'
import MySpecialties from '@components/MySpecialties.vue'

const {
  isTeletextActive,
  isGreenActive,
  setDefaults,
} = usePresets()

onMounted(() => {
  setDefaults()
})
</script>

<template>
  <div class="tw-relative tw-pt-4" :class="[{ 'green-shadow': isGreenActive }]">
    <div
      class="tw-container tw-mx-auto tw-pb-40 tw-relative tw-z-10"
      :class="isTeletextActive ? 'tw-text-light-blue tw-space-y-16' : 'tw-space-y-24'"
    >
      <div
        class="tw-flex tw-items-center tw-space-y-1 lg:tw-space-y-0"
        :class="isTeletextActive ? 'tw-flex-col tw-bg-blue tw-text-yellow tw-pt-6 tw-pb-12' : 'tw-flex-col lg:tw-flex-row tw-justify-between tw-text-off-white'"
      >
        <h1 :class="isTeletextActive ? 'tw-teletext-h1' : 'tw-h1'">
          devcalledalex
        </h1>
        <MySocial />
      </div>

      <div :class="isTeletextActive ? 'tw-flex tw-flex-col xl:tw-flex-row tw-gap-10' : 'tw-space-y-24 '">
        <AboutMe />
        <MySkills />
      </div>

      <MySpecialties v-if="isTeletextActive" />
      <MyExperience />
      <MyProjects />
      <OtherProjects />
      <MyServices />
      <MyStack />
      <ContactMe />
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
