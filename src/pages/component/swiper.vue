<template>
  <div>
    <custom name="轮播图" bg-color="bg-gradual-pink"></custom>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-pink"></text>全屏限高轮播
        </div>
        <div class="action">
          <switch class="sm" @change="DotStyle"></switch>
        </div>
      </div>
      <swiper
        class="screen-swiper"
        :class="dot?'square-dot':'round-dot'"
        indicator-dots="true"
        circular="true"
        autoplay="true"
        interval="5000"
        duration="500"
      >
        <swiper-item v-for="item in 4" :key="item">
          <img
            :src=" 'https://image.weilanwl.com/img/4x3-' + (index+1) + '.jpg'"
            mode="aspectFill"
          >
        </swiper-item>
      </swiper>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>卡片式轮播
        </div>
      </div>
      <swiper
        class="card-swiper"
        :class="dot?'square-dot':'round-dot'"
        indicator-dots="true"
        circular="true"
        autoplay="true"
        interval="5000"
        duration="500"
        @change="cardSwiper"
        indicator-color="#8799a3"
        indicator-active-color="#0081ff"
      >
        <swiper-item
          v-for="(item,i) in 4"
          :key="item"
          :class="cardCur === i?'cur':''"
        >
          <div
            class="bg-img shadow-blur"
            :style=" 'background-image:url(https://image.weilanwl.com/img/4x3-' + (i+1) + '.jpg)'"
          ></div>
        </swiper-item>
      </swiper>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>堆叠式轮播
        </div>
      </div>
      <div
        class="tower-swiper"
        @touchmove="towerMove"
        @touchstart="towerStartChange"
        @touchend="towerEnd"
      >
        <div
          class="tower-item"
          :class="item.zIndex === 1? 'none':''"
          v-for="item in towerList"
          :key="item.id"
          :style="'transform: scale(' + (0.5+item.zIndex/10) +');margin-left:' + (item.mLeft*100-150) + 'rpx;z-index:' + (item.zIndex)"
        >
          <div
            class="bg-img shadow-blur"
            :style="'background-image:url(' + item.url + ')'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      cardCur: 0,
      tower: [
        {
          id: 0,
          url: "https://image.weilanwl.com/img/4x3-1.jpg"
        },
        {
          id: 1,
          url: "https://image.weilanwl.com/img/4x3-2.jpg"
        },
        {
          id: 2,
          url: "https://image.weilanwl.com/img/4x3-3.jpg"
        },
        {
          id: 3,
          url: "https://image.weilanwl.com/img/4x3-4.jpg"
        },
        {
          id: 4,
          url: "https://image.weilanwl.com/img/4x3-2.jpg"
        },
        {
          id: 5,
          url: "https://image.weilanwl.com/img/4x3-4.jpg"
        },
        {
          id: 6,
          url: "https://image.weilanwl.com/img/4x3-2.jpg"
        }
      ],
      dot: false,
      towerStart: null,
      direction: null,
      towerList: []
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    DotStyle(e) {
      this.dot = e.target.value;
    },
    cardSwiper(e) {
      this.cardCur = e.target.current;
    },
    towerData(name) {
      let list = this.tower;
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex =
          parseInt(list.length / 2) +
          1 -
          Math.abs(i - parseInt(list.length / 2));
        list[i].mLeft = i - parseInt(list.length / 2);
      }
      this.towerList = list;
    },
    towerStartChange(e) {
      this.towerStart = e.touches[0].pageX;
    },
    towerMove(e) {
      this.direction =
        e.touches[0].pageX - this.towerStart > 0 ? "right" : "left";
    },
    towerEnd(e) {
      let direction = this.direction;
      let list = this.towerList;
      if (direction === "right") {
        let mLeft = list[0].mLeft;
        let zIndex = list[0].zIndex;
        for (let i = 1; i < list.length; i++) {
          list[i - 1].mLeft = list[i].mLeft;
          list[i - 1].zIndex = list[i].zIndex;
        }
        list[list.length - 1].mLeft = mLeft;
        list[list.length - 1].zIndex = zIndex;
        this.towerList = list;
      } else {
        let mLeft = list[list.length - 1].mLeft;
        let zIndex = list[list.length - 1].zIndex;
        for (let i = list.length - 1; i > 0; i--) {
          list[i].mLeft = list[i - 1].mLeft;
          list[i].zIndex = list[i - 1].zIndex;
        }
        list[0].mLeft = mLeft;
        list[0].zIndex = zIndex;
        this.towerList = list;
      }
    }
  },

  mounted() {
    this.towerData("tower");
  }
};
</script>
<style lang='scss'>
</style>
