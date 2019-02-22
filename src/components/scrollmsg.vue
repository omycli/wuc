<template>
  <div v-if="msg && msg.length > 0" class="scroll-msg" :style="BaseStyle">
    <div class="scroll-msg__msg">
      <img :src="logo" class="scroll-msg__msg-icon">
      <swiper
        class="scroll-msg__swiper"
        vertical="true"
        autoplay="true"
        circular="true"
        interval="3000"
      >
        <swiper-item
          class="scroll-msg__swiper-item"
          v-for="(item, index) in msg"
          :key="index"
        >
          <div class="scroll-msg__text" @click="tapMsg(item)">{{item.content}}</div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "scrollmsg",
  props: {
    logo: {
      type: String,
      default() {
        return "https://itrip-public-1256737511.cos.ap-chengdu.myqcloud.com/itrip/small-notice-icon.png";
      }
    },
    msg: {
      type: Array,
      default() {
        return [];
      }
    },
    BaseStyle: {
      type: String,
      default() {
        return "";
      }
    }
  },
  methods: {
    tapMsg(item) {
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
  padding: 0 15px;

  &__msg {
    width: 100%;
    padding: 6px 0;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  &__msg-icon {
    width: 30px;
    height: 28px;
    margin-right: 10px;
  }

  &__swiper {
    width: 100%;
    height: 26px;
  }

  &__swiper-item {
    line-height: 26px;
  }

  &__text {
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #999999;
    @include text-line(1);
  }
}
</style>
