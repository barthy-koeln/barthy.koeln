<template>
  <p
    class="OSelfDescription"
    property="schema:description"
  >
    {{ person.description }}
  </p>
</template>

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'

const { person } = content
</script>

<style lang="scss">
.OSelfDescription {
  font-size: var(--fontsize-3);
  white-space: pre-line;
  width: auto;
}
</style>
