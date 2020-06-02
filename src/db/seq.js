/**
 * @description sequelize 实例
 */

const Sequelize = require('sequelize')
const { isPord, isTest } = require('../utils/env.js')
const { MYSQL_CONF } = require('../conf/db')

const { host, user, pwd, datebase } = MYSQL_CONF
const conf = {
  host,
  dialect: 'mysql',
}

if (isTest) {
  conf.logging = () => {}
}

// 线上环境使用连接池
if (isPord) {
  conf.pool = {
    max: 5, // 最大链接数
    min: 0, //
    idle: 10000, // 如果一个连接池 10s 之内没有被使用，则释放
  }
}

const seq = new Sequelize(datebase, user, pwd, conf)

module.exports = seq
