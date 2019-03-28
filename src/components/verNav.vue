<template>
  <div class="VerticalBox">
    <scroll-view
      class="VerticalNav nav"
      scroll-y
      scroll-with-animation
      :scroll-top="VerticalNavTop"
      style="height:calc(100vh - 375upx)"
    >
      <div
        class="cu-item"
        :class="index === TabCur ? leftClass + ' cur' : ''"
        v-for="(item, index) in leftData"
        :key="item.name"
        @tap="tabSelect(item,index)"
      >{{item.name}}</div>
    </scroll-view>
    <scroll-view
      class="VerticalMain"
      scroll-y
      scroll-with-animation
      style="height:calc(100vh - 375rpx)"
      :scroll-into-view="'main-'+mainCur"
      @scroll="VerticalMain"
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
      mainCur: 0,
      VerticalNavTop: 0,
      load: true
    };
  },
  props: {
    leftClass: {
      type: String,
      default: "text-green"
    },
    leftData: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {},

  computed: {},

  methods: {
    tabSelect(item, index) {
      this.TabCur = index;
      this.mainCur = index;
      this.VerticalNavTop = (index - 1) * 50;
      this.$emit("tabLeft", item);
    },
    VerticalMain(e) {
      let tabHeight = 0;
      if (this.load) {
        for (let i = 0; i < this.leftData.length; i++) {
          let view = uni.createSelectorQuery().select("#main-" + i);
          view
            .fields(
              {
                size: true
              },
              data => {
                this.leftData[i].top = tabHeight;
                tabHeight = tabHeight + data.height;
                this.leftData[i].bottom = tabHeight;
              }
            )
            .exec();
        }
        this.load = false;
      }
      let scrollTop = e.detail.scrollTop + 10;
      for (let i = 0; i < this.leftData.length; i++) {
        if (
          scrollTop > this.leftData[i].top &&
          scrollTop < this.leftData[i].bottom
        ) {
          this.verticalNavTop = (i - 1) * 50;
          this.TabCur = i;
          return false;
        }
      }
    }
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
