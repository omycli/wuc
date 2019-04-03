<template  lang='pug'>
.container
    img.png.tit-img(src="https://goss2.veer.com/creative/vcg/veer/612/veer-309560021.jpg", mode="widthFix")

    div(class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg")
      div(
        class='cu-item arrow' 
        v-for="(item,index) in elements"
        :key="index")
          navigator(
          open-type="navigate" 
          hover-class='none' 
          :url = "item.name"
          class='content')
            text(
              :class="['icon-'+item.icon,'text-'+item.color]"
            )
            text(class="text-grey") {{item.title}}
</template>

<script>
export default {
  data() {
    return {
      elements: [
        {
          title: "顶部操作栏",
          name: "/pages/component/custom",
          color: "blue",
          icon: "more"
        },
        {
          title: "手风琴",
          name: "/pages/component/accordion",
          color: "cyan",
          icon: "unfold"
        },
        {
          title: "星级评价",
          name: "/pages/component/rater",
          color: "olive",
          icon: "favor"
        },
        {
          title: "级联选择器",
          name: "/subPackagesA/component/cascader",
          color: "orange",
          icon: "cascades"
        },
        {
          title: "倒计时",
          name: "/subPackagesA/component/countDown",
          color: "brown",
          icon: "timefill"
        },
        {
          title: "操作条",
          name: "/pages/component/bar",
          color: "purple",
          icon: "vipcard"
        },
        {
          title: "导航栏 ",
          name: "/pages/component/nav",
          color: "mauve",
          icon: "formfill"
        },
        {
          title: "列表",
          name: "/pages/component/list",
          color: "pink",
          icon: "list"
        },
        {
          title: "卡片",
          name: "/pages/component/card",
          color: "brown",
          icon: "newsfill"
        },
        {
          title: "表单",
          name: "/pages/component/form",
          color: "red",
          icon: "formfill"
        },
        {
          title: "时间轴",
          name: "/pages/component/timeline",
          color: "orange",
          icon: "timefill"
        },
        {
          title: "聊天",
          name: "/pages/component/chat",
          color: "green",
          icon: "messagefill"
        },
        {
          title: "轮播",
          name: "/pages/component/swiper",
          color: "olive",
          icon: "album"
        },
        {
          title: "模态框",
          name: "/pages/component/modal",
          color: "grey",
          icon: "squarecheckfill"
        },
        {
          title: "步骤条",
          name: "/pages/component/steps",
          color: "cyan",
          icon: "roundcheckfill"
        },
        {
          title: "日历",
          name: "/pages/component/calendar",
          color: "blue",
          icon: "calendar"
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
      title: "WUC",
      imageUrl:
        "https://goss3.veer.com/creative/vcg/veer/612/veer-309563777.jpg",
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
