<template>
  <div>
    <custom name="雷达图" bg-color="bg-gradual-purple"></custom>
    <div class="wrap">
      <echarts
        :onInit="echartInit"
        canvasId="radar"
        ref="radarChart"
        throttleTouch
      />
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import * as echarts from "./echarts.min";
import Echarts from "@/components/echarts/echarts";

let Option = {
  backgroundColor: "#ffffff",
  color: ["#37A2DA", "#FF9F7F"],
  tooltip: {},
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  radar: {
    // shape: 'circle',
    indicator: [
      {
        name: "食品",
        max: 500
      },
      {
        name: "玩具",
        max: 500
      },
      {
        name: "服饰",
        max: 500
      },
      {
        name: "绘本",
        max: 500
      },
      {
        name: "医疗",
        max: 500
      },
      {
        name: "门票",
        max: 500
      }
    ]
  },
  series: [
    {
      name: "预算 vs 开销",
      type: "radar",
      data: [
        {
          value: [430, 340, 500, 300, 490, 400],
          name: "预算"
        },
        {
          value: [300, 430, 150, 300, 420, 250],
          name: "开销"
        }
      ]
    }
  ]
};

export default {
  data() {
    return {};
  },

  components: { Custom, Echarts },

  computed: {},

  methods: {
    echartInit(canvas, width, height) {
      echarts.setCanvasCreator(() => canvas);
      let Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(Chart);

      Chart.setOption(Option);
      return Chart;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.wrap {
  width: 100%;
  height: 80vh;
}
</style>
