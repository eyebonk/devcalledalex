<script setup lang="ts">
import LinkItem from '../LinkItem.vue'

interface Referal {
  title: string
  text: string
  image: string
  link: string
}

defineProps<{
  items: Referal[]
}>()
</script>

<template>
  <div
    class="tw-flex tw-flex-col tw-space-y-10"
  >
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.link"
      class="tw-flex tw-w-fit sm:tw-space-x-6"
    >
      <div
        class="tw-shrink-0 tw-overflow-hidden tw-rounded-global tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16 tw-hidden sm:tw-flex tw-items-center tw-justify-center tw-relative"
      >

        <img :src="item.image" :alt="item.text">

      </div>

      <div class="tw-flex tw-flex-col tw-space-y-3 tw-pt-1">
        <h3 class="tw-text-pink">
          {{ item.title }}
        </h3>

        <div
          v-if="item.text"
          class="tw-mt-6 tw-content tw-text-white tw-text-opacity-60"
          v-html="item.text"
        />

        <LinkItem :link="item.link" :text="item.title" />
      </div>
    </a>
  </div>
</template>
