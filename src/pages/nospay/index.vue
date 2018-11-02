<template>
    <div class="row-center column">
        <button class="open-pay" @tap="openpay()">{{info}}</button>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item.plate_number}}</li>
        </ul>
    </div>
</template>

<script>
import store from './store';
import Tips from '@/utils/Tips.js';
import { navigateToMiniProgram } from '@/utils/wechat.js';
import request from '@/api/request';
import { login } from '@/utils/wechat';

export default {
    data() {
        return {
            info: '查看用户是否开通无感支付',
            list: []
        };
    },
    computed: {
        partRes() {
            return store.state.partRes;
        }
    },
    methods: {
        async openpay() {
            const params = {
                url: '/api/user/get-binding'
            };
            await store.dispatch('getpartnerpay', params);
            try {
                if (!this.partRes) return false;
                let resInfo = this.partRes.result;
                let userStatus = resInfo.user_state;
                switch (userStatus) {
                    case 'NORMAL':
                        this.info = '正常用户，已开通车主服务，且已授权访问';
                        this.list = resInfo.plate_number_info.plate_number_info;
                        this.navCar();
                        break;
                    case 'PAUSED':
                        this.info = '已暂停车主服务';
                        break;
                    case 'OVERDUE':
                        this.info = '欠费状态';
                        break;
                    case 'UNAUTHORIZED':
                        this.info = '未开通车主服务';
                        Tips.modal(`未开通车主服务,请先开通车主服务`).then(
                            async res => {
                                this.navCar();
                            }
                        );
                        break;

                    default:
                        break;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async navCar() {
            const uInfo = await login();
            const params = {
                code: uInfo.code
            };
            const { result } = await request.get(
                '/api/user/authorization',
                params
            );
            // debugger;
            const miniParams = {
                appId: 'wxbcad394b3d99dac9',
                path: 'pages/route/index',
                extraData: {
                    appid: result.appid,
                    sub_appid: result.sub_appid,
                    mch_id: result.mch_id,
                    sub_mch_id: result.sub_mch_id,
                    nonce_str: result.nonce_str,
                    sign_type: 'HMAC-SHA256',
                    sign: result.sign,
                    trade_scene: 'PARKING',
                    sub_openid: result.sub_openid
                }
            };
            navigateToMiniProgram(miniParams).then(minires => {
                console.log(minires);
            });
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
<style lang="scss">
.open-pay {
    background: #ffe321;
}
</style>
