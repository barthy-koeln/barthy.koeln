<template>
  <TFlex
    class="MOpenSourceProject"
    column
  >
    <h3>{{ project.title }}</h3>

    <div class="MOpenSourceProject__imageWrapper">
      <a
        :href="project.demoLink"
        class="MOpenSourceProject__imageLink"
        target="_blank"
      >
        <img
          :alt="project.image.alt"
          :height="project.image.height"
          :src="project.image.src"
          :width="project.image.width"
          class="MOpenSourceProject__image"
          loading="lazy"
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
    >GitHub</a>
  </TFlex>
</template>

<script lang="ts" setup>
  import type { OpenSourceProject } from '../../types/website'
  import TFlex from '../templates/TFlex.vue'

  defineProps<{
    project: OpenSourceProject
  }>()
</script>

<style lang="scss">
  .MOpenSourceProject {
    &__imageWrapper {
      width: 100%;
    }

    &__imageLink {
      display: block;
      width: 100%;
    }

    &__image {
      border: 2px dashed var(--color-accent);
      display: block;
      height: auto;
      width: 100%;
    }
  }
</style>
