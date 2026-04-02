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
  lang="ts"
  setup
>
defineProps<{
  tag?: string
}>()
</script>

<style
  lang="scss"
  scoped
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
