<template>
  <TFlex
    column
    class="OScrollSnapSection"
  >
    <h3>Scroll-Snap Slider</h3>

    <img
      loading="lazy"
      width="1436"
      height="718"
      src="/images/scrollsnap.webp"
      alt="Demo of Scroll-Snap-Slider"
      class="OScrollSnapSection__img"
    >

    <p>JavaScript enhanced scroll-snapping used for sliders/carousels.</p>
    <p>
      The goal is to not repeat myself when implementing simple sliders, but also not use one of the huge libraries
      out there.
    </p>

    <a
      href="https://barthy-koeln.github.io/scroll-snap-slider/"
      target="_blank"
    >See Demo</a>

    <a
      href="https://github.com/barthy-koeln/scroll-snap-slider"
      target="_blank"
    >Github</a>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OScrollSnapSection',
    components: { TFlex }
  })
</script>

<style lang="scss">
  .OScrollSnapSection {

    &__img {
      width: 100%;
      height: auto;
    }
  }
</style>