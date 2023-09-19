<template>
  <TFlex
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

        <li>Consulting of Clients and third-party agencies</li>

        <li>Full-stack development</li>

        <li>QA duties</li>

        <li>DevOps duties</li>

        <li>Sysadmin duties</li>
      </ul>

      <h4>Project Types:</h4>

      <ul>
        <li>Custom CMS, SRM, CRM applications for medium to big datasets (Symfony, API Platform w/ JSON-LD, Vue.js 2, Vue.js 3)</li>

        <li>Platforms with user-generated content</li>

        <li>APIs and search engines</li>

        <li>Landing pages and design implementations</li>

        <li>Hybrid app development</li>
      </ul>

      <a
        ref="noopener"
        href="https://www.vucx.de/en/worx"
        target="_blank"
      >View References</a>

      <hr>

      <ACurriculumEntryTitle
        organization="Freelance"
        position="Web Developer"
      />

      <ul>
        <li>Consulting</li>

        <li>3D and VR hosting solutions</li>

        <li>Hosting & maintenance</li>
      </ul>

      <a href="#freelance">View References</a>

      <hr>

      <ACurriculumEntryTitle
        organization="Home"
        position="Open Source Development"
      />

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
    </MCurriculumEntry>

    <hr>

    <MCurriculumEntry date="2014–2020">
      <ACurriculumEntryTitle
        organization="TH Köln (part-time)"
        position="Bachelor of Science"
      />

      <table>
        <tr>
          <td>Degree program:</td>

          <td>Technishe Informatik <AComment>Technical computer science</AComment></td>
        </tr>

        <tr>
          <td>Specialization:</td>

          <td>Entwicklung komplexer Softwaresysteme <AComment>Development of complex software systems</AComment></td>
        </tr>
      </table>

      <hr>

      <ACurriculumEntryTitle
        organization="VUCX GmbH (part-time)"
        position="Working Student Web Development"
      />

      <ul>
        <li>Development of internal projects (Symfony)</li>

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
        <li>Development of custom CMS for Album uploads and management</li>

        <li>Development of browsing, streaming and downloads website</li>

        <li>Landingpages for events</li>

        <li>Production of artist profile videos</li>

        <li>Organization of a festival</li>
      </ul>

      <a
        href="https://festival2019.keinegrenzen.org/"
        target="_blank"
      >View Reference</a>

      <hr>

      <ACurriculumEntryTitle
        organization="Freelance"
        position="Web Development"
      />

      <ul>
        <li>Consulting</li>

        <li>Custom CMS development</li>

        <li>Design implementation</li>
      </ul>

      <a href="#freelance">View References</a>
    </MCurriculumEntry>

    <hr>

    <MCurriculumEntry date="2013–2014">
      <ACurriculumEntryTitle
        organization="Alexianer Werkstätten GmbH"
        position="Voluntary service"
      />

      <ul>
        <li>Support and assistance in a workshop for vocational rehabilitation</li>

        <li>Production and documentation of industrial component production for igus&reg; GmbH, Miele &amp; Cie. KG</li>
      </ul>
    </MCurriculumEntry>

    <hr>

    <MCurriculumEntry date="before 2013">
      <ACurriculumEntryTitle
        organization="Gymnasium Kreuzgasse"
        position="Abitur + Baccalauréat"
      />

      <p>I acquired both the German and French graduations. Advanced courses in physics and french.</p>
    </MCurriculumEntry>
  </TFlex>
</template>

<script lang="ts" setup>
import AComment from './AComment.vue'
import ACurriculumEntryTitle from './ACurriculumEntryTitle.vue'
import MCurriculumEntry from './MCurriculumEntry.vue'
import TFlex from './TFlex.vue'
</script>
