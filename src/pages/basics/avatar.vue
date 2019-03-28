<template>
  <div>
    <custom name="头像" bg-color="bg-gradual-blue fixed"></custom>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>微信头像
        </div>
      </div>
      <div class="padding">
        <div class="open-img">
          <open-data type="userAvatarUrl"></open-data>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class="action">
          <text class="icon-title text-blue"></text>头像形状
        </div>
      </div>
      <div class="padding">
        <div
          class="cu-avatar round"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
        ></div>
        <div
          class="cu-avatar radius margin-left"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"
        ></div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>头像尺寸
        </div>
      </div>
      <div class="padding">
        <div
          class="cu-avatar sm round margin-left"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
        ></div>
        <div
          class="cu-avatar round margin-left"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"
        ></div>
        <div
          class="cu-avatar lg round margin-left"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"
        ></div>
        <div
          class="cu-avatar xl round margin-left"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"
        ></div>
      </div>
      <div class="padding">
        <div class="cu-avatar sm round margin-left bg-red">A</div>
        <div class="cu-avatar round margin-left bg-red">B</div>
        <div class="cu-avatar lg round margin-left bg-red">C</div>
        <div class="cu-avatar xl round margin-left bg-red">D</div>
      </div>
      <div class="padding">
        <div class="cu-avatar sm round margin-left bg-red">蔚</div>
        <div class="cu-avatar round margin-left bg-red">蓝</div>
        <div class="cu-avatar lg round margin-left bg-red">
          <text>wl</text>
        </div>
        <div class="cu-avatar xl round margin-left bg-red">
          <text class="avatar-text">网络</text>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>内嵌文字(图标)
        </div>
      </div>
      <div class="padding">
        <div class="cu-avatar radius">
          <text class="icon-people"></text>
        </div>
        <div class="cu-avatar radius margin-left">
          <text>云</text>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>头像颜色
        </div>
      </div>
      <div class="padding-sm">
        <div
          class="cu-avatar round lg margin-xs"
          :class="'bg-'+item.name"
          v-for="(item,index) in ColorList"
          :key="index"
        >
          <text class="avatar-text">{{item.name}}</text>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>头像组
        </div>
      </div>
      <div class="padding">
        <div class="cu-avatar-group">
          <div
            class="cu-avatar round lg"
            v-for="(item,index) in avatar"
            :key="index"
            :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"
          ></div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>头像标签
        </div>
      </div>
      <div class="padding">
        <div
          class="cu-avatar round lg margin-left"
          v-for="(item,index) in avatar"
          :key="index"
          :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"
        >
          <div
            class="cu-tag badge"
            :class="index%2==0?'icon-female bg-pink':'icon-male bg-blue'"
          ></div>
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
      ],
      avatar: [
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"
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
