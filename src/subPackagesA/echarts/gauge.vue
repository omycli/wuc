<template>
  <div>
    <custom name="仪表盘" bg-color="bg-gradual-purple"></custom>
    <div class="wrap">
      <echarts
        class="ec-canvas"
        :onInit="onInit"
        canvasId="gauge"
        ref="gaugeChart"
        throttleTouch
      />
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import * as echarts from "./echarts.min";
import Echarts from "@/components/echarts/echarts";

let gaugeOption = {
  backgroundColor: "#ffffff",
  color: ["#37A2DA", "#32C5E9", "#67E0E3"],
  series: [
    {
      name: "业务指标",
      type: "gauge",
      detail: {
        formatter: "{value}%"
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [[0.3, "#67e0e3"], [0.7, "#37a2da"], [1, "#fd666d"]]
        }
      },
      data: [
        {
          value: 40,
          name: "完成率"
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
    onInit(canvas, width, height) {
      echarts.setCanvasCreator(() => canvas);
      let Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(Chart);

      Chart.setOption(gaugeOption);
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
