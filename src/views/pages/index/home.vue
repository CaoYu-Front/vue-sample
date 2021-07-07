<template>
  <div class="home">
    <map-china />
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
