<script setup lang="ts">
import ProjectItems from '@components/projects/ProjectItems.vue'
import BaseHeader from '@components/BaseHeader.vue'
import { PROJECTS } from '@config/projects.ts'
</script>

<template>
  <div>
    <BaseHeader text="Projects" />

    <ProjectItems :items="PROJECTS" />
  </div>
</template>
