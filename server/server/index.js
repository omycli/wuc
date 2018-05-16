('use strict');

const path = require('path');
const fs = require('fs');
const express = require('express');

const server = express();
const https = require('https');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const privateKey = fs.readFileSync(__dirname + '/utils/to/2.mobi.key', 'utf8');
const certificate = fs.readFileSync(
  __dirname + '/utils/to/1.mobi_bundle.crt',
  'utf8'
);
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, server);

// all environments
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'client')));
// 配置服务允许全站跨域请求
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', 'vastliu');
  // res.header("Content-Type", "application/json;charset=utf-8");
  // 为便于观察测试，模拟后端接口会有600s的延时返回
  setTimeout(function() {
    next();
  }, 600);
});

const routes = require(__dirname + '/router.js');
routes(server);
server.set('sslport', process.env.PORT || 3003);

const welcome = `
                  _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\ = /O
.............................................
        佛祖保佑             永无BUG
佛曰:
        写字楼里写字间，写字间里程序员；
        程序人员写程序，又拿程序换酒钱。
        酒醒只在网上坐，酒醉还来网下眠；
        酒醉酒醒日复日，网上网下年复年。
        但愿老死电脑间，不愿鞠躬老板前；
        奔驰宝马贵者趣，公交自行程序员。
        别人笑我忒疯癫，我笑自己命太贱；
        不见满街漂亮妹，哪个归得程序员？

=============== 服务地址======================

----------- https://127.0.0.1:${server.get('sslport')} -----------


=============== Powered by omycli =============
__________________________________________________

`;
httpsServer.listen(server.get('sslport'), function() {
  console.log(welcome);
  // console.log('https已启动，端口： ' + app.get('sslport'));
});
