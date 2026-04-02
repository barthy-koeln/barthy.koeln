<template>
  <TEntry
    :item="job"
    :property="job.endDate ? 'schema:alumniOf' : 'schema:worksFor'"
    typeof="schema:Organization"
  >
    <MCurriculumEntryTitle :job="job"/>

    <meta
      :content="job.keywords"
      property="schema:keywords"
    />

    <div :resource="`${job.url}-role`">
      <TFlex
        column
        property="schema:description"
      >
        <p>
          <strong>{{ job.description }}</strong>
        </p>

        <template
          v-if="job.responsibilities || job.achievements"
        >
          <ul>
            <template
              v-for="item in job.responsibilities || job.achievements"
              :key="item"
            >
              <li>{{ item }}</li>
            </template>
          </ul>
        </template>
      </TFlex>
    </div>
  </TEntry>
</template>

<script
  lang="ts"
  setup
>
import TFlex from '../templates/TFlex.vue'
import MCurriculumEntryTitle from './MCurriculumEntryTitle.vue'
import type { SchemaJob } from '../../types/website'
import TEntry from '../templates/TEntry.vue'

defineProps<{
  job: SchemaJob
}>()
</script>
