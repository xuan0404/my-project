import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/packages/theme-chalk/index.scss';
import App from "./App.vue";
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
