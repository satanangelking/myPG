import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import mintui from "mint-ui";

Vue.use(mintui);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
