import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vue2Filters from "vue2-filters";
import i18n from "./plugins/vue-i18n";
import "./plugins/vuelidate";
import { version } from "../package.json";
import vuetify from "./plugins/vuetify";

/* eslint-disable no-console */
console.log(`App v${version}`);
console.log(`locale:${i18n.locale} | fallbackLocale:${i18n.fallbackLocale}`);
/* eslint-enable no-console */

Vue.use(Vue2Filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
