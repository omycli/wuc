<template>
  <div>
    <custom
      name="加载"
      bg-color="bg-gradual-blue fixed"
    ></custom>

    <div class="cu-bar bg-white">
      <div class='action'>
        <text class='icon-title text-blue'></text>背景
      </div>
    </div>
    <div
      class="cu-load bg-blue"
      :class="!isLoad?'loading':'over'"
    ></div>
    <div class="cu-bar bg-white margin-top">
      <div class='action'>
        <text class='icon-title text-blue'></text>加载状态
      </div>
      <div class='action'>
        <switch
          class='sm'
          @change='isLoading'
        ></switch>
      </div>
    </div>
    <div
      class="cu-load bg-grey"
      :class="!isLoad?'loading':'over'"
    ></div>
    <div class="cu-bar bg-white margin-top">
      <div class='action'>
        <text class='icon-title text-blue'></text>加载错误
      </div>
    </div>
    <div class="cu-load bg-red erro"></div>

    <div class="cu-bar bg-white margin-top">
      <div class='action'>
        <text class='icon-title text-blue'></text>弹框加载
      </div>
      <div class='action'>
        <button
          class='cu-btn bg-green shadow'
          @click='loadModalChange'
        >
          点我
        </button>
      </div>
    </div>
    <div
      class='cu-load load-modal'
      v-if="loadModal"
    >
      <image
        src='/static/assets/images/logo.png'
        class='png'
        mode='aspectFit'
      />
      <div class='gray-text'>加载中...</div>
    </div>
    <div class="cu-bar bg-white margin-top">
      <div class='action'>
        <text class='icon-title text-blue'></text>进度条加载
      </div>
      <div class='action'>
        <button
          class='cu-btn bg-green shadow'
          @click='loadProgressChange'
        >
          点我
        </button>
      </div>
    </div>
    <div
      class='load-progress'
      :class="loadProgress!=0?'show':'hide'"
      :style="CustomBar"
    >
      <div
        class='load-progress-bar bg-green'
        :style="'transform: translate3d(-'+(100-loadProgress)+'%, 0px, 0px)'"
      ></div>
      <div class='load-progress-spinner text-green'></div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import { obj2style } from "@/utils/index";
export default {
  data() {
    return {
      loadProgress: 0,
      loadModal: false,
      isLoad: false
    };
  },

  components: { Custom },

  computed: {
    CustomBar() {
      let style = {};
      style["top"] = uni.getStorageSync("CustomBar") + "px";
      return obj2style(style);
    }
  },

  methods: {
    isLoading(e) {
      this.isLoad = e.detail.value;
    },
    loadModalChange() {
      this.loadModal = true;
      setTimeout(() => {
        this.loadModal = false;
      }, 2000);
    },
    loadProgressChange() {
      this.loadProgress = this.loadProgress + 3;
      if (this.loadProgress < 100) {
        setTimeout(() => {
          this.loadProgressChange();
        }, 100);
      } else {
        this.loadProgress = 0;
      }
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
