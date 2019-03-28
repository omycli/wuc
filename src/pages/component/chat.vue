<template>
  <div>
    <custom name="聊天" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-chat">
        <div class="cu-item self">
          <div class="main">
            <div class="content bg-green shadow">
              <text>我的大刀早已饥渴难耐</text>
            </div>
          </div>
          <div
            class="cu-avatar radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
          ></div>
          <div class="date">2018年3月23日 13:23</div>
        </div>
        <div class="cu-info round">对方撤回一条消息!</div>
        <div class="cu-item">
          <div
            class="cu-avatar radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"
          ></div>
          <div class="main">
            <div class="content shadow">
              <text>喵喵喵！喵喵喵！</text>
            </div>
          </div>
          <div class="date">13:23</div>
        </div>
        <div class="cu-info">
          <text class="icon-roundclosefill text-red"></text>对方拒绝了你的消息
        </div>
        <div class="cu-info">
          对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
          <text class="text-blue">发送好友验证</text>
        </div>
        <div class="cu-item self">
          <div class="main">
            <img
              src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
              class="radius"
              mode="widthFix"
            >
          </div>
          <div
            class="cu-avatar radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
          ></div>
          <div class="date">13:23</div>
        </div>
        <div class="cu-item self">
          <div class="main">
            <div class="action text-bold text-grey">3"</div>
            <div class="content shadow">
              <text class="icon-sound text-xxl padding-right-xl"></text>
            </div>
          </div>
          <div
            class="cu-avatar radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
          ></div>
          <div class="date">13:23</div>
        </div>
        <div class="cu-item self">
          <div class="main">
            <div class="action">
              <text class="icon-locationfill text-orange text-xxl"></text>
            </div>
            <div class="content shadow">努努</div>
          </div>
          <div
            class="cu-avatar radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"
          ></div>
          <div class="date">13:23</div>
        </div>
        <div class="cu-item">
          <div
            class="cu-avatar radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
          ></div>
          <div class="main">
            <div class="content shadow">@#$^&**</div>
            <div class="action text-grey">
              <text class="icon-warnfill text-red text-xxl"></text>
              <text class="text-sm margin-left-sm">翻译错误</text>
            </div>
          </div>
          <div class="date">13:23</div>
        </div>
      </div>

      <div class="cu-bar foot input">
        <div class="action">
          <text class="icon-sound text-grey"></text>
        </div>
        <input
          class="solid-bottom"
          :adjust-position="false"
          :focus="false"
          maxlength="300"
          cursor-spacing="10"
          @focus="InputFocus"
          @blur="InputBlur"
        >
        <div class="action">
          <text class="icon-emojifill text-grey"></text>
        </div>
        <button class="cu-btn bg-green shadow">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      InputBottom: 0
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    InputFocus(e) {
      this.InputBottom = e.detail.height;
    },
    InputBlur(e) {
      this.InputBottom = 0;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
page {
  padding-bottom: 100upx;
}
</style>
