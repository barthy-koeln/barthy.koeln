<template>
  <TFlex
    class="OCurriculum"
    column
    spacious
  >
    <h2>Experience</h2>

    <template
      v-for="job in content.jobs.slice(0, 2)"
      :key="job.employer"
    >
      <MCurriculumEntry :job="job"/>
    </template>
  </TFlex>
</template>

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'
import MCurriculumEntry from '../molecules/MCurriculumEntry.vue'
import TFlex from '../templates/TFlex.vue'
</script>
