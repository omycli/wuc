import Vue from 'vue'
import App from './index'
import store from '@/store'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'white',
    enablePullDownRefresh: false,
    navigationBarBackgroundColor: '#24C6DC'
  }
}
