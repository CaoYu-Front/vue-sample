<template>
  <div class="layout-content" :style="{ height: `${height}px` }">
    <el-tabs ref="tab" v-model="sCurTab" type="border-card" @tab-remove="fOnTabRemove" @tab-click="fOnTabClick">
      <el-tab-pane
        v-for="(item, i) in aTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="i > 0"
      ></el-tab-pane>
      <el-scrollbar class="main-scroll" :style="{ height: `${height - 39}px` }">
        <router-view />
      </el-scrollbar>
    </el-tabs>
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
      sCurTab: "homepage",
      aTabs: [
        {
          title: "首页",
          name: "homepage",
        },
        {
          title: "测试页面",
          name: "test",
        },
      ],
      tabIndex: 2,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * @description 标签tab选取回调
     * */
    fOnTabClick(tab) {
      this.$router.push({ name: tab.name });
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
      let tabs = this.aTabs;
      let activeName = this.sCurTab;
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
      this.sCurTab = activeName;
      this.aTabs = tabs.filter((tab) => tab.name !== targetName);
      this.fOnTabClick(this.aTabs.find((tab) => tab.name === activeName));
    },
  },
  filters: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/_variables");

.layout-content {
}

::v-deep {
  .el-tabs--border-card {
    border: transparent;
    box-shadow: unset;
  }

  .el-tabs--border-card {
    > .el-tabs__header {
      border-color: transparent;
      background-color: @c_block;
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
