<template>
  <ol class="MNavList">
    <template
      v-for="link in links"
      :key="link.target"
    >
      <ANavLink :link="link"/>
    </template>
  </ol>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import type { NavLink } from '../types/website'
  import ANavLink from './ANavLink.vue'

  export default defineComponent({
    name: 'MNavList',
    components: { ANavLink },

    setup () {
      return {
        links: [
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
        ] as NavLink[]
      }
    }
  })
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