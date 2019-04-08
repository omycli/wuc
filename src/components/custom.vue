<template>
  <div class="cu-custom" :style="CustomBar">
    <div
      class="cu-bar"
      :class="[noneBg ? 'none-bg bg-img text-white' : '', bgColor]"
      :style="noneBg ? imageBar : StatusBar"
    >
      <slot name="freebar"></slot>
      <div v-if="!freebar">
        <navigator
          class="action"
          :class="leftMore ? 'border-custom' : ''"
          :open-type="openType"
          :delta="delta"
          :url="url"
          hover-class="none"
          :style="navCustom"
        >
          <text
            v-if="openType === 'navigateBack'"
            class="icon-back"
            :style="navColor"
          ></text>
          <text v-if="!leftMore" :style="navColor">{{name}}</text>
          <slot name="leftMore"></slot>
        </navigator>
      </div>
      <slot name="moreCon" v-if="leftMore"></slot>
    </div>
  </div>
</template>

<script>
import { obj2style } from "@/utils/index";
export default {
  name: "navigationBar",
  props: {
    name: {
      type: String,
      default() {
        return "";
      }
    },
    bgImg: {
      type: String,
      default() {
        return "https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg";
      }
    },
    bgColor: {
      type: String,
      default() {
        return "bg-gradual-green fixed";
      }
    },
    leftMore: {
      type: Boolean,
      default() {
        return false;
      }
    },
    openType: {
      type: String,
      default() {
        return "navigateBack";
      }
    },
    delta: {
      type: Number,
      default() {
        return 1;
      }
    },
    url: {
      type: String,
      default() {
        return "";
      }
    },
    noneBg: {
      type: Boolean,
      default() {
        return false;
      }
    },
    freebar: {
      type: Boolean,
      default() {
        return false;
      }
    },
    color: {
      type: String,
      default() {
        return "#ffffff";
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    CustomBar() {
      let style = {};
      if (this.bgColor.includes("bg-shadeTop") > 0) {
        style["height"] = 0 + "px";
      } else {
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
      style["background-image"] = `url(${this.bgImg})`;
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
    },
    navColor() {
      let style = {};
      style["color"] = this.color;
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
