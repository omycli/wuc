import wx from '@/utils/wx';
import Fly from 'flyio';

const request = new Fly();

request.config.timeout = 10 * 1000;
if (process.env.METHOD === 'server') {
  request.config.baseURL = 'https://https.com';
} else if (process.env.METHOD === 'dev') {
  request.config.baseURL = 'https://parkinglot.qqdayu.com';
} else if (process.env.METHOD === 'local') {
  request.config.baseURL = 'https://127.0.0.1:3003';
}

request.interceptors.request.use(request => {
  // 获取小程序自定义参数
  let params = request.body;
  request.headers['Content-Type'] = 'application/json';
  request.body = params;
  wx.showLoading({ title: '拼命加载中...' });
  return request;
});

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading();
    wx.hideNavigationBarLoading();
    return promise.resolve(response.data);
  },
  (err, promise) => {
    wx.hideLoading();
    wx.hideNavigationBarLoading();
    wx.showToast({
      title: err.message,
      icon: 'none'
    });
    return promise.resolve();
  }
);

export default request;
