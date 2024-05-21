<template>
  <TFlex
    class="OTechstack"
    column
  >
    <span class="OTechstack__heading">
      <h3>Core competencies</h3>

      <AComment>(10+ years)</AComment>
    </span>

    <MSkillsList :skill-groups="core"/>

    <span class="OTechstack__heading">
      <h3>Specialized</h3>

      <AComment>(6+ years)</AComment>
    </span>

    <MSkillsList :skill-groups="specialized"/>

    <span class="OTechstack__heading">
      <h3>Emerging</h3>

      <AComment>(1-2 years)</AComment>
    </span>

    <MSkillsList :skill-groups="emerging"/>

    <h3>Other interests</h3>

    <p>Audio production (Ableton Live), Audio Effects Plugin Development (C++, JUCE), Microcontroller programming (C),
      3D design (CAD, Blender), 3D printing (self-built machine, open source slicers).</p>
  </TFlex>
</template>

<script setup lang="ts">
  import { content } from '../../context/content.ts'
  import AComment from '../atoms/AComment.vue'
  import MSkillsList from '../molecules/MSkillsList.vue'
  import TFlex from '../templates/TFlex.vue'

  const {
    skills: {
      core,
      specialized,
      emerging,
    },
  } = content
</script>

<style lang="scss" scoped>
  .OTechstack {
    &__heading {
      display: flex;
    }
  }
</style>