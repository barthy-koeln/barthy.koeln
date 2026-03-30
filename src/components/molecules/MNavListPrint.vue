<template>
  <ol class="MNavListPrint">
    <template
      v-for="link in links as NavLink[]"
      :key="link.target"
    >
      <li>
        <ANavLinkPrint v-bind="link"/>
      </li>
    </template>
  </ol>
</template>

<script
  lang="ts"
  setup
>
import type { NavLink } from '../../types/website'
import ANavLinkPrint from '../atoms/AContatctLinkPrint.vue'

defineProps<{
  links: NavLink[]
}>()
</script>

<style lang="scss">
.MNavListPrint {
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    display: inline;
  }
}
</style>