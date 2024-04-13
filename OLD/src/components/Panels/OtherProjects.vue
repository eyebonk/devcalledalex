<template>
  <div>
    <BaseHeader text="Projects" />

    <div class="tw-content tw-mb-3">
      <p>A List of projects I have built in full or built the frontend</p>
    </div>

    <ProjectItems :items="PROJECTS" />
  </div>
</template>

<script>
import ProjectItems from "@components/ProjectItems.vue";
import BaseHeader from "@components/BaseHeader.vue";
import { PROJECTS } from "@config/projects.js";

export default {
  components: {
    ProjectItems,
    BaseHeader,
  },
  setup() {
    return {
      PROJECTS,
    };
  },
};
</script>
