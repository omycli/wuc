<template>
  <div>
    <drawer :show.sync="modalName">
      <div slot="head">
        <custom bg-color="bg-black" isBar>
          <div slot="freebar">
            <div class="cu-avatar round" @tap="showModal">
              <text class="text-black">云</text>
            </div>
          </div>
        </custom>

        <div class="padding margin text-center">
          <div class="text-xl margin-xl">点击左上角的头像打开抽屉</div>
          <navigator
            class="cu-btn bg-green lg block shadow radius margin-xl"
            open-type="navigateBack"
            delta="1"
            hover-class="none"
          >
            <text class="icon-back"></text>返回上一页
          </navigator>
        </div>
      </div>
      <div slot="close">
        <text class="icon-pullright"></text>
      </div>

      <div slot="con">
        <div class="padding-xl text-center text-white">
          <img
            src="/static/assets/images/logo.png"
            class="response"
            mode="widthFix"
            style="width:200rpx;margin-top:100rpx"
          >
          <div class="text-xl">欢迎使用组件库
            <text class="text-df">v2.0.7</text>
          </div>
          <div class="margin-top-sm">
            <text>By:云中大鹏</text>
          </div>
        </div>
        <div
          class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"
        >
          <div class="cu-item arrow">
            <div
              class="content"
              @click="CopyLink"
              data-link="https://github.com/omycli/mpvueBase.git"
            >
              <text class="icon-github text-grey"></text>
              <text class="text-grey">GitHub</text>
            </div>
          </div>
          <div class="cu-item arrow">
            <navigator
              class="content"
              url="/subPackagesA/about/home"
              hover-class="none"
            >
              <img
                src="/static/assets/images/logo.png"
                class="png"
                mode="aspectFit"
              >
              <text class="text-grey">关于组件库</text>
            </navigator>
          </div>
          <div class="cu-item arrow">
            <navigator
              class="content"
              url="/subPackagesA/about/log"
              hover-class="none"
            >
              <text class="icon-formfill text-green"></text>
              <text class="text-grey">日志</text>
            </navigator>
          </div>
          <div class="cu-item arrow">
            <div class="content" @click="showQrcode">
              <text class="icon-appreciatefill text-red"></text>
              <text class="text-grey">赞赏支持</text>
            </div>
          </div>
          <div class="cu-item arrow">
            <button class="cu-btn content" open-type="feedback">
              <text class="icon-writefill text-cyan"></text>
              <text class="text-grey">意见反馈</text>
            </button>
          </div>
          <div class="cu-item arrow">
            <navigator
              class="content"
              url="/subPackagesT/test/list"
              hover-class="none"
            >
              <text class="icon-creativefill text-orange"></text>
              <text class="text-grey">Bug测试</text>
            </navigator>
          </div>
        </div>
      </div>
    </drawer>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Drawer from "@/components/drawer";
export default {
  data() {
    return {
      modalName: false
    };
  },

  components: { Custom, Drawer },

  computed: {},

  methods: {
    showModal(e) {
      this.modalName = true;
    },
    showQrcode() {
      uni.previewImage({
        urls: ["http://www.bbvdd.com/d/20190215105128ccj.jpeg"],
        current: "http://www.bbvdd.com/d/20190215105128ccj.jpeg" // 当前显示图片的http链接
      });
    }
  },

  mounted() {}
};
</script>
<style>
page {
  background-color: #555;
  background-size: 100%;
}

.DrawerPage {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0vw;
  background-color: #f1f1f1;
  transition: all 0.6s;
}

.DrawerPage.show {
  transform: scale(0.9, 0.9);
  left: 85vw;
  box-shadow: 0 0 60rpx rgba(0, 0, 0, 0.2);
  transform-origin: 0;
}

.DrawerWindow {
  position: absolute;
  width: 85vw;
  height: 100vh;
  left: 0;
  top: 0;
  transform: scale(0.9, 0.9) translateX(-100%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s;
}

.DrawerWindow.show {
  transform: scale(1, 1) translateX(0%);
  opacity: 1;
  pointer-events: all;
}

.DrawerClose {
  position: absolute;
  width: 40vw;
  height: 100vh;
  right: 0;
  top: 0;
  color: transparent;
  padding-bottom: 30rpx;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.01),
    rgba(0, 0, 0, 0.6)
  );
  letter-spacing: 5px;
  font-size: 50rpx;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s;
}
.DrawerClose.show {
  opacity: 1;
  pointer-events: all;
  width: 15vw;
  color: #fff;
}

.DrawerPage .cu-bar.tabbar .action button.icon {
  width: 64rpx;
  height: 64rpx;
  line-height: 64rpx;
  margin: 0;
  display: inline-block;
}

.DrawerPage .cu-bar.tabbar .action .cu-avatar {
  margin: 0;
}

.DrawerPage .nav {
  flex: 1;
}

.DrawerPage .nav .cu-item.cur {
  border-bottom: 0;
  position: relative;
}

.DrawerPage .nav .cu-item.cur::after {
  content: "";
  width: 10rpx;
  height: 10rpx;
  background-color: currentColor;
  position: absolute;
  bottom: 10rpx;
  border-radius: 10rpx;
  left: 0;
  right: 0;
  margin: auto;
}

.DrawerPage .cu-bar.tabbar .action {
  flex: initial;
}
</style>
