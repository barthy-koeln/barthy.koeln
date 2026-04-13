<template>
  <TFlex class="OIntro">
    <img
      alt="Barthy and his norwegian forrest mix cat named Norbert"
      class="OIntro__img"
      height="385"
      loading="eager"
      property="schema:image"
      src="/images/barthy_and_norbert-small.webp"
      title="Barthy & Norbert the cat"
      width="512"
    >

    <TFlex
      class="OIntro__content"
      column
    >
      <h1 class="OIntro__heading">
        <span property="schema:givenName">{{ person.givenName }}</span>&nbsp;

        <span property="schema:familyName">{{ person.familyName }}</span>

        <span
          class="OIntro__alternateName"
          property="schema:alternateName"
          typeof="schema:PronounceableText"
        >
          (<span property="schema:textValue">{{ person.alternateName }}</span>&nbsp;

          <em property="schema:phoneticText">{{ person.phoneticName }}</em>)
        
          <meta
            content="IPA"
            property="schema:speechToTextMarkup"
          />

          <meta
            content="de-DE"
            property="schema:inLanguage"
          />
        </span>
      </h1>

      <hr>

      <div class="OIntro__brief">
        <QNoPrint tag="div">
          <template #yes>
            <MNavListPrint :links="content.contactPrint"/>
          </template>
        </QNoPrint>

        <div>
          <span property="schema:pronouns">{{ person.pronouns }}</span>

          <br>

          <strong
            property="schema:nationality"
            typeof="schema:Country"
          >
            <span
              :content="person.nationality.content"
              property="schema:name"
            >
              {{ person.nationality.label }}
            </span>
          </strong>

          {{ person.relocationStatus }}<br>

          <strong>Fluent in&nbsp;</strong>

          <template
            v-for="(language, index) in person.languages.native"
            :key="language.code"
          >
            <span property="schema:knowsLanguage">{{ language.name }}</span>

            <template v-if="index < person.languages.native.length - 1">&nbsp;&amp;&nbsp;</template>
          </template>&nbsp;(Native),

          <template
            v-for="(language, index) in person.languages.fluent"
            :key="language.code"
          >
            <span property="schema:knowsLanguage">{{ language.name }}</span>

            <template v-if="index < person.languages.fluent.length - 1">
              &nbsp;&amp;&nbsp;
            </template>
          </template>&nbsp;(C1)
        </div>
      </div>

      <hr>

      <ol class="OIntro__links" aria-label="Social Links">
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

<script
  lang="ts"
  setup
>
import { content } from '../../context/content.ts'
import ASocialLink from '../atoms/ASocialLink.vue'
import MNavListPrint from '../molecules/MNavListPrint.vue'
import QNoPrint from '../quarks/QNoPrint.vue'
import TFlex from '../templates/TFlex.vue'

const { socialLinks, person } = content
</script>

<style lang="scss">
.OIntro {
  flex-wrap: nowrap;

  &__content {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: start;
  }

  &__heading {
    display: flex;
    flex-wrap: wrap;

    em {
      color: var(--color-light);
      font-style: normal;
    }
  }

  &__alternateName {
    align-items: baseline;
    display: flex;
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
