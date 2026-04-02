<template>
  <div class="APageCount">
    <p>Barthy Bonhomme: page {{ page }} of {{ total }}</p>

    <slot/>
  </div>
</template>

<script
  lang="ts"
  setup
>
const props = defineProps<{
  page: number,
  total: number
}>()

const slots = defineSlots<{
  default: unknown
}>()

const page = props.page
const distance = `${page * 297 - (slots.default ? 13 : 9)}mm`
</script>

<style
  lang="scss"
  scoped
>
.APageCount {
  color: var(--color-white);
  display: none;
  left: var(--spacer-lg);
  position: absolute;
  top: v-bind(distance);

  @media print {
    display: block;
  }
}
</style>