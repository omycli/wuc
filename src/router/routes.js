module.exports = [
  {
    path: '/pages/index/index',
    name: 'index',
    config: {
      navigationBarTitleText: '首页',
      disableScroll: true
    }
  },
  {
    path: '/pages/parse/index',
    name: 'parse',
    config: {
      navigationBarTitleText: '富文本',
      disableScroll: true
    }
  },
  {
    path: '/pages/nospay/index',
    name: 'nospay',
    config: {
      navigationBarTitleText: '无感支付',
      disableScroll: true
    }
  },
  {
    path: '/pages/keyboard/index',
    name: 'nospay',
    config: {
      navigationBarTitleText: '首页',
      disableScroll: true
    }
  },
  {
    path: '/pages/pay/index',
    name: 'pay',
    config: {
      navigationBarTitleText: '首页',
      disableScroll: true
    }
  },
  {
    path: '/pages/luckywheel/index',
    name: 'luckywheel',
    config: {
      navigationBarTitleText: '首页',
      disableScroll: true,
      usingComponents: {
        luckyWheel: 'plugin://luckyWheel/wheel'
      }
    }
  }
];
