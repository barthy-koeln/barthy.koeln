<template>
  <a
    :data-variant="variant"
    :href="target"
    class="ANavLink"
  >
    <span v-html="label"/>
  </a>
</template>

<script lang="ts" setup>
  import type { NavLink } from '../../types/website'

  defineProps<NavLink>()
</script>

<style lang="scss">
  .ANavLink {
    color: var(--color-accent);
    font-family: monospace;
    font-size: var(--fontsize-4);
    padding: .5rem;
    position: relative;
    text-decoration: none;
    text-transform: lowercase;

    @media (width >= 1024px) {
      font-size: var(--fontsize-2);
      padding: 1rem;
    }

    &[data-variant="call"] {
      cursor: url("/icons/phone-square-alt-duotone.svg") 32 32, pointer;
    }

    &[data-variant="write"] {
      cursor: url("/icons/envelope-square-duotone.svg") 32 32, pointer;
    }

    &[data-variant="chat"] {
      cursor: url("/icons/whatsapp-square-brands.svg") 32 32, pointer;
    }

    &:hover {
      text-decoration: none;
    }
  }
</style>
