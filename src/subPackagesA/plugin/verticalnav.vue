<template>
  <div>
    <custom name="Tab索引" bg-color="bg-shadeTop fixed"></custom>

    <div>
      <swiper
        class="screen-swiper round-dot"
        :indicator-dots="true"
        :circular="true"
        :autoplay="true"
        interval="5000"
        duration="500"
      >
        <swiper-item v-for="item in 4" :key="item">
          <img
            :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+'.jpg'"
            mode="aspectFill"
          >
        </swiper-item>
      </swiper>
    </div>

    <div>
      <ver-nav :leftData="ColorList" left-class="text-orange">
        <div slot="right">
          <div
            class="padding-top padding-lr"
            v-for="(item, index) in ColorList"
            :key="index"
            :id="'main-'+index"
          >
            <div class="cu-bar solid-bottom bg-white">
              <div class="action">
                <text class="icon-title text-green"></text>
                {{item.name}}
              </div>
            </div>
            <div class="cu-list menu menu-avatar">
              <div class="cu-item">
                <div
                  class="cu-avatar round lg"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
                ></div>
                <div class="content">
                  <div class="text-grey">凯尔</div>
                  <div class="text-gray text-sm flex">
                    <text class="text-cut">
                      <text class="icon-infofill text-red margin-right-xs"></text>我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
                    </text>
                  </div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="cu-tag round bg-grey sm">5</div>
                </div>
              </div>
              <div class="cu-item">
                <div
                  class="cu-avatar round lg"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"
                >
                  <div class="cu-tag badge">99+</div>
                </div>
                <div class="content">
                  <div class="text-grey">
                    瓦洛兰之盾-塔里克
                    <div class="cu-tag round bg-orange sm">战士</div>
                  </div>
                  <div class="text-gray text-sm flex">
                    <text
                      class="text-cut"
                    >塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。</text>
                  </div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="icon-notice_forbid_fill text-gray"></div>
                </div>
              </div>
              <div class="cu-item">
                <div
                  class="cu-avatar radius lg"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
                ></div>
                <div class="content">
                  <div>莫甘娜</div>
                  <div class="text-gray text-sm">凯尔，你被自己的光芒变的盲目！</div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="cu-tag round bg-red sm">5</div>
                </div>
              </div>
              <div class="cu-item grayscale">
                <div
                  class="cu-avatar radius lg"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"
                ></div>
                <div class="content">
                  <text class="text-cut">伊泽瑞尔</text>
                  <div class="cu-tag round bg-orange sm">断开连接...</div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="cu-tag round bg-red sm">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ver-nav>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import VerNav from "@/components/verNav";
export default {
  data() {
    return {
      ColorList: [
        {
          title: "嫣红",
          name: "red",
          color: "#e54d42"
        },
        {
          title: "桔橙",
          name: "orange",
          color: "#f37b1d"
        },
        {
          title: "明黄",
          name: "yellow",
          color: "#fbbd08"
        },
        {
          title: "橄榄",
          name: "olive",
          color: "#8dc63f"
        },
        {
          title: "森绿",
          name: "green",
          color: "#39b54a"
        },
        {
          title: "天青",
          name: "cyan",
          color: "#1cbbb4"
        },
        {
          title: "海蓝",
          name: "blue",
          color: "#0081ff"
        },
        {
          title: "姹紫",
          name: "purple",
          color: "#6739b6"
        },
        {
          title: "木槿",
          name: "mauve",
          color: "#9c26b0"
        },
        {
          title: "桃粉",
          name: "pink",
          color: "#e03997"
        },
        {
          title: "棕褐",
          name: "brown",
          color: "#a5673f"
        },
        {
          title: "玄灰",
          name: "grey",
          color: "#8799a3"
        },
        {
          title: "草灰",
          name: "gray",
          color: "#aaaaaa"
        },
        {
          title: "墨黑",
          name: "black",
          color: "#333333"
        },
        {
          title: "雅白",
          name: "white",
          color: "#ffffff"
        }
      ]
    };
  },

  components: { Custom, VerNav },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
