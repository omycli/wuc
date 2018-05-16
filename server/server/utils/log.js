const log4js = require('log4js');
const fs = require('fs');
const path = require("path");
//获取log日志的基本地址
const logBasePath = path.normalize(__dirname + '/logs/');

/**
 * 创建日志目录
 */

try {
  require('fs').mkdirSync(logBasePath);
} catch (e) {
  if (e.code !== 'EEXIST') {
    console.error('Could not set up log directory, error: ', e);
    process.exit(1);
  }
}

try {
  log4js.configure({
    appenders: {
      console: {
        type: 'console'
      },
      'rule-app': {
        type: 'dateFile',
        filename: 'logs/app.log',
        maxLogSize: 10485760,
        numBackups: 10,
        keepFileExt: true
      },
      dev: {
        type: 'dateFile',
        filename: 'logs/dev.log',
        maxLogSize: 10485760,
        keepFileExt: true
      },
      error: {
        type: 'dateFile',
        filename: 'logs/error.log',
        maxLogSize: 10485760,
        keepFileExt: true
      },
      'rule-error': {
        type: 'logLevelFilter',
        level: 'warn',
        appender: 'error'
      }
    },
    categories: {
      default: {
        appenders: ['rule-app', 'rule-error', 'console'],
        level: 'all'
      },
      dev: {
        appenders: ['dev'],
        level: 'all'
      }
    },
    level: 'debug'
  });
} catch (e) {
  console.error('载入log4js日志输出配置错误: ', e);
  process.exit(1);
}

/**
 *导出日志对象
 */
const logger = log4js.getLogger('app');
const dLog = log4js.getLogger('dev');
exports.logger = logger;
exports.dLog = dLog;
