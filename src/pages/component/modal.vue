<template>
  <div>
    <custom name="模态窗口" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-orange"></text>模态窗口
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="center"
          >Modal</button>
        </div>
      </div>
      <div class="cu-modal" :class="modalName==='center'?'show':''">
        <div class="cu-dialog">
          <div class="cu-bar bg-white justify-end">
            <div class="content">Modal标题</div>
            <div class="action" @tap="hideModal">
              <text class="icon-close text-red"></text>
            </div>
          </div>
          <div class="padding-xl">Modal 内容。</div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>底部窗口
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="bottomModal"
          >Bottom</button>
        </div>
      </div>
      <div
        class="cu-modal bottom-modal"
        :class="modalName=='bottomModal'?'show':''"
      >
        <div class="cu-dialog">
          <div class="cu-bar bg-white">
            <div class="action text-green">确定</div>
            <div class="action text-blue" @tap="hideModal">取消</div>
          </div>
          <div class="padding-xl">Modal 内容。</div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>对话窗口
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="DialogModal1"
          >Dialog</button>
          <button
            class="cu-btn bg-blue shadow margin-left"
            @tap="showModal"
            data-target="DialogModal2"
          >Dialog</button>
        </div>
      </div>

      <div class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
        <div class="cu-dialog">
          <div class="cu-bar bg-white justify-end">
            <div class="content">Modal标题</div>
            <div class="action" @tap="hideModal">
              <text class="icon-close text-red"></text>
            </div>
          </div>
          <div class="padding-xl">Modal 内容。</div>
          <div class="cu-bar bg-white justify-end">
            <div class="action">
              <button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
              <button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
        <div class="cu-dialog">
          <div class="cu-bar bg-white justify-end">
            <div class="content">Modal标题</div>
            <div class="action" @tap="hideModal">
              <text class="icon-close text-red"></text>
            </div>
          </div>
          <div class="padding-xl">Modal 内容。</div>
          <div class="cu-bar bg-white">
            <div class="action margin-0 flex-sub text-green" @tap="hideModal">
              <text class="icon-moneybag"></text>微信支付
            </div>
            <div
              class="action margin-0 flex-sub text-green solid-left"
              @tap="hideModal"
            >取消</div>
            <div class="action margin-0 flex-sub solid-left" @tap="hideModal">确定</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>图片窗口
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="Image"
          >Image</button>
        </div>
      </div>
      <div class="cu-modal" :class="modalName=='Image'?'show':''">
        <div class="cu-dialog">
          <div
            class="bg-img"
            style="background-image: url('https://albedo-theme.com/wp-content/uploads/2016/08/pexels-photo-26180.jpg');height:200px;"
          >
            <div class="cu-bar justify-end text-white">
              <div class="action" @tap="hideModal">
                <text class="icon-close"></text>
              </div>
            </div>
          </div>
          <div class="cu-bar bg-white">
            <div
              class="action margin-0 flex-sub solid-left"
              @tap="hideModal"
            >我知道了</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>单选窗口
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="RadioModal"
          >Radio</button>
        </div>
      </div>

      <div class="cu-modal" :class="modalName=='RadioModal'?'show':''">
        <div class="cu-modal-cover" @tap="hideModal"></div>
        <div class="cu-dialog">
          <radio-group class="block" @change="radioChange">
            <div class="cu-list menu text-left">
              <div class="cu-item" v-for="(item,index) in 5" :key="index">
                <label class="flex justify-between align-center flex-sub">
                  <div class="flex-sub">Item {{index +1}}</div>
                  <radio
                    class="round"
                    :class="radio=='radio' + index?'checked':''"
                    :checked="radio=='radio' + index?true:false"
                    :value="'radio' + index"
                  ></radio>
                </label>
              </div>
            </div>
          </radio-group>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>多选窗口
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="ChooseModal"
          >Choose</button>
        </div>
      </div>
      <div
        class="cu-modal bottom-modal"
        :class="modalName=='ChooseModal'?'show':''"
      >
        <div class="cu-modal-cover" @tap="hideModal"></div>
        <div class="cu-dialog">
          <div class="cu-bar bg-white">
            <div class="action text-green">确定</div>
            <div class="action text-blue" @tap="hideModal">取消</div>
          </div>
          <div class="grid col-3 padding-sm">
            <div
              v-for="(item,index) in ['1元','2元','3元','4元','5元','6元','7元','8元']"
              :key="index"
              class="padding-xs"
            >
              <button
                @tap="chooseChange(item)"
                class="cu-btn orange lg block"
                :class="choose === item?'bg-orange':'line-orange'"
              >{{item}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-orange"></text>侧边抽屉
        </div>
        <div class="action">
          <button
            class="cu-btn bg-green shadow"
            @tap="showModal"
            data-target="DrawerModalL"
          >Left</button>
          <button
            class="cu-btn bg-blue shadow margin-left"
            @tap="showModal"
            data-target="DrawerModalR"
          >Right</button>
        </div>
      </div>
      <div
        class="cu-modal drawer-modal justify-start"
        :class="modalName=='DrawerModalL'?'show':''"
      >
        <div class="cu-modal-cover" @tap="hideModal"></div>
        <div class="cu-dialog basis-lg" :style="CustomBar">
          <div class="cu-list menu text-left">
            <div class="cu-item arrow" v-for="(item,index) in 5" :key="index">
              <div class="content">
                <div>Item {{index +1}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="cu-modal drawer-modal justify-end"
        :class="modalName=='DrawerModalR'?'show':''"
      >
        <div class="cu-modal-cover" @tap="hideModal"></div>
        <div class="cu-dialog basis-lg" :style="CustomBar">
          <div class="cu-list menu menu-avatar text-left">
            <view class="cu-item arrow" v-for="(item,index) in 5" :key="index">
              <view class="content">
                <view>Item {{index +1}}</view>
              </view>
            </view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obj2style } from "@/utils/index";
import Custom from "@/components/custom";
export default {
  data() {
    return {
      modalName: null,
      choose: "3元"
    };
  },

  components: { Custom },

  computed: {
    CustomBar() {
      let style = {};
      style["top"] = uni.getStorageSync("CustomBar") + "px";
      return obj2style(style);
    }
  },

  methods: {
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal() {
      this.modalName = null;
    },
    radioChange(evt) {
      console.log(evt.target.value);
    },
    chooseChange(item) {
      this.choose = item;
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
