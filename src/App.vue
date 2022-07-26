<template>
  <div class="tw-bg-off-black tw-text-off-white tw-relative">
    <div
      class="tw-container tw-mx-auto tw-space-y-20 tw-pb-40 tw-relative tw-z-10"
    >
      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-space-y-1 lg:tw-space-y-0"
      >
        <h1>devcalledalex</h1>
        <my-social />
      </div>

      <about-me />
      <my-experience />
      <my-projects />
      <other-projects />
    </div>
    <div
      class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-z-1 tw-blur-sm tw-opacity-5 tw-filter tw-grayscale"
      :style="`background-image: url(images/codebg.jpg)`"
    ></div>
  </div>
</template>

<script>
import OtherProjects from "@components/Panels/OtherProjects.vue";
import MyExperience from "@components/Panels/MyExperience.vue";
import MyProjects from "@components/Panels/MyProjects.vue";
import MySocial from "@components/Panels/MySocial.vue";
import AboutMe from "@components/Panels/AboutMe.vue";
import { COLOR_VARS } from "@config/colors.js";
import { onMounted } from "vue";

export default {
  components: {
    OtherProjects,
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
        _addStyle(key, value);
      }
      _addStyle("background", "var(--off-black)");
    }

    function _addStyle(key, value) {
      return document.documentElement.style.setProperty(key, value);
    }
  },
};
</script>
