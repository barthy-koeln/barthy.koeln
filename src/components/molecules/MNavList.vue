<template>
  <ol class="MNavList">
    <template
      v-for="link in links as NavLink[]"
      :key="link.target"
    >
      <li>
        <ANavLink v-bind="link"/>
      </li>
    </template>
  </ol>
</template>

<script lang="ts" setup>
  import type { NavLink } from '../../types/website'
  import ANavLink from '../atoms/ANavLink.vue'

  defineProps<{
    links: NavLink[]
  }>()
</script>

<style lang="scss">
  .MNavList {
    display: flex;
    list-style-type: none;

    li {
      display: inline;
    }
  }
</style>