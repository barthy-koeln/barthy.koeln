<template>
  <span>
    <strong>{{ label }}:</strong>

    &nbsp;<a :href="url ?? target" :property="propertyType">{{ target }}</a>
  </span>
</template>

<script setup lang="ts">
import type { NavLink } from '../../types/website'
import { computed } from 'vue'

const props = defineProps<NavLink>()

const propertyType = computed(() => {
  if (props.url?.startsWith('mailto:')){
    return 'schema:email'
  }

  if (props.url?.startsWith('tel:')){
    return 'schema:telephone'
  }

  return 'schema:sameAs'
})
</script>