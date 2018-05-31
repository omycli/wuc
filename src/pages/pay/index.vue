<template>
    <div class="md-pay row-center">
        <div class="md-pay__pay column-center">
            <image class="md-pay__avatar" :src="userInfo.avatarUrl"></image>
            <div class="md-pay__count">支付金额:
                <span style="color:#24c6dc;font-size:48rpx;">{{amount}}</span>
                元
            </div>
            <button v-if="canIUse" open-type="getUserInfo" class="md-pay__card row-center" @getuserinfo='bindGetUserInfo'>
                点击支付
            </button>
            <view v-else>请升级微信版本</view>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            userInfo: '',
            amount: 0
        };
    },
    computed: {
        ...mapState('pay', ['payRes'])
    },
    methods: {
        ...mapActions('pay', ['payment']),

        async bindGetUserInfo(e) {
            this.userInfo = e.mp.detail.userInfo;
            let payNum = this.amount;
            let url = 'https://parkinglot.qqdayu.com/test/get_pay';
            await this.payment({ url, payNum });
        }
    },

    mounted() {
        this.amount = this.$root.$mp.query.amount;
    }
};
</script>

<style lang="scss">
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'md';

@include c('pay') {
    --from: #24c6dc;
    --stop: #42b9e0;
    --to: #514a9d;

    width: 100%;
    height: 100%;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(var(--from)),
        color-stop(0.1, var(--stop)),
        to(var(--to))
    );

    @include e('count') {
        padding: 10rpx;
        font-size: 36rpx;
        color: #514a9d;
    }

    @include e('pay') {
        width: 100%;
    }

    @include e('card') {
        --from: rgb(255, 210, 0);
        --to: rgb(247, 151, 30);
        --shadow: rgba(251, 180, 15, 0.589);

        width: 80%;
        height: 260rpx;
        color: #fff;
        background: linear-gradient(130deg, var(--from), var(--to));
        overflow: hidden;
        border-radius: 4%/11.5%;
        box-shadow: 0 106rpx 134rpx -52rpx var(--shadow);
    }

    @include e('avatar') {
        width: 160rpx;
        height: 160rpx;
        border-radius: 160rpx;
        animation: sway 10s ease-in-out infinite;
        opacity: 0.95;
    }

    @keyframes sway {
        0% {
            transform: translate3d(0, 20rpx, 0) rotate(-15deg);
        }
        17% {
            transform: translate3d(0, 0rpx, 0) rotate(25deg);
        }
        34% {
            transform: translate3d(0, -20rpx, 0) rotate(-20deg);
        }
        50% {
            transform: translate3d(0, -10rpx, 0) rotate(15deg);
        }
        67% {
            transform: translate3d(0, 10rpx, 0) rotate(-25deg);
        }
        84% {
            transform: translate3d(0, 15rpx, 0) rotate(15deg);
        }
        100% {
            transform: translate3d(0, 20rpx, 0) rotate(-15deg);
        }
    }
}
</style>

