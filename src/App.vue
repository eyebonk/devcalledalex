<template>
  <div class="tw-container tw-mx-auto tw-space-y-10">
    <h1>devcalledalex</h1>
    <about-me />
    <my-experience />
    <my-social />
  </div>
</template>

<script>
import MyExperience from "@components/Panels/MyExperience.vue";
import MySocial from "@components/Panels/MySocial.vue";
import AboutMe from "@components/Panels/AboutMe.vue";
import { COLOR_VARS } from "@config/colors.js";
import { onMounted } from "vue";

export default {
  components: {
    MyExperience,
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
