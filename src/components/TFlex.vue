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
  .TFlex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--spacer-md);
    width: 100%;

    &[data-column] {
      flex-direction: column;
    }
  }
</style>