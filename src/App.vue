<template>
  <h1>app.vue</h1>
  {{ TEST }}
</template>

<script>
// import HelloWorld from "@components/HelloWorld.vue";
import { TEST } from "@config/experience.js";

export default {
  components: {
    // HelloWorld,
  },
  setup() {
    return {
      TEST,
    };
  },
};
</script>
