<template>
  <div v-if="msg && msg.length > 0" class="scroll-msg" :class="BaseClass">
    <div class="scroll-msg__msg">
      <img :src="logo" :class="logoClass">
      <swiper
        class="scroll-msg__swiper"
        :vertical="vertical"
        :autoplay="true"
        :circular="true"
        :indicator-dots="false"
        indicator-color="rgba(255,255,255,0)"
        indicator-active-color="rgba(255,255,255,0)"
        interval="3000"
      >
        <swiper-item
          v-for="(item, index) in msg"
          :key="index"
          @tap="tapMsg(item)"
        >
          <div
            class="scroll-msg__swiper-item"
            :class="textClass"
          >{{item.content}}</div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "scrollmsg",
  props: {
    vertical: {
      type: Boolean,
      default() {
        return true;
      }
    },
    logo: {
      type: String,
      default() {
        return "https://goss1.veer.com/creative/vcg/veer/612/veer-316928759.jpg";
      }
    },
    logoClass: {
      type: String,
      default() {
        return "scroll-msg__msg-icon";
      }
    },
    textClass: {
      type: String,
      default() {
        return "scroll-msg__text";
      }
    },
    msg: {
      type: Array,
      default() {
        return [];
      }
    },
    BaseClass: {
      type: String,
      default() {
        return "";
      }
    }
  },
  methods: {
    tapMsg(item) {
      console.log(item);
      this.$emit("onevent", item);
    }
  }
};
</script>
<style lang="scss">
@mixin text-line($num: 1) {
  overflow: hidden;
  text-overflow: ellipsis;

  @if $num == 1 {
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $num;
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;
  }
}
.scroll-msg {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;

  &__msg {
    width: 100%;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  &__msg-icon {
    width: 60upx;
    height: 56upx;
    margin-right: 10px;
  }

  &__swiper {
    width: 100%;
    height: 100%;
  }

  &__swiper-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__text {
    font-size: 28upx;
    color: #999999;
    @include text-line(1);
  }
}
</style>
