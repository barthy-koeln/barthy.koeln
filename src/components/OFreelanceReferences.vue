<template>
  <TFlex
    class="OFreelanceReferences"
    column
  >
    <h2>Freelance Work & Projects</h2>

    <p>Selection of publicly available freelance projects.</p>

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

<script lang="ts" setup>
  import type { ReferenceProject } from '../types/website'
  import MProjectCard from './MProjectCard.vue'
  import TFlex from './TFlex.vue'

  const projects: ReferenceProject[] = [
    {
      name: 'Display Vision International',
      link: 'https://displayvision.net/',
      image: {
        alt: 'Elegant and modern trade fair booth with contemporary art',
        src: '/images/displayvision.webp',
        width: 500,
        height: 256
      }
    },
    {
      name: 'Lucas Aritz | Graphic Design, etc.',
      link: 'https://lucasaritz.com/',
      image: {
        alt: 'Abstract digital artwork of colorful pipes',
        src: '/images/lucasaritz.webp',
        width: 428,
        height: 256
      }
    },
    {
      name: '3D-Darsteller',
      link: 'https://www.3d-darsteller.de',
      image: {
        alt: 'Eagle-eye perspective rendering of a old industrial building',
        src: '/images/3d-darsteller.webp',
        width: 500,
        height: 256
      }
    },
    {
      name: 'Ultramarin Badinstallation',
      link: 'https://www.ultramarin.de/',
      image: {
        alt: 'Elegant and modern designer bathroom in white with green nature accents',
        src: '/images/ultramarin.webp',
        width: 600,
        height: 256
      }
    },
    {
      name: 'THIRD EYE',
      link: 'https://third3ye.de/',
      image: {
        alt: 'Red logo on black background, stylized "third eye" as "3YE"',
        src: '/images/third-eye.webp',
        width: 400,
        height: 256
      }
    },
    {
      name: 'keinegrenzen Festival 2019',
      link: 'https://festival2019.keinegrenzen.org/',
      image: {
        alt: 'Abstract digital artwork representing a festival poster',
        src: '/images/keinegrenzen.webp',
        width: 572,
        height: 256
      }
    }
  ]
</script>
