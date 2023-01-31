<template>
  <div class="project">
    <h4 class="title">Public Projects From Garena</h4>
    <div class="container">
      <Card
        class="project__card"
        v-for="card in cardList"
        :key="card.id"
        :cardName="card.name"
        :img="card.img"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const cardList:Array<{img: string; name: string; id: number}> = [
  {
    img: require("@/public/img/sm/mapgacha-discount.png"),
    name: "League of Legends - Map Gacha",
    id: 5,
  },
  {
    img: require("@/public/img/sm/aov-lottery-milestone.png"),
    name: "ARENA OF VALOR - Lottery",
    id: 1,
  },
  {
    img: require("@/public/img/sm/ff-cupid-main.png"),
    name: "FreeFire - Cupid Trial",
    id: 4,
  },
  {
    img: require("@/public/img/sm/aov-luckypoint-draw.png"),
    name: "ARENA OF VALOR - Lucky Points",
    id: 2,
  },
  {
    img: require("@/public/img/sm/lol-card-init.png"),
    name: "League of Legends - Acarna Gacha",
    id: 3,
  },
];
</script>
<style lang="scss" scoped>
.project {
  .container {
    padding: 0.5rem 0.1rem;
    @include flexCenter(row);
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &__card {
    margin-bottom: 0.5rem;
  }
}
</style>
