<template>
  <div>
    <custom name="关于" bg-color="bg-gradual-green"></custom>

    <div class="margin-xl bg-white padding-xl radius shadow-lg">
      <div class="text-center margin-bottom text-lg text-grey">关于</div>
      <div class="text-content">
        <div>Hi！开发者~欢迎使用组件库！</div>
        <div
          class="margin-top-sm"
        >组件库使用uni-app(https://uniapp.dcloud.io)进行开发,已适配多端编译。</div>
        <div
          class="margin-top-sm"
        >该组件库基于微信小程序ColorUI组件库（https://github.com/weilanwl/ColorUI）。项目是开源的，不收取任何费用，如果这个项目有帮到你，或者你觉得很赞，可以在GitHub里扫描赞赏码支持一下！</div>
        <div
          class="margin-top-sm"
        >该项目你可以用到除组件库小程序的任何项目。我们这些作者也是花了时间和精力的，我不希望你拷贝一份，做一些修改发布就变成了一个独立的项目，当然！扩展再发布是可以的，但前提是注明一下原作者٩(๑❛ᴗ❛๑)۶</div>
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
