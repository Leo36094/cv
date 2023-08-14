import { defineNuxtPlugin, useRouter } from "@nuxtjs/composition-api";
import Vue from "vue";
import VueGtag from "vue-gtag";
import { event } from 'vue-gtag';



Vue.use(VueGtag, {
  config: { id: "G-6060G0ZGR7" }
})

export default defineNuxtPlugin(() => {
  window.dataLayer = window.dataLayer || [];
  useRouter().afterEach(to => {
    event('page_view', {
      event_category: 'page_view',
      page_path: to.fullPath || '',
      page_title: to.name || '',
    })
  })
})
