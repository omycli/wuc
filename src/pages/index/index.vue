<template>
    <div class="tit-index">
        <view>
            <swiper :current="curIndex" @change="onSwiperChange" style="overflow: visible;" :circular="true" :indicator-dots="false" :autoplay="true" :duration="300" :interval="2000">
                <swiper-item v-for="(item,index) in imgUrls" :key="actpic" style="overflow: visible;" @tap="navTo(item.url)">
                    <image :src="item.img" :style="'-webkit-transform: scale('+(curIndex === index ? 0.9 : 0.65)+') translate('+((curIndex == index - 1 || curIndex == index + 1) ? (curIndex - index) * 30 : 0)+'%,0)' " mode="aspectFill"></image>
                    <view class="row-center">
                        <view class="tit-index__name">{{item.name}}</view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
    </div>
</template>
<script>
import { jumpTo } from './../../utils/wechat';
export default {
    data() {
        return {
            imgUrls: [
                {
                    img:
                        'http://hbfile.b0.upaiyun.com/img/home/banner/e09cb62482e57b615c32f3e18feeffc57851372a5aea3',
                    name: '支付',
                    url: '../pay/main?amount=100'
                },
                {
                    img:
                        'http://hbfile.b0.upaiyun.com/img/home/banner/c88dab66a15416697c930a31c0ec3364b2c3990b102914',
                    name: '停车键盘',
                    url: '../keyboard/main'
                },
                {
                    img:
                        'http://hbfile.b0.upaiyun.com/img/home/banner/97d8ff820f692ab31bb02e701d27517db55fd39ad26c0',
                    name: '富文本',
                    url: '../parse/main'
                },
                {
                    img:
                        'http://hbfile.b0.upaiyun.com/img/home/banner/c88dab66a15416697c930a31c0ec3364b2c3990b102914',
                    name: '面对面翻译',
                    url: '../face2face/main'
                },
                {
                    img:
                        'http://hbfile.b0.upaiyun.com/img/home/banner/96146c37704d5c35ef375f478709e87394794f3175673',
                    name: '无感支付',
                    url: '../nospay/main'
                }
            ],
            curIndex: 0
        };
    },
    computed: {},
    methods: {
        onSwiperChange(e) {
            this.curIndex = e.target.current;
        },
        navTo(url) {
            jumpTo(url)
        }
    },
    mounted() {}
};
</script>
<style lang="scss">
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'tit';

@include c('index') {
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

    swiper {
        height: 1080rpx;
        margin-bottom: 20rpx;
    }

    swiper-item,
    swiper-item image {
        width: 100%;
        height: 1000rpx;
        border-radius: 15rpx;
        overflow: hidden;
        box-shadow: 0 10rpx 15rpx rgba(0, 0, 0, 0.2);
    }
    @include e(name) {
        text-align: center;
        color: #0abfbc;
        font-size: 36rpx;
        width: 80%;
        height: 50rpx;
        border-radius: 10rpx;
        padding: 10rpx;
        background: #d3959b;
        background: -webkit-linear-gradient(to right, #d3959b, #bfe6ba);
        background: linear-gradient(to right, #d3959b, #bfe6ba);
    }
}
</style>

