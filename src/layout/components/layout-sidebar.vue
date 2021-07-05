<template>
  <div class="layout-navbar">
    <el-menu
      :collapse="menuCollapse"
      :default-active="menuActiveName"
      class="el-menu-nav"
      :default-openeds="aDefaultOpens"
    >
      <el-menu-item index="homepage" @click="fMenuClick(oIndex)">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="(oMenu, i) in menu" :key="'menu_1st_' + i" :index="oMenu.name">
        <template slot="title">
          <i :class="oMenu.icon"></i>
          <span slot="title">{{ oMenu.title }}</span>
        </template>
        <el-menu-item
          v-for="(oSecMenu, j) in oMenu.children"
          :key="'menu_sec_' + j"
          :index="oSecMenu.name"
          @click="fMenuClick(oSecMenu)"
        >
          <i v-if="oSecMenu.icon" :class="oSecMenu.icon"></i>
          <span slot="title">{{ oSecMenu.title }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
/**
 * @description layout-sidebar.vue
 * @author caoyu
 * @CreatedTime 2021/6/28 9:15 下午
 **/
import * as _ from "lodash";

export default {
  name: "layout-navbar",
  props: {
    menu: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      oIndex: {
        name: "homepage",
        title: "首页",
      },
      aDefaultOpens: [],
    };
  },
  computed: {
    menuCollapse: {
      get() {
        return this.$store.state.common.menuCollapse || false;
      },
      set(val) {
        this.$store.commit("common/updateMenuCollapse", val);
      },
    },
    menuActiveName: {
      get() {
        return this.$store.state.common.menuActiveName || "homepage";
      },
      set(val) {
        this.$store.commit("common/updateMenuActiveName", val);
      },
    },
    tabs: {
      get() {
        return this.$store.state.common.tabs || [];
      },
      set(val) {
        this.$store.commit("common/updateTabs", val);
      },
    },
  },
  created() {
    this.menu.forEach((oMenu) => {
      this.aDefaultOpens.push(oMenu.name);
    });
    this.fMenuClick(this.oIndex);
  },
  mounted() {},
  methods: {
    fMenuClick(oMenu) {
      const bExist = _.find(this.tabs, oMenu);
      if (!bExist) this.tabs = [...this.tabs, oMenu];
      this.$nextTick(() => {
        this.menuActiveName = oMenu.name;
        this.$router.push(oMenu);
      });
    },
  },
  filters: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/_variables.less");

.layout-navbar {
}

.el-menu-nav {
  width: 68px;
  border: 0 none;

  &:not(.el-menu--collapse) {
    width: 100%;
  }
}

::v-deep {
  .el-menu {
    background-color: transparent;
  }
}
</style>
<style lang="less">
.layout-navbar {
}
</style>
