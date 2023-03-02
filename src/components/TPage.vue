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
    components: { OFooter, ONavBar }
  })
</script>

<style lang="scss">
  @use "../variables" as *;
  @use "@fontsource/ubuntu/scss/mixins" as Ubuntu;

  @include Ubuntu.fontFace(
    $weight: 400,
    $display: swap,
    $unicodeMap: ("latin")
  );

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

    h1 {
      font-size: var(--fontsize-1);
    }

    h2 {
      font-size: var(--fontsize-2);
    }

    h3, h4, h5, h6 {
      font-size: var(--fontsize-3);
    }

    p {
      line-height: 1.4;
    }

    hr {
      width: 100%;
      background: currentColor;
      height: 1px;
      opacity: .5;
    }

    blockquote {
      padding-inline-start: var(--spacer-md);
      padding-block: var(--spacer-sm);
      border-left: 2px solid var(--color-accent);
      font-style: italic;
      max-width: 512px;
    }

    em {
      font-family: monospace;
      color: var(--color-light);
      padding-inline-start: var(--spacer-sm);
      font-style: normal;
      letter-spacing: -1px;
    }

    mark {
      background-color: var(--color-light);
      color: var(--color-black);
      padding: .2em;
    }

    i {
      font-style: normal;
      color: var(--color-accent);
    }

    a {
      color: var(--color-light);
      cursor: url("/icons/hand-pointer-duotone.svg") 16 4, pointer;

      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--color-accent);
      }

      &[target="_blank"] {
        cursor: url("/icons/external-link-square-duotone.svg") 16 16, pointer;
      }
    }
  }
</style>