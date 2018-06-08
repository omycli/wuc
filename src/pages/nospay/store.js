import Vue from 'vue';
import Vuex from 'vuex';

import request from '@/api/request';
import { login } from '@/utils/wechat';

Vue.use(Vuex);

/**
 * 用户状态查询
 *  接口地址: https://api.mch.weixin.qq.com/vehicle/partnerpay/querystate
 *  要求权限：
 *  返回结果格式：
 *  可传参数：
 *    @params {String} url
 */
async function querystate(url) {
  if (!url) {
    console.log(`支付接口缺少url参数`);
    return false;
  }
  const uInfo = await login();
  if (uInfo.code) {
    const params = {
      code: uInfo.code
    };
    return request.get(url, params);
  }
}

const store = new Vuex.Store({
  state: {
    partRes: ''
  },
  mutations: {
    partnerpay: (state, action) => {
      if (action) {
        state.partRes = action;
      }
    }
  },
  actions: {
    async getpartnerpay({ state, commit }, { url }) {
      let response = await querystate(url);
      commit('partnerpay', response);
    }
  }
});

export default store;
