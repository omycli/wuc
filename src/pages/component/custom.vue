<template>
  <div>
    <custom name="顶部操作栏" bg-color="bg-gradual-pink"></custom>
    <div class="cu-bar bg-white">
      <div class="action">
        <text class="icon-title text-pink"></text>
        <text>一级顶部操作栏</text>
      </div>
    </div>

    <custom
      name="居左首页"
      bg-color="bg-gradual-blue"
      open-type="switchTab"
      url="/pages/basics/index"
    ></custom>

    <custom bg-color="bg-blue margin-top" freebar>
      <div slot="freebar">
        <div class="content text-bold" :style="conTop">居中首页</div>
      </div>
    </custom>

    <custom bg-color="bg-black margin-top" freebar>
      <div slot="freebar">
        <div class="action" @tap="close">
          <text class="icon-close"></text>关闭
        </div>
        <div class="content" :style="conTop">带按钮的首页</div>
      </div>
    </custom>

    <custom bg-color="bg-cyan margin-top search" freebar>
      <div slot="freebar">
        <div class="search-form radius">
          <text class="icon-search"></text>
          <input type="text" placeholder="带搜索框的顶部操作栏" confirm-type="search">
        </div>
      </div>
    </custom>

    <custom
      name="图片背景首页"
      bg-color="margin-top text-black text-blod"
      bg-img="https://static.veer.com/veer/static/resources/keyword/2018-05-30/a207217f05aa426f821547508320178b.jpg"
      noneBg
    ></custom>

    <custom
      bg-color="margin-top"
      bg-img="https://goss1.veer.com/creative/vcg/veer/612/veer-148024919.jpg"
      noneBg
      freebar
    >
      <div slot="freebar">
        <div class="content" :style="conTop">图片背景首页</div>
      </div>
    </custom>

    <div class="cu-bar bg-white margin-top">
      <div class="action">
        <text class="icon-title text-pink"></text>
        <text>多级顶部操作栏</text>
      </div>
    </div>

    <custom name="顶部操作栏" bg-color="bg-gradual-blue"></custom>
    <custom bg-color="bg-gradual-red margin-tb" leftMore>
      <text slot="leftMore">
        <text class="icon-homefill"></text>
      </text>
      <div slot="moreCon">
        <div class="content" :style="conTop">顶部操作栏</div>
      </div>
    </custom>
    <custom name="顶部操作栏" bg-color="bg-gradual-purple margin-tb" leftMore>
      <text slot="leftMore">
        <text class="icon-homefill"></text>
      </text>
      <div slot="moreCon">
        <wuc-tab
          :tab-list="tabNav"
          :tabCur.sync="TabCur"
          tab-class="text-center text-white"
          select-class="text-yellow text-xl"
        ></wuc-tab>
      </div>
    </custom>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import { obj2style } from "@/utils/index";
import WucTab from "@/components/tab";
export default {
  data() {
    return {
      TabCur: 0,
      tabNav: [
        { name: "tab0" },
        { name: "tab1" },
        { name: "tab2" }
      ]
    };
  },

  components: { Custom, WucTab },

  computed: {
    conTop() {
      let style = {};
      style["top"] = uni.getStorageSync("StatusBar") + "px";
      return obj2style(style);
    }
  },

  methods: {
    tabSelect(index) {
      this.TabCur = index;
    },
    close() {
      uni.showToast({
        title: "点击了关闭",
        mask: true,
        duration: 2000
      });
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
