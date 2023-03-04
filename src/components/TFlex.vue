<template>
  <div
    :data-column="column"
    :data-spacious="spacious"
    class="TFlex"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TFlex',

    props: {
      column: {
        type: Boolean,
        default: undefined
      },

      spacious: {
        type: Boolean,
        default: undefined
      }
    }
  })
</script>

<style lang="scss">
  @use "../variables" as *;

  .TFlex {
    --flex-gap: var(--spacer-md);

    display: flex;
    flex-flow: column wrap;
    gap: var(--flex-gap);
    width: 100%;

    &:not([data-column]) {
      @include desktop {
        flex-direction: row;
      }
    }

    &[data-spacious] {
      --flex-gap: var(--spacer-xl);
    }
  }
</style>