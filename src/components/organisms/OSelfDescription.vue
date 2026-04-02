<template>
  <TFlex
    class="OSelfDescription"
    column
    property="schema:description"
  >
    <p>{{ person.description }}</p>
  </TFlex>
</template>

<script
  lang="ts"
  setup
>
import TFlex from '../templates/TFlex.vue'
import { content } from '../../context/content.ts'

const { person } = content
</script>

<style lang="scss">
.OSelfDescription {
  font-size: var(--fontsize-3);
}
</style>
