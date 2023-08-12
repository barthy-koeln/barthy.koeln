<template>
  <footer class="OFooter">
    <div class="OFooter__imprint">
      <p>Barth&eacute;l&eacute;my Bonhomme</p>

      <p>post@barthy.koeln</p>

      <p>+49&nbsp;176&nbsp;30&nbsp;59&nbsp;46&nbsp;43</p>
    </div>

    <p class="OFooter__hints">
      This site does not use cookies, tracking, logging,<br>or any other form of data storage.
    </p>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
  @use "../variables" as *;

  .OFooter {
    align-items: center;
    background-color: var(--color-black);
    color: var(--color-white);
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: space-between;
    padding: 2rem;
    text-align: center;

    @include desktop {
      flex-direction: row;
    }

    &__hints {
      max-width: 512px;

      @include desktop {
        text-align: end;
      }
    }

    &__imprint {
      @include desktop {
        text-align: start;
      }
    }
  }
</style>
