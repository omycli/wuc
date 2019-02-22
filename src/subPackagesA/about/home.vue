<template>
  <div>
    <custom name="关于" bg-color="bg-gradual-green"></custom>

    <div class="margin-xl bg-white padding-xl radius shadow-lg">
      <div class="text-center margin-bottom text-lg text-grey">关于</div>
      <div class="text-content">
        <div>Hi！开发者~欢迎使用组件库！</div>
        <div
          class="margin-top-sm"
        >该组件库基于uni-app(https://uniapp.dcloud.io)和ColorUI（https://github.com/weilanwl/ColorUI）进行开发,已适配多端编译。</div>
        <div
          class="margin-top-sm"
        >为了少折腾而折腾</div>
        <div class="margin-top-sm">更多功能敬请期待！</div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {};
  },

  components: { Custom },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
