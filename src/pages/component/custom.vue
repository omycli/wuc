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
      bg-color="bg-gradual-pink"
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
        <div class="action">
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
      bg-color="margin-top"
      bg-img="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg"
      noneBg
    ></custom>

    <custom
      bg-color="margin-top"
      bg-img="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg"
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
        <scroll-view scroll-x class="nav text-center" :style="CustomBar">
          <div
            class="cu-item"
            :class="index==TabCur?'text-yellow cur':''"
            v-for="(item,index) in tabNav"
            :key="index"
            @click="tabSelect(index)"
          >{{item}}</div>
        </scroll-view>
      </div>
    </custom>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import { obj2style } from "@/utils/index";
export default {
  data() {
    return {
      TabCur: 0,
      tabNav: ["首页", "列表", "我的"]
    };
  },

  components: { Custom },

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
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
