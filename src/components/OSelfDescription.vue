<template>
  <TFlex
    class="OSelfDescription"
    column
  >
    <p>
      Technology and computers are at the core of my work, life, and hobbies. I strive to be a part of open-source
      development and technological progress.
    </p>

    <blockquote>
      Respect the cognitive endurance of coworkers and your future self.
      Clean-up, don&apos;t overcomplicate, aim for readability over brevity.<br>

      <span>&mdash;&nbsp;Unknown</span>
    </blockquote>
  </TFlex>
</template>

<script lang="ts" setup>
  import TFlex from './TFlex.vue'
</script>

<style lang="scss">
  .OSelfDescription {
    font-size: var(--fontsize-3);
  }
</style>
