<template>
  <div>
    <custom name="折线图" bg-color="bg-gradual-purple"></custom>
    <div class="wrap">
      <echarts
        class="ec-canvas"
        :onInit="lineInit"
        canvasId="line"
        ref="lineChart"
        throttleTouch
      />
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import * as echarts from "./echarts.min";
import Echarts from "@/components/echarts/echarts";

let lineOption = {
  animation: false,
  color: ["#37A2DA", "#9FE6B8"],
  grid: {
    x: 35,
    x2: 10,
    y: 30,
    y2: 25
  },
  calculable: false,
  xAxis: [
    {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ]
    }
  ],
  yAxis: [
    {
      type: "value",
      splitArea: {
        show: true
      }
    }
  ],
  series: [
    {
      name: "蒸发量",
      type: "line",
      data: [
        2.0,
        4.9,
        7.0,
        23.2,
        25.6,
        76.7,
        135.6,
        162.2,
        32.6,
        20.0,
        6.4,
        3.3
      ]
    },
    {
      name: "降水量",
      type: "line",
      data: [
        2.6,
        5.9,
        9.0,
        26.4,
        28.7,
        70.7,
        175.6,
        182.2,
        48.7,
        18.8,
        6.0,
        2.3
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
    lineInit(canvas, width, height) {
      echarts.setCanvasCreator(() => canvas);
      let lineChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(lineChart);

      lineChart.setOption(lineOption);
      return lineChart;
    }
  },

  mounted() {}
};
</script>
<style>
.wrap {
  width: 100%;
  height: 80vh;
}
</style>
