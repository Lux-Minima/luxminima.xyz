import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/tailwind.css";

//import { createProvider } from "./vue-apollo";
import store from "./store.js";

Vue.config.productionTip = false;

new Vue({
  router,
  //apolloProvider: createProvider(),
  store,
  render: h => h(App)
}).$mount("#app");
