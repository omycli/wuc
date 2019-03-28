<template>
  <div>
    <custom name="卡片" bg-color="bg-gradual-pink fixed"></custom>
    <div>
      <div class="cu-bar bg-white solid-bottom">
        <div class="action">
          <text class="icon-titles text-orange"></text>案例类卡片
        </div>
        <div class="action">
          <switch class="sm" :checked="isCard" @change="cardChange"></switch>
        </div>
      </div>
      <div class="cu-card case" :class="isCard?'no-card':''">
        <div class="cu-item shadow">
          <div class="image">
            <img
              src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
              mode="widthFix"
            >
            <div class="cu-tag bg-blue">史诗</div>
            <div
              class="cu-bar bg-shadeBottom"
            >我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</div>
          </div>
          <div class="cu-list menu menu-avatar">
            <div class="cu-item">
              <div
                class="cu-avatar round lg"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
              ></div>
              <div class="content flex-sub">
                <div class="text-grey">正义天使 凯尔</div>
                <div class="text-gray text-sm flex justify-between">
                  十天前
                  <div class="text-gray text-sm">
                    <text class="icon-attentionfill margin-lr-xs"></text>10
                    <text class="icon-appreciatefill margin-lr-xs"></text>20
                    <text class="icon-messagefill margin-lr-xs"></text>30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom" :class="isCard?'margin-top':''">
        <div class="action">
          <text class="icon-titles text-orange"></text>动态类卡片
        </div>
        <div class="action">
          <switch
            :class="isCard?'checked':''"
            :checked="isCard"
            @change="cardChange"
          ></switch>
        </div>
      </div>
      <div class="cu-card dynamic" :class="isCard?'no-card':''">
        <div class="cu-item shadow padding">
          <div class="cu-list menu menu-avatar">
            <div class="cu-item">
              <div
                class="cu-avatar round lg"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
              ></div>
              <div class="content flex-sub">
                <div>凯尔</div>
                <div class="text-gray text-sm flex justify-between">2019年03月28日</div>
              </div>
            </div>
          </div>
          <div class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！</div>
          <div
            class="grid flex-sub padding-lr"
            :class="isCard?'col-3 grid-square':'col-1'"
          >
            <div
              class="bg-img"
              :class="isCard?'':'only-img'"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
              v-for="(item,i) in isCard?9:1"
              :key="i"
            ></div>
          </div>
          <div class="text-gray text-sm text-right padding">
            <text class="icon-attentionfill margin-lr-xs"></text>10
            <text class="icon-appreciatefill margin-lr-xs"></text>20
            <text class="icon-messagefill margin-lr-xs"></text>30
          </div>
          <div class="cu-list menu menu-avatar comment solids-top">
            <div class="cu-item">
              <div
                class="cu-avatar round"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
              ></div>
              <div class="content">
                <div class="text-grey">莫甘娜</div>
                <div class="text-gray text-content text-df">凯尔，你被自己的光芒变的盲目。</div>
                <div class="bg-grey padding-sm radius margin-top-sm  text-sm">
                  <div class="flex">
                    <div>凯尔：</div>
                    <div class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</div>
                  </div>
                </div>
                <div class="margin-top-sm flex justify-between">
                  <div class="text-gray text-df">2018年12月4日</div>
                  <div>
                    <text class="icon-appreciatefill text-red"></text>
                    <text class="icon-messagefill text-gray margin-left-sm"></text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-titles text-orange"></text>文章类卡片
        </div>
        <div class="action">
          <switch
            :class="isCard?'checked':''"
            :checked="isCard"
            @change="cardChange"
          ></switch>
        </div>
      </div>
      <div class="cu-card article" :class="isCard?'no-card':''">
        <div class="cu-item shadow">
          <div class="title text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</div>
          <div class="content">
            <img
              src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
              mode="aspectFill"
            >
            <div class="desc">
              <div
                class="text-content"
              >折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</div>
              <div>
                <div class="cu-tag bg-red light sm round">正义天使</div>
                <div class="cu-tag bg-green light sm round">史诗</div>
              </div>
            </div>
          </div>
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
      isCard: false,
      isZan: true
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    cardChange(evt) {
      this.isCard = evt.target.value;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
