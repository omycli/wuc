<template>
  <div
    class="bg-img"
    :style="bgLink"
    :class="extendClass"
    v-if="type === 'image'"
  >
    <slot></slot>
  </div>
  <div class="bg-video" v-else-if="type === 'video'">
    <video
      :src="link"
      :autoplay="true"
      :loop="true"
      :muted="true"
      :show-play-btn="false"
      :controls="false"
      objectFit="cover"
    ></video>
    <slot></slot>
  </div>
</template>

<script>
import { obj2style } from "@/utils/index";
export default {
  props: {
    type: {
      type: String,
      default: "image"
    },
    link: {
      type: String,
      default: ""
    },
    extendClass: {
      type: String
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    bgLink() {
      let style = {};
      style["background-image"] = `url(${this.link})`;
      return obj2style(style);
    }
  },

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
