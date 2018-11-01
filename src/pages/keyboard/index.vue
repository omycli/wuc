<template>
    <div>
        <view>车牌号为：<text style="font-size:60rpx">{{msg}}</text></view>
        <keyboard :show="true" extra-key="开通无感" @keyboard="keyboard" active-border="#0deafe" base-border="38f8f8f" @input="inputChange" @close="closeChange" @delete="delChnage"></keyboard>
    </div>
</template>

<script>
import Keyboard from 'mpvue-keyboard';
import { navigateToMiniProgram } from '@/utils/wechat.js';
import request from '@/api/request';
import { login } from '@/utils/wechat';
import Tips from '@/utils/Tips.js';

export default {
    components: {
        keyboard: Keyboard
    },
    data() {
        return {
            msg: ''
        };
    },
    computed: {},
    methods: {
        async keyboard(msg) {
            this.msg = msg;
            const uInfo = await login();
            const params = {
                code: uInfo.code
            };
            const { result } = await request.get(
                '/api/user/get-binding',
                params
            );
            const miniParams = {
                appId: 'wxbcad394b3d99dac9',
                path: 'pages/route/index',
                plate_number: msg,
                extraData: {
                    appid: result.appid,
                    mch_id: result.mch_id,
                    sub_mch_id: result.sub_mch_id,
                    nonce_str: result.nonce_str,
                    sign_type: 'HMAC-SHA256',
                    sign: result.sign,
                    trade_scene: 'PARKING',
                    openid: result.sub_openid
                }
            };
            navigateToMiniProgram(miniParams).then(minires => {
                console.log(minires);
            });
        },
        inputChange() {
            console.log('get input');
        },
        closeChange() {
            console.log('get close');
        },
        delChnage() {
            console.log('get del');
        }
    },
    mounted() {},
    onShow(res) {
        if (!res) return false;
        if (res.scene === 1038) {
            // 场景值1038：从被打开的小程序返回
            const { appId, extraData } = res.referrerInfo;
            if (appId === 'wxbcad394b3d99dac9') {
                // appId为wxbcad394b3d99dac9：从车主小程序跳转回来
                if (typeof extraData === 'undefined') {
                    // TODO
                    // 客户端小程序不确定授权结果，需要发起‘用户状态查询接口’确认授权结果
                    Tips.modal(
                        `客户端小程序不确定授权结果，需要发起‘用户状态查询接口’确认授权结果`
                    );
                    return;
                }
                if (extraData.auth === 'true') {
                    // TODO
                    // 客户端小程序授权成功
                    Tips.modal(`客户端小程序授权成功`);
                    return;
                } else {
                    // TODO
                    // 授权失败
                    Tips.modal(`授权失败`);
                    return;
                }
            }
        }
    }
};
</script>
