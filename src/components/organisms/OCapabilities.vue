<template>
  <TFlex
    class="OCapabilities"
    column
  >
    <h2>Capabilities and Knowledge</h2>

    <TFlex column>
      <template
        v-for="(group, index) of capabilities"
        :key="index"
      >
        <ul>
          <template
            v-for="capability of group"
            :key="capability"
          >
            <li property="schema:knowsAbout">{{ capability }}</li>
          </template>
        </ul>
      </template>
    </TFlex>
  </TFlex>
</template>

<script
  lang="ts"
  setup
>
import TFlex from '../templates/TFlex.vue'
import { content } from '../../context/content.ts'

const {
  skills: {
    capabilities
  }
} = content
</script>
