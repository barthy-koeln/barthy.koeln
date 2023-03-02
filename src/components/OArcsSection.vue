<template>
  <TFlex
    column
    class="OArcsSection"
  >
    <h3>Arbitrary Remote Control System (ARCS)</h3>

    <div class="OArcsSection__logoWrapper">
      <AArcLogo class="OArcsSection__logo"/>
    </div>

    <p>
      My bachelor thesis in early 2020 revolved around web and browser based virtual reality experiences, that were
      made accessible by combining several devices into a sigle Human Computer Interface (HCI).
    </p>
    <p>
      You can use two smartphones, a smartphone and a laptop, or theoretically any connected device to control the VR
      experience and enjoy all degrees of freedom.
    </p>

    <p>
      Front-end: Vue.js v2, Aframe, Three.js and Vanilla JS<br>
    Back-end: MQTT
    </p>

    <a
      href="https://arcs.barthy.koeln"
      target="_blank"
    >See Demo</a>
    <a
      href="https://github.com/arcs-vr"
      target="_blank"
    >Github</a>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AArcLogo from './AArcLogo.vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OArcsSection',
    components: { TFlex, AArcLogo }
  })
</script>

<style lang="scss">
  .OArcsSection {

    &__logoWrapper {
      padding: var(--spacer-lg);
      height: 256px;
    }

    &__logo {
      width: 100%;
      height: 100%;
    }
  }
</style>