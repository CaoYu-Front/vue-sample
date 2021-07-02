import Main from "@/layout/layout-main";

export default [
  {
    path: "/",
    name: "home",
    meta: {
      hideInMenu: true,
    },
    component: Main,
    children: [
      {
        path: "/home",
        name: "homepage",
        meta: {
          hideInMenu: true,
          title: "首页",
          notCache: true,
        },
        component: () => import("@/views/pages/index/index"),
      },
      {
        path: "/test",
        name: "test",
        meta: {
          hideInMenu: true,
          title: "测试",
          notCache: true,
        },
        component: () => import("@/views/test/index"),
      },
    ],
  },
  {
    path: "*",
    name: "error404",
    meta: {
      hideInMenu: true,
    },
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "*",
    name: "error401",
    meta: {
      hideInMenu: true,
    },
    component: () => import("@/views/error/401.vue"),
  },
];
