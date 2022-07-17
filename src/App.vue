<template>
  <div class="tw-space-y-10">
    <about-me />
    <my-experience />
  </div>
</template>

<script>
import MyExperience from "@components/Panels/MyExperience.vue";
import AboutMe from "@components/Panels/AboutMe.vue";

export default {
  components: {
    MyExperience,
    AboutMe,
  },
};
</script>
