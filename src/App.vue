<script>
import { login } from '@/utils/wechat';
export default {
    created() {
        // 调用API从本地缓存中获取数据
        login().then(res => {
            console.log(res);
            const loginInfo = wx.getStorageSync('loginInfo');
            if (loginInfo) return false;

            if (res.code) {
                wx.setStorageSync('loginInfo', res);
            }
        });
    }
};
</script>

<style lang="scss">
@import './assets/css/package';
</style>
