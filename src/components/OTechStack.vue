<template>
  <TFlex
      class="OTechStack"
      column
  >
    <h2>Skills and Knowledge</h2>

    <QNoPrint>
      <p>
        <AComment>NOTE: I'm mostly listing abstract skills.</AComment>

        <br/>

        <AComment>I take any opportunity to learn and acquire, and apply new skills.</AComment>

        <br/>

        <AComment>Therefore, a list of specific tools would be long and always incomplete.</AComment>

        <br/>

        <br/>

        <AComment>I'm happy to discuss my experience with specific tools in an interview.</AComment>
      </p>

      <template #yes>
        <p>An extensive list of tools and technologies can be found at <a href="https://barthy.koeln">https://barthy.koeln</a>
        </p>
      </template>
    </QNoPrint>

    <strong>Senior Level</strong>

    <ul>
      <li>Software engineering and development</li>

      <li>Development in agile and interdisciplinary teams</li>

      <li>Several Web Backend and Frontend Stacks</li>
    </ul>

    <ul>
      <li>Abstract understanding of programming languages and frameworks</li>

      <li>Efficient and effective application of knowledge to new technologies</li>

      <li>Fast reading and understanding of documentation and forums</li>

      <li>Knowledge and experience across the full web technology stack</li>

      <li>Reviews and constructive criticism</li>

      <li>Sharing of knowledge and coaching</li>

      <li>Linting, code quality tools and package managers</li>

      <li>Unit-, functional- and E2E testing</li>

      <li>Website and XSS security considerations</li>

      <li>Performance considerations</li>

      <li>Technical SEO</li>
    </ul>

    <strong>Intermediate Level</strong>

    <ul>
      <li>Platform operations and architecture management</li>

      <li>Accessibility and inclusivity considerations</li>

      <li>Database and search engines</li>
    </ul>

    <QNoPrint>
      <h3>Other Software skills</h3>

      <ul>
        <li>Ableton Live and audio production
          <AComment>experienced hobbyist</AComment>
        </li>

        <li>Blender modelling, animation, simulation and rendering
          <AComment>hobbyist</AComment>
        </li>

        <li>Adobe Photoshop, Illustrator, Lightroom
          <AComment>hobbyist</AComment>
        </li>

        <li>Figma
          <AComment>designing, prototyping, implementation</AComment>
        </li>
      </ul>
    </QNoPrint>
  </TFlex>
</template>

<script lang="ts" setup>
  import AComment from './AComment.vue';
  import QNoPrint from './QNoPrint.vue';
  import TFlex from './TFlex.vue';
</script>
