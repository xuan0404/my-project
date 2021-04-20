import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/packages/theme-chalk/src/index.scss";
import Vuex from "vuex";
import App from "./App.vue";
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
