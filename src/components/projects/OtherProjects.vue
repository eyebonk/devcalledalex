<script setup lang="ts">
import ProjectItems from '@components/projects/ProjectItems.vue'
import BaseHeader from '@components/BaseHeader.vue'
import { PROJECTS } from '@config/projects.js'
</script>

<template>
  <div>
    <BaseHeader text="Projects" />

    <div class="tw-content tw-mb-3">
      <p>A List of projects I have built in full or built the frontend</p>
    </div>

    <ProjectItems :items="PROJECTS" />
  </div>
</template>
