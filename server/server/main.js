const path = require('path');
const fs = require('fs');
// 获得日志
const log4js = require('./utils/log.js');
const { logger, dLog } = require('./utils/log.js');
exports.logger = logger;
exports.dLog = dLog;

function responseStub(Response, fileName) {
  const dir = path.join(__dirname, fileName);
  // Response.setHeader('Content-Type', 'text/html; charset=utf-8');
  Response.setHeader('Content-Type', 'application/json; charset=utf-8');
  fs.readFile(dir, function(err, data) {
    if (err) throw err;
    Response.end(data);
  });
}
exports.responseStub = responseStub;

function extend(target, /*optional*/ source, /*optional*/ deep) {
  /*
     * @param {Object} target 目标对象。
     * @param {Object} source 源对象。
     * @param {boolean} deep 是否复制(继承)对象中的对象。
     * @returns {Object} 返回继承了source对象属性的新对象。
     */
  target = target || {};
  var sType = typeof source,
    i = 1,
    options;
  if (sType === 'undefined' || sType === 'boolean') {
    deep = sType === 'boolean' ? source : false;
    source = target;
    target = this;
  }
  if (
    typeof source !== 'object' &&
    Object.prototype.toString.call(source) !== '[object Function]'
  )
    source = {};
  while (i <= 2) {
    options = i === 1 ? target : source;
    if (options != null) {
      for (var name in options) {
        var src = target[name],
          copy = options[name];
        if (target === copy) continue;
        if (deep && copy && typeof copy === 'object' && !copy.nodeType)
          target[name] = this.extend(
            src || (copy.length != null ? [] : {}),
            copy,
            deep
          );
        else if (copy !== undefined) target[name] = copy;
      }
    }
    i++;
  }
  return target;
}

/**
 * 获取request的get和post请求
 * @param Request
 * @returns {{}}
 */
exports.getParams = function(Param) {
  var params = extend(Param.body, Param.query, false);
  return params;
};
