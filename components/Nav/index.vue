<template>
  <header>
    <nav class="nav">
      <h3 class="nav__name">
        <nuxt-link to="/"> Leo (Li Wei) Chuang </nuxt-link>
      </h3>
      <ul class="nav__info">
        <li>
          <NuxtLink to="/project"> Projects </NuxtLink>
        </li>
        <li>
          <a href="https://github.com/Leo36094"> Github </a>
        </li>
        <li>
          <a href="https://medium.com/@leo36094"> Medium </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leo-chuang/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  @include flexCenter(row);
  justify-content: space-between;
  padding: 0.5rem 0;
  &__name {
    cursor: pointer;
  }
  &__info {
    @include flexCenter(row);
    > li {
      position: relative;
      cursor: pointer;
      padding-bottom: 0.05rem;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.01rem;
        background-color: #a1a1a1;
        transition: 0.3s ease-in all;
        bottom: 0;
        left: 0;
        opacity: 0;
        transform: scale(0.5);
      }
      &:hover::before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>
