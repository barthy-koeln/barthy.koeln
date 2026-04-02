<template>
  <div class="ACurriculumEntryTitle">
    <h3 class="ACurriculumEntryTitle__title">
      <template v-if="job.endDate">
        <div
          property="schema:employee"
          typeof="schema:Person"
        >
          <meta
            :content="person.id"
            property="schema:sameAs"
          />

          <div
            :resource="`${job.url}-role`"
            property="schema:hasOccupation"
            typeof="schema:EmployeeRole"
          >
            <mark property="schema:roleName">{{ job.roleName }}</mark>

            <meta
              :content="job.endDate"
              property="schema:endDate"
            />
          </div>
        </div>
      </template>

      <template v-else>
        <div :resource="person.id">
          <div
            :resource="`${job.url}-role`"
            property="schema:hasOccupation"
            typeof="schema:EmployeeRole"
          >
            <mark property="schema:roleName">{{ job.roleName }}</mark>

            <meta
              :content="job.startDate"
              property="schema:startDate"
            />
          </div>
        </div>
      </template>

      @ <a
      :href="job.url"
      class="ACurriculumEntryTitle__org"
      property="schema:sameAs"
    >
      <span property="schema:name">{{ job.employer }}</span>
    </a>
    </h3>

    <template v-if="job.techStack?.length">
      <span class="ACurriculumEntryTitle__tech">
        <strong>
          Primary Tech Stack:
        </strong>

        &nbsp;<span
        :resource="`${job.url}-role`"
        property="schema:keywords"
      >{{ job.techStack.join(', ') }}</span>
      </span>
    </template>
  </div>
</template>

<script
  lang="ts"
  setup
>
import type { SchemaJob } from '../../types/website'
import { content } from '../../context/content.ts'

defineProps<{
  job: SchemaJob
}>()

const { person } = content
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

  &__org {
    color: var(--color-accent);
    text-decoration: none
  }

  &__tech {
    font-size: var(--font-size-sm);
    opacity: .8;
  }
}
</style>
