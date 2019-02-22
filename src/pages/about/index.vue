<template>
  <div>
    <div class="UCenter-bg">
      <image
        src="/static/assets/images/logo.png"
        class="png"
        mode="widthFix"
      />
      <div class="text-xl">欢迎使用组件库
        <text class="text-df">v2.0.61</text>
      </div>
      <div class="margin-top-sm">
        <text>By:云中大鹏、文晓港</text>
      </div>
      <image
        src="https://image.weilanwl.com/gif/wave.gif"
        mode="scaleToFill"
        class="gif-wave"
      />
    </div>
    <div class="padding flex text-center text-grey bg-white shadow-warp">
      <div class="flex flex-sub flex-direction solid-right">
        <div class="text-xxl text-orange">{{visitTotal}}</div>
        <div class="margin-top-sm">
          <text class="icon-attentionfill"></text>View
        </div>
      </div>
      <div class="flex flex-sub flex-direction solid-right">
        <div class="text-xxl text-blue">{{starCount}}</div>
        <div class="margin-top-sm">
          <text class="icon-favorfill"></text>Star
        </div>
      </div>
      <div class="flex flex-sub flex-direction">
        <div class="text-xxl text-green">{{forksCount}}</div>
        <div class="margin-top-sm">
          <text class="icon-fork"></text>Fork
        </div>
      </div>
    </div>
    <div class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
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
          <image
            src="/static/assets/images/logo.png"
            class="png"
            mode="aspectFit"
          />
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
        <div
          class="content"
          @click="showQrcode"
        >
          <text class="icon-appreciatefill text-red"></text>
          <text class="text-grey">赞赏支持</text>
        </div>
      </div>
      <div class="cu-item arrow">
        <button
          class="cu-btn content"
          open-type="feedback"
        >
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

      <div
        class="cu-modal"
        :class="modalName=='QrcodeModal'?'show':''"
      >
        <div class="cu-dialog">
          <div
            class="bg-img"
            style="background-image: url('http://www.bbvdd.com/d/20190215105128ccj.jpeg');height:544rpx;"
          >
            <div class="cu-bar justify-end none-bg text-white">
              <div
                class="action"
                click="hideModal"
              >
                <text class="icon-close"></text>
              </div>
            </div>
          </div>
          <div class="cu-bar">
            <div
              class="justify-center flex-sub"
              click="SaveQrcode"
            >保存到相册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starCount: 0,
      forksCount: 0,
      visitTotal: 0
    };
  },

  components: {},

  computed: {},

  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + "k";
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + "W";
      }
      return e;
    },
    CopyLink(e) {
      uni.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          uni.showToast({
            title: "已复制",
            duration: 1000
          });
        }
      });
    },
    showQrcode() {
      uni.previewImage({
        urls: ["http://www.bbvdd.com/d/20190215105128ccj.jpeg"],
        current: "http://www.bbvdd.com/d/20190215105128ccj.jpeg" // 当前显示图片的http链接
      });
    }
  },

  mounted() {
    let that = this;
    uni.showLoading({
      title: "数据加载中",
      mask: true
    });
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function() {
          that.visitTotal = i;
          that.forksCount = i;
          i++;
          numDH();
        }, 20);
      } else {
        that.starCount = that.coutNum(999);
        that.forksCount = that.coutNum(8888);
        that.visitTotal = that.coutNum(77777);
      }
    }
    uni.hideLoading();
  }
};
</script>
<style lang='scss'>
page {
  padding-bottom: 100rpx;
}
.UCenter-bg {
  background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
  background-size: cover;
  height: 550rpx;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  text {
    opacity: 0.8;
  }
  image {
    width: 200rpx;
    height: 200rpx;
  }
  .gif-wave {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
    mix-blend-mode: screen;
    height: 100rpx;
  }
}
</style>
