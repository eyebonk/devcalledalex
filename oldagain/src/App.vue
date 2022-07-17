<template>
  <h1>app</h1>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("hi2");
    });
  },
};
</script>
