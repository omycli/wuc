<template>
  <div class="cu-custom" :style="CustomBar">
    <div
      v-show="!noneBg"
      class="cu-bar fixed"
      :class="bgColor"
      :style="StatusBar"
    >
      <navigator
        class="action"
        open-type="navigateBack"
        :delta="1"
        hover-class="none"
        v-show="!isBar"
      >
        <text v-show="!isBar" class="icon-back"></text>
        <text>{{name}}</text>
      </navigator>
      <div class="content" v-show="isBar">
        <image :src="nameImg" mode="widthFix" />
      </div>
    </div>

    <div
      v-show="noneBg"
      class="cu-bar fixed none-bg text-white bg-img"
      :style="imageBar"
    >
      <navigator
        class="action"
        open-type="navigateBack"
        delta="1"
        hover-class="none"
        v-show="!isBar"
      >
        <text v-show="!isBar" class="icon-back"></text>
        {{name}}
      </navigator>
      <div class="content" v-show="isBar">
        <image :src="nameImg" mode="widthFix" />
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
    }
  },
  data() {
    return {};
  },
  computed: {
    CustomBar() {
      let style = {};
      style["height"] = uni.getStorageSync("CustomBar") + "px";
      return obj2style(style);
    },
    StatusBar() {
      let style = {};
      style["height"] = uni.getStorageSync("CustomBar") + "px";
      style["padding-top"] = uni.getStorageSync("StatusBar") + "px";
      return obj2style(style);
    },
    imageBar() {
      let style = {};
      style["height"] = uni.getStorageSync("CustomBar") + "px";
      style["padding-top"] = uni.getStorageSync("StatusBar") + "px";
      style["background-image"] = `url(${this.bgImage})`;
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
