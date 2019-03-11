# 快速上手

## 使用之前

在开始使用之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

## 如何使用

首先到 [GitHub](https://github.com/omycli/mpvueBase) 下载代码,然后
* 全局安装vue-cl `$ npm install -g @vue/cli`
* 安装依赖 `$ yarn`

* 编译运行
  - 小程序 `$ yarn dev`
  - 网页 `$ yarn dev:h5`

* 生产构建
  - 小程序 `$ yarn build`
  - 网页 `$ yarn build:h5`

* 查看调试
  - 小程序 使用微信开发者工具打开 `dist/dev/mp-weixin`
  - 网页 通过浏览器访问 `localhost:9998`