<template>
  <h3 class="ACurriculumEntryTitle">
    <mark>{{ position }}</mark>&thinsp;
    <i class="ACurriculumEntryTitle__org">@ {{ organization }}</i>
  </h3>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ACurriculumEntryTitle',

    props: {
      position: {
        type: String,
        required: true
      },

      organization: {
        type: String,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  .ACurriculumEntryTitle {

    &__org {
      white-space: nowrap;
    }
  }
</style>