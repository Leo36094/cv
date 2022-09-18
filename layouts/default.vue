<template>
  <div class="wrapper">
    <div class="container">
      <Nav />
      <Nuxt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #2E2D3F;
  color: $color-white;
  .container {
    max-width: 12rem;
    padding: 0 0.3rem;
    margin: 0 auto;
    font-size: 0.24rem;
    color: #afafaf;
    min-height: 100vh;
  }
}
</style>
