import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "@/App.vue";
import { router } from "@/router";
import store from "@/store";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueCookies from "vue-cookies";

// import Reveal from "reveal.js/dist/reveal";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VeeValidate);
Vue.use(VueCookies);
// Vue.use(Reveal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
