<template>
  <div>
    <custom name="日志" bg-color="bg-gradual-orange"></custom>

    <div class="cu-timeline">
      <div class="cu-item text-orange">
        <div class="bg-gradual-orange content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-orange">v2.1.0</div>
            <div class="cu-tag line-white">2019/03/27</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.增加顶部操作栏组件</div>
            <div>2.优化索引组件性能</div>
            <div>2.更新主要样式和库到最新版本</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-orange">
        <div class="bg-gradual-orange content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-orange">v2.0.9</div>
            <div class="cu-tag line-white">2019/03/20</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.日历组件更换为uni官方组件</div>
            <div>2.更新uni-app到新的重构框架版本</div>
            <div>3.增加对头条小程序的支持</div>
            <div>4.修复多图标顶部操作栏样式问题</div>
            <div>5.边框阴影效果调整</div>
            <div>6.tab组件兼容新版uni-app处理</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-orange">
        <div class="bg-gradual-orange content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-orange">v2.0.8</div>
            <div class="cu-tag line-white">2019/03/12</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.修复h5兼容问题（https://github.com/dcloudio/uni-app/issues/235）</div>
            <div>2.增加背景图片组件</div>
            <div>3.首页样式修改</div>
            <div>4.轮播图video样式调整</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-orange">
        <div class="bg-gradual-orange content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-orange">v2.0.7</div>
            <div class="cu-tag line-white">2019/02/26</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.增加停车键盘插件</div>
            <div>2.增加图表库插件</div>
            <div>3.增加垂直导航插件</div>
            <div>4.增加全屏抽屉插件</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-orange">
        <div class="bg-gradual-orange content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-orange">v2.0.61</div>
            <div class="cu-tag line-white">2019/02/20</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.增加发布更新提示，仅在微信小程序中生效（详见App.vue中#ifdef-#endif那段）</div>
            <div>2.增加分包(分包分别为:通用分包--subPackagesA和Bug测试专用分包--subPackagesT)</div>
            <div>3.增加头部操作条插件形式使用（/src/components/custom.vue）</div>
            <div>4.增加导航栏插件形式使用,并支持滑动内容切换（/src/components/tab.vue）</div>
            <div>5.增加精确到分的日期选择插件（/src/components/pickerDate.vue）</div>
            <div>6.增加索引插件（/src/components/indexes.vue）</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-gradual-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.7</div>
            <div class="cu-tag line-white">2019/02/25</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.新增操作条胶囊样式，优化全屏操作条</div>
            <div>2.优化iPhone X的Tabbar样式</div>
            <div>3.新增全屏抽屉插件</div>
            <div>4.更新动画扩展</div>
            <div>4.新增垂直导航插件</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-gradual-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.6</div>
            <div class="cu-tag line-white">2019/02/09</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.修复行距带来的垂直不居中问题</div>
            <div>2.优化操作条组件，新增多种样式</div>
            <div>3.优化背景颜色（某些组件的默认背景调整,移除一些important）</div>
            <div>4.更新动画扩展</div>
            <div>5.优化按钮,标签,头像的大小</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.5</div>
            <div class="cu-tag line-white">2019/01/13</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.修复时间线图标显示问题</div>
            <div>2.switch、radio、checkbox单位改成px，抛弃小尺寸</div>
            <div>3.更新多种窗口组件</div>
            <div>4.更新多种动画</div>
            <div>5.新增步骤条组件</div>
            <div>6.优化列表组件，新增左滑操作</div>
            <div>7.优化图标搜索</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.4</div>
            <div class="cu-tag line-white">2019/01/10</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.抛弃标签选择器，改成类名选择器</div>
            <div>2.动画改成Gif，并新增动画</div>
            <div>3.修复一些图标错位问题</div>
            <div>4.修复头像文字显示问题</div>
            <div>* 建议先备份，再全局替换标签。</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.3</div>
            <div class="cu-tag line-white">2019/01/06</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.修复一些单位错误（带输入框的操作条）</div>
            <div>2.纠正一些单词拼写...</div>
            <div>3.抛弃icon标签，改回text标签的写法</div>
            <div>4.抛弃px单位的样式文件</div>
            <div>5.优化一些组件的字体大小</div>
            <div>6.新增两种加载样式</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.2</div>
            <div class="cu-tag line-white">2018/12/24</div>
          </div>
          <div class="margin-top-sm text-content">
            <div>1.首页增加分享</div>
            <div>2.卡片页修复switch开关问题</div>
            <div>3.优化首页动画效果（ios表现不佳）</div>
            <div>4.表单新增Picker</div>
            <div>5.增加赞赏码！请多多支持！</div>
            <div>6.新增反馈与Bug测试</div>
            <div>7.优化轮播组件</div>
            <div>8.优化Bar组件文字描述过多的场景</div>
          </div>
        </div>
      </div>
      <div class="cu-item text-green">
        <div class="bg-green content shadow-blur">
          <div class="cu-capsule radius">
            <div class="cu-tag bg-white text-green">v2.0.1</div>
            <div class="cu-tag line-white">2018/12/20</div>
          </div>
          <div class="margin-top-sm text-content">2.0新版本上线</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {};
  },

  components: { Custom },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
page {
  background: #fff;
}
</style>
