<template>
  <div>
    <custom name="散点图" bg-color="bg-gradual-purple"></custom>
    <div class="wrap">
      <echarts
        :onInit="echartInit"
        canvasId="scatter"
        ref="scatterChart"
        throttleTouch
      />
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import * as echarts from "./echarts.min";
import Echarts from "@/components/echarts/echarts";

let data = [];
let data2 = [];

for (let i = 0; i < 10; i++) {
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

let axisCommon = {
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

let option = {
  color: ["#FF7070", "#60B6E3"],
  backgroundColor: "#eee",
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

      Chart.setOption(option);
      return Chart;
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
