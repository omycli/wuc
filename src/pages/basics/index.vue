<template  lang='pug'>
.container
    img.png.tit-img(src="http://www.bbvdd.com/d/20190214163102nk4.png", mode="widthFix")

    .nav-list
      navigator(
      open-type="navigate" 
      hover-class='none' 
      :url = "'/pages/basics/' + item.name"
      class='nav-li' 
      :class="'bg-'+item.color" 
      v-for="(item,index) in elements"
      :key="index")
        .nav-title {{item.title}}
        .nav-name {{item.name}}
        text(
          :class="'icon-'+item.icon"
        )
</template>

<script>
export default {
  data() {
    return {
      elements: [
        { title: "布局", name: "layout", color: "cyan", icon: "newsfill" },
        { title: "背景", name: "background", color: "blue", icon: "colorlens" },
        { title: "文本", name: "text", color: "purple", icon: "font" },
        { title: "图标 ", name: "icons", color: "mauve", icon: "icon" },
        { title: "按钮", name: "button", color: "pink", icon: "btn" },
        { title: "标签", name: "tag", color: "brown", icon: "tagfill" },
        { title: "头像", name: "avatar", color: "red", icon: "myfill" },
        {
          title: "进度条",
          name: "progress",
          color: "orange",
          icon: "icloading"
        },
        { title: "边框阴影", name: "shadow", color: "olive", icon: "copy" },
        { title: "加载", name: "loading", color: "green", icon: "loading2" }
      ],
      modalName: ""
    };
  },

  components: {},

  computed: {},

  methods: {
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal(e) {
      this.modalName = null;
    }
  },

  mounted() {
    // #ifdef MP-WEIXIN
    uni.getSetting({
      success: res => {
        if (!res.authSetting["scope.userInfo"]) {
          uni.redirectTo({
            url: "/pages/auth/index"
          });
        }
      }
    });
    // #endif
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === "function" && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        });
      }
    }
  },
  onShareAppMessage() {
    return {
      title: "(vue版)ColorUI-高颜值的小程序UI组件库",
      imageUrl: "https://image.weilanwl.com/color2.0/share2215.jpg",
      path: "/pages/basics/index"
    };
  }
};
</script>
<style lang='scss'>
.tit-img {
  width: 100%;
  height: 486rpx;
}
</style>
