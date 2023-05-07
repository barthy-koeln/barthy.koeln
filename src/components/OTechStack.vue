<template>
  <TFlex
    class="OTechStack"
    column
  >
    <h2>Tech Stack &amp; Knowledge</h2>

    <p>A mostly complete list of things.</p>

    <h3>General Development Skills</h3>

    <ul>
      <li>Abstract understanding of programming languages and frameworks</li>

      <li>Fast reading and understanding of documentation and forums</li>

      <li>The urge to learn it all</li>

      <li>Linting, code quality tools and package managers</li>

      <li>Unit-, integration-, and functional testing</li>

      <li>Reviews &amp; constructive criticism</li>

      <li>Accessibility and inclusivity considerations</li>

      <li>Website and XSS security considerations</li>

      <li>Performance considerations</li>

      <li>Technical SEO</li>
    </ul>

    <h3>Core Technologies</h3>

    <strong>Senior Level</strong>

    <ul>
      <li>Symfony <AComment>+ ecosystem, e.g. Doctrine, Twig, API Platform, …</AComment></li>

      <li>Vue.js 2 + 3 <AComment>+ ecosystem, e.g. vuex, pinia, router, …</AComment></li>

      <li>Vanilla JS since ES2016</li>

      <li>SCSS with aBEM <AComment>leaning toward using as much native CSS as possible. Yay CSS variables!</AComment></li>

      <li>Shell-Scripting (Bash)</li>

      <li>Linux <AComment>Ubuntu preferred for desktop &amp; servers</AComment></li>

      <li>Relational databases &amp; SQL</li>

      <li>git (CLI)</li>
    </ul>

    <strong>Intermediate Level</strong>

    <ul>
      <li>TypeScript <AComment>but senior experience with strictly typed languages</AComment></li>

      <li>Three.js</li>

      <li>React.js</li>

      <li>Webpack, vite.js, rollup.js</li>

      <li>Docker, docker-compose</li>

      <li>GitLab CI/CD Platform</li>

      <li>Secure cloud- and webhosting</li>

      <li>Apache Solr</li>
    </ul>

    <h3>Infrequent Use Only</h3>

    <ul>
      <li>Astro.build <AComment>Always with Vue.js</AComment></li>

      <li>React Native</li>

      <li>Next.js</li>

      <li>Nuxt.js</li>

      <li>Terraform</li>

      <li>Python</li>

      <li>Go</li>

      <li>Java</li>

      <li>… <AComment>loads more over the years</AComment></li>
    </ul>

    <h3>Personal Use Only</h3>

    <ul>
      <li>C <AComment>microcontroller projects e.g. motorized IKEA lamp</AComment></li>

      <li>C++ <AComment>VST audio plugin development</AComment></li>
    </ul>

    <h3>Other Software skills:</h3>

    <ul>
      <li>Ableton Live & audio production <AComment>experienced hobbyist</AComment></li>

      <li>Blender modelling, animation, simulation & rendering <AComment>hobbyist</AComment></li>

      <li>Adobe Photoshop, Illustrator, Lightroom <AComment>hobbyist</AComment></li>

      <li>Figma <AComment>designing, prototyping, implementation</AComment></li>

      <li>Adobe XD <AComment>designing, prototyping, implementation</AComment></li>
    </ul>
  </TFlex>
</template>

<script lang="ts" setup>
  import AComment from './AComment.vue'
  import TFlex from './TFlex.vue'
</script>
