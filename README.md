# 快速上手

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
  - 小程序 使用微信开发者工具打开将`project.config.json`中的`miniprogramRoot`改为 `dist/dev/mp-weixin`
  - 网页 通过浏览器访问 `localhost:9998`（可通过`manifest.json`中的`port`字段进行端口更改）

* 生产发布
  - 小程序 使用微信开发者工具打开将`project.config.json`中的`miniprogramRoot`改为  `dist/build/mp-weixin`点击微信开发者工具的上传按钮并到微信公众平台的小程序后台进行发布。


## 感谢以下的支持（排名不分先后）
[vue](https://vuejs.org)   
[mpvue](https://github.com/Meituan-Dianping/mpvue)   
[uni-app](https://uniapp.dcloud.io)  
[colorUi](https://github.com/weilanwl/ColorUI)  
[mpvue-echarts](https://www.npmjs.com/package/mpvue-echarts)  
[mpvue-calendar](https://github.com/Hzy0913/mpvue-calendar)  
[mpvue-keyboard](https://github.com/weiyunpeng/mpvue-keyboard)  
[echarts](https://echarts.baidu.com/builder.html)  
[pug](https://github.com/pugjs/pug)  
[veer](https://www.veer.com/)  