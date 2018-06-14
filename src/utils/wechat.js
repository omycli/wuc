import wx from './wx';
const FILEURL = ''; //  文件服务器地址

export function login() {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject });
  });
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject });
  });
}

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject });
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject });
  });
}

export function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject });
  });
}

export function requestPayment(data) {
  return new Promise((resolve, reject) => {
    const perObj = { success: resolve, fail: reject };
    Object.assign(data, perObj);
    wx.requestPayment(data);
  });
}

export function navigateToMiniProgram(data) {
  return new Promise((resolve, reject) => {
    const perObj = { success: resolve, fail: reject };
    Object.assign(data, perObj);
    console.log(data);
    wx.navigateToMiniProgram(data);
  });
}

export function chooseImg(count = 9) {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: count,
      success: res => resolve(res),
      fail: err => reject(err)
    });
  });
}

export function upLoad(filePath, formData) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: FILEURL,
      filePath: filePath, //  本地路径名
      name: 'file',
      formData: formData,
      success: res => resolve(res),
      fail: err => reject(err)
    });
  });
}

export function jumpTo(url) {
  let state =
    url.indexOf('parse') !== -1 ||
    url.indexOf('nospay') !== -1 ||
    url.indexOf('keyboard') !== -1;
  if (state) {
    wx.switchTab({
      url: url
    });
  } else {
    wx.navigateTo({
      url: url
    });
  }
}
