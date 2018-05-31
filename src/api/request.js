import wx from '@/utils/wx';
import Fly from 'flyio';

const request = new Fly();

request.config.timeout = 10 * 1000;
if (process.env.METHOD === 'server') {
  request.config.baseURL = 'https://https.com';
} else if (process.env.METHOD === 'dev') {
  request.config.baseURL = 'https://tshttps.com';
} else if (process.env.METHOD === 'local') {
  request.config.baseURL = 'https://127.0.0.1:3003/api'; // 本地接口不限次数
} else if (process.env.METHOD === 'proxy1') {
  request.config.baseURL = 'http://localhost:3001/douban'; // 本地代理2(100次/小时)
} else if (process.env.METHOD === 'proxy2') {
  request.config.baseURL = 'http://localhost:3002'; // 本地代理2(100次/小时)
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
