<template  lang='pug'>
.container
    img.png.tit-img(src="http://www.bbvdd.com/d/20190214163102nk4.png", mode="widthFix")

    Scrollmsg(
      :msg="content"
      :base-style="'margin:14px'"
      logo="https://static.veer.com/veer/static/resources/Titles/2019-01-09/55270f79febb487fbcdb5b00118f91f7.jpg"
      @onevent="showModal"
    )

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
import Scrollmsg from "@/components/scrollmsg";
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
      content: [
        {
          content: "告诉你个小秘密，该组件库可以生成各端代码",
          link: "/subPackagesA/about/home"
        },
        { content: "为了少折腾而折腾", link: "/subPackagesA/about/log" }
      ]
    };
  },

  components: { Scrollmsg },

  computed: {},

  methods: {
    showModal(item) {
      uni.showModal({
        title: "提示",
        content: item.content,
        success: function(res) {
          if (res.confirm) {
            if (!item.link) {
              return false;
            }
            uni.navigateTo({
              url: item.link
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
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
      title: "ColorUI-uni的组件库",
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
