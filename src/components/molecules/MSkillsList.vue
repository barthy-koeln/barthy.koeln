<template>
  <div class="MSkillsList">
    <template v-for="group in skillGroups" :key="group.name">
      <div>
        <strong><i>{{ group.name }}:</i></strong>&nbsp;

        <template v-for="(skill, index) in group.skills" :key="skill">
          <span>{{ skill }}</span>{{ (index + 1) < group.skills.length ? ', ' : '' }}
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { SkillGroup } from '../../types/website'

  defineProps<{
    skillGroups: SkillGroup[]
  }>()

  const levelMap: Map<number, string> = new Map([
    [-5, 'Hobbyist'],
    [-7, 'Studied & Hobbyist'],
    [-10, 'Experienced Hobbyist'],
  ])
</script>

<style scoped lang="scss">
  @use "../../variables" as *;

  .MSkillsList {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--spacer-md) var(--spacer-lg);
  }
</style>