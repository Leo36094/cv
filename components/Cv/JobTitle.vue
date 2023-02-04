<template>
  <div class="title-row">
    <p class="title-row__description" v-for="titleItem in props.titleInfo" :key="titleItem.id">
      {{ titleItem.title }}
      <span class="title-experience">{{ titleItem.experience }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  titleInfo: Array<{ title: string; experience: string, id: number }>;
}>();
</script>

<style lang="scss">
.title-row {
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.08rem;
  padding-bottom: 0.08rem;
  color: $color-strong;
  &__description {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-experience {
    font-size: 0.12rem;
    font-style: italic;
    @include queryMinWidth($querySM) {
      font-size: 0.2rem;
    }
  }
}
</style>
