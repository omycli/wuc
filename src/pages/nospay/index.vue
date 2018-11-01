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
                console.log(userStatus);
                switch (userStatus) {
                    case 'NORMAL':
                        this.info = '正常用户，已开通车主服务，且已授权访问';
                        this.list = resInfo.plate_number_info.plate_number_info;
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
                            res => {
                                const miniParams = {
                                    appId: 'wxbcad394b3d99dac9',
                                    path: 'pages/route/index',
                                    extraData: {
                                        appid: resInfo.appid,
                                        mch_id: resInfo.mch_id,
                                        sub_mch_id: resInfo.sub_mch_id,
                                        nonce_str: resInfo.nonce_str,
                                        sign_type: 'HMAC-SHA256',
                                        sign: resInfo.sign,
                                        trade_scene: 'PARKING',
                                        openid: resInfo.sub_openid
                                    }
                                };
                                navigateToMiniProgram(miniParams).then(
                                    minires => {
                                        console.log(minires);
                                    }
                                );
                            }
                        );
                        break;

                    default:
                        break;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {}
};
</script>
<style lang="scss">
.open-pay {
    background: #ffe321;
}
</style>
