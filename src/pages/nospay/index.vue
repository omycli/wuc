<template>
    <div class="row-center">
        <button class="open-pay" @tap="openpay()">{{info}}</button>
    </div>
</template>

<script>
import store from './store';
import Tips from '@/utils/Tips.js';
import { navigateToMiniProgram } from '@/utils/wechat.js';
// import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            info: '查看用户是否开通无感支付'
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
                url: '/test/query_state'
            };
            await store.dispatch('getpartnerpay', params);
            let userStatus = this.partRes.data.user_status;
            switch (userStatus) {
                case 'NORMAL':
                    this.info = '正常用户，已开通车主服务，且已授权访问';
                    break;
                case 'PAUSED':
                    this.info = '已暂停车主服务';
                    break;
                case 'OVERDUE':
                    this.info = '欠费状态';
                    break;
                case 'UNAUTHORIZED':
                    this.info = '未开通车主服务';
                    Tips.modal(`未开通车主服务,请先开通车主服务`).then(res => {
                        const miniParams = {
                            appid: 'wxbcad394b3d99dac9',
                            extraData: {
                                appid: this.partRes.data.appid,
                                mch_id: this.partRes.data.mch_id,
                                sub_mch_id: this.partRes.data.sub_mch_id,
                                nonce_str: this.partRes.data.nonce_str,
                                sign_type: 'HMAC-SHA256',
                                sign: this.partRes.data.sign,
                                trade_scene: 'PARKING',
                                openid: this.partRes.data.openid
                            }
                        };
                        navigateToMiniProgram(miniParams).then(minires => {
                            console.log(minires);
                        });
                    });
                    break;

                default:
                    break;
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
