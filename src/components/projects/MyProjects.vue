<script setup lang="ts">
import { MY_PROJECTS } from '../../config/projects.ts'
import SectionTitle from '../SectionTitle.vue'
import ProjectItems from './ProjectItems.vue'
</script>

<template>
  <div>
    <SectionTitle>My projects</SectionTitle>

    <ProjectItems :items="MY_PROJECTS" />
  </div>
</template>
