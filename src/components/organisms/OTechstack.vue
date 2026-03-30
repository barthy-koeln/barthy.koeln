<template>
  <TFlex
    class="OTechstack"
    column
  >
    <div class="OTechstack__heading">
      <h3>Core competencies</h3>

      <AComment>(10+ years)</AComment>
    </div>

    <template
      v-for="skill in core"
      :key="skill.name"
    >
      <div
        typeof="schema:Application"
        property="schema:name"
      >
        <MSkillsList
          :skill-groups="[skill]"
        />
      </div>
    </template>

    <div class="OTechstack__heading">
      <h3>Specialized</h3>

      <AComment>(6+ years)</AComment>
    </div>

    <template
      v-for="skill in specialized"
      :key="skill.name"
    >
      <div
        typeof="schema:SoftwareApplication"
        property="schema:name"
      >
        <MSkillsList
          :skill-groups="[skill]"
        />
      </div>
    </template>

    <div class="OTechstack__heading">
      <h3>Emerging</h3>

      <AComment>(1-2 years)</AComment>
    </div>

    <template
      v-for="skill in emerging"
      :key="skill.name"
    >
      <div
        typeof="schema:SoftwareApplication"
        property="schema:name"
      >
        <MSkillsList
          :skill-groups="[skill]"
        />
      </div>
    </template>

    <h3>Other interests</h3>

    <p>
      <template
        v-for="(interest, index) in person.knowsAbout"
        :key="interest"
      >
        <span property="schema:knowsAbout">
          {{ interest }}
        </span>

        <template v-if="index < person.knowsAbout.length - 1">, </template>
      </template>
    </p>
  </TFlex>
</template>

<script
  setup
  lang="ts"
>
import { content } from '../../context/content.ts'
import AComment from '../atoms/AComment.vue'
import MSkillsList from '../molecules/MSkillsList.vue'
import TFlex from '../templates/TFlex.vue'

const {
  person,
  skills: {
    core,
    specialized,
    emerging,
  },
} = content
</script>

<style
  lang="scss"
  scoped
>
.OTechstack {
  &__heading {
    display: flex;
  }
}
</style>