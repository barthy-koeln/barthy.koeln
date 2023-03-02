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

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import type { NavLink } from '../types/website'

  export default defineComponent({
    name: 'OFloatingNav',

    props: {
      links: {
        type: Array as PropType<NavLink[]>,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  .OFloatingNav {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(calc(-100% - var(--spacer-lg)));
    height: 100%;

    &__list {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      gap: var(--spacer-sm);
      position: sticky;
      top: var(--spacer-lg)
    }
  }
</style>