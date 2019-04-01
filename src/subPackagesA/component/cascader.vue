<template>
  <div>
    <custom name="级联选择器" bg-color="bg-gradual-purple fixed"></custom>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-green"></text>
          <text>底部弹出</text>
        </div>
      </div>

      <div class="cu-list menu margin-top">
        <div class="cu-item arrow" @tap="showModal">
          <div class="content">
            <text class="text-black">默认方式</text>
          </div>
          <div class="action">
            <text class="text-grey text-sm">小目标还没有实现！</text>
          </div>
        </div>
      </div>
    </div>

    <wux-cascader
      :visible="visible"
      controlled
      :value="value"
      title="所在地区"
      :options="options"
      @close="onClose"
      @change="onChange2"
      @load="onLoadOptions"
    />
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {
      visible: false,
      value: [],
      options: [
        {
          value: "beijing",
          label: "北京",
          isLeaf: false
        },
        {
          value: "hangzhou",
          label: "杭州",
          isLeaf: false
        }
      ]
    };
  },

  components: { Custom },

  computed: {},

  methods: {
    showModal() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange2(e) {
      console.log("onChange2", e.detail);
      this.value = e.detail.value;
    },
    onLoadOptions(e) {
      console.log("onLoadOptions", e.detail);
      const { value } = e.detail;
      const options2 = [...this.options];

      uni.showLoading({ mask: true });

      setTimeout(() => {
        if (value[value.length - 1] === "beijing") {
          options2.forEach(n => {
            if (n.value === "beijing") {
              n.children = [
                {
                  value: "baidu",
                  label: "百度"
                },
                {
                  value: "sina",
                  label: "新浪"
                }
              ];
            }
          });
        } else if (value[value.length - 1] === "hangzhou") {
          options2.forEach(n => {
            if (n.value === "hangzhou") {
              n.children = [
                {
                  value: "ali",
                  label: "阿里巴巴"
                },
                {
                  value: "163",
                  label: "网易"
                }
              ];
            }
          });
        }

        uni.hideLoading();
        this.value = value;
      }, 1000);
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
