<template>
  <div class="tw-relative">
    <div
      class="tw-container tw-mx-auto tw-space-y-14 tw-pb-14 tw-relative tw-z-10"
    >
      <div
        class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between"
      >
        <h1>devcalledalex</h1>
        <my-social />
      </div>

      <about-me />
      <my-experience />
      <my-projects />
    </div>
    <div
      class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-z-1 tw-blur-sm tw-opacity-5 tw-filter tw-grayscale"
      :style="`background-image: url(images/codebg.jpg)`"
    ></div>
  </div>
</template>

<script>
import MyExperience from "@components/Panels/MyExperience.vue";
import MyProjects from "@components/Panels/MyProjects.vue";
import MySocial from "@components/Panels/MySocial.vue";
import AboutMe from "@components/Panels/AboutMe.vue";
import { COLOR_VARS } from "@config/colors.js";
import { onMounted } from "vue";

export default {
  components: {
    MyExperience,
    MyProjects,
    MySocial,
    AboutMe,
  },
  setup() {
    onMounted(() => {
      _pushThemeVars();
    });

    function _pushThemeVars() {
      for (let [key, value] of Object.entries(COLOR_VARS)) {
        document.documentElement.style.setProperty(key, value);
      }
    }
  },
};
</script>
