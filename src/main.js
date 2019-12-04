import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";

Vue.config.productionTip = false;

Vue.use(ArgonDashboard);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
