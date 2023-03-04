<template>
  <TFlex
    class="MOpenSourceProject"
    column
  >
    <h3>{{ project.title }}</h3>

    <div>
      <a
        :href="project.demoLink"
        target="_blank"
      >
        <img
          :alt="project.image.alt"
          class="MOpenSourceProject__image"
          :height="project.image.height"
          loading="lazy"
          :src="project.image.src"
          :width="project.image.width"
        >
      </a>

      <template v-if="project.image.attribution">
        <small>{{ project.image.attribution }}</small>
      </template>
    </div>

    <template
      v-for="(paragraph, index) of project.paragraphs"
      :key="index"
    >
      <p v-html="paragraph"/>
    </template>

    <a
      :href="project.demoLink"
      target="_blank"
    >See Demo</a>

    <a
      :href="project.githubLink"
      target="_blank"
    >Github</a>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import type { OpenSourceProject } from '../types/website'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'MOpenSourceProject',
    components: {
      TFlex
    },

    props: {
      project: {
        type: Object as PropType<OpenSourceProject>,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  .MOpenSourceProject {

    &__image {
      height: auto;
      width: 100%;
      border: 2px dashed var(--color-accent);
    }
  }
</style>