<template>
  <TFlex class="OOpenSourceSection">
    <h2>Open Source Projects</h2>

    <template
      v-for="(project, index) of projects"
      :key="index"
    >
      <MOpenSourceProject :project="project"/>

      <template v-if="index < projects.length - 1">
        <hr>
      </template>
    </template>
  </TFlex>
</template>

<script lang="ts" setup>
  import TFlex from './TFlex.vue'
  import MOpenSourceProject from './MOpenSourceProject.vue'
  import type { OpenSourceProject } from '../types/website'

  const projects:  OpenSourceProject[] = [
    // {
    //   title: 'Arbitrary Remote Control System (ARCS)',
    //   githubLink: 'https://github.com/arcs-vr',
    //   demoLink: 'https://arcs.barthy.koeln',
    //
    //   image: {
    //     width: 1920,
    //     height: 1280,
    //     src: '/images/arcs.webp',
    //     alt: 'Mockup of two devices using a virtual experience remote control system'
    //   },
    //
    //   paragraphs: [
    //     'My bachelor thesis in early 2020 revolved around web and browser based virtual reality experiences, that were made accessible by combining several devices into a sigle Human Computer Interface (HCI).',
    //     'You can use two smartphones, a smartphone and a laptop, or theoretically any connected device to control the VR experience and enjoy all degrees of freedom.',
    //     'Front-end: Vue.js v2, Aframe, Three.js and Vanilla JS\nBack-end: MQTT'
    //   ]
    // },
    {
      title: 'Scroll-Snap Slider',
      githubLink: 'https://github.com/barthy-koeln/scroll-snap-slider',
      demoLink: 'https://barthy-koeln.github.io/scroll-snap-slider/',

      image: {
        width: 1360,
        height: 736,
        src: '/images/scrollsnap.webp',
        alt: 'Demo of Scroll-Snap-Slider'
      },

      paragraphs: [
        'JavaScript enhanced scroll-snapping used for sliders/carousels.',
        'The goal is to not repeat myself when implementing simple sliders, but also not use one of the huge libraries out there.',
        'Technologies: TypeScript, ES Modules and Classes'
      ]
    },
    {
      title: 'Experiment (WIP): Vue.js v3 + Three.js Animation',
      githubLink: 'https://github.com/barthy-koeln/3d-scroll-experience',
      demoLink: 'https://barthy-koeln.github.io/3d-scroll-experience/',

      image: {
        width: 1920,
        height: 1080,
        src: '/images/3d-scroll-experience.webp',
        alt: 'An interactive 3D Environment with scrollable and clickable animations.'
      },

      paragraphs: [
        'Scrubbing through a keyframed animation, exploration with WASD/Arrow keys controls, and orbit controls. Interaction and reactivity managed in Vue.js.',
        'Technologies: Blender, Vue.js v3, Three.js'
      ]
    },
    {
      title: 'Experiment: Parametrized Canvas Animations',
      githubLink: 'https://github.com/barthy-koeln/generative-lines',
      demoLink: 'https://codepen.io/barthy-koeln/pen/rNjMwrK',

      image: {
        width: 1920,
        height: 937,
        src: '/images/generative-lines.webp',
        alt: 'An interactive 3D Environment with scrollable and clickable animations.'
      },

      paragraphs: [
        'Generate beautiful artworks using some well-defined parameters and a bit of randomness.',
        'Technologies: JS, TWEEN.js'
      ]
    }
  ]
</script>
