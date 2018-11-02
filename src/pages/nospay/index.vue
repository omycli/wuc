<template>
    <div class="row-center column car-main">
        <button class="open-pay" @tap="openpay()">{{info}}</button>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item.plate_number}}</li>
        </ul>

        <div class="band-car row-center">
            <button class="band-car-btn row-center" @tap="openCar()">绑定车牌号</button>
        </div>
    </div>
</template>

<script>
import store from './store';
import { navigateToMiniProgram, jumpTo } from '@/utils/wechat.js';
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
        openCar() {
            jumpTo('/pages/keyboard/index');
        },
        async openpay() {
            this.navCar();
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
                path: 'pages/index/index',
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
        },
        async freshCarInfo() {
            const params = {
                url: '/api/user/get-binding'
            };
            await store.dispatch('getpartnerpay', params);
            if (!this.partRes) return false;
            let resInfo = this.partRes.result;
            let userStatus = resInfo.user_state;
            switch (userStatus) {
                case 'NORMAL':
                    this.info = '正常用户，已开通车主服务，且已授权访问';
                    if (resInfo.plate_number_info) {
                        console.log(
                            resInfo.plate_number_info.plate_number_info
                        );
                        this.list = resInfo.plate_number_info.plate_number_info;
                    } else {
                        this.list.length = 0;
                    }
                    break;
                case 'PAUSED':
                    this.info = '已暂停车主服务';
                    this.list.length = 0;
                    break;
                case 'OVERDUE':
                    this.info = '欠费状态';
                    this.list.length = 0;
                    break;
                case 'UNAUTHORIZED':
                    this.info = '未开通车主服务';
                    this.list.length = 0;
                    break;

                default:
                    break;
            }
        }
    },
    async mounted() {},
    async onShow() {
        await this.freshCarInfo();
    }
};
</script>
<style lang="scss">
.car-main {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    li {
        width: 100%;
        padding: 10rpx;
    }
}
.open-pay {
    margin-top: 20rpx;
    background: #ffe321;
}
.band-car {
    margin: 120rpx 20rpx;
    width: 100%;
    height: 200rpx;
    background: #ffffff;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.band-car-btn {
    width: 640rpx;
    height: 200rpx;
    background: #ffffff;
}
</style>
