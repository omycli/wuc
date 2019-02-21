<template>
  <div>
    <custom
      noneBg
      name="索引"
      bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg"
    ></custom>
    <div>
      <div class="cu-bar bg-white search fixed" :style="CustomBar">
        <div class="search-form round">
          <text class="icon-search"></text>
          <input type="text" placeholder="输入搜索的关键词" confirm-type="search">
        </div>
        <div class="action">
          <button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
        </div>
      </div>
    </div>

    <indexes></indexes>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Indexes from "@/components/indexes";
import { obj2style } from "@/utils/index";
export default {
  data() {
    return {};
  },

  components: { Custom, Indexes },

  computed: {
    CustomBar() {
      let style = {};
      style["top"] = uni.getStorageSync("CustomBar") + "px";
      return obj2style(style);
    }
  },

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
page {
  padding-top: 50px;
}
</style>
