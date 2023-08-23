<template>
  <div class="cv">
    <section>
      <div class="cv__intro">
        <p>
          Hello, I'm Leo! With over three years of hands-on experience in the
          frontend field, I've specialized in crafting internal management
          system platforms, driving successful marketing events, and more. My
          toolkit includes Vue and React, which I've harnessed to create dynamic
          and user-centric solutions.
        </p>
      </div>
    </section>
    <section class="works">
      <h3 class="title">Work Experience</h3>
      <div class="project">
        <h5 class="project__name">Garena</h5>
        <JobTitle
          :title-info="[
            {
              title: 'Senior Software Engineer I, Frontend',
              experience: 'Jan 2023 - Present',
              id: 1,
            },
            {
              title: 'Software Engineer II, Frontend',
              experience: 'Mar 2020 - Jan 2023',
              id: 2,
            },
          ]"
        />
        <div class="tech-list">
          <span class="bold">Typescript,</span>
          <span class="bold">Vue, Nuxt,</span>
          <span class="bold">Vuex, Pinia,</span>
          <span class="bold">Webpack,</span>
          <span class="bold">Cypress,</span>
          <span class="bold">SCSS,</span>
          <span class="bold">Sentry.</span>
        </div>
        <ul class="project__detail-list_en">
          <li>
            Collaborated with backend engineers to develop multiple revenue and
            marketing events.
          </li>
          <li>
            Guided and mentored junior developers, offering a setup template,
            code review, and insights into best practices.
          </li>
          <li>
            <span class="bold"
              >Led and participated in upgrading and migrating old front-end
              projects</span
            >
            for future maintenance and better development experience for the
            team.
          </li>
          <li>
            Revamped project initiation by constructing front-end templates
            through Cookiecutter, alleviating the burden of configuring settings
            at project inception. Resulted in a remarkable
            <span class="bold">16% boost in development efficiency</span>,
            leading to reduced project delivery times.
          </li>
          <li>
            Developed scalable platforms enabling streamlined configuration of
            multiple revenue events.
          </li>
          <li>
            Implemented a parser tool of CSS that reduced labor costs between
            the development team and the operation team, by generating compiled
            CSS files to readable templates in Google Sheets.
          </li>
          <li>
            Utilized Nuxt.js on official websites for newly launched games to
            facilitate dynamic meta changes and implement server-side rendering,
            resulting in improved SEO performance and enhanced user experience.
            <a href="https://fam.garena.tw/" target="_blank"> Event Link </a>
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="project">
        <h5 class="project__name">Cloud Interactive</h5>
        <JobTitle
          :title-info="[
            {
              title: 'Frontend Engineer',
              experience: 'Oct 2018 - Jan 2020',
              id: 1,
            },
          ]"
        />
        <div class="tech-list">
          <span class="bold">Javascript,</span>
          <span class="bold">Vue, Nuxt, React,</span>
          <span class="bold">Vuex,</span>
          <span class="bold">Webpack,</span>
          <span class="bold">SCSS, Stylus.</span>
        </div>
        <ul class="project__detail-list_en">
          <li>
            Developed an internal management system for enterprise and maintain
            Company Official Website using Vue2, Vuex, React, SCSS
          </li>
          <li>
            Used React hooks and Context API for better code reusability and
            state management across components.
          </li>
          <li>
            Experience in Agile / Scrum development and take advantage of Story
            points to plan and estimate development schedule efficiently.
          </li>
          <li>
            Communicated and integrated with other departments to improve the
            project such as UX flow with UI/UX designers and RESTful API with
            backend developers.
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="project">
        <h5 class="project__name">Acaia</h5>
        <JobTitle
          :title-info="[
            {
              title: 'Sales Support Specialist',
              experience: 'Mar 2017 - Jun 2018',
              id: 1,
            },
          ]"
        />
        <ul class="project__detail-list_en">
          <li>
            Collaborated with UX Designers to rebuild a new website via a
            Shopify template.
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="project">
        <h5 class="project__name">Ming Chuan University</h5>
        <p class="project__description project__description--edu">
          Bachelor's degree, Applied English
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import JobTitle from "@/components/Cv/JobTitle.vue";
</script>

<style lang="scss">
.cv {
  letter-spacing: 1px;
  line-height: 1.2;
  padding-bottom: 1rem;
  color: #afafaf;
  &__intro {
    p {
      margin-bottom: 0.1rem;
    }
  }
  a {
    color: $color-strong-light;
    text-decoration: underline;
  }
  .divider {
    margin: 0.08rem 0 0.16rem;
    border-bottom: 0.01rem solid #afafaf;
  }
  .tech-list {
    margin: 0.15rem 0;
  }

  .title {
    font-weight: 600;
    margin-top: 0.2rem;
    margin-bottom: 0.08rem;
    padding-bottom: 0.08rem;
    color: $color-strong;
  }
  .project {
    &__name {
      font-weight: 600;
      display: flex;
      align-items: baseline;
      position: relative;
      margin-right: 0.1rem;
      margin-bottom: 0.1rem;
      color: $color-strong;
    }
    &__group {
      font-size: 0.2rem;
      margin-left: auto;
      font-weight: 500;
      width: 2rem;
      font-style: italic;
    }
    &__description {
      margin-left: 0.1rem;
      font-weight: 600;
      color: $color-strong-light;
      &--edu {
        margin-left: 0;
      }
    }
    &__detail-list_en {
      padding: 0 0.2rem;
      li {
        list-style-type: disc;
        margin-bottom: 0.05rem;
      }
    }
  }

  .bold {
    font-weight: 600;
  }
}
</style>
