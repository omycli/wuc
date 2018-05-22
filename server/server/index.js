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
                                  
              _  ._ _      _ | o 
              (_) | | | \/ (_ | | 
                        /         

=============== 服务地址======================

----------- https://127.0.0.1:${server.get('sslport')} -----------


=============== Powered by omycli =============
__________________________________________________

`;
httpsServer.listen(server.get('sslport'), function() {
  console.log(welcome);
  // console.log('https已启动，端口： ' + app.get('sslport'));
});
