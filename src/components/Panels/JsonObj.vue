<template>
  <pre>
<code>
{{ json }}
</code>
</pre>
</template>

<script>
import { EXPERIENCE } from "@config/experience.js";
import { MY_PROJECTS } from "@config/projects.js";
import { PROJECTS } from "@config/projects.js";
import { computed } from "vue";

export default {
  setup() {
    const json = computed(() => {
      return {
        experience: EXPERIENCE,
        myProjects: MY_PROJECTS,
        projects: PROJECTS,
      };
    });

    return {
      json,
    };
  },
};
</script>
