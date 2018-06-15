<template>
    <div class="md-item">
        <image class="md-item__background" :src="img" mode="aspectFill" />
        <div>
            <button class="md-item__start" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">
                授权进入
            </button>
            <formButton :button-content="buttonContent" @getFormId="getFormId" :active="canClick" />
            <image class="md-item__poster" :src="img" mode="aspectFit" @click="preImage" />
        </div>
    </div>
</template>

<script>
import formButton from '@/components/formButton';
import {
    login,
    setStorage,
    jumpTo,
    showLoading,
    hideLoading,
    modal,
    toast
} from '@/utils/wechat';
import { Login } from '@/api/API';
export default {
    data() {
        return {
            img:
                'http://hbfile.b0.upaiyun.com/img/home/banner/e09cb62482e57b615c32f3e18feeffc57851372a5aea3',

            buttonContent: '推送模板',
            canClick: true
        };
    },
    components: {
        formButton
    },
    methods: {
        bindGetUserInfo(e) {
            let info = JSON.parse(e.mp.detail.rawData);
            setStorage('nickName', info.nickName);
            setStorage('avatar', info.avatarUrl);
            showLoading();
            login()
                .then(res => {
                    return Login(res.code);
                })
                .then(res => {
                    hideLoading();
                    setTimeout(() => {
                        jumpTo('../index/main');
                    }, 500);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        getFormId(key) {
            console.log(key);
        }
    },
    onLoad() {
        const updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(res => {
            console.log(res.hasUpdate);
        });
        updateManager.onUpdateReady(() => {
            modal('更新提示', '新版本已经准备好，是否重启应用')
                .then(() => {
                    updateManager.applyUpdate();
                })
                .catch(err => {
                    toast('必须使用新版本', 'none');
                    console.log(err);
                });
        });
    }
};
</script>

<style lang="scss">
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'md';

@include c('item') {
    @include e('background') {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        z-index: -1000;
        opacity: 0.3;
    }
    @include e('poster') {
        width: 100%;
        height: 800rpx;
        margin: 20rpx;
    }

    @include e('start') {
        position: absolute;
        bottom: 200rpx;
        left: 50%;
        width: 300rpx;
        margin-left: -150rpx;
        background-color: rgba(64, 88, 109, 0.4);
        color: #fff;
        border: 1rpx solid rgba(64, 88, 109, 0.8);
        border-radius: 200rpx;
        font-size: 40rpx;
    }
}
</style>
