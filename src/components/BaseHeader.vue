<template>
  <h2 class="tw-heading">
    [<span class="tw-text-orange">"{{ text }}"</span>]
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
