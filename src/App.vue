<template>
  <div class="tw-space-y-10">
    <about-me />
    <my-experience />
  </div>
</template>

<script>
import MyExperience from "@components/Panels/MyExperience.vue";
import AboutMe from "@components/Panels/AboutMe.vue";
import { TEST } from "@config/experience.js";

export default {
  components: {
    MyExperience,
    AboutMe,
  },
  setup() {
    return {
      TEST,
    };
  },
};
</script>
