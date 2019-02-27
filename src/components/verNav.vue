<template>
  <div class="VerticalBox">
    <scroll-view
      class="VerticalNav nav"
      scroll-y
      scroll-with-animation
      :scroll-top="VerticalNavTop"
      style="height:calc(100vh - 375rpx)"
    >
      <div
        class="cu-item"
        :class="index === TabCur ? leftClass + ' cur' : ''"
        v-for="(item, index) in leftData"
        :key="item"
        @tap="tabSelect(item,index)"
      >Tab{{index +1}}</div>
    </scroll-view>
    <scroll-view
      class="VerticalMain"
      scroll-y
      scroll-with-animation
      style="height:calc(100vh - 375rpx)"
      :scroll-into-view="'main-id-'+TabCur"
      @scroll="VerticalRight"
    >
      <slot name="right"></slot>
    </scroll-view>
  </div>
</template>

<script>
export default {
  name: "vernav",
  data() {
    return {
      TabCur: 0,
      VerticalNavTop: 0
    };
  },
  props: {
    leftClass: {
      type: String,
      default: "text-green"
    },
    leftData: {
      type: String
    }
  },

  components: {},

  computed: {},

  methods: {
    tabSelect(item, index) {
      this.TabCur = index;
      this.VerticalNavTop = (index - 1) * 50;
      this.$emit("tabLeft", item);
    },
    VerticalRight(e) {}
  },

  mounted() {}
};
</script>
<style>
.VerticalNav.nav {
  width: 200rpx;
  white-space: initial;
}

.VerticalNav.nav .cu-item {
  width: 100%;
  text-align: center;
  background-color: #fff;
  margin: 0;
  border: none;
  height: 50px;
  position: relative;
}

.VerticalNav.nav .cu-item.cur {
  background-color: #f1f1f1;
}
.VerticalNav.nav .cu-item.cur::after {
  content: "";
  width: 8rpx;
  height: 30rpx;
  border-radius: 10rpx 0 0 10rpx;
  position: absolute;
  background-color: currentColor;
  top: 0;
  right: 0rpx;
  bottom: 0;
  margin: auto;
}
.VerticalBox {
  display: flex;
}
.VerticalMain {
  background-color: #f1f1f1;
}
</style>
