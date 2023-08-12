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
  import type {NavLink} from '../types/website'

  defineProps<{
    links: NavLink[]
  }>()
</script>

<style lang="scss">
  .OFloatingNav {
    height: 100%;
    left: calc(-1 * var(--spacer-lg));
    position: absolute;
    top: 0;
    transform: translateX(-100%);

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
