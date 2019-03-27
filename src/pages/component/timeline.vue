<template>
  <div>
    <custom name="时间轴" bg-color="bg-gradual-pink fixed"></custom>
    <div>
      <div class="cu-timeline">
        <div class="cu-time">昨天</div>
        <div class="cu-item cur icon-noticefill">
          <div class="content bg-green shadow-blur">
            <text>22:22</text>【广州市】快件已到达地球
          </div>
        </div>
        <div class="cu-item text-red icon-attentionforbidfill">
          <div class="content bg-red shadow-blur">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</div>
        </div>
        <div class="cu-item text-grey icon-evaluate_fill">
          <div class="content bg-grey shadow-blur">这是第一次，我家的铲屎官走了这么久。</div>
        </div>
        <div class="cu-item text-blue">
          <div class="bg-blue content">
            <text>20:00</text>【月球】快件已到达月球，准备发往地球
          </div>
          <div class="bg-cyan content">
            <text>10:00</text>【银河系】快件已到达银河系，准备发往月球
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-timeline">
        <div class="cu-time">06-17</div>
        <div class="cu-item">
          <div class="content">
            <text>01:30</text>【喵星】 MX-12138 已揽收，准备发往银河系
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-timeline">
        <div class="cu-time">06-17</div>
        <div class="cu-item">
          <div class="content">
            <div class="cu-capsule radius">
              <div class="cu-tag bg-cyan">上午</div>
              <div class="cu-tag line-cyan">10:00</div>
            </div>
            <div
              class="margin-top"
            >这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</div>
          </div>
        </div>
        <div class="cu-item text-blue">
          <div class="bg-blue shadow-blur content">
            <div class="cu-list menu menu-avatar radius">
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
                    <div class="cu-tag round orange sm">SVIP</div>
                  </div>
                  <div class="text-gray text-sm">
                    <text class="icon-redpacket_fill text-red"></text>收到红包
                  </div>
                </div>
                <div class="action">
                  <div class="text-grey text-xs">22:20</div>
                  <text class="icon-notice_forbid_fill text-gray"></text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {};
  },

  components: { Custom },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
