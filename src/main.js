import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "@/router/index";
import store from "@/store/index";
import "@/theme/default/index.css";
import "@/assets/css/common.less";

Vue.config.productionTip = false;

//挂载全局组件
Vue.use(ElementUI);

//挂在全局属性

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
