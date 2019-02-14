<template>
  <div>
    <custom name="标签" bg-color="bg-gradual-blue"></custom>
    <div>
      <div class="cu-bar bg-white ">
        <div class="action">
          <text class="icon-title text-blue"></text>标签形状
        </div>
      </div>
      <div class="padding">
        <div class="cu-tag">默认</div>
        <div class="cu-tag round">椭圆</div>
        <div class="cu-tag radius">圆角</div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>标签尺寸
        </div>
      </div>
      <div class="padding">
        <div class="cu-tag radius sm">小尺寸</div>
        <div class="cu-tag radius">普通尺寸</div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>标签颜色
        </div>
      </div>
      <div class="padding-sm flex flex-wrap">
        <div class="padding-xs" v-for="(item,index) in ColorList" :key="index">
          <div class="cu-tag" :class="'bg-'+item.name">{{item.title}}</div>
        </div>
        <div class="padding-xs" v-for="(item,index) in ColorList" :key="index">
          <div class="cu-tag light" :class="'bg-'+item.name">{{item.title}}</div>
        </div>
      </div>
    </div>

    <div>
      <view class="cu-bar bg-white  margin-top">
        <view class="action">
          <text class="icon-title text-blue"></text>镂空标签
        </view>
      </view>
      <view class="padding-sm flex flex-wrap">
        <view class="padding-xs" v-for="(item,index) in ColorList" :key="index">
          <view class="cu-tag" :class="'line-'+item.name">{{item.title}}</view>
        </view>
      </view>
    </div>

    <div>
      <view class="cu-bar bg-white  margin-top">
        <view class="action">
          <text class="icon-title text-blue"></text>胶囊样式
        </view>
      </view>
      <view class="padding">
        <view class="cu-capsule">
          <view class="cu-tag bg-red">
            <text class="icon-likefill"></text>
          </view>
          <view class="cu-tag line-red">12</view>
        </view>
        <view class="cu-capsule round">
          <view class="cu-tag bg-blue">
            <text class="icon-likefill"></text>
          </view>
          <view class="cu-tag line-blue">23</view>
        </view>
        <view class="cu-capsule round">
          <view class="cu-tag bg-blue">说明</view>
          <view class="cu-tag line-blue">123</view>
        </view>
        <view class="cu-capsule radius">
          <view class="cu-tag bg-grey">
            <text class="icon-likefill"></text>
          </view>
          <view class="cu-tag line-grey">23</view>
        </view>
        <view class="cu-capsule radius">
          <view class="cu-tag bg-brown sm">
            <text class="icon-likefill"></text>
          </view>
          <view class="cu-tag line-brown sm">23</view>
        </view>
      </view>
    </div>

    <div>
      <view class="cu-bar bg-white  margin-top">
        <view class="action">
          <text class="icon-title text-blue"></text>数字标签
        </view>
      </view>
      <view class="padding flex justify-between align-center">
        <view class="cu-avatar xl radius">港
          <view class="cu-tag badge">99+</view>
        </view>
        <view
          class="cu-avatar xl radius"
          style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
        >
          <view class="cu-tag badge">9</view>
        </view>
        <view class="cu-avatar xl radius">
          <view class="cu-tag badge">99</view>
          <text class="icon-people"></text>
        </view>
        <view class="cu-avatar xl radius">
          <view class="cu-tag badge">99+</view>
        </view>
      </view>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      ColorList: [
        {
          title: "嫣红",
          name: "red",
          color: "#e54d42"
        },
        {
          title: "桔橙",
          name: "orange",
          color: "#f37b1d"
        },
        {
          title: "明黄",
          name: "yellow",
          color: "#fbbd08"
        },
        {
          title: "橄榄",
          name: "olive",
          color: "#8dc63f"
        },
        {
          title: "森绿",
          name: "green",
          color: "#39b54a"
        },
        {
          title: "天青",
          name: "cyan",
          color: "#1cbbb4"
        },
        {
          title: "海蓝",
          name: "blue",
          color: "#0081ff"
        },
        {
          title: "姹紫",
          name: "purple",
          color: "#6739b6"
        },
        {
          title: "木槿",
          name: "mauve",
          color: "#9c26b0"
        },
        {
          title: "桃粉",
          name: "pink",
          color: "#e03997"
        },
        {
          title: "棕褐",
          name: "brown",
          color: "#a5673f"
        },
        {
          title: "玄灰",
          name: "grey",
          color: "#8799a3"
        },
        {
          title: "草灰",
          name: "gray",
          color: "#aaaaaa"
        },
        {
          title: "墨黑",
          name: "black",
          color: "#333333"
        },
        {
          title: "雅白",
          name: "white",
          color: "#ffffff"
        }
      ]
    };
  },

  components: { Custom },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
