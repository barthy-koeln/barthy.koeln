<template>
  <div class="TPage">
    <ONavBar/>

    <main>
      <slot/>
    </main>

    <OFooter/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import OFooter from './OFooter.vue'
  import ONavBar from './ONavBar.vue'

  export default defineComponent({
    name: 'TPage',
    components: {
      OFooter,
      ONavBar 
    }
  })
</script>

<style lang="scss">
  @use "../variables" as *;

  .TPage {
    min-height: 100vh;

    main {
      align-items: center;
      color: var(--color-white);
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      max-width: var(--bp-desktop);
      padding: 4rem 1rem;
      width: 100%;

      @include desktop {
        padding: 4rem 0;
      }
    }
  }
</style>