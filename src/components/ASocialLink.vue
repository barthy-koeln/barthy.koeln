<template>
  <a
    :href="link.target"
    :title="link.label"
    class="ASocialLink"
    rel="nofollow noopener"
    target="_blank"
  >
    <img
      :src="`/icons/${link.icon}.svg`"
      alt=""
      class="ASocialLink__icon"
      height="32px"
      width="32px"
    >
  </a>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import type { SocialLink } from '../types/website'

  export default defineComponent({
    name: 'ASocialLink',

    props: {
      link: {
        type: Object as PropType<SocialLink>,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  .ASocialLink {
    // thanks Barrett Sonntag @ https://codepen.io/sosuke/pen/Pjoqqp
    --icon-filter: invert(94%) sepia(42%) saturate(7007%) hue-rotate(310deg) brightness(99%) contrast(85%);

    align-items: center;
    display: flex;

    &:hover {
      --icon-filter: invert(56%) sepia(11%) saturate(1221%) hue-rotate(235deg) brightness(88%) contrast(88%);
    }

    &__icon {
      filter: var(--icon-filter);
    }
  }
</style>