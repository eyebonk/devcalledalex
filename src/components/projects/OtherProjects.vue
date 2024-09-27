<script setup lang="ts">
import { PROJECTS } from '../../config/projects.ts'
import SectionTitle from '../SectionTitle.vue'
import ProjectItems from './ProjectItems.vue'
</script>

<template>
  <div>
    <SectionTitle>My Websites</SectionTitle>

    <ProjectItems :items="PROJECTS" />
  </div>
</template>
