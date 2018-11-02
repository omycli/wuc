<script>
import Tips from '@/utils/Tips';
export default {
    mpType: 'app',
    async created() {
        const updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(res => {
            console.log('是否需要更新：' + res.hasUpdate);
        });
        updateManager.onUpdateReady(() => {
            Tips.modal('更新提示', '新版本已经准备好，是否重启应用')
                .then(() => {
                    updateManager.applyUpdate();
                })
                .catch(err => {
                    Tips.toast('必须使用新版本', 'none');
                    console.log(err);
                });
        });
        updateManager.onUpdateFailed(function() {
            // 新的版本下载失败
            Tips.modal('更新提示', '更新失败，请检查网络是否连接？');
        });
    },
    onShow(res) {
        console.log('onShow');
        console.log(res);
        if (res.scene === 1038) {
            // 场景值1038：从被打开的小程序返回
            const { appId, extraData } = res.referrerInfo;
            if (appId === 'wxbcad394b3d99dac9') {
                // appId为wxbcad394b3d99dac9：从车主小程序跳转回来
                if (extraData && extraData.auth) {
                    if (res.path.indexOf('keyboard') !== -1) {
                        Tips.modal(`客户端小程序授权成功`).then(_ => {
                            wx.navigateBack({
                                delta: 1
                            });
                        });
                    }
                    return;
                } else {
                    return;
                }
            }
        }
    }
};
</script>

<style lang="scss">
@import './assets/css/package';
</style>
