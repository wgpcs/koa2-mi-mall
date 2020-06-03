/**
 * @description 存储配置
 */

// const { isProd } = require('../utils/env.js')

// 线下模式
let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1',
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  pwd: '870329',
  port: 3306,
  datebase: 'koa2_mi_mall',
}

// 线上模式
// if (isProd) {
// }

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
}
