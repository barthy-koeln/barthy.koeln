<template>
  <TFlex
    class="OCurriculum"
    column
    print-spacious
  >
    <h2>Curriculum Vitae</h2>

    <MCurriculumEntry date="Oct 2024 – Present">
      <MCurriculumEntryTitle
        organization="Electronic Arts"
        position="Software Engineer III"
        tech-stack="Next.js/React/TypeScript, GDScript/Godot C++"
      />

      <p>
        <strong>Ventures & Exploration:</strong>

        <br/>

        Senior position in an agile team exploring new technologies.<br>
        Projects range from internal demos and prototypes to production-ready features for EA's games and services.
      </p>

      <ul>
        <li>Set up a knowledge exchange platform and filled it following the Diátaxis framework.</li>

        <li>Exploration and choice of technologies</li>

        <li>Coaching of up to 3 Software Engineer II</li>

        <li>"you build it, you run it" DevOps, PlatformOps, Monitoring</li>
      </ul>
    </MCurriculumEntry>

    <MCurriculumEntry date="2023 – 2024">
      <MCurriculumEntryTitle
        organization="grandcentrix GmbH (Vodafone Group)"
        position="Senior Web Developer"
        tech-stack="Node.js, Vue.js/TypeScript"
      />

      <p>
        Senior position taking ownership of frontend development and coordination with embedded and backend development
        for an
        <a href="https://www.vodafone.de/business/loesungen/modbus-cloud-connect/" target="_blank" rel="noopener">
          IoT fleet management platform.
        </a>

        <br>
      </p>

      <ul>
        <li>Reduced page load times by 90% by enforcing strict coding guidelines, code reuse and minimizing
          dependencies.
        </li>

        <li>Continuously improved e2e tests, reducing regression errors despite large refactorings.</li>

        <li>Empowered interdisciplinary exchange & planning through structured RFCs.</li>

        <li>Spun up a second product front-end within weeks thanks to loosely coupled architecture and reusable
          components.
        </li>

        <li>
          Created a bandwidth consumption calculator:<br/>

          Data transmitted in IIoT application based on user config, firmware logic, data encoding and UDP transport.
          Calculations included application alert and network condition simulation, validated against real-world measurements.<br/>

          Used in customer-facing UI and as a basis for billing and capacity planning.
        </li>
      </ul>
    </MCurriculumEntry>
  </TFlex>
</template>

<script lang="ts" setup>
  import MCurriculumEntry from '../molecules/MCurriculumEntry.vue'
  import MCurriculumEntryTitle from '../molecules/MCurriculumEntryTitle.vue'
  import TFlex from '../templates/TFlex.vue'
</script>

