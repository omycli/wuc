<template>
  <div>
    <custom
      name="导航栏"
      bg-color="bg-gradual-pink"
    ></custom>

    <swiper
      :current="TabCur"
      class="swiper row"
      duration="300"
      @change="swiperChange"
    >
      <swiper-item
        v-for="(item,index) in tabList"
        :key="index"
      >
        <div class='bg-grey padding margin text-center'>
          Tab{{index}}
        </div>
      </swiper-item>
    </swiper>

    <div>
      <div class="cu-bar bg-white solid-bottom">
        <div class='action'>
          <text class='icon-titles text-orange '></text> 默认
        </div>
      </div>
      <tab
        :tab-list="tabList"
        :TabCur.sync="TabCur"
        bg-color="#ffffff"
        color="#666666"
      ></tab>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top  solid-bottom">
        <div class='action'>
          <text class='icon-title text-orange '></text> 居中
        </div>
      </div>
      <tab
        :tab-list="tabList2"
        :TabCur.sync="TabCur"
        :text-center="true"
        SelectColor="text-blue"
        bg-color="#ffffff"
        color="#666666"
      ></tab>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top  solid-bottom">
        <div class='action'>
          <text class='icon-title text-orange '></text> 平分
        </div>
      </div>
      <tab
        :tab-list="tabList2"
        :TabCur.sync="TabCur"
        :text-center="true"
        SelectColor="text-orange"
        bg-color="#ffffff"
        color="#666666"
      ></tab>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import tab from "@/components/tab";
export default {
  data() {
    return {
      tabList: ["tab0", "tab1", "tab2", "tab3", "tab4", "tab5", "tab6", "tab7"],
      tabList2: ["tab0", "tab1", "tab2"],
      TabCur: 0
    };
  },

  components: { Custom, tab },

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
