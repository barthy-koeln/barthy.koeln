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

        (Barthy <a
          ref="nofollow"
          href="http://ipa-reader.xyz/?text=baa%CA%81ti&voice=Marlene"
          target="_blank"
        >[baaʁti]</a>)
      </h1>

      <hr>

      <p>
        Pronouns: He/Him (Er/Ihm)<br>

        Born in France in the summer of 1994<br>

        Located in Köln &amp; Asbach (Westerwald)<br>
      </p>

      <hr>

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
    </TFlex>
  </TFlex>
</template>

<script lang="ts" setup>
  import type {SocialLink} from '../types/website'
  import ASocialLink from './ASocialLink.vue'
  import TFlex from './TFlex.vue'

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
  }
</style>