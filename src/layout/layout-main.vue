<template>
  <el-container class="wrap-abs">
    <el-header ref="header">Header</el-header>
    <el-container class="wrap" :height="`${nContHeight}px`">
      <el-aside width="200px" :height="`${nContHeight}px`">
        <el-scrollbar class="main-scroll"></el-scrollbar>
      </el-aside>
      <el-main :height="`${nContHeight}px`">
        <el-scrollbar class="main-scroll">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
    <el-footer ref="footer">Footer</el-footer>
  </el-container>
</template>

<script>
/**
 * @desc layout-main.vue
 * @author caoyu
 * @CreatedTime 2021/6/28 13:46
 **/

export default {
  name: "layout-main",
  props: {},
  components: {},
  data() {
    return {
      nContHeight: 0,
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
  background-color: #b3c0d1;
  color: @c_font;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>