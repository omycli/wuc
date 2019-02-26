<template>
  <div class="cu-custom" :style="CustomBar">
    <div
      v-if="!noneBg"
      class="cu-bar fixed"
      :class="bgColor"
      :style="StatusBar"
    >
      <slot name="freebar"></slot>
      <navigator
        class="action"
        :class="leftMore ? 'border-custom' : ''"
        open-type="navigateBack"
        :delta="1"
        hover-class="none"
        v-if="!isBar"
        :style="navCustom"
      >
        <text v-if="!isBar" class="icon-back"></text>
        <slot name="bar"></slot>
        <text v-if="!leftMore && !noCusBar">{{name}}</text>
        <text v-if="noCusBar">{{noCusBarLeftName}}</text>
      </navigator>
      <div
        v-if="leftMore || noCusBar"
        class="content"
        :style="leftMoreBar"
      >{{name}}</div>
      <div class="content" v-if="isBar">
        <img :src="nameImg" mode="widthFix">
      </div>
    </div>

    <div
      v-if="noneBg"
      class="cu-bar fixed none-bg text-white bg-img"
      :style="imageBar"
    >
      <navigator
        class="action"
        open-type="navigateBack"
        delta="1"
        hover-class="none"
        v-if="!isBar"
      >
        <text v-if="!isBar" class="icon-back"></text>
        {{name}}
      </navigator>
      <div class="content" v-if="isBar">
        <img :src="nameImg" mode="widthFix">
      </div>
    </div>
  </div>
</template>

<script>
import { obj2style } from "@/utils/index";
export default {
  name: "custom",
  props: {
    name: {
      type: String,
      default() {
        return "";
      }
    },
    bgColor: {
      type: String,
      default() {
        return "bg-gradual-green";
      }
    },
    noneBg: {
      type: Boolean,
      default() {
        return false;
      }
    },
    bgImage: {
      type: String,
      default() {
        return "https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg";
      }
    },
    isBar: {
      type: Boolean,
      default() {
        return false;
      }
    },
    nameImg: {
      type: String,
      default() {
        return "";
      }
    },
    leftMore: {
      type: Boolean,
      default() {
        return false;
      }
    },
    noCusBar: {
      type: Boolean,
      default() {
        return false;
      }
    },
    noCusBarLeftName: {
      type: String,
      default() {
        return "返回";
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    CustomBar() {
      let style = {};
      if (!this.noCusBar) {
        style["height"] = uni.getStorageSync("CustomBar") + "px";
      }
      return obj2style(style);
    },
    StatusBar() {
      let style = {};
      style["height"] = uni.getStorageSync("CustomBar") + "px";
      style["padding-top"] = uni.getStorageSync("StatusBar") + "px";
      return obj2style(style);
    },
    leftMoreBar() {
      let style = {};
      style["top"] = uni.getStorageSync("StatusBar") + "px";
      return obj2style(style);
    },
    imageBar() {
      let style = {};
      style["height"] = uni.getStorageSync("CustomBar") + "px";
      style["padding-top"] = uni.getStorageSync("StatusBar") + "px";
      style["background-image"] = `url(${this.bgImage})`;
      return obj2style(style);
    },
    navCustom() {
      let style = {};
      if (this.leftMore) {
        let Custom = wx.getMenuButtonBoundingClientRect();
        style["width"] = Custom.width + "px";
        style["height"] = Custom.height + "px";
        style["margin-left"] = `calc(750rpx - (${Custom.right})px`;
      }
      return obj2style(style);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.cu-bar .content image {
  height: 60rpx;
  width: 240rpx;
}
</style>
