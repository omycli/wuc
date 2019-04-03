<template>
  <div>
    <custom name="倒计时" bg-color="bg-gradual-purple fixed"></custom>
    <div class="example">
      <div class="example-title">一般用法</div>
      <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
      <div class="example-title">不显示天数</div>
      <uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>
      <div class="example-title">文字分隔符</div>
      <uni-countdown :minute="30" :second="0" :show-colon="false"></uni-countdown>
      <div class="example-title">修改颜色</div>
      <uni-countdown
        color="#FFFFFF"
        background-color="#00B26A"
        border-color="#00B26A"
        :day="1"
        :hour="2"
        :minute="30"
        :second="0"
      ></uni-countdown>
      <div class="example-title">倒计时回调事件</div>
      <uni-countdown :show-day="false" :second="10" @timeup="timeup"></uni-countdown>
    </div>
  </div>
</template>
<script>
import Custom from "@/components/custom";
import uniCountdown from "@/components/uni-countdown.vue";

export default {
  components: {
    Custom,
    uniCountdown
  },
  data() {
    return {};
  },
  methods: {
    timeup() {
      uni.showToast({
        title: "时间到"
      });
    }
  }
};
</script>

<style>
page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
}

view {
  font-size: 28upx;
  line-height: inherit;
}

.example {
  padding: 0 30upx 30upx;
}

.example-title {
  font-size: 32upx;
  line-height: 32upx;
  color: #777;
  margin: 40upx 25upx;
  position: relative;
}

.example .example-title {
  margin: 40upx 0;
}

.example-body {
  padding: 0 40upx;
}

.title {
  margin: 80upx 0 20upx 0;
}
</style>
