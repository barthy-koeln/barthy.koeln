<template>
  <TFlex
    class="OCurriculum"
    column
    print-spacious
  >
    <h2
      property="schema:jobTitle"
    >
      Experience
    </h2>

    <template
      v-for="job in content.jobs"
      :key="job.employer"
    >
      <MCurriculumEntry
        :date="getJobDateRange(job)"
        property="schema:employer"
      >
        <MCurriculumEntryTitle
          :organization="job.employer"
          :position="job.jobTitle"
          :tech-stack="job.techStack ? job.techStack.join(', ') : ''"
        />

        <p property="schema:description">
          <strong>{{ job.description }}</strong>

          <br/>
        </p>

        <template
          v-if="job.industry"
        >
          <p property="schema:industry">
            <strong>{{ job.industry }}</strong>
          </p>
        </template>

        <template
          v-if="job.occupation"
        >
          <p property="schema:occupation">
            <strong>{{ job.occupation }}</strong>
          </p>
        </template>

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
      </MCurriculumEntry>
    </template>

    <template
      v-for="edu in content.education"
      :key="edu.name"
    >
      <MCurriculumEntry
        :date="getJobDateRange(edu)"
        typeof="schema:EducationalOccupationalCredential"
        property="schema:credentialName"
      >
        <MCurriculumEntryTitle
          :organization="edu.credentialIssuer"
          :position="edu.credentialName"
          :tech-stack="edu.description"
        />

        <p
          property="schema:credentialStart"
        >
          {{ edu.credentialStart }}
        </p>

        <template
          v-if="edu.credentialEnd"
        >
          <p
            property="schema:credentialEnd"
          >
            {{ edu.credentialEnd }}
          </p>
        </template>

        <p
          property="schema:description"
        >
          {{ edu.description }}
        </p>
      </MCurriculumEntry>
    </template>
  </TFlex>
</template>

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'
import MCurriculumEntry from '../molecules/MCurriculumEntry.vue'
import MCurriculumEntryTitle from '../molecules/MCurriculumEntryTitle.vue'
import TFlex from '../templates/TFlex.vue'
import type { SchemaEducation, SchemaJob } from '../../types/website'

/**
 * Get date range string from start and end dates.
 * @param entity - Job or education entity with startDate and endDate
 * @returns Formatted date range string or current status
 */
function getJobDateRange (entity: SchemaJob | SchemaEducation): string {
  if ('startDate' in entity && 'endDate' in entity) {
    const start = entity.startDate
    const end = entity.endDate ?? 'Present'
    return `${start} – ${end}`
  }

  if ('credentialStart' in entity && 'credentialEnd' in entity) {
    const start = entity.credentialStart
    const end = entity.credentialEnd ?? 'Present'
    return `${start} – ${end}`
  }

  return ''
}
</script>

<style lang="scss">
.OCurriculum {
  &__entry {
    margin-bottom: var(--spacer-md);
  }
}
</style>

