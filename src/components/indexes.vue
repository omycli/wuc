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
      <div v-for="(item, index) in list" :key="index">
        <div
          class="padding"
          :class="'indexItem-'+list[index]"
          :id="'indexes-'+list[index]"
          :data-index="list[index]"
        >{{list[index]}}</div>
        <div class="cu-list menu menu-avatar no-padding">
          <div
            class="cu-item"
            v-for="(item, sub) in 2"
            :key="sub"
            :for-index="sub"
          >
            <div class="cu-avatar round lg">{{list[index]}}</div>
            <div class="content">
              <div class="text-grey">
                {{list[index]}}
                <text class="text-abc">{{list[sub]}}</text>君
              </div>
              <div class="text-gray text-sm">有{{sub+2}}个主子需要伺候</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>

    <div class="indexBar" :style="scrollBar">
      <div
        class="indexBar-box"
        @touchstart="tStart"
        @touchend="tEnd"
        @touchmove="tMove"
      >
        <div
          class="indexBar-item"
          v-for="(item, index) in list"
          :key="index"
          :id="index"
          @touchstart="getCur"
          @touchend="setCur"
        >{{list[index]}}</div>
      </div>
    </div>

    <div v-if="hidden" class="indexToast">{{listCur}}</div>
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
      list: [],
      listCur: "",
      listCurID: ""
    };
  },

  components: {},

  computed: {
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

  mounted() {
    let list = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i);
    }
    this.list = list;
    this.listCur = list[0];
  },

  onReady() {
    let self = this;
    wx.createSelectorQuery()
      .select(".indexBar-box")
      .boundingClientRect(function(res) {
        self.boxTop = res.top;
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
  padding: 10px 10px 10px 30px;
  display: flex;
  align-items: center;
}

.indexBar .indexBar-box {
  width: 20px;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.indexBar-item {
  flex: 1;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #888;
}

movable-view.indexBar-item {
  width: 20px;
  height: 20px;
  z-index: 9;
}

movable-view.indexBar-item::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 5px;
  height: 10px;
  width: 2px;
  background-color: #f37b1d;
}
.indexToast {
  position: fixed;
  top: 0;
  right: 40px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: auto;
  color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
}
</style>
