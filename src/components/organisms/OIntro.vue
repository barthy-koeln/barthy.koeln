<template>
  <TFlex class="OIntro">
    <img
      alt="Barthy and his white Maine-Coon and European Short-hair cat named Mew"
      class="OIntro__img"
      height="384"
      loading="eager"
      src="/images/barthy_mew-small.webp"
      title="Barthy & Mew the cat"
      width="512"
    >

    <TFlex
      class="OIntro__content"
      column
    >
      <h1>
        Barth&eacute;l&eacute;my&nbsp;Bonhomme<br>

        (Barthy <em>/bɑːɹtɪ/</em>)
      </h1>

      <hr>

      <div class="OIntro__brief">
        <QNoPrint tag="div">
          <template #yes>
            <MNavListPrint :links="content.contactPrint"/>
          </template>
        </QNoPrint>

        <div>
          He/Him (Er/Ihm)<br>

          <strong>EU Citizen</strong>

          happy to relocate within few months.<br>

          <strong>Fluent in</strong> French, German, English (C1)
        </div>
      </div>

      <hr>

      <ol class="OIntro__links">
        <template
          v-for="link in socialLinks"
          :key="link.target"
        >
          <li>
            <ASocialLink :link="link"/>
          </li>
        </template>
      </ol>
    </TFlex>
  </TFlex>
</template>

<script lang="ts" setup>
  import { content } from '../../context/content.ts'
  import ASocialLink from '../atoms/ASocialLink.vue'
  import MNavListPrint from '../molecules/MNavListPrint.vue'
  import QNoPrint from '../quarks/QNoPrint.vue'
  import TFlex from '../templates/TFlex.vue'

  const { socialLinks } = content
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

      @media print {
        max-width: 264px;
      }
    }

    &__links {
      display: flex;
      gap: var(--spacer-sm);
      list-style-type: none;
    }

    &__brief {
      @media print {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-height: 5lh;
      }
    }
  }
</style>
