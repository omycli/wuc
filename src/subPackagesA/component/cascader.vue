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
            <text class="text-grey text-sm">{{title}}</text>
          </div>
        </div>
      </div>
    </div>

    <wux-cascader
      :visible="visible"
      :default-value="value"
      title="所在地区"
      :options="options"
      @close="onClose"
      @change="onChange"
    />
  </div>
</template>

<script>
import Custom from "@/components/custom";

const data1 = [
  {
    label: "河南省",
    value: "410000",
    children: [
      {
        label: "郑州市",
        value: "410100",
        children: [
          {
            label: "市辖区",
            value: "410101"
          },
          {
            label: "中原区",
            value: "410102"
          },
          {
            label: "二七区",
            value: "410103"
          },
          {
            label: "管城回族区",
            value: "410104"
          },
          {
            label: "金水区",
            value: "410105"
          },
          {
            label: "上街区",
            value: "410106"
          },
          {
            label: "惠济区",
            value: "410108"
          },
          {
            label: "中牟县",
            value: "410122"
          },
          {
            label: "巩义市",
            value: "410181"
          },
          {
            label: "荥阳市",
            value: "410182"
          },
          {
            label: "新密市",
            value: "410183"
          },
          {
            label: "新郑市",
            value: "410184"
          },
          {
            label: "登封市",
            value: "410185"
          }
        ]
      },
      {
        label: "焦作市",
        value: "410800",
        children: [
          {
            label: "市辖区",
            value: "410801"
          },
          {
            label: "解放区",
            value: "410802"
          },
          {
            label: "中站区",
            value: "410803"
          },
          {
            label: "马村区",
            value: "410804"
          },
          {
            label: "山阳区",
            value: "410811"
          },
          {
            label: "修武县",
            value: "410821"
          },
          {
            label: "博爱县",
            value: "410822"
          },
          {
            label: "武陟县",
            value: "410823"
          },
          {
            label: "温县",
            value: "410825"
          },
          {
            label: "沁阳市",
            value: "410882"
          },
          {
            label: "孟州市",
            value: "410883"
          }
        ]
      },
      {
        label: "漯河市",
        value: "411100",
        children: [
          {
            label: "市辖区",
            value: "411101"
          },
          {
            label: "源汇区",
            value: "411102"
          },
          {
            label: "郾城区",
            value: "411103"
          },
          {
            label: "召陵区",
            value: "411104"
          },
          {
            label: "舞阳县",
            value: "411121"
          },
          {
            label: "临颍县",
            value: "411122"
          }
        ]
      },
      {
        label: "济源市",
        value: "419001"
      }
    ]
  }
];

export default {
  data() {
    return {
      visible: false,
      title: "北京",
      value: ["beijing"],
      options: data1
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
    onChange(e) {
      console.log("onChange", e.detail);
      this.value = e.detail.value;
      this.title = e.detail.options.map(n => n.label).join("/");
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
</style>
