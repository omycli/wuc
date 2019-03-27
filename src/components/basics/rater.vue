<template name="rater">
  <div class="rate">
    <div
      class="rate-icon"
      v-for="(star, index) in stars"
      :key="index"
      :style="{ marginLeft: margin + 'px' }"
      @click="_onClick(index)"
    >
      <text class="icon-favor" :style="{ color: color, 'font-size': size + 'px' }"></text>
      <div class="rate-icon-on" :style="{ width: star.activeWitch }">
        <text class="icon-favorfill" :style="{ color: activeColor, 'font-size': size + 'px' }"></text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rater",
  props: {
    color: {
      type: String,
      default: "#ececec"
    },
    activeColor: {
      type: String,
      default: "#ffca3e"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 5
    },
    margin: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return { valueSync: "" };
  },
  computed: {
    stars() {
      const value = Number(this.valueSync) ? Number(this.valueSync) : 0;
      const starList = [];
      const floorValue = Math.floor(value);
      const ceilValue = Math.ceil(value);
      for (let i = 0; i < this.max; i++) {
        if (floorValue > i) {
          starList.push({
            activeWitch: "100%"
          });
        } else if (ceilValue - 1 === i) {
          starList.push({
            activeWitch: (value - floorValue) * 100 + "%"
          });
        } else {
          starList.push({
            activeWitch: "0"
          });
        }
      }
      return starList;
    }
  },
  created() {
    this.valueSync = this.value;
  },
  methods: {
    _onClick(index) {
      if (this.disabled) {
        return;
      }
      this.valueSync = index + 1;
      this.$emit("change", {
        value: this.valueSync
      });
    }
  }
};
</script>
<style lang="scss">
.rate {
  line-height: 0;
  font-size: 0;
  display: flex;
  flex-direction: row;

  &-icon {
    position: relative;
    line-height: 1;
    font-size: 0;
    display: inline-block;

    &-on {
      line-height: 1;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }
  }
}
</style>
