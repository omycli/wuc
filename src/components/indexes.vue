<template>
  <div>
    <scroll-view
      scroll-y
      class="indexes"
      :scroll-into-view="'indexes-'+listCurID"
      :style="scrollBar"
      :scroll-with-animation="true"
      :enable-back-to-top="true"
    >
      <slot></slot>
    </scroll-view>

    <div class="indexBar" :style="scrollBar">
      <div
        class="indexBar-box"
        @touchstart="tStart"
        @touchend="tEnd"
        @touchmove.stop="tMove"
      >
        <div
          class="indexBar-item"
          v-for="(item, index) in list"
          :key="index"
          :id="'indexes-' + item"
          @touchstart="getCur"
          @touchend="setCur"
        >{{item}}</div>
      </div>
    </div>

    <div v-show="hidden" class="indexToast">{{listCur}}</div>
  </div>
</template>

<script>
import { obj2style } from "@/utils/index";
export default {
  name: "indexes",
  data() {
    return {
      hidden: false,
      boxTop: 0,
      listCur: "",
      listCurID: ""
    };
  },
  props: {
    KeyList: {
      type: Array
    },
    ConList: {
      type: Array
    }
  },

  components: {},

  computed: {
    list() {
      if (this.KeyList.length > 0) {
        return this.KeyList;
      } else {
        let list = [];
        for (let i = 0; i < 26; i++) {
          list[i] = String.fromCharCode(65 + i);
        }
        return list;
      }
    },
    scrollBar() {
      let style = {};
      const { screenHeight } = uni.getSystemInfoSync();
      let cus = uni.getStorageSync("CustomBar");
      style["height"] = "calc(" + (screenHeight - cus - 50) + "px)";
      return obj2style(style);
    }
  },

  methods: {
    tStart() {
      this.hidden = true;
    },
    tEnd() {
      this.hidden = false;
      this.listCurID = this.listCur;
    },
    tMove(e) {
      let self = this;
      let y = e.touches[0].clientY;
      let offsettop = self.boxTop;
      if (y > offsettop) {
        let num = parseInt((y - offsettop) / 20);
        self.listCur = self.list[num];
      }
    },
    getCur(e) {
      this.hidden = true;
      this.listCur = this.list[e.target.id];
    },
    setCur() {
      this.hidden = false;
    }
  },

  onReady() {
    uni
      .createSelectorQuery()
      .in(this)
      .select(".indexBar-box")
      .boundingClientRect(res => {
        if (res) {
          this.boxTop = res.top;
        }
      })
      .exec();
  }
};
</script>
<style lang='scss'>
.indexes {
  position: relative;
}

.indexBar {
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding: 20upx 20upx 20upx 60upx;
  display: flex;
  align-items: center;
}

.indexBar .indexBar-box {
  width: 40upx;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.indexBar-item {
  flex: 1;
  width: 40upx;
  height: 40upx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24upx;
  color: #888;
}

movable-view.indexBar-item {
  width: 40upx;
  height: 40upx;
  z-index: 9;
  position: relative;
}

movable-view.indexBar-item::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 10upx;
  height: 20upx;
  width: 4upx;
  background-color: #f37b1d;
}

.indexToast {
  position: fixed;
  top: 0;
  right: 80upx;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100upx;
  height: 100upx;
  border-radius: 10upx;
  margin: auto;
  color: #fff;
  line-height: 100upx;
  text-align: center;
  font-size: 48upx;
}
</style>
