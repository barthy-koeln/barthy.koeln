<template>
  <footer class="OFooter">
    <p class="OFooter__hints">
      This website itself does not use cookies, tracking, logging or any other form of data storage.<br>

      <br>

      This website is hosted on servers operated by GitHub&nbsp;Inc,&nbsp;88&nbsp;Colin&nbsp;P&nbsp;&nbsp;Jr&nbsp;St,&nbsp;San&nbsp;Francisco,&nbsp;CA&nbsp;94107,&nbsp;USA.<br>

      Therefore, please refer to the following documents:<br>

      <br>

      <a
        href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub pages data collection</a>

      <br>

      <a
        href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub general privacy statement</a>
    </p>

    <div class="OFooter__imprint">
      <p>Barth&eacute;l&eacute;my Bonhomme</p>

      <p>post@barthy.koeln</p>

      <p>+49&nbsp;176&nbsp;30&nbsp;59&nbsp;46&nbsp;43</p>
    </div>
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
      max-width: 380px;

      @include desktop {
        text-align: start;
      }
    }

    &__imprint {
      @include desktop {
        text-align: end;
      }
    }
  }
</style>
