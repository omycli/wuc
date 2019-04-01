<template>
  <div class="cu-modal" :class="[type,visible]">
    <div class="cu-modal-cover" @tap="hideModal"></div>
    <div class="cu-dialog">
      <slot></slot>
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
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    }
  },

  components: {},

  computed: {},

  methods: {
    hideModal() {
      this.$emit("update:visible", null);
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
