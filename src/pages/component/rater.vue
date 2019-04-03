<template>
  <div>
    <custom name="星级评价" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>基础使用</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater icon="icon-favorfill" :size="32" :value="1" :margin="6" @change="onChange"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置图标</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater icon="icon-emoji" :value="1" :size="32" :margin="6" color="#8799a3" active-color="#333333"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置文字</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater star="棒" :value="3" :size="32" :margin="6" color="#bbb" active-color="#9c26b0"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>设置评分数量</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater  icon="icon-favorfill" :max="10" :value="5" active-color="#e54d42"></rater>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>不可点击状态</text>
        </div>
      </div>
      <div class="padding bg-white">
        <rater  icon="icon-favorfill" :disabled="true" :value="3.5"></rater>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Rater from "@/components/rater";
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
