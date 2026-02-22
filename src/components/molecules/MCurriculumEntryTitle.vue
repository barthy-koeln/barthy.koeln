<template>
  <div class="ACurriculumEntryTitle">
    <h3 class="ACurriculumEntryTitle__title">
      <mark>{{ position }}</mark>

      <i class="ACurriculumEntryTitle__org">@ {{ organization }}</i>
    </h3>

    <template v-if="techStack">
      <span class="ACurriculumEntryTitle__tech">
        <strong>
          Primary Tech Stack:
        </strong>&nbsp;{{ techStack }}
      </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    position: string,
    organization: string,
    techStack?: string
  }>()
</script>

<style lang="scss">
  @use "../../variables" as *;

  .ACurriculumEntryTitle {
    display: flex;
    flex-direction: column;
    gap: var(--spacer-sm);

    &__title {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacer-xs);
      width: 100%;

      @include desktop {
        flex-direction: row;
      }
    }

    &__tech {
      font-size: var(--font-size-sm);
      opacity: .8;
    }
  }
</style>
