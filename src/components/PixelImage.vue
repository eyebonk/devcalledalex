<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'
import eightBit from '8bit'

const props = defineProps<{
  image: string
}>()

const id = `canvas${getCurrentInstance()?.uid}`

onMounted(() => {
  processImage()
})

function processImage() {
  const img = new Image()

  img.onload = function () {
    eightBit(document.getElementById(id), img, 12)
  }
  img.src = props.image
}
</script>

<template>
  <canvas :id="id" />
</template>
