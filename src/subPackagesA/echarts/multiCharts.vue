<template>
  <div>
    <custom name="多个图表" bg-color="bg-gradual-purple"></custom>
    <div class="wrap">
      <echarts :echarts="echarts" :onInit="ecScatterInit" canvasId="scatter"/>
      <echarts :echarts="echarts" :onInit="ecRadar" canvasId="radar"/>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import * as echarts from "omycli-npm/echarts.min";
import Echarts from "@/components/echarts/echarts";

let radarChart, scatterChart;

function getRadarOption(canvas, width, height) {
  return {
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
}

function getScatterOption() {
  var data = [];
  var data2 = [];

  for (var i = 0; i < 10; i++) {
    data.push([
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 40)
    ]);
    data2.push([
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ]);
  }

  var axisCommon = {
    axisLabel: {
      textStyle: {
        color: "#C8C8C8"
      }
    },
    axisTick: {
      lineStyle: {
        color: "#fff"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#C8C8C8"
      }
    },
    splitLine: {
      lineStyle: {
        color: "#C8C8C8",
        type: "solid"
      }
    }
  };

  return {
    color: ["#FF7070", "#60B6E3"],
    backgroundColor: "#ffffff",
    xAxis: axisCommon,
    yAxis: axisCommon,
    legend: {
      data: ["aaaa", "bbbb"]
    },
    visualMap: {
      show: false,
      max: 100,
      inRange: {
        symbolSize: [20, 70]
      }
    },
    series: [
      {
        type: "scatter",
        name: "aaaa",
        data: data
      },
      {
        name: "bbbb",
        type: "scatter",
        data: data2
      }
    ],
    animationDelay: function(idx) {
      return idx * 50;
    },
    animationEasing: "elasticOut"
  };
}

export default {
  data() {
    return {
      echarts,
      ecRadar(canvas, width, height) {
        radarChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(radarChart);

        radarChart.setOption(getRadarOption());
        return radarChart;
      },
      ecScatterInit: function(canvas, width, height) {
        scatterChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(scatterChart);

        scatterChart.setOption(getScatterOption());
        return scatterChart;
      }
    };
  },

  components: { Custom, Echarts },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style>
.wrap {
  width: 100%;
  height: 400px;
}
</style>
