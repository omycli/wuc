<template>
  <div>
    <custom name="文本" bg-color="bg-gradual-blue"></custom>
    <div class="cu-bar solid-bottom">
      <div class="action">
        <text class="icon-title text-blue"></text>文字大小
      </div>
    </div>
    <div class="bg-white padding-lr">
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">60</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-xsl padding">
            <text class="icon-roundcheckfill text-green"></text>
          </div>
          <div class="padding">用于图标、数字等特大显示</div>
        </div>
      </div>
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">40</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-sl padding">
            <text class="icon-roundcheckfill text-green"></text>
          </div>
          <div class="padding">用于图标、数字等较大显示</div>
        </div>
      </div>
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">22</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-xxl padding">
            <text class="text-price text-red">80.00</text>
          </div>
          <div class="padding">用于金额数字等信息</div>
        </div>
      </div>
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">18</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-xl padding">
            <text class="text-black text-bold">您的订单已提交成功！</text>
          </div>
          <div class="padding">页面大标题，用于结果页等单一信息页</div>
        </div>
      </div>
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">16</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-lg padding">
            <text class="text-black">ColorUI组件库</text>
          </div>
          <div class="padding">页面小标题，首要层级显示内容</div>
        </div>
      </div>
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">14</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-df padding">专注视觉的小程序组件库</div>
          <div class="padding">页面默认字号，用于摘要或阅读文本</div>
        </div>
      </div>
      <div class="solids-bottom padding-xs flex align-center">
        <div class="padding">12</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-sm padding">
            <text class="text-grey">衬衫的价格是9磅15便士</text>
          </div>
          <div class="padding">页面辅助信息，次级内容等</div>
        </div>
      </div>
      <div class="padding-xs flex align-center">
        <div class="padding">10</div>
        <div class="flex-sub text-center">
          <div class="solid-bottom text-xs padding">
            <text class="text-gray">我于杀戮之中绽放 亦如黎明中的花朵</text>
          </div>
          <div class="padding">说明文本，标签文字等关注度低的文字</div>
        </div>
      </div>
    </div>
    <div class="cu-bar solid-bottom margin-top">
      <div class="action">
        <text class="icon-title text-blue"></text>文字颜色
      </div>
    </div>
    <div class="grid col-5 padding-sm">
      <div class="padding-sm" v-for="(item,index) in list" :key="index">
        <div class="text-center" :class="'text-'+item.name">{{item.title}}</div>
      </div>
    </div>
    <div class="cu-bar solid-bottom margin-top">
      <div class="action">
        <text class="icon-title text-blue"></text>文字截断
      </div>
    </div>
    <div class="padding bg-white">
      <div
        class="text-cut padding bg-grey radius"
        style="width:220px"
      >我于杀戮之中绽放 ,亦如黎明中的花朵</div>
    </div>
    <div class="cu-bar solid-bottom margin-top">
      <div class="action">
        <text class="icon-title text-blue"></text>文字对齐
      </div>
    </div>
    <div class="padding bg-white">
      <div class="text-left padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
      <div class="text-center padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
      <div class="text-right padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
    </div>
    <div class="cu-bar solid-bottom margin-top">
      <div class="action">
        <text class="icon-title text-blue"></text>特殊文字
      </div>
    </div>
    <div class="padding text-center">
      <div class="padding-lr bg-white">
        <div class="solid-bottom padding">
          <text class="text-price">80.00</text>
        </div>
        <div class="padding">价格文本，利用伪元素添加</div>
      </div>
      <div class="padding-lr bg-white margin-top">
        <div class="solid-bottom padding">
          <text class="text-Abc">color Ui</text>
        </div>
        <div class="padding">英文单词首字母大写</div>
      </div>
      <div class="padding-lr bg-white margin-top">
        <div class="solid-bottom padding">
          <text class="text-ABC">color Ui</text>
        </div>
        <div class="padding">全部字母大写</div>
      </div>
      <div class="padding-lr bg-white margin-top">
        <div class="solid-bottom padding">
          <text class="text-abc">color Ui</text>
        </div>
        <div class="padding">全部字母小写</div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      list: [
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
