<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Testimonial {
  name: string
  company: string
  text: string
}

const props = defineProps<{
  items: Testimonial[]
}>()

const activeIndex = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

function next() {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
}

onMounted(() => {
  interval = setInterval(next, 15000)
})

onUnmounted(() => {
  if (interval)
    clearInterval(interval)
})
</script>

<template>
  <div class="tw-overflow-hidden">
    <div
      class="tw-flex tw-transition-transform tw-duration-500 tw-ease-in-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="tw-w-full tw-flex-shrink-0"
      >
        <div class="tw-flex tw-flex-col">
          <div class="tw-text-white tw-text-opacity-70 tw-italic tw-leading-relaxed tw-text-lg md:tw-text-xl">
            "{{ item.text }}"
          </div>

          <div class="tw-mt-2 tw-text-right">
            <h3 class="tw-text-pink tw-text-xl">
              {{ item.name }}
            </h3>
            <div class="tw-text-light-blue tw-text-sm tw-opacity-80">
              {{ item.company }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
