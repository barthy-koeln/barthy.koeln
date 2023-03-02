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
  .MCurriculumEntry {
    flex-wrap: nowrap;

    &__date {
      display: flex;
      font-size: var(--fontsize-3);
      font-weight: bold;
      width: 128px;
      position: sticky;
      top: var(--spacer-md);
      height: 100%;
    }
  }
</style>
