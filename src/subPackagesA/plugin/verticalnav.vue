<template>
  <div>
    <custom name="Tab索引" bg-color="bg-shadeTop" noCusBar></custom>

    <div>
      <swiper
        class="screen-swiper round-dot"
        indicator-dots="true"
        circular="true"
        autoplay="true"
        interval="5000"
        duration="500"
      >
        <swiper-item v-for="item in 4" :key="item">
          <img
            :src="'https://image.weilanwl.com/img/4x3-'+(index+1)+'.jpg'"
            mode="aspectFill"
          >
        </swiper-item>
      </swiper>
    </div>

    <div>
      <ver-nav :left-data="20" left-class="text-orange">
        <div slot="right">
          <div
            class="padding-top padding-lr"
            v-for="(item, index) in 20"
            :key="index"
            :id="'main-id-'+index"
          >
            <div class="cu-bar solid-bottom bg-white">
              <div class="action">
                <text class="icon-title text-green"></text>
                Tab{{index +1}}
              </div>
            </div>
            <div class="cu-list menu menu-avatar">
              <div class="cu-item">
                <div
                  class="cu-avatar round lg"
                  style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
                ></div>
                <div class="content">
                  <div class="text-grey">文晓港</div>
                  <div class="text-gray text-sm">
                    <text class="icon-infofill text-red"></text>消息未送达
                  </div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="cu-tag round bg-grey sm">5</div>
                </div>
              </div>
              <div class="cu-item">
                <div
                  class="cu-avatar round lg"
                  style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"
                >
                  <div class="cu-tag badge">99+</div>
                </div>
                <div class="content">
                  <div class="text-grey">文晓港
                    <div class="cu-tag round bg-orange sm">SVIP</div>
                  </div>
                  <div class="text-gray text-sm">
                    <text class="icon-redpacket_fill text-red"></text>收到红包
                  </div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="icon-notice_forbid_fill text-gray"></div>
                </div>
              </div>
              <div class="cu-item">
                <div
                  class="cu-avatar radius lg"
                  style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
                ></div>
                <div class="content">
                  <div>喵星人互动群</div>
                  <div class="text-gray text-sm">喵星酱：喵喵喵！</div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="cu-tag round bg-red sm">5</div>
                </div>
              </div>
              <div class="cu-item grayscale">
                <div
                  class="cu-avatar radius lg"
                  style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
                ></div>
                <div class="content">
                  <div>喵星人互动群</div>
                  <div class="text-gray text-sm">喵星酱：喵喵喵！</div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <div class="cu-tag round bg-red sm">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ver-nav>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import VerNav from "@/components/verNav";
export default {
  data() {
    return {};
  },

  components: { Custom, VerNav },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
