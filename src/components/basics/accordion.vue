<template>
  <div class="acc animated fadeIn">
    <div class="acc-a">
      <div class="column-center">
        <div class="acc-a__more row-between row-center" @click="more">
          <div class="acc-a__text1">{{name}}</div>
          <text class="acc-a__icon1" :class="showall ? 'fold' : 'icon-unfold'"></text>
        </div>
        <div
          class="acc-a__tc"
          :class="showall ? 'acc-a__showall' : 'acc-a__showpart' "
        >
          <text class="acc-a__text2 animated fadeIn">{{detail}}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "acc",
  props: {
    detail: {
      type: String
    },
    name: {
      type: String
    },
    showall: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    more() {
      this.showall = !this.showall;
    }
  }
};
</script>

<style lang="scss">
.acc {
  &-a {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #ffffff;

    &__con {
      position: relative;
      width: 100%;
    }

    &__more {
      position: relative;
      width: 90%;
      height: 120rpx;
      border-bottom: 1rpx solid #999999;
    }

    &__icon1 {
      width: 38rpx;
      height: 22rpx;
    }

    &__tc {
      margin: 30rpx 0;
      width: 85%;
    }

    &__text1 {
      font-family: $fontCn;
      font-weight: bold;
      color: #191919;
      font-size: 42rpx;
    }

    &__text2 {
      font-family: $fontCn;
      color: #666666;
      font-size: 30rpx;
    }

    &__showpart {
      height: 0;
      overflow: hidden;
      clear: both;
    }

    &__showall {
      height: auto;
      min-height: 100rpx;
    }
  }
}
</style>
