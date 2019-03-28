<template>
  <div class="acc animated fadeIn">
    <div class="acc-a">
      <div>
        <div
          class="acc-a__more flex align-center"
          :class="moreClass"
          @tap="more"
        >
          <div :class="moreText">{{name}}</div>
          <text
            class="acc-a__icon"
            :class="showall ? 'icon-fold' : 'icon-unfold'"
          ></text>
        </div>
        <div
          class="acc-a__tc"
          :class="[showall ? 'acc-a__showall' : 'acc-a__showpart'] "
        >
          <text :class="detailText" class="animated fadeIn">{{detail}}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "acc",
  props: {
    name: {
      type: String
    },
    detail: {
      type: String
    },
    showall: {
      type: Boolean,
      default() {
        return false;
      }
    },
    moreClass: {
      type: String,
      default() {
        return "solid-bottom padding justify-between";
      }
    },
    moreText: {
      type: String,
      default() {
        return "text-xxl text-blod text-black";
      }
    },
    detailText: {
      type: String,
      default() {
        return "text-df text-grey";
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    more() {
      this.showall = !this.showall;
    }
  }
};
</script>

<style lang="scss">
.acc {
  &-a {
    position: relative;
    width: 100%;
    height: auto;

    &__con {
      position: relative;
      width: 100%;
    }

    &__more {
      position: relative;
    }

    &__icon {
      width: 38upx;
      height: 22upx;
    }

    &__tc {
      margin: 30upx 0;
    }

    &__showpart {
      height: 0;
      overflow: hidden;
      clear: both;
    }

    &__showall {
      height: auto;
    }
  }
}
</style>
