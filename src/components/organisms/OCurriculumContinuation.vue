<template>
  <TFlex
    class="OCurriculum"
    column
    spacious
  >
    <QNoPrint>
      <template #yes>
        <h2 class="OCurriculum__break">
          Experience (Continuation)
        </h2>
      </template>
    </QNoPrint>

    <template
      v-for="job in content.jobs.slice(2)"
      :key="job.employer"
    >
      <MCurriculumEntry :job="job"/>
    </template>
  </TFlex>

  <h2>Education</h2>

  <template
    v-for="edu in content.education"
    :key="edu.name"
  >
    <MEducationEntry :edu="edu"/>
  </template>
</template>

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'
import MCurriculumEntry from '../molecules/MCurriculumEntry.vue'
import QNoPrint from '../quarks/QNoPrint.vue'
import TFlex from '../templates/TFlex.vue'
import MEducationEntry from '../molecules/MEducationEntry.vue'
</script>

