<template>
  <div>
    <div class='UCenter-bg'>
      <image
        src='/static/assets/images/logo.png'
        class='png'
        mode='widthFix'
      />
      <div class='text-xl'>欢迎使用组件库
        <text class='text-df'>v2.0.61</text>
      </div>
      <div class='margin-top-sm'>
        <text>By:云中大鹏</text>
      </div>
    </div>
    <div class='padding-xl'>
      <button
        class='cu-btn  bg-green shadow lg block'
        open-type="getUserInfo"
        @getuserinfo="onGetUserInfo"
      >微信登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    onGetUserInfo: function(e) {
      if (e.detail.userInfo) {
        uni.setStorageSync("userInfo", e.detail.userInfo);
        uni.switchTab({
          url: "/pages/basics/index"
        });
      }
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.UCenter-bg {
  background-image: url(https://static.veer.com/veer/static/resources/Titles/2019-01-09/55270f79febb487fbcdb5b00118f91f7.jpg);
  background-size: 100%;
  height: 700rpx;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 50vw;
    background-color: #f1f1f1;
    transform: rotate(-10deg) scale(2, 2);
    bottom: -60vw;
    left: 0;
    right: 0;
    margin: auto;
  }
  text {
    opacity: 0.8;
  }
  image {
    width: 250rpx;
    height: 250rpx;
  }
}
</style>
