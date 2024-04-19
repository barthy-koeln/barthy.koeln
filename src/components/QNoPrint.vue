<template>
  <Component
    :is="tag ?? 'div'"
    v-if="$slots.default"
    class="QNoPrint"
  >
    <slot/>
  </Component>

  <Component
    :is="tag ?? 'div'"
    v-if="$slots.yes"
    class="QYesPrint"
  >
    <slot name="yes"/>
  </component>
</template>

<script
  setup
  lang="ts"
>
  defineProps<{
    tag?: string
  }>()
</script>

<style
  scoped
  lang="scss"
>
.QNoPrint {
  display: contents;

  @media print {
    display: none;
  }
}

.QYesPrint {
  display: none;

  @media print {
    display: contents;
  }
}
</style>
