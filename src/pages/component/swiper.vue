<template>
  <div>
    <custom name="轮播图" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-pink"></text>全屏限高轮播
        </div>
        <div class="action">
          <switch
            class="sm"
            @change="DotStyle"
            :class="dot?'checked':''"
            :checked="dot?true:false"
          ></switch>
        </div>
      </div>
      <swiper
        class="screen-swiper"
        :class="dot?'square-dot':'round-dot'"
        :indicator-dots="true"
        :circular="true"
        :autoplay="true"
        interval="5000"
        duration="500"
      >
        <swiper-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.url" mode="aspectFill" v-if="item.type=='image'">
          <video
            :src="item.url"
            autoplay
            loop
            muted
            :show-play-btn="false"
            :controls="false"
            objectFit="cover"
            v-if="item.type=='video'"
          ></video>
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
        :indicator-dots="true"
        :circular="true"
        :autoplay="true"
        interval="5000"
        duration="500"
        @change="cardSwiper"
        indicator-color="#8799a3"
        indicator-active-color="#0081ff"
      >
        <swiper-item
          v-for="(item,i) in swiperList"
          :key="i"
          :class="cardCur === i?'cur':''"
        >
          <div class="swiper-item">
            <img :src="item.url" mode="aspectFill" v-if="item.type=='image'">
            <video
              :src="item.url"
              autoplay
              loop
              muted
              :show-play-btn="false"
              :controls="false"
              objectFit="cover"
              v-if="item.type=='video'"
            ></video>
          </div>
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
          v-for="item in swiperList"
          :key="item.id"
          :style="[{'--index': item.zIndex,'--left':item.mLeft}]"
          :data-direction="direction"
        >
          <view class="swiper-item">
            <img :src="item.url" mode="aspectFill" v-if="item.type=='image'">
            <video
              :src="item.url"
              autoplay
              loop
              muted
              :show-play-btn="false"
              :controls="false"
              objectFit="cover"
              v-if="item.type=='video'"
            ></video>
          </view>
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
      swiperList: [
        {
          id: 0,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
        },
        {
          id: 1,
          type: "video",
          url: "https://yz.lol.qq.com/v1/assets/videos/aatrox-splashvideo.webm"
        },
        {
          id: 2,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
        },
        {
          id: 3,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
        },
        {
          id: 4,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
        },
        {
          id: 5,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"
        },
        {
          id: 6,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
        }
      ],
      dot: false,
      towerStart: null,
      direction: null
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
    TowerSwiper(name) {
      let list = this[name];
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex =
          parseInt(list.length / 2) +
          1 -
          Math.abs(i - parseInt(list.length / 2));
        list[i].mLeft = i - parseInt(list.length / 2);
      }
      this.swiperList = list;
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
      let list = this.swiperList;
      if (direction === "right") {
        let mLeft = list[0].mLeft;
        let zIndex = list[0].zIndex;
        for (let i = 1; i < this.swiperList.length; i++) {
          this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
          this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
        }
        this.swiperList[list.length - 1].mLeft = mLeft;
        this.swiperList[list.length - 1].zIndex = zIndex;
      } else {
        let mLeft = list[list.length - 1].mLeft;
        let zIndex = list[list.length - 1].zIndex;
        for (let i = this.swiperList.length - 1; i > 0; i--) {
          this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft;
          this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex;
        }
        this.swiperList[0].mLeft = mLeft;
        this.swiperList[0].zIndex = zIndex;
      }
      this.direction = "";
      this.swiperList = this.swiperList;
    }
  },

  mounted() {
    this.TowerSwiper("swiperList");
  }
};
</script>
<style lang='scss'>
.tower-swiper .tower-item {
  transform: scale(calc(0.5 + var(--index) / 10));
  margin-left: calc(var(--left) * 100upx - 150upx);
  z-index: var(--index);
}
</style>
