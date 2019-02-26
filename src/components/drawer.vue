<template>
  <div>
    <div class="DrawerPage" :class="show?'show':''">
      <slot name="head"></slot>
    </div>
    <div class="DrawerClose" :class="show?'show':''" @tap="hideModal">
      <slot name="close"></slot>
    </div>
    <div class="DrawerWindow" :class="show?'show':''">
        <slot name="con"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "drawer",
  data() {
    return {};
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  components: {},

  computed: {},

  methods: {
    hideModal() {
      this.$emit("update:show", false);
    }
  },

  mounted() {}
};
</script>
<style>
</style>
