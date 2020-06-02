/**
 * @description 存储配置
 */

//  const { isPord } = require('../utils/env.js')

//  let REDIS_CONF = {
//      port: 6379,
//      host: '127.0.0.1'
//  }

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    pwd: '870329',
    port: 3306,
    datebase: 'koa2_mi_mall'
}

module.exports = {
    MYSQL_CONF
}