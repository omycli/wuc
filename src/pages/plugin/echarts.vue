<template>
  <div>
    <custom
      noneBg
      name="图表"
      bgImage="https://goss4.veer.com/creative/vcg/veer/612/veer-141525427.jpg"
    ></custom>

    <div class="cu-list grid" :class="'col-'+gridCol">
      <div class="cu-item" v-for="(item,index) in iconList" :key="item.name">
        <navigator
          hover-class="none"
          open-type="navigate"
          :url="'/subPackagesA/echarts/' + item.name"
        >
          <div v-if="index < gridCol*2">
            <div :class="['icon-'+item.icon, 'text-'+ item.color]"></div>
            <text>{{item.title}}</text>
          </div>
        </navigator>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      iconList: [
        {
          icon: "babyfill",
          color: "red",
          badge: 0,
          title: "柱状图",
          name: "bar"
        }
      ],
      gridCol: 3
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
