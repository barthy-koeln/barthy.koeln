<template>
  <a
    class="AGithubCTA"
    href="https://github.com/barthy-koeln"
    rel="nofollow noopener"
    target="_blank"
  >
    <TFlex class="AGithubCTA__content">
      <img
        alt=""
        class="AGithubCTA__icon"
        height="64px"
        loading="lazy"
        src="/icons/github.svg"
        width="64px"
      >

      <span>More on GitHub &raquo;</span>
    </TFlex>
  </a>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'AGithubCTA',
    components: {
      TFlex
    }
  })
</script>

<style lang="scss">
  .AGithubCTA {
    &__content {
      align-items: center;
      background-color: var(--color-accent-dark);
      color: var(--color-light);
      font-size: 2rem;
      justify-content: flex-end;
      padding: var(--spacer-lg);
      width: 100%;
    }

    &__icon {
      filter: invert(94%) sepia(42%) saturate(7007%) hue-rotate(310deg) brightness(99%) contrast(85%);
    }

    &:hover {
      text-decoration-color: var(--color-light);
    }
  }
</style>