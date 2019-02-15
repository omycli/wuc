<template>
  <div
    class="cu-modal"
    :class="[!show ? '' : 'show', type === 'bottomModal' ? 'bottom-modal':'']"
  >
    <div class="cu-modal-cover" @tap="hideModal"></div>
    <div v-if="type === 'Modal'" class="cu-dialog">
      <div class="cu-bar bg-white justify-end">
        <slot name="title"></slot>
        <div class="action" @tap="hideModal">
          <text class="icon-close text-red"></text>
        </div>
      </div>
      <slot name="content"></slot>
      <slot name="buttom"></slot>
    </div>

    <div v-if="type === 'bottomModal'" class="cu-dialog">
      <div class="cu-bar bg-white">
        <div class="action text-green" @tap="leftEvent">{{leftName}}</div>
        <div class="action text-blue" @tap="RightEvent">{{rightName}}</div>
      </div>
      <slot name="bottomContent"></slot>
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
    leftName: {
      type: String,
      default: ""
    },
    rightName: {
      type: String,
      default: ""
    }
  },

  components: {},

  computed: {
    show() {
      if (!this.type) {
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
    },
    leftEvent() {
      this.$emit("leftEvent", null);
    },
    RightEvent() {
      this.$emit("RightEvent", null);
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
