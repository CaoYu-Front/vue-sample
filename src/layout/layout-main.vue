<template>
  <el-container class="wrap-abs">
    <el-header ref="header">Header</el-header>
    <el-container class="wrap" :height="`${nContHeight}px`">
      <el-aside :height="`${nContHeight}px`" :width="`${menuCollapse ? 68 : 300}px`">
        <el-scrollbar class="main-scroll">
          <layout-sidebar :menu="aMenus" />
        </el-scrollbar>
      </el-aside>
      <el-main>
        <layout-content :height="nContHeight" />
      </el-main>
    </el-container>
    <el-footer ref="footer">Footer</el-footer>
  </el-container>
</template>

<script>
/**
 * @description layout-main.vue
 * @author caoyu
 * @CreatedTime 2021/6/28 13:46
 **/
import LayoutSidebar from "./components/layout-sidebar";
import LayoutContent from "./components/layout-content";
import { winLocalStorage } from "@/utils/utils";

export default {
  name: "layout-main",
  props: {},
  components: { LayoutSidebar, LayoutContent },
  data() {
    return {
      nContHeight: 0,
      aMenus: [
        {
          name: "animation",
          title: "动效",
          icon: "el-icon-setting",
          children: [
            { name: "test", title: "测试页面", icon: "el-icon-loading" },
            { name: "index", title: "主页", icon: "el-icon-data-board" },
          ],
        },
      ],
    };
  },
  computed: {
    tabs: {
      get() {
        return this.$store.state.common.tabs;
      },
      set(val) {
        this.$store.commit("common/updateTabs", val);
      },
    },
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
        return this.$store.state.common.menuActiveName;
      },
      set(val) {
        this.$store.commit("common/updateMenuActiveName", val);
      },
    },
  },
  created() {
    const aTabs = JSON.parse(winLocalStorage({ key: "tabs", type: "read" }));
    const sMenuActiveName = winLocalStorage({ key: "menuActiveName", type: "read" });
    if (sMenuActiveName && sMenuActiveName !== "null") this.menuActiveName = sMenuActiveName;
    this.$router.push({ name: this.menuActiveName });
    if (aTabs && aTabs.length && aTabs !== "null") this.tabs = aTabs;
    else this.tabs = [{ title: "首页", name: "homepage" }];
  },
  mounted() {
    window.addEventListener("resize", this.fWinResize, false);
    this.fWinResize({
      currentTarget: window,
    });
  },
  methods: {
    fWinResize(e) {
      this.$nextTick(() => {
        const nHead = this.$refs.header && this.$refs.header.$el.clientHeight;
        const nFoot = this.$refs.footer && this.$refs.footer.$el.clientHeight;
        this.nContHeight = e.currentTarget.innerHeight - nHead - nFoot;
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.fWinResize, false);
  },
  filters: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/_variables");
@import url("~@/assets/css/views/error/index");

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
  background-color: @c_info;
}

.el-aside {
  //background-color: @c_black;
  transition: width 0.5s ease-out;
}

.el-main {
  padding: 0;
  background-color: #e9eef3;
}
</style>
