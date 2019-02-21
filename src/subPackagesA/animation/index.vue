<template>
  <div>
    <custom
      noneBg
      name="微动画"
      bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg"
    ></custom>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-orange"></text>默认效果
        </div>
      </div>
      <div class="padding-sm">
        <div class="flex flex-wrap justify-around">
          <button
            class="cu-btn margin-sm basis-sm shadow"
            :class="['bg-'+item.color , ani === item.name ? ('animation-' +  item.name) : '']"
            @tap="toggle"
            :data-class="item.name"
            v-for="item in list"
            :key="item.name"
          >{{item.name}}</button>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-orange"></text>反向动画
        </div>
      </div>
      <div class="padding-sm">
        <div class="flex flex-wrap justify-around">
          <button
            class="cu-btn animation-reverse margin-sm basis-sm shadow"
            :class="['bg-'+item.color , ani === item.name ? ('animation-' +  item.name) : '']"
            @tap="toggle"
            :data-class="item.name"
            v-for="item in list"
            :key="item.name"
          >{{item.name}}</button>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-orange"></text>延迟执行
        </div>
        <div class="action">
          <button class="cu-btn bg-cyan shadow" @tap="toggleDelayChange">开始执行</button>
        </div>
      </div>

      <div class="padding-sm">
        <div class="flex flex-wrap justify-around">
          <button
            class="cu-btn margin-sm basis-sm shadow"
            :class="['bg-'+item.color , toggleDelay?'animation-slide-bottom':'']"
            :style="'animation-delay: '+ (index+1)*0.1 +'s;'"
            v-for="item in list"
            :key="item.name"
          >0.{{index+1}}s</button>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-orange"></text>Gif动画
        </div>
      </div>
      <div class="margin radius bg-gradual-green shadow-blur">
        <img
          src="https://image.weilanwl.com/gif/wave.gif"
          mode="scaleToFill"
          class="gif-black response"
          style="height:100rpx"
        >
      </div>
      <div class="margin flex">
        <div class="bg-black flex-sub margin-right radius shadow-lg">
          <img
            src="https://image.weilanwl.com/gif/loading-black.gif"
            mode="aspectFit"
            class="gif-black response"
            style="height:240rpx"
          >
        </div>
        <div class="bg-white flex-sub radius shadow-lg">
          <img
            src="https://image.weilanwl.com/gif/loading-white.gif"
            mode="aspectFit"
            class="gif-white response"
            style="height:240rpx"
          >
        </div>
      </div>
      <div class="margin flex">
        <div class="bg-gradual-blue flex-sub margin-right radius shadow-lg">
          <img
            src="https://image.weilanwl.com/gif/rhomb-black.gif"
            mode="aspectFit"
            class="gif-black response"
            style="height:240rpx"
          >
        </div>
        <div class="bg-white flex-sub radius shadow-lg">
          <img
            src="https://image.weilanwl.com/gif/rhomb-white.gif"
            mode="aspectFit"
            class="gif-white response"
            style="height:240rpx"
          >
        </div>
      </div>
      <div class="margin flex">
        <div class="bg-white flex-sub margin-right radius shadow-lg">
          <img
            src="https://image.weilanwl.com/gif/loading-1.gif"
            mode="aspectFit"
            class="gif-white response"
            style="height:240rpx"
          >
        </div>
        <div class="bg-black flex-sub radius shadow-lg">
          <img
            src="https://image.weilanwl.com/gif/loading-2.gif"
            mode="aspectFit"
            class="gif-black response"
            style="height:240rpx"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      list: [
        {
          name: "fade",
          color: "red"
        },
        {
          name: "scale-up",
          color: "orange"
        },
        {
          name: "scale-down",
          color: "olive"
        },
        {
          name: "slide-top",
          color: "green"
        },
        {
          name: "slide-bottom",
          color: "cyan"
        },
        {
          name: "slide-left",
          color: "blue"
        },
        {
          name: "slide-right",
          color: "purple"
        },
        {
          name: "shake",
          color: "mauve"
        }
      ],
      toggleDelay: false,
      anmiaton: ""
    };
  },

  components: { Custom },

  computed: {
    ani() {
      return this.anmiaton;
    }
  },

  methods: {
    toggle(e) {
      this.anmiaton = e.currentTarget.dataset.class;
      setTimeout(_ => {
        this.anmiaton = "";
        this.ani = "";
      }, 1000);
    },
    toggleDelayChange() {
      this.toggleDelay = true;
      setTimeout(_ => {
        this.toggleDelay = false;
      }, 1000);
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
image[class*="gif-"] {
  border-radius: 6rpx;
  display: block;
}

.gif-black {
  mix-blend-mode: screen;
}
.gif-white {
  mix-blend-mode: multiply;
}

[class*="animation-"] {
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}

.animation-fade {
  animation-name: fade;
  animation-duration: 0.8s;
  animation-timing-function: linear;
}

.animation-scale-up {
  animation-name: scale-up;
}

.animation-scale-down {
  animation-name: scale-down;
}

.animation-slide-top {
  animation-name: slide-top;
}

.animation-slide-bottom {
  animation-name: slide-bottom;
}

.animation-slide-left {
  animation-name: slide-left;
}

.animation-slide-right {
  animation-name: slide-right;
}

.animation-shake {
  animation-name: shake;
}

.animation-reverse {
  animation-direction: reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes scale-up {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scale-down {
  0% {
    opacity: 0;
    transform: scale(1.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-top {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-bottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-9px);
  }

  20% {
    transform: translateX(8px);
  }

  30% {
    transform: translateX(-7px);
  }

  40% {
    transform: translateX(6px);
  }

  50% {
    transform: translateX(-5px);
  }

  60% {
    transform: translateX(4px);
  }

  70% {
    transform: translateX(-3px);
  }

  80% {
    transform: translateX(2px);
  }

  90% {
    transform: translateX(-1px);
  }
}

@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
