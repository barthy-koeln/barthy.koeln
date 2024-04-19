<template>
  <TFlex
    v-if="primary"
    class="OCurriculum"
    column
  >
    <h2>Curriculum Vitae</h2>

    <MCurriculumEntry date="since 05/2023">
      <ACurriculumEntryTitle
        organization="grandcentrix GmbH"
        position="Senior Web Developer"
      />

      <h4>Responsibilities:</h4>

      <ul>
        <li>Requirements engineering</li>

        <li>Frontend development</li>

        <li>UX thinking & conception</li>

        <li>Unit, functional and E2E testing</li>

        <li>Interdisciplinary exchange and planning</li>

        <li>Coaching and supporting junior developers</li>
      </ul>
    </MCurriculumEntry>

    <MCurriculumEntry date="2020–2023">
      <ACurriculumEntryTitle
        organization="VUCX GmbH"
        position="Head of Development"
      />

      <h4>Responsibilities:</h4>

      <ul>
        <li>Requirements engineering & choice of technologies</li>

        <li>Coaching of junior and intermediate level developers<br>(team of 2-3 + external freelancers)</li>

        <li>Consulting of clients and third-party agencies</li>

        <li>Full-stack development</li>

        <li>QA duties</li>

        <li>DevOps duties</li>

        <li>Sysadmin duties</li>
      </ul>

      <QNoPrint>
        <h4>Project Types:</h4>

        <ul>
          <li>Custom CMS, SRM, CRM applications for medium to big datasets (Symfony, API Platform w/ JSON-LD, Vue.js&nbsp;2, Vue.js&nbsp;3)</li>

          <li>Website & Hybrid App development (Android + iOS, Headless CMS + React & React Native, GraphQL)</li>

          <li>Multi-Tenant/Multi-Instance platforms with user-generated content</li>

          <li>APIs and search engines</li>

          <li>Landing pages and design implementations</li>
        </ul>

        <a
          ref="noopener"
          href="https://www.vucx.de/en/worx"
          target="_blank"
        >View References</a>
      </QNoPrint>

      <hr>

      <ACurriculumEntryTitle
        organization="Freelance"
        position="Web Development"
      />

      <QNoPrint>
        <ul>
          <li>Consulting</li>

          <li>3D and VR hosting solutions</li>

          <li>Hosting & maintenance</li>
        </ul>

        <a href="#freelance">View References</a>
      </QNoPrint>

      <hr>

      <ACurriculumEntryTitle
        organization="Home"
        position="Open Source Development"
      />

      <QNoPrint>
        <ul>
          <li>Remote Control System for Interactive Web-3D and Web-XR</li>

          <li>Symfony Bundles</li>

          <li>JS Libraries</li>
        </ul>

        <a
          href="https://github.com/barthy-koeln"
          rel="nofollow"
          target="_blank"
        >View References</a>
      </QNoPrint>
    </MCurriculumEntry>
  </TFlex>

  <TFlex
    v-else
    class="OCurriculum"
    column
  >
    <QNoPrint>
      <template #yes>
        <h2 class="OCurriculum__break">
          Curriculum (Continuation)
        </h2>
      </template>
    </QNoPrint>

    <MCurriculumEntry date="2014–2020">
      <ACurriculumEntryTitle
        organization="TH Köln (part-time)"
        position="Bachelor of Science"
      />

      <table>
        <tr>
          <td>Degree program:</td>

          <td>Technical computer science</td>
        </tr>

        <tr>
          <td>Specialization:</td>

          <td>Development of complex software systems</td>
        </tr>
      </table>

      <hr>

      <ACurriculumEntryTitle
        organization="VUCX GmbH (part-time)"
        position="Working Student Web Development"
      />

      <ul>
        <li>Development of internal projects (Symfony PHP)</li>

        <li>Development of custom CMS solutions</li>

        <li>Implementation of designs (front-end)</li>

        <li>Hosting & maintenance</li>
      </ul>

      <hr>

      <ACurriculumEntryTitle
        organization="keinegrenzen.org (charitable music project)"
        position="Founder and Developer"
      />

      <p>
        The project "keinegrenzen.org" exchanged music album of underground artists for donations to "Doctors without
        Borders". During the course of the project, we have collected and donated around 5.000&euro;.
      </p>

      <ul>
        <li>Development of custom CMS for album uploads and management</li>

        <li>Development of browsing, streaming and downloads website</li>

        <li>Landingpages for events</li>

        <li>Production of artist profile videos</li>

        <li>Organization of a festival</li>
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

      <ul>
        <li>Consulting</li>

        <li>Custom CMS development</li>

        <li>Front-end design implementation</li>
      </ul>

      <QNoPrint>
        <a href="#freelance">View References</a>
      </QNoPrint>
    </MCurriculumEntry>

    <hr>

    <MCurriculumEntry date="2013–2014">
      <ACurriculumEntryTitle
        organization="Alexianer Werkstätten GmbH"
        position="Voluntary service"
      />

      <ul>
        <li>Support and assistance in a workshop for vocational rehabilitation</li>

        <li>Production and documentation of industrial components for igus&reg; GmbH, Miele &amp; Cie. KG</li>
      </ul>

      <hr>

      <ACurriculumEntryTitle
        organization="Gymnasium Kreuzgasse"
        position="Abitur + Baccalauréat"
      />

      <p>I acquired both the German and French graduations.<br>Advanced courses in physics and french.</p>
    </MCurriculumEntry>
  </TFlex>
</template>

<script lang="ts" setup>
  import ACurriculumEntryTitle from './ACurriculumEntryTitle.vue'
  import MCurriculumEntry from './MCurriculumEntry.vue'
  import TFlex from './TFlex.vue'
  import QNoPrint from './QNoPrint.vue'

  defineProps<{
    primary?: boolean
  }>()
</script>

<style lang="scss" scoped>
.OCurriculum {
  page-break-after: always;
}
</style>
