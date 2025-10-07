<script setup lang="ts">
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import AboutMe from './components/AboutMe.vue'
import MyExperience from './components/experience/MyExperience.vue'
import MySocial from './components/MySocial.vue'
import MyProjects from './components/projects/MyProjects.vue'
import OtherProjects from './components/projects/OtherProjects.vue'
import MyServices from './components/services/MyServices.vue'
import MyStack from './components/stack/MyStack.vue'
</script>

<template>
  <div class="tw-flex tw-flex-col tw-h-full tw-w-full tw-bg-gradient-to-b tw-from-blue tw-to-dark-blue tw-relative">
    <div class="tw-flex tw-flex-col tw-h-full tw-w-full">
      <TheHeader />
      <MySocial
        stack
        class="tw-hidden sm:tw-block tw-w-10 tw-fixed tw-top-1/2 tw-right-0 tw-transform tw--translate-y-1/2 tw-z-20"
      />

      <div class="tw-flex tw-flex-col tw-flex-1">
        <main class="tw-flex tw-flex-col tw-flex-1 tw-relative tw-z-10">
          <div class="tw-container tw-py-20 tw-space-y-28">
            <AboutMe />
            <MyExperience />
            <MyProjects />
            <OtherProjects />
            <MyServices />
            <MyStack />
          </div>
        </main>

        <TheFooter />
      </div>
    </div>

    <div aria-hidden="true" class="tw-bg-no-repeat tw-bg-[url('/silhouette.png')] tw-bg-cover tw-bg-center tw-h-full tw-w-full tw-absolute tw-bottom-0 tw-left-0 tw-z-0 tw-filter tw-blur-3xl tw-opacity-50" />
  </div>
</template>
