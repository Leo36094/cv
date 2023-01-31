<template>
  <div :class="['card', { 'can-hover': href }]" @click="goProjectSite">
    <div class="card__img" :style="{ backgroundImage: `url(${img})` }"></div>
    <div class="card__content">
      <p>{{ cardName }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  cardName: {
    type: String,
    default: () => "",
  },
  img: {
    type: String,
    default: () => "",
  },
  href: {
    type: String,
    default: () => "",
  },
});

function goProjectSite() {
  if (props.href) window.open(props.href, "_blank");
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #29282b;
  width: 5rem;
  min-height: 3rem;
  border-radius: 0.1rem;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(#29282b, 0.2);
  padding-bottom: 0.05rem;
  &.can-hover {
    cursor: pointer;
  }
  &__img {
    width: 100%;
    @include centerBg(100% 100%);
    background-position: top center;
    height: 2.5rem;
    background-color: #000;
  }
  img {
    width: 100%;
  }
  &__content {
    padding: 0.1rem;
    text-align: center;
  }
}
</style>
