<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener"
    class="MProjectCard"
  >
    <img
      class="MProjectCard__image"
      :src="project.image"
      :alt="project.name"
      loading="lazy"
    />
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
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: .5rem;
    max-width: 100%;
    text-decoration: none;
    --name-scale: 1;

    &:hover {
      --name-scale: 1.1;
    }

    &__image {
      display: flex;
    }

    &__name {
      display: flex;
      font-size: 1.4rem;
      line-height: 1;
      margin: auto;
      padding: 1rem 1rem 1rem 1.5rem;
      position: relative;
      text-align: center;
      transition: transform var(--anim-duration) var(--anim-easing);
      transform: scale(var(--name-scale));
    }
  }
</style>