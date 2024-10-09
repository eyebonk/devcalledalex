<script setup lang="ts">
import StackItem from '../StackItem.vue'
import LinkItem from '../LinkItem.vue'

interface Projects {
  title: string
  text: string
  link: string
  image: string
  stack: string[]
  downloads?: string
}

defineProps<{
  items: Projects[]
}>()
</script>

<template>
  <div class="tw-grid lg:tw-grid-cols-2 tw-gap-x-10 tw-gap-y-16">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="tw-flex sm:tw-space-x-6"
    >
      <div
        class="tw-hidden sm:tw-block tw-h-28 tw-aspect-square tw-overflow-hidden tw-flex-shrink-0"
      >
        <a
          :href="item.link"
          :title="item.title"
          target="_blank"
          tabindex="-1"
          class="tw-relative"
        >

          <div
            role="img"
            class="tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-rounded tw-relative tw-z-20"
            :style="`background-image: url(${item.image});`"
          />

        </a>
      </div>

      <div class="tw-space-y-4">
        <h3 class="tw-text-pink">
          {{ item.title }}
        </h3>

        <div>
          <p>
            {{ item.text }}
          </p>
        </div>

        <div class="tw-flex tw-gap-4">
          <LinkItem :link="item.link" :text="item.title" />
          <LinkItem download :text="item.downloads" />
        </div>

        <div class="tw-flex tw-flex-wrap tw-text-sm tw-gap-y-2.5 tw-gap-x-2">
          <StackItem
            v-for="(stack, stackIndex) in item.stack" :key="stackIndex"
            :item="stack"
            :index="stackIndex"
            :stack-index="stackIndex"
          />
        </div>
      </div>
    </div>
  </div>
</template>
