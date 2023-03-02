<template>
  <nav class="ONavBar">
    <img
      class="ONavBar__logo"
      src="/images/barthy_logo.svg"
      width="256px"
      height="33px"
      alt="barthy.koeln stylized logo in typical dark theme coding environment colors"
      title="barthy.koeln | Software Engineering"
      loading="eager"
    />
    <div class="ONavBar__nav">
      <MNavList/>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MNavList from './MNavList.vue'

  export default defineComponent({
    name: 'ONavBar',
    components: { MNavList }
  })
</script>

<style lang="scss">
  @use "../variables" as *;

  .ONavBar {
    align-items: center;
    background-color: var(--color-black);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    padding: 2rem;

    @include desktop {
      flex-direction: row;
    }

    &__logo {
      max-width: 50vw;
    }
  }
</style>