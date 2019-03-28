<template>
  <div>
    <custom
      noneBg
      name="索引"
      bg-img="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg"
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

    <indexes :key-list="KeyList">
      <div v-for="(item, index) in KeyList" :key="index">
        <div
          class="padding"
          :class="'indexItem-'+KeyList[index]"
          :id="'indexes-'+KeyList[index]"
          :data-index="KeyList[index]"
        >{{KeyList[index]}}</div>
        <div class="cu-list menu menu-avatar no-padding">
          <div
            class="cu-item"
            v-for="(item, sub) in conList"
            :key="sub"
            :for-index="sub"
          >
            <div class="cu-avatar round lg">{{KeyList[index]}}</div>
            <div class="content">
              <div class="text-grey">
                {{KeyList[index]}}
                <text class="text-abc">{{KeyList[sub]}}</text>君
              </div>
              <div class="text-gray text-sm">有{{sub+2}}个主子需要伺候</div>
            </div>
          </div>
        </div>
      </div>
    </indexes>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Indexes from "@/components/indexes";
import { obj2style } from "@/utils/index";
export default {
  data() {
    return {
      KeyList: [],
      conList: []
    };
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

  mounted() {
    let list = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i);
    }
    this.KeyList = list;
    this.conList = 2;
  }
};
</script>
<style lang='scss'>
page {
  padding-top: 100upx;
}
</style>
