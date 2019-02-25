<template>
  <div class="cu-modal" :class="!show ? '' : 'show'">
    <div class="cu-modal-cover" @tap="hideModal"></div>
    <div class="cu-dialog">
      <div class="cu-bar bg-white justify-end">
        <slot name="title"></slot>
        <div class="action" @tap="hideModal">
          <text v-if="CloseTag" class="icon-close" :class="CloseTag"></text>
        </div>
      </div>
      <slot name="content"></slot>
      <slot name="buttom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    CloseTag: {
      type: String,
      default: ""
    }
  },

  components: {},

  computed: {
    show() {
      if (!this.type || this.type !== 'center') {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    hideModal() {
      this.$emit("update:type", null);
      this.$emit("hideModal", null);
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.cu-modal-cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}
</style>
