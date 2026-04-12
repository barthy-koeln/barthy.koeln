<template>
  <nav class="OFloatingNav">
    <ol class="OFloatingNav__list">
      <template
        v-for="link in links"
        :key="link.target"
      >
        <li>
          <a :href="`#${link.target}`">{{ link.label }}</a>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'

const { links } = content
</script>

<style lang="scss">
@use "../../variables" as *;

.OFloatingNav {
  background-color: var(--color-background);
  height: 100%;
  left: calc(-1 * var(--spacer-lg));
  opacity: 0;
  padding: var(--spacer);
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  z-index: 1000;

  &:focus,
  &:focus-within {
    opacity: 1;
    transform: translateX(var(--spacer));
  }

  @include widescreen {
    &,
    &:focus,
    &:focus-within {
      opacity: 1;
      transform: translateX(-100%);
    }
  }

  @media print {
    display: none;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--spacer-sm);
    list-style-type: none;
    position: sticky;
    top: var(--spacer-lg)
  }
}
</style>
