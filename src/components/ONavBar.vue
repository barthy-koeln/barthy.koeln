<template>
  <nav class="ONavBar">
    <img
      alt="barthy.koeln stylized logo in typical dark theme coding environment colors"
      class="ONavBar__logo"
      height="33px"
      loading="eager"
      src="/images/barthy_logo.svg"
      title="barthy.koeln | Software Engineering"
      width="256px"
    >

    <div class="ONavBar__nav">
      <MNavList/>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  import MNavList from './MNavList.vue'
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

    @media print {
      display: none;
    }

    &__logo {
      max-width: 50vw;
    }
  }
</style>
