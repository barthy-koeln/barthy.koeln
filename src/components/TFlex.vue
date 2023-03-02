<template>
  <div
    class="TFlex"
    :data-column="column"
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
      }
    }
  })
</script>

<style lang="scss">
  @use "../variables" as *;

  .TFlex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: var(--spacer-md);
    width: 100%;

    &:not([data-column]) {
      @include desktop() {
        flex-direction: row;
      }
    }
  }
</style>