<template>
  <TFlex class="MCurriculumEntry">
    <div class="MCurriculumEntry__date">
      {{ date }}
    </div>

    <TFlex column>
      <slot/>
    </TFlex>
  </TFlex>
</template>

<script lang="ts" setup>
  import TFlex from './TFlex.vue'

  defineProps<{
    date: string
  }>()
</script>

<style lang="scss">
  @use "../variables" as *;

  .MCurriculumEntry {
    flex-wrap: nowrap;

    &__date {
      background-color: var(--color-background);
      display: flex;
      font-size: var(--fontsize-3);
      font-weight: bold;
      height: 100%;
      padding: var(--spacer-md);
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;

      @include desktop {
        padding: 0;
        top: var(--spacer-md);
        width: 128px;
      }

      @media print {
        left: unset;
        position: relative;
        top: unset;
      }
    }
  }
</style>
