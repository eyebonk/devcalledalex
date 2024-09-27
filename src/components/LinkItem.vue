<script setup lang="ts">
defineProps<{
  link?: string
  text?: string
  download?: boolean
}>()
</script>

<template>
  <div v-if="link || text" class="tw-text-sm">
    <component
      :is="download ? 'span' : 'a'"
      :href="download ? null : link"
      :target="download ? null : '_blank'"
      class="tw-inline-flex tw-items-center tw-gap-2 tw-transition"
      :class="{ 'hover:tw-text-green tw-cursor-pointer': link }"
    >
      <FontAwesomeIcon :icon="download ? 'download' : 'link'" class="tw-opacity-40" />
      {{ text }}
    </component>
  </div>
</template>
