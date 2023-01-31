<template>
  <div class="project-inner">
    <component :is="PROJECT_ID_MAP[routeId]" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, computed } from "@nuxtjs/composition-api";
import type { Component } from "vue";
import Lottery from "@/components/Project/Lottery.vue";
import MapGacha from "@/components/Project/MapGacha.vue";

import { ProjectComponentId } from "@/constants/project";
const route = useRoute();
const routeId = computed(() => Number(route.value.params.id));

const PROJECT_ID_MAP: { [key: number]: Component } = {
  [ProjectComponentId.MapGacha]: MapGacha,
  [ProjectComponentId.Lottery]: Lottery,
};
</script>
