<template>
  <div>
    <BaseHeader text="My projects" />

    <ProjectItems :items="MY_PROJECTS" />
  </div>
</template>

<script>
import ProjectItems from "@components/ProjectItems.vue";
import BaseHeader from "@components/BaseHeader.vue";
import { MY_PROJECTS } from "@config/projects.js";

export default {
  components: {
    ProjectItems,
    BaseHeader,
  },
  setup() {
    return {
      MY_PROJECTS,
    };
  },
};
</script>
