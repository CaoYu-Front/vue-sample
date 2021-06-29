import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "@/router/index";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/common.less";

Vue.config.productionTip = false;

//挂载全局组件
Vue.use(ElementUI);

//挂在全局属性

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
