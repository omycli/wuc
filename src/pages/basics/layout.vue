<template>
  <div>
    <custom name="布局" bg-color="bg-gradual-blue fixed"></custom>

    <wuc-tab
      :tab-list="tabNav"
      :tabCur.sync="TabCur"
      :tab-style="CustomBar"
      tab-class="text-center bg-white nav fixed"
      select-class="text-blue"
    ></wuc-tab>

    <swiper
      :current="TabCur"
      class="tab-swiper"
      duration="300"
      @change="swiperChange"
    >
      <swiper-item>
        <scroll-view
          scroll-y
          class="scroll"
          :upper-threshold="50"
          @scrolltolower="load"
          enable-back-to-top
        >
          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>固定尺寸
            </div>
          </div>
          <div class="padding bg-white">
            <div class="flex flex-wrap">
              <div class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</div>
              <div class="basis-df"></div>
              <div class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</div>
              <div class="basis-df"></div>
              <div class="basis-df bg-grey margin-xs padding-sm radius">sub(50%)</div>
              <div class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</div>
              <div class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>比例布局
            </div>
          </div>
          <div class="padding bg-white">
            <div class="flex">
              <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
              <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
            </div>
            <div class="flex p-xs margin-bottom-sm mb-sm">
              <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
              <div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
            </div>
            <div class="flex p-xs margin-bottom-sm mb-sm">
              <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
              <div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
              <div class="flex-treble bg-grey padding-sm margin-xs radius">3</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>水平对齐(justify)
            </div>
          </div>
          <div class="bg-white">
            <div class="flex solid-bottom padding justify-start">
              <div class="bg-grey padding-sm margin-xs radius">start</div>
              <div class="bg-grey padding-sm margin-xs radius">start</div>
            </div>
            <div class="flex solid-bottom padding justify-end">
              <div class="bg-grey padding-sm margin-xs radius">end</div>
              <div class="bg-grey padding-sm margin-xs radius">end</div>
            </div>
            <div class="flex solid-bottom padding justify-center">
              <div class="bg-grey padding-sm margin-xs radius">center</div>
              <div class="bg-grey padding-sm margin-xs radius">center</div>
            </div>
            <div class="flex solid-bottom padding justify-between">
              <div class="bg-grey padding-sm margin-xs radius">between</div>
              <div class="bg-grey padding-sm margin-xs radius">between</div>
            </div>
            <div class="flex solid-bottom padding justify-around">
              <div class="bg-grey padding-sm margin-xs radius">around</div>
              <div class="bg-grey padding-sm margin-xs radius">around</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>垂直对齐(align)
            </div>
          </div>
          <div class="bg-white">
            <div class="flex solid-bottom padding align-start">
              <div class="bg-grey padding-lg margin-xs radius">ColorUi</div>
              <div class="bg-grey padding-sm margin-xs radius">start</div>
            </div>
            <div class="flex solid-bottom padding align-end">
              <div class="bg-grey padding-lg margin-xs radius">ColorUi</div>
              <div class="bg-grey padding-sm margin-xs radius">end</div>
            </div>
            <div class="flex solid-bottom padding align-center">
              <div class="bg-grey padding-lg margin-xs radius">ColorUi</div>
              <div class="bg-grey padding-sm margin-xs radius">center</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>垂直布局
            </div>
          </div>
          <div class="bg-white">
            <div class="column solids-bottom" style="height:200rpx">
              <div class="bg-grey padding-sm margin-xs radius w50">column</div>
              <div class="bg-grey padding-sm margin-xs radius w50">column</div>
            </div>
            <div class="column-center solids-bottom" style="height:200rpx">
              <div class="bg-grey padding-sm margin-xs radius w50">column-center</div>
              <div class="bg-grey padding-sm margin-xs radius w50">column-center</div>
            </div>
            <div
              class="column-between solids-bottom padding"
              style="height:300rpx"
            >
              <div class="bg-grey padding-sm radius w50">column-between</div>
              <div class="bg-grey padding-sm radius w50">column-between</div>
            </div>
            <div
              class="column-around solids-bottom padding"
              style="height:300rpx"
            >
              <div class="bg-grey padding-sm radius w50">column-around</div>
              <div class="bg-grey padding-sm radius w50">column-around</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>水平垂直均居中布局
            </div>
          </div>
          <div class="bg-white">
            <div class="flex-center solids-bottom" style="height:200rpx">
              <div class="bg-grey padding-sm margin-xs radius w50">flex-center</div>
            </div>
          </div>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          scroll-y
          class="scroll"
          :upper-threshold="50"
          @scrolltolower="load"
          enable-back-to-top
        >
          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>等分列
            </div>
            <div class="action"></div>
          </div>

          <div class="bg-white padding">
            <div
              class="grid margin-bottom text-center"
              :class="'col-'+(index+1)"
              v-for="(item,index) in 5"
              :key="index"
            >
              <div
                class="padding"
                :class="j % 2 === 0 ? 'bg-cyan':'bg-blue'"
                v-for="(item,j) in (index+1)*2"
                :key="j"
              >{{j+1}}</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>等高
            </div>
            <div class="action"></div>
          </div>

          <div class="bg-white padding">
            <div class="grid col-4 grid-square">
              <div
                class="bg-img"
                v-for="(item,index) in avatar"
                :key="index"
                :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"
              ></div>
            </div>
          </div>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          scroll-y
          class="scroll"
          :upper-threshold="50"
          @scrolltolower="load"
          enable-back-to-top
        >
          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>浮动
            </div>
          </div>
          <div class="bg-white padding">
            <div class="cf padding-sm">
              <div class="bg-grey radius fl padding-sm">ColorUi fl</div>
              <div class="bg-grey radius fr padding-sm">ColorUi fr</div>
            </div>
          </div>

          <div class="cu-bar bg-white margin-top solid-bottom">
            <div class="action">
              <text class="icon-title text-blue"></text>内外边距
            </div>
          </div>
          <div class="bg-white">
            <div class="padding bg-gray">{size}的尺寸有xs/sm/df/lg/xl</div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">外边距</div>
              <div class="basis-df padding-bottom-xs">内边距</div>
              <div class="basis-df">.margin-{size}</div>
              <div class="basis-df">.padding-{size}</div>
            </div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">水平方向外边距</div>
              <div class="basis-df padding-bottom-xs">水平方向内边距</div>
              <div class="basis-df">.margin-lr-{size}</div>
              <div class="basis-df">.padding-lr-{size}</div>
            </div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">垂直方向外边距</div>
              <div class="basis-df padding-bottom-xs">垂直方向内边距</div>
              <div class="basis-df">.margin-tb-{size}</div>
              <div class="basis-df">.padding-tb-{size}</div>
            </div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">上外边距</div>
              <div class="basis-df padding-bottom-xs">上内边距</div>
              <div class="basis-df">.margin-top-{size}</div>
              <div class="basis-df">.padding-top-{size}</div>
            </div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">右外边距</div>
              <div class="basis-df padding-bottom-xs">右内边距</div>
              <div class="basis-df">.margin-right-{size}</div>
              <div class="basis-df">.padding-right-{size}</div>
            </div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">下外边距</div>
              <div class="basis-df padding-bottom-xs">下内边距</div>
              <div class="basis-df">margin-bottom-{size}</div>
              <div class="basis-df">.padding-bottom-{size}</div>
            </div>
            <div class="flex flex-wrap padding solid-top">
              <div class="basis-df padding-bottom-xs">左外边距</div>
              <div class="basis-df padding-bottom-xs">左内边距</div>
              <div class="basis-df">.margin-left-{size}</div>
              <div class="basis-df">.padding-left-{size}</div>
            </div>
          </div>
        </scroll-view>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import { obj2style } from "@/utils/index";
import WucTab from "@/components/tab";
export default {
  data() {
    return {
      TabCur: 0,
      avatar: [
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
      ],
      tabNav: [{ name: "Flex布局" }, { name: "Grid布局" }, { name: "辅助布局" }]
    };
  },

  components: { Custom, WucTab },

  computed: {
    CustomBar() {
      let style = {};
      style["top"] = uni.getStorageSync("CustomBar") + "px";
      return obj2style(style);
    }
  },

  methods: {
    swiperChange(e) {
      let { current } = e.target;
      this.TabCur = current;
    },
    load(e) {
      console.log("到底部了");
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.w50 {
  width: 50%;
}
.tab-swiper {
  position: relative;
  top: 80upx;
  width: 100%;
  height: 100vh;
}
</style>
