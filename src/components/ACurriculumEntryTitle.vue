<template>
  <h3 class="ACurriculumEntryTitle">
    <mark>{{ position }}</mark>

    <i class="ACurriculumEntryTitle__org">@ {{ organization }}</i>
  </h3>
</template>

<script lang="ts" setup>
  defineProps<{
    position: string,
    organization: string
  }>()
</script>

<style lang="scss">
  @use "../variables" as *;

  .ACurriculumEntryTitle {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacer-xs);
    width: 100%;

    @include desktop {
      flex-direction: row;
    }
  }
</style>
