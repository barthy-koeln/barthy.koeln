<template>
  <a
    :href="project.link"
    class="MProjectCard"
    rel="noopener"
    target="_blank"
  >
    <img
      :alt="project.image.alt"
      :src="project.image.src"
      :width="project.image.width"
      :height="project.image.width"
      class="MProjectCard__image"
      loading="lazy"
    >

    <h3 class="MProjectCard__name">{{ project.name }}</h3>
  </a>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import type { ReferenceProject } from '../types/website'

  export default defineComponent({
    name: 'MProjectCard',

    props: {
      project: {
        type: Object as PropType<ReferenceProject>,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  .MProjectCard {
    --name-scale: 1;

    align-items: center;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: .5rem;
    max-width: 100%;
    text-decoration: none;

    &:hover {
      --name-scale: 1.1;
    }

    &__image {
      display: flex;
      max-width: 100%;
      max-height: 256px;
      height: auto;
    }

    &__name {
      display: flex;
      font-size: 1.4rem;
      line-height: 1;
      margin: auto;
      padding: 1rem 1rem 1rem 1.5rem;
      position: relative;
      text-align: center;
      transform: scale(var(--name-scale));
      transition: transform var(--anim-duration) var(--anim-easing);
    }
  }
</style>