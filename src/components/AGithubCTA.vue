<template>
  <a
    href="https://github.com/barthy-koeln"
    rel="nofollow noopener"
    target="_blank"
    class="AGithubCTA"
  >
    <TFlex class="AGithubCTA__content">
      <img
        src="/icons/github.svg"
        class="AGithubCTA__icon"
        width="64px"
        height="64px"
        loading="lazy"
        alt=""
      />
      <span>More on GitHub &raquo;</span>
    </TFlex>
  </a>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'AGithubCTA',
    components: { TFlex }
  })
</script>

<style lang="scss">
  .AGithubCTA {

    &__content {
      background-color: var(--color-accent);
      color: var(--color-light);
      padding: var(--spacer-lg);
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      font-size: 2rem;
    }

    &__icon {
      filter: invert(94%) sepia(42%) saturate(7007%) hue-rotate(310deg) brightness(99%) contrast(85%);
    }

    &:hover {
      text-decoration-color: var(--color-light);
    }
  }
</style>