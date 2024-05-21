<template>
  <TFlex
    class="OCapabilities"
    column
  >
    <h2>Capabilities and Knowledge</h2>

    <QNoPrint tag="p">
      <AComment>
        <strong>NOTE:</strong>

        specific tools &amp; languages are listed in <a href="#techstack">Techstack</a>
      </AComment>
    </QNoPrint>

    <ul>
      <li>Concept and ideation, exploration and presentation</li>

      <li>Development in agile and interdisciplinary teams</li>
    </ul>

    <ul>
      <li>Abstract understanding of programming languages and frameworks</li>

      <li>Efficient and effective application of knowledge to new technologies</li>

      <li>Fast reading and understanding of documentation and forums</li>

      <li>Reviews and constructive criticism</li>

      <li>Sharing of knowledge and coaching</li>

      <li>Linting, code quality tools and package managers</li>

      <li>Unit-, functional- and E2E testing</li>

      <li>Software and data security</li>

      <li>Performance, distributed tracing, monitoring</li>
    </ul>

    <ul>
      <li>Platform operations and architecture management</li>

      <li>Accessibility and inclusivity considerations</li>

      <li>Database and search engines</li>

      <li>Game engines and multiplayer netcode</li>
    </ul>
  </TFlex>
</template>

<script lang="ts" setup>
  import AComment from '../atoms/AComment.vue'
  import QNoPrint from '../quarks/QNoPrint.vue'
  import TFlex from '../templates/TFlex.vue'
</script>
