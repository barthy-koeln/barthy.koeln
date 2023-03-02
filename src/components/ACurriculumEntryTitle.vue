<template>
  <h3 class="ACurriculumEntryTitle">
    <mark>{{ position }}</mark>
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
  @use "../variables" as *;

  .ACurriculumEntryTitle {
    display: flex;
    flex-direction: column;
    gap: var(--spacer-xs);
    width: 100%;

    @include desktop(){
      flex-direction: row;
    }
  }
</style>