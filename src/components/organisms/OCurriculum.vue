<template>
  <TFlex
    v-if="primary"
    class="OCurriculum"
    column
    print-spacious
  >
    <h2>Curriculum Vitae</h2>

    <MCurriculumEntry date="Oct 2024 – Present">
      <ACurriculumEntryTitle
        organization="Electronic Arts"
        position="Software Engineer III"
      />

      <p>
        <strong>Ventures & Exploration:</strong>

        <br/>

        Senior position in an agile team exploring new technologies.<br>
        Projects range from internal demos and prototypes to production-ready features for EA's games and services.

        Set up a knowledge exchange platform and filled it following the Diátaxis framework.
      </p>

      <h4>Responsibilities:</h4>

      <ul>
        <li>Requirements engineering</li>

        <li>Product- & software development</li>

        <li>Coaching of up to 3 Software Engineer II</li>

        <li>"you build it, you run it" DevOps, PlatformOps, Monitoring</li>

        <li>Exploration and choice of technologies</li>
      </ul>
    </MCurriculumEntry>

    <MCurriculumEntry date="2023 – 2024">
      <ACurriculumEntryTitle
        organization="grandcentrix GmbH (Vodafone Group)"
        position="Senior Web Developer"
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
        <li>Implemented strict coding guidelines ensuring maintainable and fast development</li>

        <li>Reduced page load times by 90% by enforcing code reuse and minimizing dependencies.</li>

        <li>Continuously improved e2e tests, reducing regression errors despite large refactorings.</li>

        <li>Empowered interdisciplinary exchange & planning through structured RFCs.</li>

        <li>Spun up a second product front-end within weeks thanks to loosely coupled architecture and reusable
          components.
        </li>
      </ul>
    </MCurriculumEntry>
  </TFlex>

  <TFlex
    v-else
    class="OCurriculum"
    column
    print-spacious
  >
    <QNoPrint>
      <template #yes>
        <h2 class="OCurriculum__break">
          Curriculum (Continuation)
        </h2>
      </template>
    </QNoPrint>

    <MCurriculumEntry date="2020 – 2023">
      <ACurriculumEntryTitle
        organization="VUCX GmbH"
        position="Head of Development"
      />

      <p>
        Led a development team within a full-service media and software agency.
      </p>

      <ul>
        <li>Led large-scale migration of public sector data into custom GDPR-compliant CMS.</li>

        <li>Developed interactive and discoverable search engines for ~1M daily visitors.</li>

        <li>Architected and implemented multi-tenant / multi-site distributed CMs</li>

        <li>Coached a developer now promoted to Software Engineer II.</li>

        <li>Consulted international clients & third-party agencies.</li>
      </ul>

      <QNoPrint>
        <a
          ref="noopener"
          href="https://www.vucx.de/en/worx"
          target="_blank"
        >View References</a>
      </QNoPrint>
    </MCurriculumEntry>

    <MCurriculumEntry date="2014 – 2020">
      <ACurriculumEntryTitle
        organization="University of Applied Sciences Cologne"
        position="Bachelor of Science"
      />

      <table>
        <tbody>
        <tr>
          <td>Degree program:</td>

          <td>Technical computer science</td>
        </tr>

        <tr>
          <td>Specialization:</td>

          <td>Development of complex software systems</td>
        </tr>
        </tbody>
      </table>

      <p>
        My Thesis explored web and browser based virtual reality experiences combining multiple devices into headset and
        controller through MQTT and Websockets.
      </p>

      <hr>

      <ACurriculumEntryTitle
        organization="VUCX GmbH"
        position="Working Student Web Development"
      />

      <p>
        "Learning by doing" — from hobbyist to full stack web developer.<br>
        Later employed as head of development.
      </p>

      <hr>

      <ACurriculumEntryTitle
        organization="keinegrenzen.org"
        position="Founder and Developer"
      />

      <p>
        Charitable online platform exchanging underground artists' music for donations to "Doctors without
        Borders". The project has collected and donated around 5.000&euro;.
      </p>

      <ul>
        <li>Developed a browsing, streaming and downloads website</li>

        <li>Produced several artist profile videos</li>

        <li>Organized several concerts and a festival</li>

        <li>Represented in local TV and Radio</li>
      </ul>

      <QNoPrint>
        <a
          href="https://festival2019.keinegrenzen.org/"
          target="_blank"
        >View Reference</a>
      </QNoPrint>

      <hr>

      <ACurriculumEntryTitle
        organization="Freelance"
        position="Web Development"
      />

      <p>Development, hosting, and maintenance of portfolio websites and interactive 3D experiences.</p>

      <QNoPrint>
        <ul>
          <li>Consulting</li>

          <li>3D & VR hosting solutions</li>

          <li>Hosting & maintenance</li>
        </ul>

        <a href="#freelance">View References</a>
      </QNoPrint>
    </MCurriculumEntry>

    <hr>

    <MCurriculumEntry date="2013 – 2014">
      <ACurriculumEntryTitle
        organization="Alexianer Werkstätten GmbH"
        position="Voluntary service"
      />

      <ACurriculumEntryTitle
        organization="Gymnasium Kreuzgasse"
        position="Abitur + Baccalauréat"
      />

      <p>I acquired both the German and French graduations. Advanced courses in physics and french.</p>
    </MCurriculumEntry>
  </TFlex>
</template>

<script lang="ts" setup>
  import ACurriculumEntryTitle from '../atoms/ACurriculumEntryTitle.vue'
  import MCurriculumEntry from '../molecules/MCurriculumEntry.vue'
  import QNoPrint from '../quarks/QNoPrint.vue'
  import TFlex from '../templates/TFlex.vue'

  defineProps<{
    primary?: boolean
  }>()
</script>
