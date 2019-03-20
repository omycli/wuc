<template>
  <scroll-view
    class="nav"
    :class="TextCenter ? 'text-center':''"
    :style="bgcolor"
    scroll-with-animation
    scroll-x
    :scroll-left="scrollLeft"
  >
    <div v-if="!TextFlex">
      <div
        class="cu-item"
        :class="index === TabCur ? SelectColor + ' cur':''"
        v-for="(item,index) in TabList"
        :key="index"
        :id="index"
        @tap="tabSelect(index,$event)"
      >
        <text :class="item.icon"></text>
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="flex text-center" v-if="TextFlex">
      <div
        class="cu-item flex-sub"
        :class="index === TabCur ? SelectColor + ' cur':''"
        v-for="(item,index) in TabList"
        :key="index"
        :id="index"
        @tap="tabSelect(index,$event)"
      >
        <text :class="item.icon"></text>
        <span>{{item.name}}</span>
      </div>
    </div>
  </scroll-view>
</template>
<script>
import { obj2style } from "@/utils/index";
export default {
  name: "mu-tab",
  data() {
    return {};
  },
  props: {
    TabList: {
      type: Array,
      default() {
        return [];
      }
    },
    TabCur: {
      type: Number,
      default() {
        return 0;
      }
    },
    TextCenter: {
      type: Boolean,
      default() {
        return false;
      }
    },
    TextFlex: {
      type: Boolean,
      default() {
        return false;
      }
    },
    Color: {
      type: String,
      default() {
        return "#ffffff";
      }
    },
    SelectColor: {
      type: String,
      default() {
        return "text-green";
      }
    },
    BgColor: {
      type: String,
      default() {
        return "linear-gradient(45deg, #0081ff, #1cbbb4);";
      }
    }
  },
  methods: {
    tabSelect(index, e) {
      if (this.currentTab === index) return false;
      this.TabCur = index;
      this.$emit("update:TabCur", index);
      this.$emit("change", index);
    }
  },
  computed: {
    bgcolor() {
      let style = {};
      style["background"] = this.BgColor;
      style["color"] = this.Color;
      return obj2style(style);
    },
    scrollLeft() {
      return (this.TabCur - 1) * 60;
    }
  },
  async mounted() {},
  onLoad: async function(option) {}
};
</script>
<style lang="scss">
</style>
