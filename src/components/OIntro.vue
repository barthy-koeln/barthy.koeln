<template>
  <TFlex class="OIntro">
    <QNoPrint>
      <img
        alt="Barthy and his white Maine-Coon and European Short-hair cat named Mew"
        class="OIntro__img"
        height="384"
        loading="eager"
        src="/images/barthy_mew-small.webp"
        title="Barthy & Mew the cat"
        width="512"
      >
    </QNoPrint>

    <TFlex
      class="OIntro__content"
      column
    >
      <h1>
        Barth&eacute;l&eacute;my&nbsp;Bonhomme<br>

        (Barthy <em>/bɑːɹtɪ/</em>)
      </h1>

      <hr>

      <p class="OIntro__brief">
        <QNoPrint tag="span">
          <template #yes>
            <span><strong>web:</strong>
              &nbsp;https://barthy.koeln
            </span>

            <br>

            <span>
              <strong>mail:</strong>
              &nbsp;post@barthy.koeln
            </span>

            <br>

            <span>
              <strong>tel:</strong>
              &nbsp;+49 176 30594643
            </span>

            <br>
          </template>
        </QNoPrint>

        Pronouns: He/Him (Er/Ihm)<br>

        Born in France in the summer of 1994<br>

        Located in Köln &amp; Bonn<br>
      </p>

      <hr>

      <QNoPrint>
        <ol class="OIntro__links">
          <template
            v-for="link in links"
            :key="link.target"
          >
            <li>
              <ASocialLink :link="link"/>
            </li>
          </template>
        </ol>
      </QNoPrint>
    </TFlex>
  </TFlex>
</template>

<script lang="ts" setup>
  import type { SocialLink } from '../types/website'
  import ASocialLink from './ASocialLink.vue'
  import TFlex from './TFlex.vue'
  import QNoPrint from './QNoPrint.vue'

  const links: SocialLink[] = [
    {
      label: 'GitHub',
      target: 'https://github.com/barthy-koeln',
      icon: 'github'
    },
    {
      label: 'Stack Overflow',
      target: 'https://stackoverflow.com/users/3808452/barthy',
      icon: 'stack-overflow'
    },
    {
      label: 'Codepen',
      target: 'https://codepen.io/barthy-koeln',
      icon: 'codepen'
    },
    {
      label: 'LinkedIn',
      target: 'https://www.linkedin.com/in/barthy-bonhomme/',
      icon: 'linkedin'
    }
  ]
</script>

<style lang="scss">
  .OIntro {
    flex-wrap: nowrap;

    &__content {
      flex-grow: 0;
      flex-shrink: 1;
      text-align: start;

      h1 em {
        color: var(--color-light);
        font-style: normal;
      }
    }

    &__img {
      height: auto;
      max-width: 512px;
      object-fit: contain;
      width: 100%;
    }

    &__links {
      display: flex;
      gap: var(--spacer-sm);
      list-style-type: none;
    }

    &__brief {
      @media print {
        columns: 2;
        max-height: 5lh;
      }
    }
  }
</style>
