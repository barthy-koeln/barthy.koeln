<template>
  <TFlex
    class="OTechStack"
    column
  >
    <h2>Skills &amp; Knowledge</h2>

    <QNoPrint>
      <p>General properties, tools and technologies</p>

      <template #yes>
        <p>An extensive list of tools and technologies can be found at <a href="https://barthy.koeln">https://barthy.koeln</a></p>
      </template>
    </QNoPrint>

    <strong>Senior Level</strong>

    <ul>
      <li>Software engineering &amp; development</li>

      <li>Development in agile and interdisciplinary teams</li>

      <li>Backend Stack (RESTful, SQL &amp; No-SQL, SOO & Monolithic, …)</li>

      <li>Frontend Stack (Vue.js & React, Vanilla, …)</li>
    </ul>

    <ul>
      <li>Abstract understanding of programming languages and frameworks</li>

      <li>Fast reading and understanding of documentation and forums</li>

      <li>Knowledge and experience across the full web technology stack</li>

      <li>Reviews &amp; constructive criticism</li>

      <li>Sharing of knowledge &amp; coaching</li>

      <li>Linting, code quality tools and package managers</li>

      <li>Unit-, functional- and E2E testing</li>

      <li>Website and XSS security considerations</li>

      <li>Performance considerations</li>

      <li>Technical SEO</li>
    </ul>

    <QNoPrint>
      <ul>
        <li>Symfony <AComment>+ ecosystem, e.g. Doctrine, Twig, API&nbsp;Platform, …</AComment></li>

        <li>Vue.js&nbsp;2&nbsp;+&nbsp;3 <AComment>+ ecosystem, e.g. pinia, router, …</AComment></li>

        <li>TypeScript</li>

        <li>Vanilla JS</li>

        <li>Node.js</li>

        <li>SCSS with aBEM <AComment>leaning toward using as much native CSS as possible. Yay CSS variables!</AComment></li>

        <li>Shell-Scripting (Bash)</li>

        <li>Linux <AComment>Ubuntu preferred for desktop &amp; servers</AComment></li>

        <li>Relational databases &amp; SQL</li>

        <li>git (CLI)</li>
      </ul>
    </QNoPrint>

    <strong>Intermediate Level</strong>

    <ul>
      <li>Platform operations & architecture management</li>

      <li>Accessibility and inclusivity considerations</li>
    </ul>

    <QNoPrint>
      <ul>
        <li>Three.js</li>

        <li>React.js</li>

        <li>Payload CMS (React&nbsp;/&nbsp;Node.js&nbsp;based)</li>

        <li>Webpack, rollup.js</li>

        <li>Docker, docker-compose</li>

        <li>GitHub Actions CI/CD</li>

        <li>GitLab CI/CD Platform</li>

        <li>Terraform</li>

        <li>Apache Solr <AComment>+ general search engine knowledge</AComment></li>
      </ul>
    </QNoPrint>

    <QNoPrint>
      <h3>Infrequent Use Only</h3>

      <ul>
        <li>Astro.build</li>

        <li>Deno</li>

        <li>React Native</li>

        <li>Strapi CMS (React&nbsp;/&nbsp;Node.js&nbsp;based)</li>

        <li>Next.js</li>

        <li>Nuxt.js</li>

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

      <h3>Other Software skills</h3>

      <ul>
        <li>Ableton Live & audio production <AComment>experienced hobbyist</AComment></li>

        <li>Blender modelling, animation, simulation & rendering <AComment>hobbyist</AComment></li>

        <li>Adobe Photoshop, Illustrator, Lightroom <AComment>hobbyist</AComment></li>

        <li>Figma <AComment>designing, prototyping, implementation</AComment></li>
      </ul>
    </QNoPrint>
  </TFlex>
</template>

<script lang="ts" setup>
  import AComment from './AComment.vue'
  import TFlex from './TFlex.vue'
  import QNoPrint from './QNoPrint.vue'
</script>
