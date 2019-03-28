<template>
  <div>
    <custom
      noneBg
      name="停车键盘"
      bg-img="https://goss4.veer.com/creative/vcg/veer/612/veer-304717812.jpg"
    ></custom>
    <div class="p-i" :style="bgheight">
      <div class="column">
        <img
          class="p-i__img"
          src="/static/assets/images/parking-logo.png"
          mode="aspectFit"
        >
        <keyboard
          @keyboard="keyboardChange"
          :show.sync="show"
          active-border="#0deafe"
          base-border="38f8f8f"
        ></keyboard>
      </div>
      <div class="p-i__con column text-center">
        <div class="p-i__info text-center">提示：请确保您填写车牌号的正确性，以免后续</div>
        <div class="p-i__info text-center">误交费给您造成不必要的麻烦。</div>

        <div class="p-i__ben text-center" @click="TapScale">停车缴费标准</div>

        <div class="p-i__over">
          <div class="text-center">
            <div class="p-i__over-name">剩余停车位</div>
            <div class="p-i__over-value">{{space}}</div>
          </div>
        </div>
      </div>

      <div class="p-i__footer flex-center" @click="call()">
        <img src="/static/assets/images/p-phone.png" class="p-i__footer-img">
        <div class="p-i__footer-text">客服电话：{{tel}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import keyboard from "@/components/keyboard";
import { obj2style } from "@/utils/index";
export default {
  data() {
    return {
      tel: 888888,
      space: 999,
      show: true
    };
  },

  components: { Custom, keyboard },

  computed: {
    bgheight() {
      let style = {};
      const { screenHeight } = uni.getSystemInfoSync();
      style["height"] = screenHeight - uni.getStorageSync("CustomBar") + "px";
      return obj2style(style);
    }
  },

  methods: {
    keyboardChange(e) {
      console.log(e);
    },
    call() {
      uni.makePhoneCall({
        phoneNumber: this.tel
      });
    },
    TapScale() {}
  },

  mounted() {}
};
</script>
<style lang='scss'>
$gfrom: #04010e; // 渐变色起始颜色
$gmiddle: #091149; // 渐变色过度颜色
$gend: #0c2c5c; // 渐变色结束颜色
.p-i {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from($gfrom),
    color-stop(0.5, $gmiddle),
    to($gend)
  );
  width: 100%;
  overflow: hidden;
  &__img {
    position: relative;
    margin: 0 auto;
    margin-top: 130rpx;
    width: 323rpx;
    height: 58rpx;
  }
  &__con {
    width: 100%;
    padding: 10rpx 30rpx;
    margin-top: 130rpx;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  &__info {
    width: 100%;
    height: 48rpx;
    font-size: 30rpx;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0rpx;
    color: #a0c0ff;
  }
  &__ben {
    width: 100%;
    margin-top: 40rpx;
    height: 38rpx;
    text-decoration: underline;
    font-size: 36rpx;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48rpx;
    letter-spacing: 0px;
    color: #ffffff;
  }
  &__over {
    position: relative;
    width: 100%;
    top: 60rpx;
  }
  &__over-img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    width: 380rpx;
    height: 380rpx;
  }
  &__over-name {
    position: relative;
    top: 140rpx;
    height: 29rpx;
    font-size: 30rpx;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48rpx;
    letter-spacing: 0px;
    color: #a99dc6;
    z-index: 10;
  }
  &__over-value {
    position: relative;
    top: 170rpx;
    height: 45rpx;
    font-size: 60rpx;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48rpx;
    letter-spacing: 0px;
    color: #ffffff;
  }
  &__footer {
    position: absolute;
    width: 100%;
    bottom: 60rpx;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &__footer-img {
    width: 26rpx;
    height: 27rpx;
  }
  &__footer-text {
    margin-left: 10rpx;
    font-size: 28rpx;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
</style>
