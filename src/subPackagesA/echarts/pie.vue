<template>
  <div>
    <custom name="饼图" bg-color="bg-gradual-purple"></custom>
    <div class="wrap">
      <echarts :echarts="echarts" @init="echartInit"/>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import * as echarts from "omycli-npm/echarts.min";
import Echarts from "@/components/echarts/echarts";

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#2c343c",

    title: {
      text: "Customized Pie",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc"
      }
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 274, name: "联盟广告" },
          { value: 235, name: "视频广告" },
          { value: 400, name: "搜索引擎" }
        ].sort(function(a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          normal: {
            textStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function(idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

export default {
  data() {
    return { echarts };
  },

  components: { Custom, Echarts },

  computed: {},

  methods: {
    echartInit(e) {
      initChart(e.canvas, e.width, e.height);
    }
  },

  mounted() {}
};
</script>
<style>
.wrap {
  width: 100%;
  height: 100vh;
}
</style>
