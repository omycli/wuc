<script>
export default {
  mpType: "app",
  async created() {
    // #ifdef MP-WEIXIN
    const updateManager = uni.getUpdateManager();
    updateManager.onCheckForUpdate(res => {});
    updateManager.onUpdateReady(() => {
      uni.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
    updateManager.onUpdateFailed(function() {
      uni.showModal({
        title: "更新提示",
        content: "更新失败，请检查网络是否连接？"
      });
    });
    // #endif

    const systemInfo = uni.getSystemInfoSync();
    let CustomBar =
      systemInfo.platform === "android"
        ? systemInfo.statusBarHeight + 50
        : systemInfo.statusBarHeight + 45;
    let StatusBar = systemInfo.statusBarHeight;
    uni.setStorageSync("CustomBar", CustomBar);
    uni.setStorageSync("StatusBar", StatusBar);
  }
};
</script>
<style lang='scss'>
@import "~@/styles/main.scss";
@import "~@/styles/base.scss";
@import "~@/styles/icon.scss";
@import "~@/styles/animation.scss";
</style>
