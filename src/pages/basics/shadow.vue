<template>
  <div>
    <custom name="边框阴影" bg-color="bg-gradual-blue"></custom>

    <div class="cu-bar bg-white  solid-bottom">
      <div class="action">
        <text class="icon-title text-blue"></text>边框
      </div>
      <div class="action">
        <switch class="sm" @change="SetSize"></switch>
      </div>
    </div>
    <div class="padding bg-white text-center">
      <div class="padding" :class="'solid'+ (size?'s':'') ">四周</div>
      <div class="padding margin-top" :class="'solid'+(size?'s':'')+'-top'">上</div>
      <div class="padding margin-top" :class="'solid'+(size?'s':'')+'-right'">右</div>
      <div class="padding margin-top" :class="'solid'+(size?'s':'')+'-bottom'">下</div>
      <div class="padding margin-top" :class="'solid'+(size?'s':'')+'-left'">左</div>
    </div>
    <div class="cu-bar bg-white  margin-top">
      <div class="action">
        <text class="icon-title text-blue"></text>阴影
      </div>
    </div>
    <div class="padding text-center">
      <div class="padding-xl radius shadow bg-white">默认阴影</div>
      <div class="padding-xl radius shadow-lg bg-white margin-top">长阴影</div>
      <div class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</div>
      <div class="padding-xl radius shadow-blur bg-red margin-top">根据背景颜色而改变的阴影</div>
      <div
        class="padding-xl radius shadow-blur margin-top bg-img"
        style="background-image:url(https://goss.veer.com/creative/vcg/veer/612/veer-309169255.jpg);"
      >
        <div>根据背景图片颜色而改变的阴影</div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      size: ""
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    SetSize(e) {
      this.size = e.target.value;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
