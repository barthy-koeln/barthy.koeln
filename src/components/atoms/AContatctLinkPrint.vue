<template>
  <span>
    <strong>{{ label }}:</strong>
    &nbsp;{{ target }}
  </span>
</template>

<script setup lang="ts">
  import type { NavLink } from '../../types/website'

  defineProps<NavLink>()
</script>