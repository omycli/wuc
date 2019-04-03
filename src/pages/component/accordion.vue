<template>
  <div>
    <custom name="手风琴" bg-color="bg-gradual-pink fixed"></custom>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>默认不展开</text>
        </div>
      </div>
      <div class="padding bg-white">
        <accordion
          name="凯尔"
          detail="我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。"
        ></accordion>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>默认展开</text>
        </div>
      </div>
      <div class="padding bg-white">
        <accordion showall name="莫甘娜" detail="凯尔，你被自己的光芒变的盲目！"></accordion>
      </div>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>字体颜色大小</text>
        </div>
      </div>
      <div class="padding bg-white">
        <accordion
          showall
          more-text="text-lg text-yellow"
          detail-text="text-sm text-blue"
          name="瓦洛兰之盾-塔里克"
          detail="塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。"
        ></accordion>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>基础用法</text>
        </div>
      </div>
      <uni-collapse @change="change">
        <uni-collapse-item title="默认开启" :open="true">
          <div style="padding: 30upx;">折叠内容主体，可自定义内容及样式</div>
        </uni-collapse-item>
        <uni-collapse-item title="禁用状态" :disabled="true">
          <div style="padding: 30upx;">禁用状态</div>
        </uni-collapse-item>
      </uni-collapse>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>手风琴效果</text>
        </div>
      </div>
      <uni-collapse :accordion="true">
        <uni-collapse-item title="标题文字">
          <div style="padding: 30upx;">手风琴效果</div>
        </uni-collapse-item>
        <uni-collapse-item title="标题文字">
          <div style="padding: 30upx;">手风琴效果</div>
        </uni-collapse-item>
        <uni-collapse-item title="标题文字">
          <div style="padding: 30upx;">手风琴效果</div>
        </uni-collapse-item>
      </uni-collapse>

      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>添加动画效果</text>
        </div>
      </div>
      <uni-collapse>
        <uni-collapse-item title="标题文字" :show-animation="true">
          <div style="padding: 30upx;">折叠内容主体，可自定义内容及样式</div>
        </uni-collapse-item>
        <uni-collapse-item title="标题文字" :show-animation="true">
          <div style="padding: 30upx;">折叠内容主体，可自定义内容及样式</div>
        </uni-collapse-item>
      </uni-collapse>
      <div class="cu-bar bg-white margin-top">
        <div class="action">
          <text class="icon-title text-pink"></text>
          <text>配置图标</text>
        </div>
      </div>
      <uni-collapse>
        <uni-collapse-item
          title="标题文字"
          thumb="https://goss.veer.com/creative/vcg/veer/612/veer-303358101.jpg"
        >
          <div style="padding: 30upx;">折叠内容主体，可自定义内容及样式</div>
        </uni-collapse-item>
        <uni-collapse-item
          title="标题文字"
          thumb="https://goss.veer.com/creative/vcg/veer/612/veer-303358101.jpg"
        >
          <div style="padding: 30upx;">折叠内容主体，可自定义内容及样式</div>
        </uni-collapse-item>
      </uni-collapse>
      <div style="height: 60upx;"></div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Accordion from "@/components/accordion";
import uniCollapse from "@/components/uni-collapse/uni-collapse";
import uniCollapseItem from "@/components/uni-collapse/uni-collapse-item";
export default {
  data() {
    return {};
  },

  components: { Custom, Accordion, uniCollapse, uniCollapseItem },

  computed: {},

  methods: {
    change(e) {
      console.log(e);
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
