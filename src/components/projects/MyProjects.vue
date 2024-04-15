<script setup lang="ts">
import ProjectItems from '@components/projects/ProjectItems.vue'
import BaseHeader from '@components/BaseHeader.vue'
import { MY_PROJECTS } from '@config/projects.js'
</script>

<template>
  <div>
    <BaseHeader text="My projects" />

    <ProjectItems :items="MY_PROJECTS" />
  </div>
</template>
