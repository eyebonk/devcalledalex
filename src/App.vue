<template>
  <div class="tw-relative tw-pt-4">
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
      v-if="presetType === TYPE_CODE"
      class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-no-repeat tw-bg-cover tw-bg-center tw-z-1 tw-blur-sm tw-opacity-5 tw-filter tw-grayscale"
      :style="`background-image: url(images/codebg.jpg)`"
    ></div>

    <div
      class="tw-fixed tw-top-0 tw-right-0 tw-p-2 tw-flex tw-flex-col tw-space-y-4"
    >
      <button
        class="tw-h-8 tw-w-8 tw-rounded tw-bg-green tw-text-off-black"
        @click="changeType(TYPE_CODE)"
      >
        {}
      </button>

      <button
        class="tw-h-8 tw-w-8 tw-rounded tw-bg-green tw-text-off-black"
        @click="changeType(TYPE_GREEN_SCREEN)"
      >
        GS
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
  PRESET_GREEN_SCREEN,
  TYPE_GREEN_SCREEN,
  PRESET_CODE,
  TYPE_CODE,
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
    const { setDefaults, changePreset, presetType } = usePresets();

    onMounted(() => {
      setDefaults();
    });

    function changeType(type) {
      if (type === TYPE_CODE) {
        changePreset(PRESET_CODE);
        return;
      }
      if (type === TYPE_GREEN_SCREEN) {
        changePreset(PRESET_GREEN_SCREEN);
        return;
      }
    }

    return {
      TYPE_GREEN_SCREEN,
      changeType,
      TYPE_CODE,
      presetType,
    };
  },
};
</script>
