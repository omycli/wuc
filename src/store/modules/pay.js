import request from '@/api/request';
import { login, requestPayment } from '@/utils/wechat';
import { PAYINFO } from '@/store/mutations-type';

/**
 * 支付接口
 *  接口地址: https://tshttps.qqdayu.com/test/get_pay
 *  要求权限：
 *  返回结果格式：
 *  可传参数：
 *    @params {String} url
 */
async function payMoney(url, payNum) {
  if (!url) {
    console.log(`支付接口缺少url参数`);
    return false;
  }
  const uInfo = await login();
  console.log(payNum);
  if (uInfo.code) {
    const params = {
      code: uInfo.code,
      amount: payNum
    };
    return request.get(url, params);
  }
}

const state = {
  payRes: ''
};

const mutations = {
  [PAYINFO](state, { res }) {
    state.payRes = res;
  }
};

const actions = {
  async payment({ state, commit }, { url, payNum }) {
    let response = await payMoney(url, payNum);
    let params = {
      timeStamp: response.data.timeStamp.toString(),
      nonceStr: response.data.nonceStr,
      package: response.data.package,
      signType: 'MD5',
      paySign: response.data.paySign
    };
    requestPayment(params).then(res => {
      commit(PAYINFO, { res });
    });
  }
};

export default {
  state,
  mutations,
  actions
};
