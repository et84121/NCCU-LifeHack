import Vue from "vue";
import App from "./App.vue";

import "./plugin-firebase";

import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAwNiNG4YFO3t8eFJgsCfH4pUgh8EMEf0E",
    map_ids: "59738f92abbb4752",
    libraries: ["geometry"]
  }
});

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
