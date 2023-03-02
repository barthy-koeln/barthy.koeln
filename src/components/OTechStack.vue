<template>
  <TFlex
    column
    class="OTechStack"
  >
    <h2>Tech Stack &amp; Knowledge</h2>
    <p>A mostly complete list of things.</p>

    <h3>General Development Skills</h3>
    <ul>
      <li>Abstract understanding of programming languages and frameworks</li>
      <li>Fast reading and understanding of documentation and forums</li>
      <li>The urge to learn it all</li>
      <li>Linting, code quality tools and package managers</li>
      <li>Accessibility and inclusivity considerations</li>
      <li>Website and XSS Security considerations</li>
      <li>Performance considerations</li>
      <li>Technical SEO</li>
    </ul>

    <h3>Core technologies</h3>
    <strong>(senior)</strong>
    <ul>
      <li>Symfony</li>
      <li>Symfony API Platform</li>
      <li>Vue.js 2 + 3</li>
      <li>Vanilla JS since ES2016</li>
      <li>SCSS with aBEM <em>// leaning toward using as much native CSS as possible. Yay CSS Variables!</em></li>
      <li>Shell-Scripting (Bash)</li>
      <li>Linux <em>// Ubuntu preferred for Desktop &amp; Servers</em></li>
      <li>Relational Databases &amp; SQL</li>
      <li>git (CLI)</li>
      <li>GitLab CI/CD Platform</li>
    </ul>

    <strong>(intermediate)</strong>
    <ul>
      <li>TypeScript <em>// but senior experience with strictly typed languages</em></li>
      <li>Three.js</li>
      <li>React.js</li>
      <li>webpack, vite.js, rollup.js</li>
      <li>Docker, docker-compose</li>
      <li>Secure cloud- and webhosting</li>
      <li>Apache Solr</li>
    </ul>

    <h3>Infrequent use only:</h3>
    <ul>
      <li>Astro.build</li>
      <li>React Native</li>
      <li>Next.js</li>
      <li>Nuxt.js</li>
      <li>Terraform</li>
      <li>Python</li>
      <li>Golang</li>
      <li>Java</li>
      <li>… <em>// loads more over the years</em></li>
    </ul>

    <h3>Personal use only:</h3>
    <ul>
      <li>C <em>// microcontroller projects e.g. motorized IKEA lamp</em></li>
      <li>C++ <em>// VST audio plugin development</em></li>
    </ul>

    <h3>Other Software skills:</h3>
    <ul>
      <li>Ableton Live & audio production <em>// experienced hobbyist</em></li>
      <li>Blender Modelling, Animation & Rendering <em>// hobbyist</em></li>
      <li>Adobe Photoshop, Illustrator, Lightroom <em>// hobbyist</em></li>
      <li>Figma <em>// designing, prototyping, implementation</em></li>
      <li>Adobe XD <em>// designing, prototyping, implementation</em></li>
    </ul>
  </TFlex>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TFlex from './TFlex.vue'

  export default defineComponent({
    name: 'OTechStack',
    components: { TFlex }
  })
</script>