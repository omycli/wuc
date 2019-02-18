<template>
  <div>
    <custom name="列表" bg-color="bg-gradual-pink"></custom>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>宫格列表
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="gridModal"
          >设置</button>
        </div>
      </div>
      <div class="cu-modal" :class="modalName=='gridModal'?'show':''">
        <div class="cu-modal-cover" @tap="hideModal"></div>
        <div class="cu-dialog">
          <radio-group class="block" @change="gridchange">
            <div class="cu-list menu text-left">
              <div class="cu-item" v-for="(item,index) in 3" :key="index">
                <label class="flex justify-between align-center flex-sub">
                  <div class="flex-sub">{{index +3}} 列 {{gridCol}}</div>
                  <radio
                    class="round"
                    :value="index +3"
                    :checked="gridCol == ( index+3 )"
                  ></radio>
                </label>
              </div>
            </div>
          </radio-group>
          <div class="cu-list menu text-left solid-top">
            <div class="cu-item">
              <div class="content">
                <text class="text-grey">边框</text>
              </div>
              <div class="action">
                <switch @change="gridswitch"></switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cu-list grid"
        :class="['col-'+gridCol, gridBorder ? '' : 'no-border']"
      >
        <div class="cu-item" v-for="(item,index) in iconList" :key="item.name">
          <div v-if="index < gridCol*2">
            <div :class="['icon-'+item.icon, 'text-'+ item.color]">
              <div class="cu-tag badge" v-if="item.badge !== 0">
                <block
                  v-if="item.badge !== 1"
                >{{item.badge>99?'99+':item.badge}}</block>
              </div>
            </div>
            <text>{{item.name}}</text>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>菜单列表
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="menuModal"
          >设置</button>
        </div>
      </div>
      <div class="cu-modal" :class="modalName=='menuModal'?'show':''">
        <div class="cu-modal-cover" @tap="hideModal"></div>
        <div class="cu-dialog">
          <div class="cu-list menu text-left solid-top">
            <div class="cu-item">
              <div class="content">
                <text class="text-grey">短边框</text>
              </div>
              <div class="action">
                <switch @change="menuBorderChange"></switch>
              </div>
            </div>
            <div class="cu-item">
              <div class="content">
                <text class="text-grey">箭头</text>
              </div>
              <div class="action">
                <switch @change="menuArrowChange"></switch>
              </div>
            </div>
            <div class="cu-item">
              <div class="content">
                <text class="text-grey">卡片</text>
              </div>
              <div class="action">
                <switch @change="menuCardChange"></switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cu-list menu"
        :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']"
      >
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <div class="content">
            <text class="icon-circlefill text-grey"></text>
            <text class="text-grey">图标 + 标题</text>
          </div>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <div class="content">
            <img
              src="/static/assets/images/logo.png"
              class="png"
              mode="aspectFit"
            >
            <text class="text-grey">图片 + 标题</text>
          </div>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <button class="cu-btn content" open-type="contact">
            <text class="icon-btn text-olive"></text>
            <text class="text-grey">Open-type 按钮</text>
          </button>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <navigator
            class="content"
            hover-class="none"
            url="../list/list"
            open-type="redirect"
          >
            <text class="icon-discoverfill text-orange"></text>
            <text class="text-grey">Navigator 跳转</text>
          </navigator>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <div class="content">
            <text class="icon-emojiflashfill text-pink"></text>
            <text class="text-grey">头像组</text>
          </div>
          <div class="action">
            <div class="cu-avatar-group">
              <div
                class="cu-avatar round sm"
                style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"
              ></div>
              <div
                class="cu-avatar round sm"
                style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
              ></div>
              <div
                class="cu-avatar round sm"
                style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"
              ></div>
              <div
                class="cu-avatar round sm"
                style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
              ></div>
            </div>
            <text class="text-grey text-sm">4 人</text>
          </div>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <div class="content">
            <text class="icon-btn text-green"></text>
            <text class="text-grey">按钮</text>
          </div>
          <div class="action">
            <button class="cu-btn round bg-green shadow">
              <text class="icon-upload"></text>上传
            </button>
          </div>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <div class="content">
            <text class="icon-tagfill text-red"></text>
            <text class="text-grey">标签</text>
          </div>
          <div class="action">
            <div class="cu-tag round bg-orange light">音乐</div>
            <div class="cu-tag round bg-olive light">电影</div>
            <div class="cu-tag round bg-blue light">旅行</div>
          </div>
        </div>
        <div class="cu-item" :class="menuArrow?'arrow':''">
          <div class="content">
            <text class="icon-warn text-green"></text>
            <text class="text-grey">文本</text>
          </div>
          <div class="action">
            <text class="text-grey text-sm">小目标还没有实现！</text>
          </div>
        </div>
        <div class="cu-item">
          <div class="content padding-tb-sm">
            <div>
              <text class="icon-clothesfill text-blue"></text>多行Item
            </div>
            <div class="text-gray text-sm">
              <text class="icon-infofill"></text>小目标还没有实现！
            </div>
          </div>
          <div class="action">
            <switch class="switch-sex sm" @change="switchSexChnage"></switch>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>消息列表
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
        <div class="cu-item cur">
          <div
            class="cu-avatar radius lg"
            style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"
          >
            <div class="cu-tag badge"></div>
          </div>
          <div class="content">
            <div>喵星人互动群
              <div class="cu-tag round bg-orange sm">6人</div>
            </div>
            <div class="text-gray text-sm">喵星酱：
              <text class="icon-picfill text-orange"></text>图片传输中...
            </div>
          </div>
          <div class="action">
            <div class="text-grey text-xs">22:20</div>
            <div class="icon-notice_forbid_fill text-gray"></div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>列表左滑
        </div>
      </div>
      <div class="cu-list menu menu-avatar">
        <div
          class="cu-item"
          :class="modalName=='move-box-'+ index?'move-cur':''"
          v-for="(index,item) in 4"
          :key="item"
          @touchstart="ListTouchStart"
          @touchmove="ListTouchMove"
          @touchend="ListTouchEnd"
          :data-target="'move-box-'+index"
        >
          <div
            class="cu-avatar round lg"
            :style="'background-image:url(https://image.weilanwl.com/img/square-'+(index+1)+'.jpg)'"
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
          <div class="move">
            <div class="bg-grey">置顶</div>
            <div class="bg-red">删除</div>
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
    return {
      iconList: [
        {
          icon: "cardboardfill",
          color: "red",
          badge: 120,
          name: "VR"
        },
        {
          icon: "recordfill",
          color: "orange",
          badge: 1,
          name: "录像"
        },
        {
          icon: "picfill",
          color: "yellow",
          badge: 0,
          name: "图像"
        },
        {
          icon: "noticefill",
          color: "olive",
          badge: 22,
          name: "通知"
        },
        {
          icon: "upstagefill",
          color: "cyan",
          badge: 0,
          name: "排行榜"
        },
        {
          icon: "clothesfill",
          color: "blue",
          badge: 0,
          name: "皮肤"
        },
        {
          icon: "discoverfill",
          color: "purple",
          badge: 0,
          name: "发现"
        },
        {
          icon: "questionfill",
          color: "mauve",
          badge: 0,
          name: "帮助"
        },
        {
          icon: "commandfill",
          color: "purple",
          badge: 0,
          name: "问答"
        },
        {
          icon: "brandfill",
          color: "mauve",
          badge: 0,
          name: "版权"
        }
      ],
      modalName: null,
      gridCol: 3,
      gridBorder: false,
      menuBorder: false,
      menuArrow: false,
      menuCard: false,
      touchStart: null,
      touchDirection: null,
      skin: false
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal() {
      this.modalName = null;
    },
    gridchange(evt) {
      this.gridCol = evt.target.value;
    },
    gridswitch(evt) {
      this.gridBorder = evt.target.value;
    },
    menuBorderChange(evt) {
      this.menuBorder = evt.detail.value;
    },
    menuArrowChange(evt) {
      this.menuArrow = evt.detail.value;
    },
    menuCardChange(evt) {
      this.menuCard = evt.detail.value;
    },
    switchSexChnage(evt) {
      this.skin = evt.detail.value;
    },
    ListTouchStart(e) {
      this.touchStart = e.touches[0].pageX;
    },
    ListTouchMove(e) {
      this.touchDirection =
        e.touches[0].pageX - this.touchStart > 0 ? "right" : "left";
    },
    ListTouchEnd(e) {
      if (this.touchDirection === "left") {
        this.modalName = e.currentTarget.dataset.target;
      } else {
        this.modalName = null;
      }
      this.touchDirection = null;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.page {
  background: #f1f1f1;
}

.cu-modal-cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.switch-sex::after {
  content: "\e716";
}

.switch-sex::before {
  content: "\e7a9";
}

.switch-music::after {
  content: "\e66a";
}

.switch-music::before {
  content: "\e6db";
}
</style>
