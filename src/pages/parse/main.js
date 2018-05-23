import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '富文本解析',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#ffffff'
  }
};
