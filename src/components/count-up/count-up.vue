<template>
  <div :class="numberClass" :style="color">{{showNum}}</div>
</template>

<script>
import { RGBHelper } from "./count-up";
export default {
  data() {
    return {};
  },
  props: {
    from: {
      type: [Number, String]
    },
    to: {
      type: [Number, String]
    },
    fromColor: {
      type: String,
      default() {
        return "#000000";
      }
    },
    toColor: {
      type: String,
      default() {
        return "#000000";
      }
    },
    numberClass: {
      type: String,
      default() {
        return "count-up";
      }
    },
    fixed: {
      type: [Number, String],
      default() {
        return 0;
      }
    },
    digit: {
      type: [Number, String],
      default() {
        return 0;
      }
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
