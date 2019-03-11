<template  lang='pug'>
.container
    img.png.tit-img(src="https://goss2.veer.com/creative/vcg/veer/612/veer-309562693.jpg", mode="widthFix")

    Scrollmsg(
      :msg="content"
      :base-style="'margin:14px'"
      logo="https://goss.veer.com/creative/vcg/veer/612/veer-303358101.jpg"
      @onevent="showModal"
    )

    div(class="cu-list menu card-menu margin-bottom-xl shadow-lg")
      div(
        class='cu-item arrow' 
        v-for="(item,index) in elements"
        :key="index")
          navigator(
          open-type="navigate" 
          hover-class='none' 
          :url = "'/pages/basics/' + item.name"
          class='content')
            text(
              :class="['icon-'+item.icon,'text-'+item.color]"
            )
            text(class="text-grey") {{item.title}}
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
        confirmText: "查看详情",
        success: function(res) {
          if (res.confirm) {
            if (!item.link) {
              return false;
            }
            uni.navigateTo({
              url: item.link
            });
          } else if (res.cancel) {
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
      title: "WUC",
      imageUrl: "https://goss.veer.com/creative/vcg/veer/612/veer-303358101.jpg",
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
