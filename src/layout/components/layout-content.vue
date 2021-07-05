<template>
  <div class="layout-content" :style="{ height: `${height}px` }">
    <div class="flex-row _center tab-wrap">
      <div class="flex-col _flex0">
        <i
          :class="[{ 'el-icon-s-unfold': menuCollapse }, { 'el-icon-s-fold': !menuCollapse }]"
          @click="menuCollapse = !menuCollapse"
        ></i>
      </div>
      <div class="flex-col">
        <el-tabs
          ref="tab"
          v-model="menuActiveName"
          type="border-card"
          @tab-remove="fOnTabRemove"
          @tab-click="fOnTabClick"
        >
          <el-tab-pane
            v-for="(item, i) in tabs"
            :key="`tab_${item.name}`"
            :label="item.title"
            :name="item.name"
            :closable="i > 0"
          ></el-tab-pane>
        </el-tabs>
      </div>
      <!--      <div class="flex-col _flex0">
              <i class="el-icon-s-operation"></i>
            </div>-->
    </div>
    <el-scrollbar class="main-scroll" :style="{ height: `${height - 39}px` }">
      <router-view />
    </el-scrollbar>
  </div>
</template>

<script>
/**
 * @description layout-content.vue
 * @author caoyu
 * @CreatedTime 2021/6/28 9:15 下午
 **/
export default {
  name: "layout-content",
  props: {
    height: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  data() {
    return {
      tabIndex: 2,
    };
  },
  computed: {
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
    menuCollapse: {
      get() {
        return this.$store.state.common.menuCollapse || false;
      },
      set(val) {
        this.$store.commit("common/updateMenuCollapse", val);
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * @description 标签tab选取回调
     * */
    fOnTabClick(tab) {
      this.$router.push({ name: tab.name });
      this.menuActiveName = tab.name;
    },
    addTab() {
      let newTabName = ++this.tabIndex + "";
      this.aTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.sCurTab = newTabName;
    },
    fOnTabRemove(targetName) {
      let tabs = this.tabs;
      let activeName = this.menuActiveName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.tabs = tabs.filter((tab) => tab.name !== targetName);
      this.fOnTabClick(this.tabs.find((tab) => tab.name === activeName));
    },
  },
  filters: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/_variables.less");

.layout-content {
  .main-scroll {
    border-top: 1px solid @c_bor_bor_lightest;
    border-left: 1px solid @c_bor_bor_lightest;
  }
}

.tab-wrap {
  background-color: @c_block;

  i {
    margin: 0 @s_mg_h;
    font-size: @s_font_large;
    color: @c_font_sec;
    cursor: pointer;

    &:hover {
      color: @c_main;
    }
  }
}

::v-deep {
  .el-tabs--border-card {
    border: transparent;
    box-shadow: unset;
  }

  .el-tabs--border-card {
    background-color: transparent;

    > .el-tabs__header {
      background-color: transparent;
      border-color: transparent;
      //box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
      .el-tabs__item {
        color: @c_font_sec;

        &.is-active {
          color: @c_main;
          //border-right-color: @c_bor_bor_light;
          //border-left-color: @c_bor_bor_light;
          border-color: transparent;
        }

        &:not(.is-disabled):hover {
          color: @c_main;
        }
      }
    }

    > .el-tabs__content {
      padding: 0;
    }
  }

  .el-tabs__item .el-icon-close:hover {
    background-color: @c_danger;
    color: @c_white;
  }
}
</style>
<style lang="less">
.layout-content {
}
</style>
