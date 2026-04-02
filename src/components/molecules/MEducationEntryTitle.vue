<template>
  <div class="AEducationEntryTitle">
    <h3 class="AEducationEntryTitle__title">
      <mark property="schema:educationalLevel">{{ edu.credentialName }}</mark>

      <span
        property="schema:recognizedBy"
        typeof="schema:CollegeOrUniversity"
      >
      @ <a
        :href="edu.url"
        class="AEducationEntryTitle__org"
        property="schema:sameAs"
      >
          <span property="schema:name">{{ edu.credentialIssuer }}</span>
        </a>
      </span>
    </h3>
  </div>
</template>

<script
  lang="ts"
  setup
>
import type { SchemaEducation } from '../../types/website'

defineProps<{
  edu: SchemaEducation
}>()
</script>

<style lang="scss">
@use "../../variables" as *;

.AEducationEntryTitle {
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

  &__org {
    color: var(--color-accent);
    text-decoration: none
  }
}
</style>
