<template>
  <div class="MSkillsList">
    <template
      v-for="group in skillGroups"
      :key="group.name"
    >
      <div>
        <strong><i>{{ group.name }}:</i></strong>&nbsp;

        <template
          v-for="(skill, index) in group.skills"
          :key="skill"
        >
          <span property="schema:skills">{{ skill }}</span>{{ (index + 1) < group.skills.length ? ', ' : '' }}
        </template>
      </div>
    </template>
  </div>
</template>

<script
  lang="ts"
  setup
>
import type { SkillGroup } from '../../types/website'

defineProps<{
  skillGroups: SkillGroup[]
}>()
</script>

<style
  lang="scss"
  scoped
>
@use "../../variables" as *;

.MSkillsList {
  display: flex;
  flex-flow: column nowrap;
  gap: var(--spacer-md) var(--spacer-lg);
}
</style>