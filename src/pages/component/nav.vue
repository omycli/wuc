<template>
  <div>
    <custom name="导航栏" bg-color="bg-gradual-pink fixed"></custom>

    <swiper
      :current="TabCur"
      class="swiper row"
      duration="300"
      @change="swiperChange"
    >
      <swiper-item v-for="(item,index) in tabList" :key="index">
        <div class="bg-grey padding margin text-center">Tab{{index}}</div>
      </swiper-item>
    </swiper>

    <div>
      <div class="cu-bar bg-white solid-bottom">
        <div class="action">
          <text class="icon-titles text-orange"></text>默认
        </div>
      </div>
      <mu-tab
        :TabList="tabList"
        :TabCur.sync="TabCur"
        BgColor="#ffffff"
        Color="#666666"
      ></mu-tab>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top solid-bottom">
        <div class="action">
          <text class="icon-title text-orange"></text>居中
        </div>
      </div>
      <mu-tab
        :TabList="tabList2"
        :TabCur.sync="TabCur"
        TextCenter="true"
        SelectColor="text-blue"
        BgColor="#ffffff"
        Color="#666666"
      ></mu-tab>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top solid-bottom">
        <div class="action">
          <text class="icon-title text-orange"></text>平分
        </div>
      </div>
      <mu-tab
        :TabList="tabList2"
        :TabCur.sync="TabCur"
        :TextFlex="true"
        SelectColor="text-orange"
        BgColor="#ffffff"
        Color="#666666"
      ></mu-tab>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top solid-bottom">
        <div class="action">
          <text class="icon-title text-orange"></text>背景
        </div>
      </div>
      <mu-tab
        :TabList="tabList2"
        :TabCur.sync="TabCur"
        :TextCenter="true"
        SelectColor="text-white"
        BgColor="#e54d42"
        Color="#ffffff"
      ></mu-tab>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top solid-bottom">
        <div class="action">
          <text class="icon-title text-orange"></text>图标
        </div>
      </div>
      <mu-tab
        :TabList="tabList3"
        :TabCur.sync="TabCur"
        :TextCenter="true"
        SelectColor="text-white"
        BgColor="#39b54a"
        Color="#ffffff"
      />
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import MuTab from "@/components/tab";
export default {
  data() {
    return {
      tabList: [
        { name: "tab0" },
        { name: "tab1" },
        { name: "tab2" },
        { name: "tab3" },
        { name: "tab4" },
        { name: "tab5" },
        { name: "tab6" },
        { name: "tab7" }
      ],
      tabList2: [{ name: "tab0" }, { name: "tab1" }, { name: "tab2" }],
      tabList3: [
        { name: "数码", icon: "icon-camerafill" },
        { name: "tab1", icon: "icon-upstagefill" },
        { name: "tab2", icon: "icon-clothesfill" }
      ],
      TabCur: 0
    };
  },

  components: { Custom, MuTab },

  computed: {},

  methods: {
    swiperChange(e) {
      let { current } = e.target;
      this.TabCur = current;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.swiper {
  position: relative;
  display: block;
  width: 100%;
  height: 148rpx;
}
</style>
