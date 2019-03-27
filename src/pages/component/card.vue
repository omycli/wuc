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
        <div v-for="(item,index) in 1" :key="index" class="cu-item shadow">
          <div class="image">
            <img src="https://image.weilanwl.com/img/4x3-1.jpg" mode="widthFix">
            <div class="cu-tag bg-blue">福利</div>
            <div class="cu-bar bg-shadeBottom">我和制服不得不说的那些事！</div>
          </div>
          <div class="cu-list menu menu-avatar">
            <div class="cu-item">
              <div
                class="cu-avatar round lg"
                style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"
              ></div>
              <div class="content flex-sub">
                <div class="text-grey">猪皮蛋</div>
                <div class="text-gray text-sm flex justify-between">十天前
                  <div class="text-gray text-sm">
                    <text class="icon-attentionfill"></text>10
                    <text class="icon-appreciatefill"></text>20
                    <text class="icon-messagefill"></text>30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom" :class="isCard?'no-card':''">
        <div class="action">
          <text class="icon-titles text-orange"></text>动态类卡片
        </div>
        <div class="action">
          <switch class="sm" :checked="isCard" @change="cardChange"></switch>
        </div>
      </div>
      <div class="cu-card dynamic" :class="isCard?'no-card':''">
        <div v-for="item in 1" :key="item" class="cu-item shadow">
          <div class="cu-list menu menu-avatar">
            <div class="cu-item">
              <div
                class="cu-avatar round lg"
                style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
              ></div>
              <div class="content flex-sub">
                <div>晓晓萌</div>
                <div class="text-gray text-sm flex justify-between">2018年12月3日</div>
              </div>
            </div>
          </div>
          <div
            class="text-content"
          >你们的铲屎官是不是经常突然对手机傻笑？我家铲屎官常常坐沙发上笑的发抖！（暗中观察.jpg）</div>
          <div
            class="grid flex-sub padding-lr"
            :class="isCard?'col-3 grid-square':'col-1'"
          >
            <div
              class="bg-img"
              :class="isCard?'':'only-img'"
              style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
              v-for="(item,i) in isCard?9:1"
              :key="i"
            ></div>
          </div>
          <div class="text-gray text-sm text-right padding">
            <text class="icon-attentionfill"></text>10
            <text class="icon-appreciatefill"></text>20
            <text class="icon-messagefill"></text>30
          </div>
          <div class="cu-list menu menu-avatar comment solids-top">
            <div class="cu-item" v-for="(item,j) in 2" :key="j">
              <div
                class="cu-avatar round"
                style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
              ></div>
              <div class="content">
                <div class="text-grey">猪皮蛋</div>
                <div class="text-gray text-content text-df">我家铲屎官不舔毛，还抠脚！</div>
                <div
                  class="bg-grey padding-sm radius margin-top-sm text-sm"
                  v-if="index === 1"
                >
                  <div
                    class="flex"
                    :class="index !== 0 ? 'margin-top-sm':'' "
                    v-for="(item,k) in 2"
                    :key="k"
                  >
                    <div>我：</div>
                    <div class="flex-sub">我家的铲屎官也不舔毛！</div>
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
          <switch class="sm" :checked="isCard" @change="cardChange"></switch>
        </div>
      </div>
      <div class="cu-card article" :class="isCard?'no-card':''">
        <div v-for="item in 1" :key="item" class="cu-item shadow">
          <div class="title">这里有个戏精铲屎官，主子了解一下？</div>
          <div class="content">
            <img
              src="https://image.weilanwl.com/img/4x3-3.jpg"
              mode="aspectFill"
            >
            <div class="desc">
              <div
                class="text-content"
              >这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o</div>
              <div>
                <div class="cu-tag bg-red light sm round">假装有猫系列</div>
                <div class="cu-tag bg-green light sm round">戏精系列</div>
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
