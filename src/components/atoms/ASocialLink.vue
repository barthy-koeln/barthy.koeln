<template>
  <a
    :href="link.target"
    :title="link.label"
    class="ASocialLink"
    property="schema:sameAs"
    rel="nofollow noopener"
    target="_blank"
    :aria-label="`Profile on ${link.variant} (external link)`"
  >
    <img
      v-if="link.variant"
      :src="`/icons/${link.variant}.svg`"
      alt=""
      class="ASocialLink__icon"
      height="32"
      width="32"
    >
  </a>
</template>

<script
  lang="ts"
  setup
>
import type { NavLink } from '../../types/website'

defineProps<{
  link: NavLink
}>()
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