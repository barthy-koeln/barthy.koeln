<template>
  <div class="ONavBar">
    <img
      alt="barthy.koeln stylized logo in typical dark theme coding environment colors"
      class="ONavBar__logo"
      height="33"
      loading="eager"
      src="/images/barthy_logo.svg"
      title="barthy.koeln | Software Engineering"
      width="256"
    >

    <div class="ONavBar__nav">
      <MNavList :links="contact" aria-label="Contact Links"/>
    </div>
  </div>
</template>

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'
import MNavList from '../molecules/MNavList.vue'

const { contact } = content
</script>

<style lang="scss">
@use "../../variables" as *;

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
