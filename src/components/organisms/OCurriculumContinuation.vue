<template>
  <TFlex
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
      <MCurriculumEntryTitle
        organization="VUCX GmbH"
        position="Head of Development"
        tech-stack="Symfony PHP, Vue.js"
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
      <MCurriculumEntryTitle
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

      <MCurriculumEntryTitle
        organization="VUCX GmbH"
        position="Working Student Web Development"
        tech-stack="Symfony PHP, Vue.js"
      />

      <p>
        "Learning by doing" — from hobbyist to full stack web developer.<br>
        Later employed as head of development.
      </p>

      <hr>

      <MCurriculumEntryTitle
        organization="keinegrenzen.org"
        position="Founder and Developer"
        tech-stack="Symfony PHP, Vue.js"
      />

      <p>
        Charitable online platform exchanging underground artists' music for donations to "Doctors without
        Borders". The project has collected and donated around 5.000&euro;.
      </p>

      <ul>
        <li>Developed a browsing, streaming and downloads website</li>

        <li>Produced several artist profile videos</li>

        <li>Organized several concerts and a festival</li>
      </ul>

      <QNoPrint>
        <a
          href="https://festival2019.keinegrenzen.org/"
          target="_blank"
        >View Reference</a>
      </QNoPrint>

      <hr>

      <MCurriculumEntryTitle
        organization="Freelance"
        position="Web Development"
        tech-stack="Symfony PHP, Vue.js"
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

    <MCurriculumEntry date="2013 – 2014">
      <MCurriculumEntryTitle
        organization="Alexianer Werkstätten GmbH"
        position="Voluntary service"
      />

      <MCurriculumEntryTitle
        organization="Gymnasium Kreuzgasse"
        position="Abitur + Baccalauréat"
      />
    </MCurriculumEntry>
  </TFlex>
</template>

<script lang="ts" setup>
  import MCurriculumEntryTitle from '../molecules/MCurriculumEntryTitle.vue'
  import MCurriculumEntry from '../molecules/MCurriculumEntry.vue'
  import QNoPrint from '../quarks/QNoPrint.vue'
  import TFlex from '../templates/TFlex.vue'
</script>

