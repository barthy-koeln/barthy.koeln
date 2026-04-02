<template>
  <TFlex
    class="TEntry"
  >
    <div
      class="TEntry__date"
      :resource="resource"
    >
      <template v-if="parsedEnd">
        <span
          :property="isJob ? 'schema:endDate' : 'schema:dateCreated'"
          :content="parsedEnd.toISOString().split('T')[0]"
        >
          {{ formattedEnd }}
        </span>
      </template>

      <template v-else>
        <span>Present</span>
      </template>

      &nbsp;&mdash;&nbsp;<br/>

      <span
        :property="isJob ? 'schema:startDate' : undefined"
        :content="parsedStart.toISOString().split('T')[0]"
      >
        {{ formattedStart }}
      </span>
    </div>

    <TFlex column>
      <slot/>
    </TFlex>
  </TFlex>
</template>

<script
  lang="ts"
  setup
>
import TFlex from './TFlex.vue'
import { formatDate } from '../../utils/getDateRange.ts'
import type { SchemaEducation, SchemaJob } from '../../types/website'
import { computed } from 'vue'

const props = defineProps<{
  item: SchemaJob | SchemaEducation
}>()

const isJob = computed(() => {
  return 'roleName' in props.item
})

const resource = computed(() => {
  if (isJob.value) {
    return `${props.item.url}-role`
  }

  return `${props.item.url}-credential`
})

const parsedStart = computed(() => {
  return new Date(props.item.startDate)
})

const formattedStart = computed(() => {
  return formatDate(parsedStart.value)
})

const parsedEnd = computed(() => {
  return props.item.endDate ? new Date(props.item.endDate) : null
})

const formattedEnd = computed(() => {
  return parsedEnd.value ? formatDate(parsedEnd.value) : null
})
</script>

<style
  lang="scss"
  scoped
>
@use "../../variables" as *;

.TEntry {
  flex-wrap: nowrap;

  &__date {
    background-color: var(--color-background);
    display: flex;
    flex-wrap: wrap;
    font-size: var(--fontsize-3);
    font-weight: bold;
    height: 100%;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;

    span {
      white-space: nowrap;
    }

    @include desktop {
      top: var(--spacer-md);
      width: 132px;
    }

    @media print {
      left: unset;
      position: relative;
      top: unset;
    }
  }
}
</style>