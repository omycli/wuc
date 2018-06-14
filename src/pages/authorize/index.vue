<template>
    <div class="md-item">
        <image class="md-item__background" :src="img" mode="aspectFill" />
        <div>
            <image class="md-item__poster" :src="img" mode="aspectFit" @click="preImage" />
            <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">
                <div>授权进入</div>
            </button>
            <formButton :button-content="buttonContent" @getFormId="getFormId" :active="canClick" />
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

            buttonContent: '加入',
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
            console.log(key)
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
}
button {
    margin-top: -250rpx;
    background-color: transparent;
    height: 80rpx;
    padding: 0;
    div {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        font-size: 32rpx;
        color: #33270c;
        font-weight: 400;
        z-index: 9999;
    }
    img {
        box-sizing: border-box;
        border-radius: 30px;
        background-color: #fff;
        padding: 0;
        width: 540rpx;
        height: 80rpx;
    }
}
button:after {
    border: none;
}
</style>
