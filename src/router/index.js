import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";

const originalReplace = VueRouter.prototype.replace;
const originalPush = VueRouter.prototype.push;
//修改原型对象中的replace方法
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    next();
  } else {
    next({ name: "homepage" });
  }
});
export default router;
