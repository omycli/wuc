<template>
  <div>
    <custom name="背景颜色" bg-color="bg-gradual-blue fixed"></custom>

    <div>
      <div class="cu-bar bg-white  solid-bottom">
        <div class="action">
          <text class="icon-title text-blue"></text>进度条形状
        </div>
      </div>
      <div class="padding bg-white">
        <div class="cu-progress">
          <div class="bg-red" :style="loadNum">61.8%</div>
        </div>
        <div class="cu-progress radius margin-top">
          <div class="bg-red" :style="loadNum">61.8%</div>
        </div>
        <div class="cu-progress round margin-top">
          <div class="bg-red" :style="loadNum">61.8%</div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>进度条尺寸
        </div>
      </div>
      <div class="padding bg-white">
        <div class="cu-progress round">
          <div class="bg-red" :style="loadNum"></div>
        </div>
        <div class="cu-progress round margin-top sm">
          <div class="bg-red" :style="loadNum"></div>
        </div>
        <div class="cu-progress round margin-top xs">
          <div class="bg-red" :style="loadNum"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  solid-bottom margin-top" @click="showModal">
        <div class="action">
          <text class="icon-title text-blue"></text>进度条颜色
        </div>
        <div class="action">
          <div class="padding-sm solid radius shadow-blur" :class="'bg-'+color"></div>
        </div>
      </div>
      <div class="padding" :class="color=='white'?'bg-grey':'bg-white'">
        <div class="cu-progress round">
          <div :style="loadNum" :class="'bg-'+color"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>进度条条纹
        </div>
        <switch class="sm margin-right-sm" @change="SetActive"></switch>
      </div>
      <div class="padding bg-white">
        <div class="cu-progress round sm striped" :class="active?'active':''">
          <div class="bg-green" :style="loadNum"></div>
        </div>
        <div
          class="cu-progress round sm margin-top-sm striped"
          :class="active?'active':''"
        >
          <div class="bg-black" :style="loadNum"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>进度条比例
        </div>
      </div>
      <div class="padding bg-white">
        <div class="cu-progress radius striped active">
          <div class="bg-red" :style="loadNum30">30%</div>
          <div class="bg-olive" :style="loadNum">45%</div>
          <div class="bg-cyan" :style="loadNum">25%</div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white  solid-bottom margin-top">
        <div class="action">
          <text class="icon-title text-blue"></text>进度条布局
        </div>
      </div>
      <div class="padding bg-white">
        <div class="flex">
          <div class="cu-progress round">
            <div class="bg-green" :style="loadNum100"></div>
          </div>
          <text class="icon-roundcheckfill text-green margin-left-sm"></text>
        </div>
        <div class="flex margin-top">
          <div class="cu-progress round">
            <div class="bg-green" :style="loadNum"></div>
          </div>
          <text class="margin-left">80%</text>
        </div>
      </div>
    </div>

    <div class="cu-modal" :class="modalName === 'ColorModal' ? 'show' : ''">
      <div class="cu-dialog">
        <div class="cu-bar bg-white  justify-end">
          <div class="content">选择颜色</div>
          <div class="action" @click="hideModal">
            <text class="icon-close text-red"></text>
          </div>
        </div>
        <div class="grid col-5 padding">
          <div
            class="padding-xs"
            v-for="(item ,index) in ColorList"
            :key="index"
            @click="SetColor(item.name)"
          >
            <div
              class="padding-tb radius"
              :class="'bg-'+item.name"
            >{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import { obj2style } from "@/utils/index";
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
      color: "red",
      loading: false,
      modalName: null,
      active: ""
    };
  },

  components: { Custom },

  computed: {
    loadNum() {
      let style = {};
      style["width"] = this.loading ? "61.8%" : "";
      return obj2style(style);
    },
    loadNum100() {
      let style = {};
      style["width"] = this.loading ? "100%" : "";
      return obj2style(style);
    },
    loadNum30() {
      let style = {};
      style["width"] = this.loading ? "30%" : "";
      return obj2style(style);
    }
  },

  methods: {
    showModal() {
      this.modalName = "ColorModal";
    },
    hideModal() {
      this.modalName = null;
    },
    SetColor(color) {
      this.modalName = null;
      this.color = color;
    },
    SetActive(e) {
      this.active = e.target.value;
    }
  },

  mounted() {
    let self = this;
    setTimeout(_ => {
      self.loading = true;
    }, 600);
  }
};
</script>
<style lang='scss'>
</style>
