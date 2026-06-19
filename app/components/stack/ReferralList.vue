<script setup lang="ts">
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
      target="_blank"
      rel="noopener"
      class="tw-group tw-flex tw-w-fit sm:tw-space-x-6"
    >
      <div
        class="tw-shrink-0 tw-overflow-hidden tw-rounded-global tw-h-10 sm:tw-h-16 tw-w-10 sm:tw-w-16 tw-hidden sm:tw-flex tw-items-center tw-justify-center tw-relative"
      >

        <img :src="item.image" :alt="item.text" width="64" height="64" loading="lazy" decoding="async" class="tw-w-full tw-h-full tw-object-contain">

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

        <!-- Styled like LinkItem but NOT an <a>: the whole card is already the
             anchor, and nesting <a> inside <a> breaks SSR hydration. -->
        <div class="tw-text-sm tw-inline-flex tw-items-center tw-gap-2 tw-transition group-hover:tw-text-green">
          <AppIcon name="link" class="tw-w-4 tw-h-4 tw-opacity-40" />
          {{ item.title }}
        </div>
      </div>
    </a>
  </div>
</template>
