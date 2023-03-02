<template>
  <TFlex class="OIntro">
    <img
      src="/images/barthy_mew-small.webp"
      alt="Barthy and his white Maine-Coon cat named Mew"
      title="Barthy & Mew the cat"
      width="512px"
      height="384px"
    />

    <TFlex
      column
      class="OIntro__content"
    >
      <h1>
        Barth&eacute;l&eacute;my&nbsp;Bonhomme<br>
        (Barthy <a
        target="_blank"
        ref="nofollow"
        href="http://ipa-reader.xyz/?text=baa%CA%81ti&voice=Marlene"
      >[baaʁti]</a>)
      </h1>

      <hr>

      <p>
        Pronouns: He/Him (Er/Ihm)<br/>
        Born in in the summer of 1994<br>
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

<script lang="ts">
  import { defineComponent } from 'vue'
  import type { SocialLink } from '../types/website'
  import ASocialLink from './ASocialLink.vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OIntro',

    components: {
      ASocialLink,
      TFlex
    },

    setup () {
      return {
        links: [
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
        ] as SocialLink[]
      }
    }
  })
</script>

<style lang="scss">
  .OIntro {
    flex-wrap: nowrap;

    &__content {
      text-align: start;
      flex-shrink: 1;
      flex-grow: 0;
    }

    &__links {
      list-style-type: none;
      display: flex;
      gap: var(--spacer-sm);
    }
  }
</style>