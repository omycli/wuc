import wx from '@/utils/wx';
import Fly from 'flyio';

const request = new Fly();

request.config.timeout = 10 * 1000;
request.config.baseURL = 'https://hermes.qqdayu.com';
if (process.env.METHOD === 'server') {
  request.config.baseURL = 'https://https.com';
} else if (process.env.METHOD === 'dev') {
  request.config.baseURL = 'https://parkinglot.qqdayu.com';
} else if (process.env.METHOD === 'local') {
  request.config.baseURL = 'https://127.0.0.1:3003';
}

const errorPrompt = err => {
  wx.showToast({
    title: err.message || 'fetch data error.',
    icon: 'none'
  });
};

request.interceptors.request.use(request => {
  // 获取小程序自定义参数
  request.headers['Content-Type'] = 'application/json';

  wx.showLoading({ title: '拼命加载中...' });
  wx.showNavigationBarLoading();
  return request;
});

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading();
    wx.hideNavigationBarLoading();
    if (!(response && response.data)) {
      errorPrompt(response);
    }
    return promise.resolve(response.data);
  },
  (err, promise) => {
    wx.hideLoading();
    wx.hideNavigationBarLoading();
    errorPrompt(err);
    return promise.reject(err);
  }
);

export default request;
