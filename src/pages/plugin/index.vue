<template  lang='pug'>
div
  Custom(freebar noneBg bg-img="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg")
    div(slot='freebar')
      div(class="content" :style="conTop") {{name}}
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
import { obj2style } from "@/utils/index";
export default {
  data() {
    return {
      name: "扩展",
      list: [
        {
          title: "索引列表",
          img: "https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",
          url: "/subPackagesA/plugin/indexes"
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
          url: "/subPackagesA/plugin/keyboard"
        },
        {
          title: "图表库",
          img:
            "https://goss2.veer.com/creative/vcg/veer/612/veer-302194474.jpg",
          url: "/subPackagesA/plugin/echarts"
        },
        {
          title: "垂直导航",
          img: "https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg",
          url: "/subPackagesA/plugin/verticalnav"
        },
        {
          title: "全屏抽屉",
          img: "https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg",
          url: "/subPackagesA/plugin/drawer"
        },
        {
          title: "外部网页",
          img: "https://goss3.veer.com/creative/vcg/veer/612/veer-167598354.jpg",
          url: "/subPackagesT/open/webview"
        }
      ]
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
