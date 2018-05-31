import Vue from 'vue';
import Vuex from 'vuex';

import request from '@/utils/request';
import { login, requestPayment } from '@/utils/wechat';
import { PAYINFO } from '@/store/mutations-type';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});

export default store;
