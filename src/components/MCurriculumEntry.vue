<template>
  <TFlex class="MCurriculumEntry">
    <div class="MCurriculumEntry__date">{{ date }}</div>
    <TFlex column>
      <slot/>
    </TFlex>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'MCurriculumEntry',
    components: { TFlex },

    props: {
      date: {
        type: String,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  @use "../variables" as *;

  .MCurriculumEntry {
    flex-wrap: nowrap;

    &__date {
      display: flex;
      font-size: var(--fontsize-3);
      font-weight: bold;
      position: sticky;
      top: 0;
      height: 100%;
      background-color: var(--color-background);
      z-index: 100;
      width: 100%;
      padding: var(--spacer-md);

      @include desktop() {
        top: var(--spacer-md);
        width: 128px;
        padding: 0;
      }
    }
  }
</style>
