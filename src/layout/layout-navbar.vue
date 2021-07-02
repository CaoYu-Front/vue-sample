<template>
  <div class="layout-navbar">
    <el-menu :collapse="bCollapse" :default-active="sActiveIndex" class="el-menu-nav">
      <el-menu-item index="homepage" @click="fSecMenuClick(oIndex)">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="(oMenu, i) in menu" :key="'menu_1st_' + i" :index="oMenu.id">
        <template slot="title">
          <i :class="oMenu.icon"></i>
          <span slot="title">{{ oMenu.name }}</span>
        </template>
        <el-menu-item
          v-for="(oSecMenu, j) in oMenu.children"
          :key="'menu_sec_' + j"
          :index="oSecMenu.id"
          @click="fSecMenuClick(oSecMenu)"
        >
          <i v-if="oSecMenu.icon" :class="oSecMenu.icon"></i>
          <span slot="title">{{ oSecMenu.name }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
/**
 * @description layout-navbar.vue
 * @author caoyu
 * @CreatedTime 2021/6/28 9:15 下午
 **/
export default {
  name: "layout-navbar",
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
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
      bCollapse: false,
      sActiveIndex: "",
      oIndex: {
        id: "homepage",
        name: "首页",
      },
    };
  },
  computed: {},
  created() {
    this.fSecMenuClick(this.oIndex);
  },
  mounted() {},
  methods: {
    fSecMenuClick(oSecMenu) {
      let sId = oSecMenu.id;
      this.$router.push({ name: sId });
      this.$nextTick(() => {
        this.sActiveIndex = sId;
      });
    },
  },
  filters: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/_variables");

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
