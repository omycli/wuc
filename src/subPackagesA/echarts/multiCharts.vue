<template>
  <div>
    <custom name="多个图表" bg-color="bg-gradual-purple"></custom>

    <div class="cu-bar bg-white solid-bottom">
      <div class="action">
        <text class="icon-title text-purple"></text>修改饼状图数据
      </div>

      <div class="action">
        <button class="cu-btn bg-purple shadow" @tap="updatePie">修改</button>
      </div>
    </div>
    <div class="wrap">
      <echarts
        class="ec-canvas"
        :onInit="pieInit"
        canvasId="pie"
        ref="pieChart"
        throttleTouch
      />
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

const cityList = [
  {
    value: 55,
    name: "北京"
  },
  {
    value: 38,
    name: "上海"
  },
  {
    value: 20,
    name: "广州"
  }
];

let pieOption = {
  animation: false,
  backgroundColor: "#F8F8F8",
  color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
  series: [
    {
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: "pie",
      center: ["50%", "50%"],
      radius: [0, "60%"],
      data: [],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 2, 2, 0.3)"
        }
      }
    }
  ]
};

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
    return {
      updateStatus: false
    };
  },

  components: { Custom, Echarts },

  computed: {},

  methods: {
    updatePie() {
      if (this.updateStatus) {
        return;
      }
      pieOption.series[0].data.push({
        value: 20,
        name: "武汉"
      });
      pieOption.series[0].data.push({
        value: 10,
        name: "杭州"
      });
      this.$refs.pieChart.init();
      this.updateStatus = true;
    },
    pieInit(canvas, width, height) {
      echarts.setCanvasCreator(() => canvas);
      let pieChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(pieChart);

      pieChart.setOption(pieOption);
      return pieChart;
    },
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

  onLoad() {
    pieOption.series[0].data = cityList.slice(0);
  }
};
</script>
<style>
.wrap {
  width: 100%;
  height: 400px;
}
</style>
