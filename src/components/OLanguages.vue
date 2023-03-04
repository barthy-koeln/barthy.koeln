<template>
  <TFlex
    class="OLanguages"
    column
  >
    <h2>Languages:</h2>

    <table>
      <tr>
        <td>French (native)</td>

        <td><AComment>born in France</AComment></td>
      </tr>

      <tr>
        <td>German (native)</td>

        <td><AComment>raised in Germany</AComment></td>
      </tr>

      <tr>
        <td>English (C1)</td>

        <td><AComment>daily use in work environments since 2014</AComment></td>
      </tr>

      <tr>
        <td>Spanish (A1)</td>

        <td><AComment>dónde está la biblioteca</AComment></td>
      </tr>
    </table>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AComment from './AComment.vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OLanguages',
    components: {
      AComment,
      TFlex 
    }
  })
</script>

<style lang="scss">
  .OLanguages {
    td {
      width: 0;
    }
  }
</style>