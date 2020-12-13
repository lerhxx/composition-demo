import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { createApp } from '@vue/composition-api'
import { provideStore } from './plugins/store'
import { provideRouter } from './plugins/router'

import './plugins/composition'

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

const app = createApp({
  setup() {
    // provideStore(store)
    // provideRouter(router)
  },
  store,
  router,
  render: (h: any) => h(App)
})

app.config.productionTip = false;
app.use(VueRouter)

app.mount('#app')
