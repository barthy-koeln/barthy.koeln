<template>
  <div
    :data-column="column || undefined"
    :data-spacious="spacious || undefined"
    class="TFlex"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    column?: boolean,
    spacious?: boolean
  }>()
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