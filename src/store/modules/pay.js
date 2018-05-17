import request from '@/utils/request';
import { requestPayment } from '@/utils/wechat';
import { PAYINFO } from '@/store/mutations-type';

/**
 * 支付接口
 *  接口地址: https://tshttps.qqdayu.com/test/get_pay
 *  要求权限：
 *  返回结果格式：
 *  可传参数：
 *    @params {String} url
 */
async function payMoney(url) {
  if (!url) {
    console.log(`支付接口缺少url参数`);
    return false;
  }
  const loginInfo = wx.getStorageSync('loginInfo');
  let code = loginInfo.code;
  if (code) {
    const params = {
      code: code
    };
    return request.get(url, params);
  } else {
    console.log(`支付接口缺少code参数`);
  }
}

const state = {
  payRes: ''
};

const mutations = {
  [PAYINFO](state, { res }) {
      state.payRes = res
  }
};

const actions = {
  async payment({ state, commit }, { url }) {
    let response = await payMoney(url);
    console.log(response)
    let params = {
        timeStamp: response.data.timeStamp.toString(),
        nonceStr: response.data.nonceStr,
        package: response.data.prepayId,
        signType: 'MD5',
        paySign: response.data.sign
    }
    requestPayment(params).then(res => {
        commit(PAYINFO, { res });
    })
  }
};

export default {
  state,
  mutations,
  actions
};
