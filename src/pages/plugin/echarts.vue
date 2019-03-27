<template>
  <div>
    <custom
      noneBg
      name="图表"
      bg-img="https://goss4.veer.com/creative/vcg/veer/612/veer-141525427.jpg"
    ></custom>

    <div class="cu-bar bg-white solid-bottom">
      <div class="action">
        <text class="icon-title text-orange"></text>使用说明
      </div>

      <div class="action">
        <button
          class="cu-btn bg-green shadow"
          @tap="showModal"
          data-target="center"
        >查看详情</button>
      </div>
    </div>

    <div class="cu-list grid margin-top" :class="'col-'+gridCol">
      <div class="cu-item" v-for="item in iconList" :key="item.name">
        <navigator
          hover-class="none"
          open-type="navigate"
          :url="'/subPackagesA/echarts/' + item.name"
        >
          <div>
            <div :class="['icon-'+item.icon, 'text-'+ item.color]"></div>
            <text>{{item.title}}</text>
          </div>
        </navigator>
      </div>
    </div>

    <modal :type.sync="modalName">
      <div slot="title">
        <div class="content">图表使用指南</div>
      </div>
      <div slot="content">
        <div class="padding-xl text-left">
          图表是基于echarts制作的。
          由于微信有软件包大小限制，本demo只提供几种个别样例，具体使用哪种图表可以通过官网定制，地址为：
          <div
            class="cu-tag bg-yellow radius"
          >http://echarts.baidu.com/builder.html</div>
        </div>
      </div>
      <div slot="buttom">
        <div class="cu-bar bg-white justify-end">
          <div class="action">
            <button class="cu-btn bg-red margin-left" @tap="hideModal">确定</button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Modal from "@/components/modal";
export default {
  data() {
    return {
      iconList: [
        {
          icon: "cascades",
          color: "orange",
          badge: 0,
          title: "散点图",
          name: "scatter"
        },
        {
          icon: "round",
          color: "yellow",
          badge: 0,
          title: "饼图",
          name: "pie"
        },
        {
          icon: "pic",
          color: "olive",
          badge: 0,
          title: "折线图",
          name: "line"
        },
        {
          icon: "countdownfill",
          color: "cyan",
          badge: 0,
          title: "仪表盘",
          name: "gauge"
        },
        {
          icon: "discover",
          color: "purple",
          badge: 0,
          title: "雷达图",
          name: "radar"
        },
        {
          icon: "loading",
          color: "red",
          badge: 0,
          title: "延迟加载图表",
          name: "lazyLoad"
        },
        {
          icon: "barcode",
          color: "blue",
          badge: 0,
          title: "多个图表",
          name: "multiCharts"
        }
      ],
      gridCol: 3,
      modalName: ""
    };
  },

  components: { Custom, Modal },

  computed: {},

  methods: {
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal() {
      this.modalName = "";
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
