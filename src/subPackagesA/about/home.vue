<template>
  <div>
    <custom name="关于" bg-color="bg-gradual-green"></custom>

    <div class="margin-xl bg-white padding-xl radius shadow-lg">
      <div class="text-center margin-bottom text-lg text-grey">关于</div>
      <div class="text-content">
        <div>Hi！欢迎使用组件库！</div>
        <div class="margin-top-sm">该组件库基于
          <div class="cu-tag radius">uni-app(https://uniapp.dcloud.io)</div>开发。
        </div>
        <div class="margin-top-sm">主要样式和基础参考
          <div
            class="cu-tag radius"
          >ColorUI（https://github.com/weilanwl/ColorUI）</div>
        </div>
        <div class="margin-top-sm">插件功能部分基于
          <div class="cu-tag radius">腾讯智慧文旅小程序</div>进行开发。
        </div>
        <div class="margin-top-sm">使用该组件库可以一次性开发，生成H5,IOS,安卓和各种小程序端代码。</div>
        <div class="margin-top-sm">目前框架还处于开发阶段，生产环境中使用需要慎重。</div>
        <div class="margin-top-sm">开发组件库只是为了少折腾而折腾。</div>
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
