<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  LinkIcon,
  RectangleStackIcon,
  SparklesIcon,
} from '@heroicons/vue/24/solid'
import { computed } from 'vue'
import IconCoffee from './icons/IconCoffee.vue'
import IconDiscord from './icons/IconDiscord.vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'

const props = defineProps<{
  name: string
}>()

// Maps a stable key (used in data/config) to a concrete icon component.
// Brand marks (github/linkedin/discord/coffee) are inline SVGs because
// Heroicons has no brand/logo set; the rest are Heroicons solid.
const ICONS: Record<string, unknown> = {
  github: IconGithub,
  linkedin: IconLinkedin,
  discord: IconDiscord,
  coffee: IconCoffee,
  store: BuildingStorefrontIcon,
  envelope: EnvelopeIcon,
  sparkles: SparklesIcon,
  comments: ChatBubbleLeftRightIcon,
  layers: RectangleStackIcon,
  download: ArrowDownTrayIcon,
  link: LinkIcon,
}

const icon = computed(() => ICONS[props.name])
</script>

<template>
  <component :is="icon" v-if="icon" aria-hidden="true" />
</template>
