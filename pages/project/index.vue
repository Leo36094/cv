<template>
  <div class="project">
    <h4 class="title">Projects From Garena</h4>
    <br />
    <div class="project__tech-stack">
      Built with Vue, Nuxt, Websocket, Pinia, Vuex, Canvas.
    </div>
    <div class="container">
      <Card
        class="project__card"
        v-for="card in cardList"
        :key="card.id"
        :cardName="card.name"
        :img="card.img"
        :href="card.href"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProjectComponentId } from "@/constants/project";
const cardList: Array<{ img: string; name: string; id: number; href: string }> =
  [
    {
      img: require("@/public/g-official.png"),
      name: "Garena Official Website",
      id: ProjectComponentId.GarenaOfficial,
      href: "https://www.garena.tw",
    },
    {
      img: "https://dlgarenanow-a.akamaihd.net/mgames/famtw/h5/20220715_official/meta_01.jpg",
      name: "FAM Official Website (Nuxt)",
      id: ProjectComponentId.FamOfficial,
      href: "",
    },
    {
      img: require("@/public/img/sm/ff-cupid-main.png"),
      name: "FreeFire - Cupid Trial (Canvas, Vue2)",
      id: ProjectComponentId.CupidTrial,
      href: "https://codepen.io/leo36094/full/XWBxZwJ",
    },
    {
      img: require("@/public/img/sm/mapgacha-discount.png"),
      name: "League of Legends - Map Gacha (Vue3)",
      id: ProjectComponentId.MapGacha,
      href: "",
    },
    {
      img: require("@/public/img/sm/aov-lottery-milestone.png"),
      name: "ARENA OF VALOR - Lottery (Vue3, Websocket)",
      id: ProjectComponentId.Lottery,
      href: "",
    },
    {
      img: require("@/public/img/sm/aov-luckypoint-draw.png"),
      name: "ARENA OF VALOR - Lucky Points (Vue2)",
      id: ProjectComponentId.LuckyPoints,
      href: "",
    },
    {
      img: require("@/public/img/sm/lol-card-init.png"),
      name: "League of Legends - Acarna Gacha (Vue2)",
      id: ProjectComponentId.AcarnaGacha,
      href: "",
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
