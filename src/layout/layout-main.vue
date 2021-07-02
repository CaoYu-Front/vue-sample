<template>
  <el-container class="wrap-abs">
    <el-header ref="header">Header</el-header>
    <el-container class="wrap" :height="`${nContHeight}px`">
      <el-aside :height="`${nContHeight}px`">
        <el-scrollbar class="main-scroll">
          <layout-navbar :menu="aMenus" />
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
import LayoutNavbar from "./layout-navbar";
import LayoutContent from "./layout-content";

export default {
  name: "layout-main",
  props: {},
  components: { LayoutNavbar, LayoutContent },
  data() {
    return {
      nContHeight: 0,
      aMenus: [
        {
          id: "animation",
          name: "动效",
          icon: "el-icon-setting",
          children: [
            { id: "test", name: "测试", icon: "el-icon-loading" },
            { id: "carousel", name: "轮播", icon: "el-icon-data-board" },
          ],
        },
        {
          id: "data",
          name: "可视化数据",
          icon: "el-icon-notebook-1",
          children: [
            { id: "table", name: "滚动列表", icon: "el-icon-s-grid" },
            { id: "gpscoor", name: "gps坐标简易转化", icon: "el-icon-s-grid" },
            { id: "draglist", name: "拖拽列表", icon: "el-icon-s-grid" },
            { id: "echarts", name: "Echarts图", icon: "el-icon-s-grid" },
          ],
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {
    window.addEventListener("resize", this.fWinResize, false);
    this.fWinResize({
      currentTarget: window,
    });
  },
  methods: {
    fWinResize(e) {
      console.log(e);
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
  background-color: #b3c0d1;
}

.el-aside {
  background-color: @c_block;
}

.el-main {
  padding: 0;
  background-color: #e9eef3;
}
</style>
