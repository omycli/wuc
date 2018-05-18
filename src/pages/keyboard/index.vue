<template>
    <div class="kb">
        <div class="kb-input row-center">
            <text @tap="showKeyboard" class="row-center" :class="[ isKeyboard ? 'kb-input__text-focus' : 'kb-input__text']">{{textValue || placeholder}}</text>
        </div>

        <div class="kb-keyboard">
            <div class="kb-keyboard__over row-wrap" v-if="isKeyboard" @tap="closeKeyboard"></div>
            <div class="kb-keyboard__panle row-wrap" v-if="isKeyboard" :animation="animationData">
                <div @tap="tapKeyboard" :data-index="index" :data-val="proItem" class="kb-keyboard__td row-center" v-for="(proItem , index) in keyboardValue.province" :key="index" hover-class="kb-keyboard__board-bg" hover-start-time="0" hover-stay-time="80">{{proItem}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isKeyboard: false,
            animationData: {},
            animation: {},
            keyboardValue: {
                province:
                    '京津沪冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁渝',
                number: 1234567890,
                alph: 'QWERTYUIOPASDFGHJKL巛ZXCVBNM',
                spec1: '完成'
            },
            textArr: [],
            textValue: '',
            placeholder: '输入或拍照录入车牌'
        };
    },
    computed: {},
    methods: {
        showKeyboard() {
            this.r = 'ASDC';
            this.isKeyboard = true;
            this.animation.height('40%').step();
            this.animationData = this.animation.export();
        },
        closeKeyboard() {
            this.animation.height(0).step();
            this.animationData = this.animation.export();
            setTimeout(() => {
                this.isKeyboard = false;
            });
        },
        tapKeyboard(e) {
            let tapIndex = e.target.dataset.index;
            let tapVal = e.target.dataset.val;
            this.textArr.push(tapVal);
            this.textValue = this.textArr.join('')
            console.log(tapIndex);
            console.log(tapVal);
        }
    },
    mounted() {
        let animation = wx.createAnimation({
            transformOrigin: '50% 50%',
            duration: 200,
            timingFunction: 'linear',
            delay: 0
        });
        this.animation = animation;
    }
};
</script>
<style lang="scss">
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'kb';
.kb {
    width: 100%;
    height: 100%;
}

@include c('input') {
    width: 100%;
    height: 120rpx;
    font-size: 36rpx;
    position: relative;
    top: 100rpx;

    @include e('text') {
        --from: rgb(230, 238, 253);
        --to: rgb(222, 233, 248);

        background: linear-gradient(130deg, var(--from), var(--to));
        width: 90%;
        height: 100rpx;
        padding: 20rpx;
        border-radius: 5rpx;
        color: #bdc3c7;
        border: 1rpx solid #eee;
        z-index: 10;
    }

    @include e('text-focus') {
        --from: rgb(230, 238, 253);
        --to: rgb(222, 233, 248);

        background: linear-gradient(130deg, var(--from), var(--to));
        width: 90%;
        height: 100rpx;
        padding: 20rpx;
        border-radius: 5rpx;
        color: #000;
        border: 1rpx solid #d7dde8;
    }
}

@include c('keyboard') {
    @include e('over') {
        z-index: 8888;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    @include e('panle') {
        position: absolute;
        bottom: 0;
        height: 0;
        width: 100%;
        z-index: 9999;
        box-sizing: border-box;
        padding: 0 10rpx;
        border-bottom: 15rpx solid #eaf1f9;
        border-top: 20rpx solid #eaf1f9;

        --from: #eaf1f9;
        --to: #eaf1f9;

        background: linear-gradient(130deg, var(--from), var(--to));
    }

    @include e('td') {
        flex-grow: 1;
        -webkit-flex-grow: 1;
        font-size: 36rpx;
        height: 100rpx;
        width: 76rpx;
        background: #fff;
        margin: 5rpx;
        border: 1rpx solid #cdd0d5;
        color: #1e1e1e;
        border-radius: 10rpx 10rpx 10rpx 10rpx;
        box-shadow: 5rpx 5rpx 2rpx #cdd0d5;
    }

    @include e('board-bg') {
        box-shadow: 0 0 0 #e5e5e5;
        --from: #e5e5e5;
        --to: #ececec;

        background: linear-gradient(130deg, var(--from), var(--to));
    }
}
</style>
