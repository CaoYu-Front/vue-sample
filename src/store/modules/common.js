export default {
  namespaced: true,
  state: {
    // 侧边栏, 折叠状态
    menuCollapse: false,
    // 侧边栏、tab, 激活菜单
    menuActiveName: "",
    //tabs导航
    tabs: [],
  },
  mutations: {
    updateMenuCollapse(state, val) {
      state.menuCollapse = val;
    },
    updateMenuActiveName(state, val) {
      state.menuActiveName = val;
    },
    updateTabs(state, val) {
      state.tabs = val;
    },
  },
};
