var MAIN = require('./main');
// 路由注册
function router_reg(app) {
    app.all('/api/demo/:name', require('./demo/index').index);
    app.all('/api/:name', require('./douban/index').index);
    app.all('/api/:name/:id', require('./douban/index').index);
}

module.exports = function(app) {
  router_reg(app);
};
