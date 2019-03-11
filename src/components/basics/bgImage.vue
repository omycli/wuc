<template>
  <div
    class="bg-img bg-mask padding-tb-xl"
    :style="bgImg"
  >
    <slot></slot>
  </div>
</template>

<script>
import { obj2style } from "@/utils/index";
export default {
  props: {
    img: {
      type: String,
      default:
        "https://albedo-theme.com/wp-content/uploads/2016/08/pexels-photo-26180.jpg"
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    bgImg() {
      let style = {};
      style["background-image"] = `url(${this.img})`;
      return obj2style(style);
    }
  },

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
