<template>
  <div>
    <custom name="星级评价" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>基本用法</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :value="2" @change="onChange"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置尺寸大小</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :size="18" :value="5"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置评分数</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :max="10" :value="5"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置星星间隔</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :value="4" :margin="5"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置颜色</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :value="3" color="#bbb" active-color="red"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>不可点击状态</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :disabled="true" :value="3.5"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>未选中的星星为镂空状态</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater :value="3" :isFill="false"></rater>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Rater from "@/components/basics/rater";
export default {
  data() {
    return {};
  },

  components: { Custom, Rater },

  computed: {},

  methods: {
    onChange(e) {
      console.log("rate发生改变:" + JSON.stringify(e));
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
