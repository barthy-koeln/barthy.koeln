<template>
  <div class="OFloatingNav">
    <ol class="OFloatingNav__list">
      <template
        v-for="link in links"
        :key="link.target"
      >
        <li>
          <a :href="`#${link.target}`">{{ link.label }}</a>
        </li>
      </template>
    </ol>
  </div>
</template>

<script lang="ts" setup>
  import type { NavLink } from '../types/website'

  defineProps<{
    links: NavLink[]
  }>()
</script>

<style lang="scss">
@use "../variables" as *;

  .OFloatingNav {
    background-color: var(--color-background);
    height: 100%;
    left: calc(-1 * var(--spacer-lg));
    padding: var(--spacer);
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    z-index: 1000;

    &:focus,
    &:focus-within {
      transform: translateX(var(--spacer));
    }

    @include desktop {
      &,
      &:focus,
      &:focus-within {
        transform: translateX(-100%);
      }
    }

    @media print {
      display: none;
    }
    
    &__list {
      display: flex;
      flex-direction: column;
      gap: var(--spacer-sm);
      list-style-type: none;
      position: sticky;
      top: var(--spacer-lg)
    }
  }
</style>
