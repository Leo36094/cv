<template>
  <div class="cv">
    <section>
      <div class="cv__intro">
        <p>
          Hi, I'm Leo! Have over two years of experience in the frontend field
          with building internal management system platforms, marketing events,
          etc, using <span class="bold">React</span> and <span class="bold">Vue</span>.
        </p>
      </div>
    </section>
    <section class="works">
      <h3 class="title">Work Experience</h3>
      <div class="project">
        <h5 class="project__name">
          Garena
          <p class="project__description">Software Engineer II, Frontend</p>
        </h5>
        <ul class="project__detail-list_en">
          <li>
            Built multiple revenue and marketing events with backend developers
            using Javascript, Typescript, Vue2, Vue3, Vuex, Vue-i18n, Webpack,
            and SCSS.
          </li>
          <li>
            Contributed to the frontend project template to avoid redundant
            config settings for new projects with Cookiecutter.
          </li>
          <li>
            Participated in migrating frontend projects from Vue2 to Vue3 plus
            Typescript.
          </li>
          <li>
            Built an Internal Game Auth Platform with backend developers for
            in-game projects that smooths the QA process using Vue2, Vuex, and
            Sentry.
          </li>
          <li>
            Built a tool called CSS parser for all revenue events that can
            reduce frontend labor cost by generating compiled CSS files to
            readable templates in Google Sheets that Operation Teams can modify
            project styles on their own when relaunching projects.
          </li>
          <li>
            Used Nuxt on official websites of newly published games to support
            dynamic meta changing, and server-side rendering for better SEO.
          </li>
          <li>
            Used canvas to build web games for FreeFire marketing events.
            <a href="https://codepen.io/chuangl/full/Yzejraz"
              >(No commercial version demo - Cupid Trial)</a
            >
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="project">
        <h5 class="project__name">
          Cloud Interactive
          <p class="project__description">Frontend Engineer</p>
        </h5>
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
        <h5 class="project__name">
          Acaia
          <p class="project__description">Sales Support Specialist</p>
        </h5>
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
      <div class="divider"></div>
    </section>

    <section class="project">
      <h3 class="project__name">Skills</h3>
      <div class="tech__list">
        <span class="bold">Javascript,</span>
        <span class="bold">Typescript,</span>
        <span class="bold">HTML/CSS</span>
      </div>
    </section>
  </div>
</template>

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
