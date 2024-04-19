<template>
  <ol class="MNavList">
    <template
      v-for="link in links"
      :key="link.target"
    >
      <li>
        <ANavLink :link="link"/>
      </li>
    </template>
  </ol>
</template>

<script lang="ts" setup>
  import type {NavLink} from '../types/website'
  import ANavLink from './ANavLink.vue'

  const links: NavLink[] = [
    {
      label: 'Call',
      target: 'tel:+4917630594643'
    },
    {
      label: 'Write',
      target: 'mailto:post@barthy.koeln'
    },
    {
      label: 'Chat',
      target: ' https://wa.me/4917630594643'
    }
  ]
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