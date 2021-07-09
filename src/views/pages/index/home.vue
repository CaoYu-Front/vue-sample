<template>
  <div class="home">
    <map-china show-label-on-hover show-content-on-click>
      <div class="" slot="label" slot-scope="{ scope }">
        {{ scope.title }}
      </div>
      <div class="" slot="content" slot-scope="{ scope }">
        {{ scope.title }}<br />
        {{ scope.name }}
      </div>
    </map-china>
  </div>
</template>

<script>
import MapChina from "@/components/map/map-china";

/**
 * @description home.vue
 * @author handle、
 * @CreatedTime 2021/7/5 15:25
 **/
export default {
  name: "home",
  props: {},
  components: { MapChina },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  filters: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/_variables");

.home {
}
</style>
<style lang="less">
.home {
}
</style>
