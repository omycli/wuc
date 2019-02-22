<template  lang='pug'>
div
  Custom(isBar noneBg bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg" nameImg="http://www.bbvdd.com/d/20190215110318xwq.png")
  .cu-card
    div(
      class='cu-item bg-img shadow-blur' 
      :style="'background-image:url('+item.img +');background-size:cover'" 
      @tap="toChild" :data-url="item.url" 
      v-for="item in list" 
      :key="item.title")
        .cardTitle {{item.title}}
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      list: [
        {
          title: "索引列表",
          img: "https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",
          url: "/pages/plugin/indexes"
        },
        {
          title: "微动画",
          img: "https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",
          url: "/subPackagesA/animation/index"
        },
        {
          title: "停车键盘",
          img:
            "https://goss4.veer.com/creative/vcg/veer/612/veer-304717812.jpg",
          url: "/pages/plugin/keyboard"
        },
        {
          title: "图表库",
          img:
            "https://goss2.veer.com/creative/vcg/veer/612/veer-302194474.jpg",
          url: "/pages/plugin/echarts"
        }
      ]
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    toChild(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      });
    }
  },

  mounted() {},
  onShareAppMessage() {
    return {
      title: "ColorUI-uni的组件库",
      imageUrl: "https://image.weilanwl.com/color2.0/share2215.jpg",
      path: "/pages/basics/index"
    };
  }
};
</script>
<style lang='scss'>
.cardTitle {
  color: #fff;
  padding: 90rpx 60rpx;
  font-size: 40rpx;
  font-weight: 300;
  transform: skew(-10deg, 0deg);
  position: relative;
  text-shadow: 0px 0px 6rpx rgba(0, 0, 0, 0.3);
}

.cardTitle::before {
  content: "";
  position: absolute;
  width: 60rpx;
  height: 6rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: block;
  top: 60rpx;
  left: 50rpx;
  transform: skew(10deg, 0deg);
}
.cardTitle::after {
  content: "";
  position: absolute;
  width: 140rpx;
  border-radius: 6rpx;
  height: 24rpx;
  background-color: #fff;
  display: block;
  bottom: 76rpx;
  left: 90rpx;
  transform: skew(10deg, 0deg);
  opacity: 0.1;
}
</style>
