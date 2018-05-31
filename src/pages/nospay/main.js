import Vue from 'vue';
import App from './index';
import store from './store';

const app = new Vue({
  store,
  ...App
});
app.$mount();

export default {
  config: {
    navigationBarTitleText: '无感支付',
    navigationBarTextStyle: 'white',
    enablePullDownRefresh: false,
    navigationBarBackgroundColor: '#24C6DC'
  }
};
