<script setup lang="ts">
// import MyExperience from '@components/MyExperience.vue'
// import OtherProjects from '@components/OtherProjects.vue'
// import AboutMe from '@components/AboutMe.vue'
// import MySkills from '@components/MySkills.vue'
// import MySocial from '@components/MySocial.vue'
// import TheBackgrounds from '@components/TheBackgrounds.vue'
// import { usePresets } from '@composables'
import { PRESETS } from '@config/colors'
import { onMounted } from 'vue'

// const {
//   isRetroActive,
//   isGreenActive,
//   changePreset,
//   setDefaults,
//   presetType,
// } = usePresets()

// onMounted(() => {
//   setDefaults()
// })

// function changeType(type) {
//   changePreset(type)
// }

// function isActive(type) {
//   return type === presetType.value ? 'tw-bg-pink' : 'tw-bg-green'
// }
</script>

<template>
  <!-- <div class="tw-relative tw-pt-4" :class="{ 'green-shadow': isGreenActive }"> -->
  <div class="tw-relative tw-pt-4">
    <div
      class="tw-container tw-mx-auto tw-space-y-20 tw-pb-40 tw-relative tw-z-10"
    >
      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-space-y-1 lg:tw-space-y-0"
      >
        <h1>devcalledalex</h1>
        <!-- <MySocial /> -->
      </div>

      <!-- <AboutMe />
      <MySkills />
      <MyExperience />
      <MyProjects />
      <OtherProjects /> -->
    </div>

    <!-- <TheBackgrounds /> -->

    <!-- <div
      class="tw-fixed tw-bottom-2 tw-right-2 tw-p-2 tw-flex tw-flex-col tw-space-y-2 tw-z-50"
    >
      <button
        v-for="(item, index) in PRESETS"
        :key="index"
        class="tw-h-8 tw-w-8 tw-rounded-lg tw-text-sm tw-text-off-black"
        :class="isActive(item.type)"
        @click="changeType(item)"
      >
        <font-awesome-icon :icon="item.icon" />
      </button>
    </div> -->

    <!-- <div v-if="isRetroActive" class="tw-text-sm tw-opacity-0">
      <a
        href="https://www.freepik.com/free-vector/retro-futuristic-landscape-background-with-sun_5072279.htm#query=80s%20background&position=0&from_view=keyword&track=ais"
      >
        Image by pikisuperstar</a>
      on Freepik
    </div> -->
  </div>
</template>

<style>
.green-shadow {
  box-shadow: rgb(0 73 0) 0px 0px 170px inset;
}
</style>
