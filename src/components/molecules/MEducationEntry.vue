<template>
  <TEntry
    :item="edu"
    property="schema:hasCredential"
    typeof="schema:EducationalOccupationalCredential"
    :resource="`${edu.url}-credential`"
  >
    <MEducationEntryTitle :edu="edu"/>

    <meta
      :content="edu.credentialType"
      property="schema:credentialCategory"
    />

    <div
      property="schema:about"
      typeof="schema:EducationalOccupationalProgram"
    >
      <table>
        <tbody>
        <tr>
          <td>Degree program:</td>

          <td property="schema:name">{{ edu.degreeProgram }}</td>
        </tr>

        <tr property="schema:description">
          <td>Specialization:</td>

          <td>{{ edu.specialization }}</td>
        </tr>
        </tbody>
      </table>
    </div>


    <p property="schema:description">
      {{ edu.thesis }}
    </p>
  </TEntry>
</template>

<script
  lang="ts"
  setup
>
import type { SchemaEducation } from '../../types/website'
import MEducationEntryTitle from './MEducationEntryTitle.vue'
import TEntry from '../templates/TEntry.vue'

defineProps<{
  edu: SchemaEducation
}>()
</script>