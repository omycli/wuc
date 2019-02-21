<template  lang='pug'>
.container
    img.png.tit-img(src="http://www.bbvdd.com/d/20190214163216ti7.png", mode="widthFix")

    .nav-list
      navigator(
      open-type="navigate" 
      hover-class='none' 
      :url = "'/pages/component/' + item.name"
      class='nav-li' 
      :class="'bg-'+item.color"
      :style="'animation: show '+((index+1)*0.2+1)+'s 1'"
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
        { title: "操作条", name: "bar", color: "purple", icon: "vipcard" },
        { title: "导航栏 ", name: "nav", color: "mauve", icon: "formfill" },
        { title: "列表", name: "list", color: "pink", icon: "list" },
        { title: "卡片", name: "card", color: "brown", icon: "newsfill" },
        { title: "表单", name: "form", color: "red", icon: "formfill" },
        {
          title: "时间轴",
          name: "timeline",
          color: "orange",
          icon: "timefill"
        },
        { title: "聊天", name: "chat", color: "green", icon: "messagefill" },
        { title: "轮播", name: "swiper", color: "olive", icon: "album" },
        {
          title: "模态框",
          name: "modal",
          color: "grey",
          icon: "squarecheckfill"
        },
        {
          title: "步骤条",
          name: "steps",
          color: "cyan",
          icon: "roundcheckfill"
        }
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

  mounted() {},
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
// @import "~@/style/colorui";
.tit-img {
  width: 100%;
  height: 486rpx;
}
</style>
