<script setup lang="ts">
interface Service {
  title: string
  text: string
  icon: string
}

defineProps<{
  items: Service[]
}>()
</script>

<template>
  <div
    class="tw-grid tw-grid-cols-3 tw-gap-10"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tw-flex tw-flex-col tw-items-center tw-text-center tw-border tw-border-white tw-border-opacity-60 hover:tw-border-opacity-100 hover:tw-drop-shadow-glow-blue tw-transition tw-rounded-3xl tw-py-12 tw-px-10 tw-space-y-4 tw-group tw-cursor-default"
    >
      <div
        class="tw-shrink-0 tw-opacity-60 group-hover:tw-opacity-100 tw-transition tw-text-light-blue"
      >
        <FontAwesomeIcon :icon="item.icon" size="2x" />
      </div>

      <h3>
        {{ item.title }}
      </h3>

      <div
        v-if="item.text"
        class="tw-mt-6 tw-content tw-text-white tw-text-opacity-60"
        v-html="item.text"
      />
    </div>
  </div>
</template>
