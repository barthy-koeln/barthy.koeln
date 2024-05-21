<script setup lang="ts">

</script>

<template>
  <div class="QPagebreak"/>
</template>

<style lang="scss">
  @media print {
    .QPagebreak {
      break-before: page;
    }
  }

  @media screen {
    .QPagebreak {
      display: none;
    }
  }
</style>