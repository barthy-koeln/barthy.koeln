<template>
  <em class="AComment">//&nbsp;<slot/></em>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
  .AComment {
    color: var(--color-light);
    font-family: monospace;
    font-style: normal;
    letter-spacing: -1px;
    padding-inline-start: var(--spacer-sm);
  }
</style>