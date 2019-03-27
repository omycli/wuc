<template>
  <div>
    <custom name="步骤条" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-bar bg-white solid-bottom">
        <div class="action">
          <text class="icon-title text-orange"></text>基本用法
        </div>
        <div class="action">
          <button class="cu-btn bg-green shadow" @tap="basicsSteps">下一步</button>
        </div>
      </div>
      <div class="bg-white padding">
        <div class="cu-steps">
          <div
            class="cu-item"
            :class="index > basics ? '': 'text-red'"
            v-for="item in basicsList"
            :key="item.icon"
          >
            <text :class="'icon-'+item.icon"></text>
            {{item.name}}
          </div>
        </div>
      </div>

      <div class="bg-white padding margin-top-xs">
        <div class="cu-steps">
          <div
            class="cu-item"
            :class="index > basics ? '': 'text-orange'"
            v-for="item in basicsList"
            :key="item.icon"
          >
            <text :class="'icon-' + (index>basics?'title':item.icon)"></text>
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="bg-white padding margin-top-xs">
        <div class="cu-steps steps-arrow">
          <div
            class="cu-item"
            :class="index > basics ? '': 'text-blue'"
            v-for="item in basicsList"
            :key="item.icon"
          >
            <text :class="'icon-'+item.icon"></text>
            {{item.name}}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>数字完成
        </div>
        <div class="action">
          <button class="cu-btn bg-green shadow" @tap="numSteps">下一步</button>
        </div>
      </div>

      <div class="bg-white padding">
        <div class="cu-steps">
          <div
            class="cu-item"
            :class="index>num?'':'text-blue'"
            v-for="item in numList"
            :key="item.name"
          >
            <text
              class="num"
              :class="index==2?'err':''"
              :data-index="(index + 1)"
            ></text>
            {{item.name}}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>多级显示
        </div>
        <div class="action">
          <button class="cu-btn bg-green shadow" @tap="scrollSteps">下一步</button>
        </div>
      </div>

      <scroll-view
        scroll-x
        class="bg-white padding response cu-steps steps-bottom"
        :scroll-into-view="'scroll-'+scroll"
        scroll-with-animation
      >
        <div
          class="cu-item padding-lr-xl"
          :class="index>scroll?'':'text-blue'"
          v-for="item in 10"
          :key="item"
          :id="'scroll-'+index"
        >
          Level {{index + 1}}
          <text class="num" :data-index="(index + 1)"></text>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      basicsList: [
        {
          icon: "usefullfill",
          name: "开始"
        },
        {
          icon: "radioboxfill",
          name: "等待"
        },
        {
          icon: "roundclosefill",
          name: "错误"
        },
        {
          icon: "roundcheckfill",
          name: "完成"
        }
      ],
      basics: 0,
      numList: [
        {
          name: "开始"
        },
        {
          name: "等待"
        },
        {
          name: "错误"
        },
        {
          name: "完成"
        }
      ],
      num: 0,
      scroll: 0
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    basicsSteps() {
      this.basics =
        this.basics === this.basicsList.length - 1 ? 0 : this.basics + 1;
    },
    numSteps() {
      this.num = this.num === this.numList.length - 1 ? 0 : this.num + 1;
    },
    scrollSteps() {
      this.scroll = this.scroll === 9 ? 0 : this.scroll + 1;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.steps-bottom.cu-steps .cu-item .num::before {
  content: "\e668";
  font-family: "iconfont";
}
</style>
