<template>
  <form report-submit="true" @submit="submit" class="tc-formButton" :class="type? 'return' : ''">
    <button formType="submit" :disabled="!active">{{buttonContent || '创建任务'}}</button>
  </form>
</template>

<script>
  export default {
    props: {
      buttonContent: {
        type: String,
        default: '创建任务'
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      submit (e) {
        this.$emit('getFormId', e.target.formId)
      }
    }
  }
</script>

<style lang="scss">
/* 宽高设置 */
@mixin config_width_height($width, $heigtht) {
  width: $width;
  height: $heigtht;
}
/* 字体设置 */
@mixin config_font($size, $color) {
  font-size: $size;
  color: $color;
}

$themeColor: #ffc53d;
$problemFontColor: #33270c;

.tc-formButton {
  button {
    @include config_width_height(600rpx, 88rpx);
    box-shadow: 0 3px 5px 2px rgba(255, 197, 102, .30);
    background: linear-gradient(45deg, $themeColor 30%, #fce01e 90%);
    border-radius: 50rpx;
    @include config_font(32rpx, $problemFontColor);
  }
}

</style>
