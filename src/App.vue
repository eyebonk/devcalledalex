<template>
  <div class="tw-debug">
    isCeefaxActive: {{ isCeefaxActive }}<br />
    isGreenActive: {{ isGreenActive }}<br />
    isCodeActive: {{ isCodeActive }}<br />
  </div>

  <div class="tw-relative tw-pt-4" :class="{ 'green-shadow': isGreenActive }">
    <div
      class="tw-container tw-mx-auto tw-space-y-20 tw-pb-40 tw-relative tw-z-10"
    >
      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-space-y-1 lg:tw-space-y-0"
      >
        <h1>devcalledalex</h1>
        <my-social />
      </div>

      <about-me />
      <my-skills />
      <my-experience />
      <my-projects />
      <other-projects />
    </div>
    <div
      v-if="isCodeActive"
      class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-z-1 tw-blur-sm tw-opacity-5 tw-filter tw-grayscale"
      :style="`background-image: url(images/codebg.jpg)`"
    ></div>
    <div
      v-else
      class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-opacity-30 tw-animate-pulse tw-z-1"
      :style="`background-image: url(images/screen-lines.png)`"
    ></div>

    <div class="tw-debug">PRESETS: {{ PRESETS }} <br /></div>

    <div
      class="tw-fixed tw-bottom-2 tw-right-2 tw-p-2 tw-flex tw-flex-col tw-space-y-2 tw-z-50"
    >
      <button
        v-for="(item, index) in PRESETS"
        :key="index"
        class="tw-h-8 tw-w-8 tw-rounded-global tw-text-off-black"
        :class="isActive(item.code)"
        @click="changeType(item.code)"
      >
        <font-awesome-icon :icon="item.icon" />
      </button>
    </div>
  </div>
</template>

<script>
import OtherProjects from "@components/Panels/OtherProjects.vue";
import MyExperience from "@components/Panels/MyExperience.vue";
import MyProjects from "@components/Panels/MyProjects.vue";
import MySkills from "@components/Panels/MySkills.vue";
import MySocial from "@components/Panels/MySocial.vue";
import AboutMe from "@components/Panels/AboutMe.vue";
import { usePresets } from "@composables";
import { onMounted } from "vue";
import {
  // PRESET_GREEN_SCREEN,
  // TYPE_GREEN_SCREEN,
  // PRESET_CODE,
  // TYPE_CODE,
  PRESETS,
} from "@config/colors.js";

export default {
  components: {
    OtherProjects,
    MyExperience,
    MyProjects,
    MySocial,
    MySkills,
    AboutMe,
  },
  setup() {
    const {
      isCeefaxActive,
      isGreenActive,
      changePreset,
      isCodeActive,
      setDefaults,
      presetType,
    } = usePresets();

    onMounted(() => {
      setDefaults();
    });

    function changeType(type) {
      changePreset(type);
      // if (type === TYPE_CODE) {
      //   changePreset(PRESET_CODE);
      //   return;
      // }
      // if (type === TYPE_GREEN_SCREEN) {
      //   changePreset(PRESET_GREEN_SCREEN);
      //   return;
      // }
    }

    function isActive(type) {
      return type === presetType.value ? "tw-bg-pink" : "tw-bg-green";
    }

    return {
      // TYPE_GREEN_SCREEN,
      isCeefaxActive,
      isGreenActive,
      isCodeActive,
      changeType,
      // TYPE_CODE,
      isActive,
      PRESETS,
    };
  },
};
</script>

<style>
.green-shadow {
  box-shadow: rgb(0 73 0) 0px 0px 170px inset;
}
</style>
