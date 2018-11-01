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
    }
};
</script>

<style lang="scss">
@import './assets/css/package';
</style>
