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
        <accordion
          showall
          name="莫甘娜"
          detail="凯尔，你被自己的光芒变的盲目！"
        ></accordion>
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
  </div>
</template>

<script>
import Custom from "@/components/custom";
import Accordion from "@/components/accordion";
export default {
  data() {
    return {};
  },

  components: { Custom, Accordion },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
</style>
