<template>
  <canvas :id="id" />
</template>

<script>
import { onMounted, toRefs, getCurrentInstance } from "vue";
import eightBit from "8bit";

export default {
  props: {
    image: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const id = `canvas${getCurrentInstance().uid}`;

    const { image } = toRefs(props);

    onMounted(() => {
      processImage();
    });

    function processImage() {
      let img = new Image();
      img.onload = function () {
        eightBit(document.getElementById(id), img, 12);
      };
      img.src = image.value;
    }

    return {
      id,
    };
  },
};
</script>
