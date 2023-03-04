<template>
  <TFlex
    class="OFreelanceReferences"
    column
  >
    <h2>Freelance Work & Projects</h2>

    <p>Freelance projekts with custom Content-Management-System (CMS) written in Symfony PHP, Vue.js, and vanilla tools.</p>

    <TFlex>
      <template
        v-for="project in projects"
        :key="project.name"
      >
        <MProjectCard :project="project"/>
      </template>
    </TFlex>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import type { ReferenceProject } from '../types/website'
  import MProjectCard from './MProjectCard.vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OFreelanceReferences',

    components: {
      MProjectCard,
      TFlex
    },

    setup () {
      return {
        projects: [
          {
            name: '3D-Darsteller',
            link: 'https://www.3d-darsteller.de',
            image: '/images/3d-darsteller.webp'
          },
          {
            name: 'Display Vision International',
            link: 'https://displayvision.net/',
            image: '/images/displayvision.webp'
          },
          {
            name: 'Ultramarin Badinstallation',
            link: 'https://www.ultramarin.de/',
            image: '/images/ultramarin.webp'
          },
          {
            name: 'THIRD EYE',
            link: 'https://third3ye.de/',
            image: '/images/third-eye.webp'
          },
          {
            name: 'Lucas Aritz | Graphic Design, etc.',
            link: 'https://lucasaritz.com/',
            image: '/images/lucasaritz.webp'
          },
          {
            name: 'keinegrenzen Festival 2019',
            link: 'https://festival2019.keinegrenzen.org/',
            image: '/images/keinegrenzen.webp'
          }
        ] as ReferenceProject[]
      }
    }
  })
</script>