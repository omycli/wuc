<template>
  <div>
    <custom name="测试" bg-color="bg-gradual-green"></custom>

    <div class="padding margin">
      <navigator url="/subPackagesT/test/filter" class="bg-grey padding radius">
        <text>filter：blur引起的ios花屏测试</text>
      </navigator>
      <navigator
        url="/subPackagesT/test/custom"
        class="bg-grey padding radius margin-top"
      >
        <text>胶囊按钮的Api测试</text>
      </navigator>
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
