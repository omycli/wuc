<template>
  <div>
    <custom
      name="关于"
      bg-color="bg-gradual-green"
    ></custom>
    <scroll-view
      scroll-x
      class="bg-white nav"
      scroll-with-animation
      :scroll-left="scrollLeft"
    >
      <div
        class="cu-item"
        :class="index==TabCur?'text-green cur':''"
        v-for="(item , index) in 10"
        :key="index"
        @click='tabSelect(index)'
      >
        Tab{{index}}
      </div>
    </scroll-view>

    <div class='padding margin'>
      <div
        class="shadow-blur bg-red ABox"
        style='animation: show 1s 1;-webkit-animation: show 1s 1;'
      >阴影层</div>
    </div>

    <div class='padding margin'>
      <div class="shadow-blur bg-orange ABox">去掉动画</div>
    </div>

    <div class='padding margin'>
      <div
        class="shadow-blur bg-blue Box"
        style='animation: show 1s 1;-webkit-animation: show 1s 1;'
      >去掉after</div>
    </div>

    <div class='padding margin'>
      <div class="shadow-blur bg-green Box">去掉动画和after</div>
    </div>

  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      scrollLeft: 0,
      TabCur: 0
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    tabSelect(index) {
      this.TabCur = index;
      this.scrollLeft = (index - 1) * 60;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.ABox,
.Box {
  padding: 30rpx;
  border-radius: 12rpx;
  position: relative;
  z-index: 1;
}

.ABox::after {
  content: "";
  position: absolute;
  z-index: -1;
  background-color: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -20rpx;
  border-radius: 10rpx;
  opacity: 0.2;
  transform: scale(0.9, 0.9);
}
</style>
