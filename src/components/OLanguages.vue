<template>
  <TFlex
    column
    class="OLanguages"
  >
    <h2>Languages:</h2>
    <table>
      <tr>
        <td>French (native)</td>
        <td><em>// born in France</em></td>
      </tr>

      <tr>
        <td>German (native)</td>
        <td><em>// raised in Germany</em></td>
      </tr>

      <tr>
        <td>English (C1 / advanced)</td>
        <td><em>// daily use in work environments since 2014</em></td>
      </tr>

      <tr>
        <td>Spanish (A1)</td>
        <td><em>// dónde está la biblioteca</em></td>
      </tr>
    </table>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OLanguages',
    components: { TFlex }
  })
</script>